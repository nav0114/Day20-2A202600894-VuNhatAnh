import React from 'react';

export default function WarrantyCard({ quote, quoteSource }) {
  return (
    <div style={{
      marginTop: '12px',
      background: 'linear-gradient(135deg, rgba(20, 20, 25, 0.8) 0%, rgba(30, 30, 40, 0.8) 100%)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      color: '#fff',
      fontFamily: 'var(--font-primary, sans-serif)',
      animation: 'fadeInUp 0.5s ease-out'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            background: 'var(--primary-light, #3b82f6)',
            padding: '8px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600', letterSpacing: '0.5px' }}>THẺ BẢO HÀNH ĐIỆN TỬ</h4>
        </div>
        <div style={{ background: 'rgba(52, 211, 153, 0.2)', color: '#34d399', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
          ĐỦ ĐIỀU KIỆN
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: 'var(--text-muted, #9ca3af)', fontSize: '0.9rem' }}>Sản phẩm</span>
          <span style={{ fontWeight: '500' }}>Smart TV 4K Series 8</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: 'var(--text-muted, #9ca3af)', fontSize: '0.9rem' }}>Loại lỗi xác nhận</span>
          <span style={{ fontWeight: '500', color: '#f87171' }}>Màn hình hiển thị</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: 'var(--text-muted, #9ca3af)', fontSize: '0.9rem' }}>Hình thức hỗ trợ</span>
          <span style={{ fontWeight: '500', color: '#60a5fa' }}>Đổi mới 1-1 miễn phí</span>
        </div>
      </div>

      <div style={{
        background: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '12px',
        padding: '16px',
        borderLeft: '4px solid var(--primary-light, #3b82f6)'
      }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted, #9ca3af)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Trích lục chính sách: {quoteSource}
        </div>
        <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', fontStyle: 'italic', color: '#e5e7eb' }}>
          "{quote}"
        </p>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.75rem', color: 'var(--text-muted, #9ca3af)' }}>
        Mã xác nhận hệ thống: {Math.random().toString(36).substring(2, 10).toUpperCase()}
      </div>
    </div>
  );
}
