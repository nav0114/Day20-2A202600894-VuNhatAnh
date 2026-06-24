import React, { useEffect, useRef, useState } from 'react';
import {
  Camera,
  CheckCircle2,
  Loader2,
  QrCode,
  ScanLine,
  X
} from 'lucide-react';

const DEMO_SERIAL = 'TV12345';

export default function QRScannerModal({
  isOpen,
  onClose,
  onScanSuccess,
  demoSerial = DEMO_SERIAL
}) {
  const [status, setStatus] = useState('idle');
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      setStatus('idle');
      return;
    }

    setStatus('idle');

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStartScan = () => {
    setStatus('scanning');

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setStatus('success');

      setTimeout(() => {
        onScanSuccess?.({
          serial: demoSerial,
          entry_method: 'qr',
          source: 'qr_scanner_modal'
        });
      }, 450);
    }, 1400);
  };

  const isScanning = status === 'scanning';
  const isSuccess = status === 'success';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.72)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          background: 'rgba(17, 24, 39, 0.98)',
          border: '1px solid var(--glass-border)',
          borderRadius: '24px',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.45)',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            padding: '18px 20px',
            borderBottom: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'rgba(34, 211, 238, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <QrCode size={20} style={{ color: '#22d3ee' }} />
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: 700
                }}
              >
                Quét mã QR Serial
              </h3>
              <p
                style={{
                  margin: '2px 0 0',
                  color: 'var(--text-muted)',
                  fontSize: '0.78rem'
                }}
              >
                Mockup giảm ma sát nhập Serial ở Step 4
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            style={{
              border: 'none',
              background: 'rgba(255, 255, 255, 0.06)',
              color: '#ffffff',
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            aria-label="Đóng QR scanner"
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '22px 20px' }}>
          <div
            style={{
              position: 'relative',
              height: '260px',
              borderRadius: '22px',
              background:
                'linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.96))',
              border: isSuccess
                ? '1px solid rgba(52, 211, 153, 0.6)'
                : '1px solid rgba(34, 211, 238, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '34px',
                border: '2px dashed rgba(255, 255, 255, 0.2)',
                borderRadius: '18px'
              }}
            />

            {isScanning && (
              <div
                style={{
                  position: 'absolute',
                  left: '34px',
                  right: '34px',
                  top: '48%',
                  height: '2px',
                  background:
                    'linear-gradient(90deg, transparent, #22d3ee, transparent)',
                  boxShadow: '0 0 18px rgba(34, 211, 238, 0.8)',
                  animation: 'qrScanLine 1.1s ease-in-out infinite'
                }}
              />
            )}

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              {status === 'idle' && (
                <>
                  <Camera size={46} style={{ color: '#22d3ee' }} />
                  <div>
                    <p
                      style={{
                        margin: 0,
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.98rem'
                      }}
                    >
                      Đưa tem bảo hành vào khung quét
                    </p>
                    <p
                      style={{
                        margin: '6px 0 0',
                        color: 'var(--text-muted)',
                        fontSize: '0.82rem'
                      }}
                    >
                      Prototype sẽ tự nhận Serial mẫu: {demoSerial}
                    </p>
                  </div>
                </>
              )}

              {isScanning && (
                <>
                  <ScanLine size={48} style={{ color: '#22d3ee' }} />
                  <div>
                    <p
                      style={{
                        margin: 0,
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.98rem'
                      }}
                    >
                      Đang quét mã QR...
                    </p>
                    <p
                      style={{
                        margin: '6px 0 0',
                        color: 'var(--text-muted)',
                        fontSize: '0.82rem'
                      }}
                    >
                      Đang đọc thông tin Serial từ tem bảo hành
                    </p>
                  </div>
                </>
              )}

              {isSuccess && (
                <>
                  <CheckCircle2 size={50} style={{ color: '#34d399' }} />
                  <div>
                    <p
                      style={{
                        margin: 0,
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.98rem'
                      }}
                    >
                      Đã nhận diện Serial
                    </p>
                    <p
                      style={{
                        margin: '6px 0 0',
                        color: '#34d399',
                        fontSize: '0.9rem',
                        fontWeight: 700
                      }}
                    >
                      {demoSerial}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div
            style={{
              marginTop: '16px',
              padding: '12px',
              borderRadius: '14px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--glass-border)'
            }}
          >
            <p
              style={{
                margin: 0,
                color: 'var(--text-muted)',
                fontSize: '0.82rem',
                lineHeight: 1.5
              }}
            >
              QR Scanner là giả lập kỹ thuật để giảm thao tác nhập Serial thủ
              công. Không dùng camera thật, không lưu dữ liệu cá nhân.
            </p>
          </div>

          <button
            onClick={handleStartScan}
            disabled={isScanning || isSuccess}
            type="button"
            style={{
              marginTop: '16px',
              width: '100%',
              height: '46px',
              border: 'none',
              borderRadius: '14px',
              background:
                isScanning || isSuccess
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'linear-gradient(135deg, #2563eb, #06b6d4)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.94rem',
              cursor: isScanning || isSuccess ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            {isScanning && <Loader2 size={18} className="spin-icon" />}
            {isSuccess && <CheckCircle2 size={18} />}
            {!isScanning && !isSuccess && <QrCode size={18} />}
            {status === 'idle' && 'Bắt đầu quét QR'}
            {isScanning && 'Đang quét...'}
            {isSuccess && 'Quét thành công'}
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes qrScanLine {
            0% { transform: translateY(-72px); opacity: 0; }
            20% { opacity: 1; }
            50% { opacity: 1; }
            100% { transform: translateY(72px); opacity: 0; }
          }

          .spin-icon {
            animation: spinIcon 0.9s linear infinite;
          }

          @keyframes spinIcon {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}