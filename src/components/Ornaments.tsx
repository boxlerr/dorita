/** Decorative SVG ornaments — vintage / heritage flourishes. Server components. */

export function Seal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Sello Dorita"
    >
      <defs>
        <path
          id="seal-text"
          d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
          fill="none"
        />
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="33" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <text fontSize="8.2" letterSpacing="3.1" fill="currentColor" fontFamily="var(--font-jost), sans-serif">
        <textPath href="#seal-text" startOffset="2%">
          · PIEZAS ÚNICAS · PIEDRAS NATURALES ·
        </textPath>
      </text>
      <text
        x="60"
        y="74"
        textAnchor="middle"
        fontSize="42"
        fill="currentColor"
        fontFamily="var(--font-script), cursive"
      >
        D
      </text>
    </svg>
  );
}

export function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 24" className={className} aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        <path d="M100 12 C 80 2, 60 2, 40 12 C 28 19, 18 19, 6 12" />
        <path d="M100 12 C 120 2, 140 2, 160 12 C 172 19, 182 19, 194 12" />
        <circle cx="100" cy="12" r="2.6" fill="currentColor" stroke="none" />
        <circle cx="6" cy="12" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="194" cy="12" r="1.6" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

/** Scalloped (lace-like) edge used at section transitions. */
export function ScallopEdge({
  className = "",
  fill = "var(--cream)",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0,40 L0,20 Q15,0 30,20 Q45,0 60,20 Q75,0 90,20 Q105,0 120,20 Q135,0 150,20 Q165,0 180,20 Q195,0 210,20 Q225,0 240,20 Q255,0 270,20 Q285,0 300,20 Q315,0 330,20 Q345,0 360,20 Q375,0 390,20 Q405,0 420,20 Q435,0 450,20 Q465,0 480,20 Q495,0 510,20 Q525,0 540,20 Q555,0 570,20 Q585,0 600,20 Q615,0 630,20 Q645,0 660,20 Q675,0 690,20 Q705,0 720,20 Q735,0 750,20 Q765,0 780,20 Q795,0 810,20 Q825,0 840,20 Q855,0 870,20 Q885,0 900,20 Q915,0 930,20 Q945,0 960,20 Q975,0 990,20 Q1005,0 1020,20 Q1035,0 1050,20 Q1065,0 1080,20 Q1095,0 1110,20 Q1125,0 1140,20 Q1155,0 1170,20 Q1185,0 1200,20 L1200,40 Z"
        fill={fill}
      />
    </svg>
  );
}
