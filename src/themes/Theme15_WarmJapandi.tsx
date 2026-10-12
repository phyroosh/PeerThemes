import React from 'react';

export const Theme15_WarmJapandi: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#F9F6F0',
        backgroundImage: `
          radial-gradient(circle at 80% 20%, rgba(189, 107, 83, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(110, 139, 104, 0.08) 0%, transparent 50%)
        `,
        color: '#2B2927',
        fontFamily: "system-ui, -apple-system, 'Inter', 'Helvetica Neue', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: '120px 85px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Japandi Minimalist Header */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 20,
            borderBottom: '1px solid #E2DCD5',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: '#BD6B53',
              }}
            />
            <span
              style={{
                fontSize: 18,
                letterSpacing: 4,
                color: '#7C766F',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              CHRONOBIOLOGY • CYCLE 01
            </span>
          </div>
          <span
            style={{
              fontSize: 16,
              color: '#6E8B68',
              fontWeight: 700,
              letterSpacing: 2,
              backgroundColor: '#EBE6DC',
              padding: '6px 14px',
              borderRadius: 20,
            }}
          >
            24.2 HOUR PACEMAKER
          </span>
        </div>

        {/* Serif Headline with Zen Serenity */}
        <div style={{ marginTop: 42 }}>
          <div
            style={{
              fontSize: 22,
              color: '#BD6B53',
              letterSpacing: 6,
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            THE INTERNAL CLOCK
          </div>
          <h1
            style={{
              fontSize: 82,
              fontWeight: 400,
              lineHeight: 1.08,
              margin: '14px 0 0 0',
              color: '#2B2927',
              letterSpacing: -1,
              fontFamily: "'Playfair Display', 'Georgia', serif",
            }}
          >
            Circadian<br />
            <span style={{ fontWeight: 700, color: '#6E8B68' }}>Oscillation</span>
          </h1>
        </div>
      </div>

      {/* Center Organic Wave & Pebble Clock Diagram */}
      <div
        style={{
          position: 'relative',
          width: 910,
          height: 820,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="910" height="820" viewBox="0 0 910 820" style={{ overflow: 'visible' }}>
          {/* Soft Organic Stone Pebble Background Shape */}
          <path
            d="M 120 420 C 100 240, 260 100, 480 90 C 720 80, 840 260, 810 440 C 780 640, 680 750, 440 760 C 220 770, 140 600, 120 420 Z"
            fill="#F2ECE1"
            opacity="0.85"
          />

          {/* 24-Hour Timeline Axis */}
          <line x1="80" y1="420" x2="830" y2="420" stroke="#D3CBC0" strokeWidth="2" />

          {/* Time Markers */}
          {[
            { label: '06:00', x: 140, sub: 'DAWN' },
            { label: '12:00', x: 370, sub: 'NOON' },
            { label: '18:00', x: 600, sub: 'DUSK' },
            { label: '24:00', x: 800, sub: 'NIGHT' },
          ].map((t, i) => (
            <g key={i} transform={`translate(${t.x}, 420)`}>
              <line x1="0" y1="-8" x2="0" y2="8" stroke="#8E857B" strokeWidth="2" />
              <text x="0" y="32" textAnchor="middle" fill="#5A534B" fontSize="16" fontWeight="bold">
                {t.label}
              </text>
              <text x="0" y="52" textAnchor="middle" fill="#8E857B" fontSize="13">
                {t.sub}
              </text>
            </g>
          ))}

          {/* Cortisol Curve (Awakening Surge at 08:00, decline in afternoon) */}
          <path
            d="M 80 500 Q 200 160, 320 200 T 560 480 T 830 520"
            fill="none"
            stroke="#BD6B53"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <text x="230" y="170" fill="#BD6B53" fontSize="18" fontWeight="bold">
            CORTISOL (AWAKE PEAK)
          </text>

          {/* Melatonin Curve (Low during day, massive night surge peaking 03:00) */}
          <path
            d="M 80 520 Q 300 520, 560 440 T 740 180 T 830 240"
            fill="none"
            stroke="#6E8B68"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <text x="730" y="150" textAnchor="middle" fill="#6E8B68" fontSize="18" fontWeight="bold">
            MELATONIN (DEEP SLEEP)
          </text>

          {/* Suprachiasmatic Nucleus (SCN) Pacemaker Badge Floating in Center */}
          <g transform="translate(340, 250)">
            <rect
              x="0"
              y="0"
              width="230"
              height="80"
              rx="40"
              fill="#FFFFFF"
              stroke="#E2DCD5"
              strokeWidth="2"
            />
            <circle cx="40" cy="40" r="22" fill="#E8DFD1" />
            <circle cx="40" cy="40" r="10" fill="#BD6B53" />
            <text x="75" y="36" fill="#2B2927" fontSize="16" fontWeight="bold">
              SCN PACEMAKER
            </text>
            <text x="75" y="58" fill="#7C766F" fontSize="14">
              Hypothalamus Hub
            </text>
          </g>

          {/* Retinal Melanopsin Light Sensor */}
          <g transform="translate(110, 270)">
            <circle cx="35" cy="35" r="30" fill="#FFFFFF" stroke="#6E8B68" strokeWidth="2" />
            <circle cx="35" cy="35" r="14" fill="#6E8B68" />
            <text x="80" y="40" fill="#6E8B68" fontSize="15" fontWeight="bold">
              ipRGC (480nm)
            </text>
          </g>
        </svg>
      </div>

      {/* Tactile Sandstone Information Card */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: 24,
          padding: '32px 38px',
          boxSizing: 'border-box',
          boxShadow: '0 8px 30px rgba(43, 41, 39, 0.05)',
          border: '1px solid #ECE7DF',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <span style={{ fontSize: 20, fontWeight: 700, color: '#2B2927' }}>
            Melanopsin Photoreception Window
          </span>
          <span
            style={{
              backgroundColor: '#F2ECE1',
              color: '#BD6B53',
              fontSize: 15,
              fontWeight: 700,
              padding: '6px 14px',
              borderRadius: 12,
            }}
          >
            SUPPRESSION: 480 nm
          </span>
        </div>

        <p style={{ margin: 0, fontSize: 21, lineHeight: 1.5, color: '#524E48' }}>
          Deep in the retina, intrinsically photosensitive ganglion cells absorb morning blue photons, resetting the master genetic clock via <em>CLOCK-BMAL1</em> transcription loops. As twilight falls, melatonin synthesis releases, reducing core body temperature by 1°C.
        </p>
      </div>

      {/* Footer Minimalist Strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #E2DCD5',
          paddingTop: 18,
          fontSize: 17,
          color: '#8E857B',
        }}
      >
        <span>CIRCADIAN MOLECULAR BIOLOGY</span>
        <span style={{ color: '#2B2927', fontWeight: 600 }}>WARM JAPANDI MINIMAL</span>
      </div>
    </div>
  );
};
