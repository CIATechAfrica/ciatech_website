import { describe, it, expect, vi, beforeEach } from 'vitest';
import { submitContactForm, submitNewsletter } from '../app/actions';

// Mock Environment variables required by actions
vi.mock('@/sanity/env', () => ({
  projectId: 'test',
  dataset: 'test',
  apiVersion: '2024-01-01',
}));

// Mock Next.js and Sanity
vi.mock('next-sanity', () => ({
  createClient: () => ({
    create: vi.fn().mockResolvedValue({ _id: 'test-id' }),
  }),
}));

vi.mock('resend', () => {
  return {
    Resend: class {
      emails = {
        send: vi.fn().mockResolvedValue({})
      }
    }
  }
});

describe('Server Actions Validation', () => {
  beforeEach(() => {
    // Clear mocks before each test
    vi.clearAllMocks();
  });

  describe('submitNewsletter', () => {
    it('should fail validation with invalid email', async () => {
      const formData = new FormData();
      formData.append('email', 'not-an-email');
      
      const result = await submitNewsletter(formData);
      
      expect(result.success).toBe(false);
      expect(result.error).toBe('Invalid email address');
    });

    it('should fail when Sanity API token is missing', async () => {
      const formData = new FormData();
      formData.append('email', 'test@example.com');
      
      const originalToken = process.env.SANITY_API_WRITE_TOKEN;
      delete process.env.SANITY_API_WRITE_TOKEN;

      const result = await submitNewsletter(formData);
      
      expect(result.success).toBe(false);
      expect(result.error).toBe('Sanity write token is missing from environment variables.');

      // Restore
      if (originalToken) process.env.SANITY_API_WRITE_TOKEN = originalToken;
    });
  });

  describe('submitContactForm', () => {
    it('should fail validation with short message', async () => {
      const formData = new FormData();
      formData.append('name', 'John Doe');
      formData.append('email', 'test@example.com');
      formData.append('subject', 'Help');
      formData.append('message', 'Short'); // Under 10 characters
      
      const result = await submitContactForm(formData);
      
      expect(result.success).toBe(false);
      expect(result.error).toBe('Message must be at least 10 characters');
    });
  });
});
