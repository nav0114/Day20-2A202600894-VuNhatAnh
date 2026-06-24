import React, { useState } from 'react';
import { 
  Users, 
  HelpCircle, 
  Target, 
  RefreshCw, 
  Zap, 
  ShieldAlert, 
  FileText, 
  Calendar,
  Activity,
  HeartHandshake
} from 'lucide-react';

export default function RetentionCanvasTab() {
  const [activeSection, setActiveSection] = useState('canvas');

  const canvasData = [
    {
      id: 'problem',
      title: 'The Problem (Vấn đề của user)',
      desc: '"Tivi nhà tôi bị hỏng màn hình, tôi không biết có được bảo hành miễn phí không và liên hệ thế nào. Gọi hotline hãng quá tải, tự đọc chính sách bảo hành PDF thì quá dài dòng và phức tạp."',
      icon: <HelpCircle size={18} className="text-red-400" style={{ color: '#f87171' }} />,
      badge: 'User Painpoint'
    },
    {
      id: 'persona',
      title: 'The Persona (Chân dung khách hàng)',
      desc: 'Chủ gia đình sở hữu Smart TV (25 - 60 tuổi), bận rộn, không chuyên kỹ thuật, sử dụng TV làm phương tiện giải trí gia đình buổi tối. Muốn sửa chữa nhanh tại nhà.',
      icon: <Users size={18} className="text-indigo-400" style={{ color: '#818cf8' }} />,
      badge: 'Target Persona'
    },
    {
      id: 'anti_persona',
      title: 'Anti-persona (Đối tượng loại trừ)',
      desc: 'Thợ sửa tivi tự do/cửa hàng điện tử cũ tự thu mua thiết bị hỏng, hoặc khách hàng mới chỉ đang tìm mua tivi mới (không có tivi bị hỏng cần bảo hành).',
      icon: <ShieldAlert size={18} className="text-amber-400" style={{ color: '#fbbf24' }} />,
      badge: 'Exclude'
    },
    {
      id: 'why',
      title: 'The Why (Động lực cốt lõi)',
      desc: 'Tiết kiệm thời gian, nhận câu trả lời chắc chắn và làm nhanh thủ tục bảo hành tại nhà để sớm khôi phục tivi phục vụ hoạt động giải trí gia đình.',
      icon: <Target size={18} className="text-emerald-400" style={{ color: '#34d399' }} />,
      badge: 'Motivation'
    },
    {
      id: 'alternative',
      title: 'The Alternative (Giải pháp thay thế)',
      desc: 'Gọi tổng đài hãng (chờ lâu), tự tháo và mang tivi ra trung tâm bảo hành, tìm kiếm chính sách bảo hành thủ công trên Google/PDF, hoặc thuê thợ ngoài sửa.',
      icon: <RefreshCw size={18} className="text-cyan-400" style={{ color: '#22d3ee' }} />,
      badge: 'Competitors'
    },
    {
      id: 'frequency',
      title: 'The Frequency (Tần suất vấn đề)',
      desc: 'Rất thấp (Yearly/Infrequent) - Sự cố hỏng hóc panel tivi trung bình chỉ xảy ra 1 hoặc vài năm một lần đối với mỗi hộ gia đình.',
      icon: <Calendar size={18} className="text-pink-400" style={{ color: '#f472b6' }} />,
      badge: 'Natural Cadence'
    }
  ];

  const metricsData = [
    {
      label: 'Core Job',
      value: 'Khắc phục nhanh sự cố tivi bị lỗi phần cứng bằng phương án sửa chữa bảo hành chính hãng.',
      icon: <Activity size={18} style={{ color: 'var(--accent)' }} />
    },
    {
      label: 'Core Action',
      value: 'Gửi thành công yêu cầu sửa chữa bảo hành tại nhà (Submit request) hoặc Xác nhận handoff kết nối kỹ thuật viên trực tuyến.',
      icon: <Zap size={18} style={{ color: '#fbbf24' }} />
    },
    {
      label: 'Active User Definition',
      value: 'Một user thực hiện hoàn thành ít nhất 1 lượt kiểm tra bảo hành hoặc gửi thành công 1 yêu cầu hỗ trợ kỹ thuật trong vòng 30 ngày (Monthly Active User - MAU).',
      icon: <Users size={18} style={{ color: '#a78bfa' }} />
    },
    {
      label: 'Retention Metric',
      value: 'Monthly Cohort Retention (Tỷ lệ phần trăm người dùng quay lại ứng dụng mỗi tháng) thay vì DAU/WAU để phù hợp với tần suất tự nhiên của tivi hỏng.',
      icon: <RefreshCw size={18} style={{ color: '#f472b6' }} />
    }
  ];

  const natureNurtureData = [
    {
      title: 'Nature (Nhịp nhu cầu tự nhiên)',
      desc: 'Người dùng chỉ mở app khi Smart TV gặp sự cố hiển thị hoặc khi cần tra cứu thông tin bảo hành khẩn cấp (Tần suất: 1 - 2 lần/năm).',
      type: 'nature'
    },
    {
      title: 'Nurture (Hoạt động nuôi dưỡng từ hãng)',
      desc: 'Gửi thông báo đẩy nhắc nhở bảo trì chạy Pixel Cleaning (quét điểm ảnh) chống bóng mờ OLED mỗi 6 tháng, gợi ý thiết lập màu sắc màn hình tối ưu, và nhắc gia hạn bảo hành trước khi hết 12 tháng gốc.',
      type: 'nurture'
    },
    {
      title: 'Nature vs Nurture Balance',
      desc: 'Giữ tần suất nhắc nhở bảo trì ở mức 6 tháng/lần là lý tưởng. Gửi thông báo quá thường xuyên (hàng tuần) sẽ gây phiền nhiễu cho sản phẩm tần suất thấp, làm người dùng gỡ cài đặt app.',
      type: 'balance'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', animation: 'fadeIn 0.4s ease-out' }}>
      {/* Sub-navigation inside Tab */}
      <div style={{ 
        display: 'flex', 
        gap: '4px', 
        background: 'rgba(0, 0, 0, 0.2)', 
        padding: '4px', 
        borderRadius: '10px',
        border: '1px solid var(--glass-border)' 
      }}>
        <button
          onClick={() => setActiveSection('canvas')}
          style={{
            flex: 1,
            padding: '8px',
            borderRadius: '8px',
            border: 'none',
            background: activeSection === 'canvas' ? 'var(--primary)' : 'transparent',
            color: activeSection === 'canvas' ? '#ffffff' : 'var(--text-muted)',
            fontSize: '0.82rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'var(--transition-fast)'
          }}
        >
          Retention Canvas
        </button>
        <button
          onClick={() => setActiveSection('metrics')}
          style={{
            flex: 1,
            padding: '8px',
            borderRadius: '8px',
            border: 'none',
            background: activeSection === 'metrics' ? 'var(--primary)' : 'transparent',
            color: activeSection === 'metrics' ? '#ffffff' : 'var(--text-muted)',
            fontSize: '0.82rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'var(--transition-fast)'
          }}
        >
          Core Action & Metrics
        </button>
        <button
          onClick={() => setActiveSection('nurture')}
          style={{
            flex: 1,
            padding: '8px',
            borderRadius: '8px',
            border: 'none',
            background: activeSection === 'nurture' ? 'var(--primary)' : 'transparent',
            color: activeSection === 'nurture' ? '#ffffff' : 'var(--text-muted)',
            fontSize: '0.82rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'var(--transition-fast)'
          }}
        >
          Nature vs Nurture
        </button>
      </div>

      {/* Render Active Section Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* SECTION 1: CUSTOMER RETENTION CANVAS */}
        {activeSection === 'canvas' && (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1rem', 
                color: '#ffffff', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px' 
              }}>
                <FileText size={18} style={{ color: 'var(--accent)' }} />
                Customer Retention Canvas
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                Phân tích sâu một use case chính để định hình cách ứng dụng giữ chân người dùng trong môi trường tự nhiên.
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr', 
              gap: '12px',
              maxHeight: '480px',
              overflowY: 'auto',
              paddingRight: '4px'
            }}>
              {canvasData.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {item.icon}
                      <span style={{ fontWeight: '600', fontSize: '0.88rem', color: '#ffffff' }}>
                        {item.title}
                      </span>
                    </div>
                    <span style={{ 
                      fontSize: '0.72rem', 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      padding: '2px 8px', 
                      borderRadius: '8px', 
                      color: 'var(--text-muted)',
                      fontWeight: '500'
                    }}>
                      {item.badge}
                    </span>
                  </div>
                  <p style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--text-main)', 
                    lineHeight: '1.5',
                    paddingLeft: '26px' 
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* SECTION 2: CORE ACTION & ACTIVE USER METRICS */}
        {activeSection === 'metrics' && (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1rem', 
                color: '#ffffff', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px' 
              }}>
                <Target size={18} style={{ color: 'var(--accent)' }} />
                Core Action & Active User Metrics
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                Xác định các thước đo hành vi chứng minh người dùng thực sự nhận được giá trị và định nghĩa trạng thái hoạt động.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {metricsData.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    padding: '14px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}
                >
                  <div style={{ 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    padding: '8px', 
                    borderRadius: '10px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                      {item.label}
                    </span>
                    <p style={{ fontSize: '0.85rem', color: '#ffffff', lineHeight: '1.5' }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* SECTION 3: NATURE VS NURTURE */}
        {activeSection === 'nurture' && (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1rem', 
                color: '#ffffff', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px' 
              }}>
                <HeartHandshake size={18} style={{ color: 'var(--accent)' }} />
                Nature vs Nurture
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                Sự cân bằng giữa nhu cầu tự nhiên của người dùng và các hoạt động đẩy tương tác từ phía hãng sản xuất.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {natureNurtureData.map((item, idx) => {
                let cardColor = 'rgba(255, 255, 255, 0.02)';
                let borderColor = 'var(--glass-border)';
                let tagText = '';
                let tagBg = 'rgba(255, 255, 255, 0.05)';
                let tagColor = 'var(--text-muted)';
                
                if (item.type === 'nature') {
                  tagText = 'Tự nhiên (User)';
                  tagBg = 'rgba(34, 211, 238, 0.08)';
                  tagColor = '#22d3ee';
                } else if (item.type === 'nurture') {
                  tagText = 'Nuôi dưỡng (Hãng)';
                  tagBg = 'rgba(251, 191, 36, 0.08)';
                  tagColor = '#fbbf24';
                } else {
                  tagText = 'Cân bằng (Balance)';
                  tagBg = 'rgba(52, 211, 153, 0.08)';
                  tagColor = '#34d399';
                }

                return (
                  <div 
                    key={idx}
                    style={{
                      background: cardColor,
                      border: `1px solid ${borderColor}`,
                      borderRadius: '12px',
                      padding: '14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: '600', color: '#ffffff' }}>
                        {item.title}
                      </span>
                      <span style={{ 
                        fontSize: '0.72rem', 
                        background: tagBg, 
                        color: tagColor,
                        padding: '2px 8px', 
                        borderRadius: '8px', 
                        fontWeight: '600'
                      }}>
                        {tagText}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
