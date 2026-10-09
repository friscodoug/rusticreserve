import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function Card({ children, className = '', style, onClick }: CardProps) {
  // Check if dark-card class is present to determine styling
  const isDarkCard = className.includes('dark-card');
  
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        backgroundColor: isDarkCard ? '#1A1A1A' : '#FFFFFF',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: isDarkCard ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.08)',
        border: isDarkCard ? '1px solid #333333' : 'none',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
