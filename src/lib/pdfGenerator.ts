import jsPDF from 'jspdf';
import { ResearchItem } from '@/types';

export const generateAndDownloadPDF = async (item: ResearchItem) => {
  // Standard A4 dimensions: 210 x 297 mm
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const marginX = 20;
  let currentY = 30;

  // 1. ADD HEADER METADATA
  doc.setFont("helvetica", "bold");
  doc.setTextColor(142, 85, 22); // Primary Brand Color (#8E5516)
  doc.setFontSize(10);
  doc.text(`${item.category?.toUpperCase() || 'RESEARCH'} • ${item.date?.toUpperCase() || '2026'}`, marginX, currentY);
  currentY += 12;

  // 2. ADD MAIN TITLE
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 15, 15);
  doc.setFontSize(24);
  const titleLines = doc.splitTextToSize(item.title, 170); // 210 width - 40 padding
  doc.text(titleLines, marginX, currentY);
  currentY += (titleLines.length * 9) + 15;

  // 3. ADD INTRO TEXT
  doc.setFont("helvetica", "italic");
  doc.setTextColor(80, 80, 80);
  doc.setFontSize(12);
  doc.text("EXECUTIVE SUMMARY", marginX, currentY);
  currentY += 8;

  // 4. ADD EXECUTIVE SUMMARY CONTENT
  doc.setFont("helvetica", "normal");
  doc.setTextColor(40, 40, 40);
  doc.setFontSize(11);
  const summaryLines = doc.splitTextToSize(item.summary || '', 170);
  doc.text(summaryLines, marginX, currentY);
  currentY += (summaryLines.length * 6) + 10;
  
  // 5. ADD FOOTER BRANDING
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text("© 2026 CIATECH Africa. Confidential & Proprietary.", marginX, 280);
  doc.text("Architecting technology-enabled infrastructure designed specifically for Africa’s frontier markets.", marginX, 284);

  // 6. ASYNC LOAD LOGO INTO HEADER
  return new Promise<void>((resolve) => {
    const img = new Image();
    img.src = '/logo.png'; 
    
    img.onload = () => {
      // Draw Logo at top right header
      // calculate aspect ratio: standard logo is roughly 4:1 width:height
      doc.addImage(img, 'PNG', 150, 10, 40, 10);
      const filename = `CIATech_Report_${item.id}.pdf`;
      doc.save(filename);
      resolve();
    };
    
    img.onerror = () => {
      // Fallback if local image fetching fails for any reason
      doc.setFont("helvetica", "bold");
      doc.setTextColor(142, 85, 22);
      doc.setFontSize(12);
      doc.text("CIATECH AFRICA", 150, 15);
      const filename = `CIATech_Report_${item.id}.pdf`;
      doc.save(filename);
      resolve();
    };
  });
};
