import React from 'react';

export function StudioLogo(props: any) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img
        src="/logo.png"
        alt="CIATECH Logo"
        style={{ height: '24px', width: 'auto', objectFit: 'contain' }}
      />
      {/* Optional: We can render the default title next to it */}
      {/* <>{props.renderDefault(props)}</> */}
    </div>
  );
}
