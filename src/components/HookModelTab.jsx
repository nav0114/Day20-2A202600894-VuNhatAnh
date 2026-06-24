import React from 'react';

export default function HookModelTab() {
  return (
    <div style={{ color: '#fff', fontFamily: 'var(--font-primary, sans-serif)', animation: 'fadeIn 0.5s ease-out' }}>
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 8px 0', background: 'linear-gradient(90deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          The Hook Model
        </h2>
        <p style={{ color: 'var(--text-muted, #9ca3af)', fontSize: '0.95rem', margin: 0 }}>
          Vòng lặp thói quen người dùng Smart TV
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Trigger */}
        <div style={{
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '16px',
          padding: '16px',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#ef4444', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#fca5a5' }}>Trigger (Kích hoạt)</h3>
          </div>
          <div style={{ fontSize: '0.9rem', color: '#e5e7eb', lineHeight: '1.5' }}>
            <div style={{ marginBottom: '8px' }}><strong>Internal:</strong> Cảm giác mệt mỏi, muốn giải trí sau một ngày làm việc dài.</div>
            <div><strong>External:</strong> Thông báo push (Tập phim mới) hoặc gợi ý nội dung (Recommendation).</div>
          </div>
        </div>

        {/* Arrow */}
        <div style={{ textAlign: 'center', color: 'var(--text-muted, #9ca3af)' }}>↓</div>

        {/* Action */}
        <div style={{
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '16px',
          padding: '16px',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#3b82f6', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#93c5fd' }}>Action (Hành động)</h3>
          </div>
          <div style={{ fontSize: '0.9rem', color: '#e5e7eb', lineHeight: '1.5' }}>
            Bấm một nút duy nhất trên Remote (Nút Netflix/Youtube) hoặc điều khiển bằng giọng nói ("Mở phim X"). Yêu cầu nỗ lực cực thấp.
          </div>
        </div>

        {/* Arrow */}
        <div style={{ textAlign: 'center', color: 'var(--text-muted, #9ca3af)' }}>↓</div>

        {/* Reward */}
        <div style={{
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '16px',
          padding: '16px',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#10b981', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#6ee7b7' }}>Reward (Phần thưởng)</h3>
          </div>
          <div style={{ fontSize: '0.9rem', color: '#e5e7eb', lineHeight: '1.5' }}>
            <strong>The Hunt:</strong> Khám phá được một bộ phim hay từ kho nội dung khổng lồ, thỏa mãn nhu cầu giải trí ngay lập tức với hình ảnh 4K sắc nét.
          </div>
        </div>

        {/* Arrow */}
        <div style={{ textAlign: 'center', color: 'var(--text-muted, #9ca3af)' }}>↓</div>

        {/* Investment */}
        <div style={{
          background: 'rgba(139, 92, 246, 0.1)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '16px',
          padding: '16px',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#8b5cf6', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</div>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#c4b5fd' }}>Investment (Đầu tư)</h3>
          </div>
          <div style={{ fontSize: '0.9rem', color: '#e5e7eb', lineHeight: '1.5' }}>
            Lưu phim vào danh sách yêu thích (Watchlist), đăng nhập tài khoản, đánh giá nội dung. Tạo ra kho dữ liệu để AI hiểu và tạo Trigger mạnh hơn cho lần sau.
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', fontSize: '0.85rem', color: '#d1d5db', fontStyle: 'italic', borderLeft: '3px solid #9ca3af' }}>
        "Sự kết hợp giữa ma sát thấp ở bước Action và phần thưởng thay đổi ở bước Reward là chìa khóa để biến Smart TV thành thói quen giải trí hàng ngày."
      </div>
    </div>
  );
}
