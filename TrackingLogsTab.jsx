import React, { useMemo, useState } from 'react';
import {
  Activity,
  CheckCircle2,
  Clipboard,
  Clock,
  Trash2
} from 'lucide-react';

export default function TrackingLogsTab({ events = [], onClear }) {
  const [copyStatus, setCopyStatus] = useState('');

  const eventCount = events.length;

  const latestEventName = useMemo(() => {
    if (!events.length) return 'Chưa có event';
    return events[0].event_name;
  }, [events]);

  const handleCopy = async () => {
    try {
      const text = JSON.stringify(events, null, 2);

      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      }

      setCopyStatus('Đã copy JSON');
      setTimeout(() => setCopyStatus(''), 1600);
    } catch {
      setCopyStatus('Không copy được');
      setTimeout(() => setCopyStatus(''), 1600);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        animation: 'fadeIn 0.4s ease-out'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h4
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            margin: 0
          }}
        >
          <Activity size={18} style={{ color: 'var(--accent)' }} />
          Real-time Tracking Simulator
        </h4>

        <p
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            lineHeight: '1.45',
            margin: 0
          }}
        >
          Log event JSON được tạo realtime khi người dùng tương tác với chatbot.
          Đây là simulator, không gửi dữ liệu lên analytics thật.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px'
        }}
      >
        <MetricCard
          label="Total Events"
          value={eventCount}
          icon={<Activity size={16} style={{ color: '#22d3ee' }} />}
        />
        <MetricCard
          label="Latest Event"
          value={latestEventName}
          icon={<Clock size={16} style={{ color: '#fbbf24' }} />}
        />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '8px'
        }}
      >
        <button
          type="button"
          onClick={handleCopy}
          disabled={!events.length}
          style={{
            flex: 1,
            border: '1px solid var(--glass-border)',
            borderRadius: '12px',
            background: events.length
              ? 'rgba(255, 255, 255, 0.06)'
              : 'rgba(255, 255, 255, 0.03)',
            color: events.length ? '#ffffff' : 'var(--text-muted)',
            height: '38px',
            cursor: events.length ? 'pointer' : 'not-allowed',
            fontWeight: 600,
            fontSize: '0.82rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '7px'
          }}
        >
          <Clipboard size={15} />
          Copy JSON
        </button>

        <button
          type="button"
          onClick={onClear}
          disabled={!events.length}
          style={{
            flex: 1,
            border: '1px solid rgba(248, 113, 113, 0.28)',
            borderRadius: '12px',
            background: events.length
              ? 'rgba(248, 113, 113, 0.08)'
              : 'rgba(255, 255, 255, 0.03)',
            color: events.length ? '#fca5a5' : 'var(--text-muted)',
            height: '38px',
            cursor: events.length ? 'pointer' : 'not-allowed',
            fontWeight: 600,
            fontSize: '0.82rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '7px'
          }}
        >
          <Trash2 size={15} />
          Clear
        </button>
      </div>

      {copyStatus && (
        <div
          style={{
            border: '1px solid rgba(52, 211, 153, 0.28)',
            background: 'rgba(52, 211, 153, 0.08)',
            color: '#34d399',
            borderRadius: '12px',
            padding: '9px 12px',
            fontSize: '0.8rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '7px'
          }}
        >
          <CheckCircle2 size={15} />
          {copyStatus}
        </div>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxHeight: '520px',
          overflowY: 'auto',
          paddingRight: '4px'
        }}
      >
        {!events.length ? (
          <div
            style={{
              border: '1px dashed var(--glass-border)',
              borderRadius: '16px',
              padding: '28px 16px',
              textAlign: 'center',
              color: 'var(--text-muted)',
              background: 'rgba(255, 255, 255, 0.02)'
            }}
          >
            <Activity size={28} style={{ opacity: 0.55, marginBottom: '8px' }} />
            <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.45 }}>
              Chưa có event. Hãy tương tác với chatbot hoặc quét QR ở Step 4.
            </p>
          </div>
        ) : (
          events.map((event, index) => (
            <EventLogCard key={event.id || `${event.event_name}-${index}`} event={event} />
          ))
        )}
      </div>
    </div>
  );
}

function MetricCard({ label, value, icon }) {
  return (
    <div
      style={{
        border: '1px solid var(--glass-border)',
        borderRadius: '14px',
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        minWidth: 0
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        {icon}
        <span
          style={{
            fontSize: '0.74rem',
            color: 'var(--text-muted)',
            fontWeight: 600
          }}
        >
          {label}
        </span>
      </div>

      <strong
        style={{
          color: '#ffffff',
          fontSize: '0.9rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}
        title={String(value)}
      >
        {value}
      </strong>
    </div>
  );
}

function EventLogCard({ event }) {
  return (
    <div
      style={{
        border: '1px solid var(--glass-border)',
        borderRadius: '14px',
        background: 'rgba(15, 23, 42, 0.58)',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          padding: '10px 12px',
          borderBottom: '1px solid var(--glass-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span
          style={{
            color: '#ffffff',
            fontSize: '0.84rem',
            fontWeight: 700,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
          title={event.event_name}
        >
          {event.event_name}
        </span>

        <span
          style={{
            flexShrink: 0,
            color: '#22d3ee',
            fontSize: '0.7rem',
            fontWeight: 700,
            background: 'rgba(34, 211, 238, 0.08)',
            border: '1px solid rgba(34, 211, 238, 0.18)',
            borderRadius: '999px',
            padding: '3px 8px'
          }}
        >
          Step {event.current_step ?? '-'}
        </span>
      </div>

      <pre
        style={{
          margin: 0,
          padding: '12px',
          color: '#dbeafe',
          fontSize: '0.74rem',
          lineHeight: 1.48,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          maxHeight: '220px',
          overflowY: 'auto'
        }}
      >
        {JSON.stringify(event, null, 2)}
      </pre>
    </div>
  );
}