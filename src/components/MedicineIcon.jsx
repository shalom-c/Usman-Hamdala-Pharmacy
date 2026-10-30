export default function MedicineIcon({ kind, color }) {
  const drawings = {
    tablet: <><ellipse cx="60" cy="45" rx="28" ry="20" fill={color} stroke="#344b43" strokeWidth="2" /><path d="M43 45h34" stroke="#fff" strokeOpacity=".8" strokeWidth="2" /></>,
    oval: <><ellipse cx="60" cy="45" rx="34" ry="17" fill={color} stroke="#344b43" strokeWidth="2" /><path d="M60 29v32" stroke="#fff" strokeOpacity=".75" strokeWidth="2" /></>,
    capsule: <g transform="rotate(-32 60 45)"><rect x="27" y="31" width="66" height="28" rx="14" fill={color} stroke="#344b43" strokeWidth="2" /><path d="M60 32v26" stroke="#fff" strokeOpacity=".85" strokeWidth="2" /><path d="M29 45h30" stroke="#fff" strokeOpacity=".35" strokeWidth="24" /></g>,
    bottle: <><path d="M47 19h26v12l7 7v36a6 6 0 0 1-6 6H50a6 6 0 0 1-6-6V38l3-7V19Z" fill={color} stroke="#344b43" strokeWidth="2" /><path d="M47 24h26M44 45h36" stroke="#fff" strokeOpacity=".8" strokeWidth="3" /><rect x="49" y="51" width="22" height="14" rx="3" fill="#fff" fillOpacity=".82" /><path d="M60 54v8m-4-4h8" stroke="#0b5d49" strokeWidth="2" /></>,
    sachet: <><path d="m35 18 50 0 7 58-62 0 5-58Z" fill={color} stroke="#344b43" strokeWidth="2" /><path d="M36 25h48M33 69h58" stroke="#fff" strokeOpacity=".8" strokeWidth="2" /><path d="m43 18 4 7m31-7-4 7" stroke="#fff" strokeOpacity=".75" strokeWidth="2" /><text x="60" y="53" textAnchor="middle" fill="#fff" fontSize="13" fontFamily="Arial, sans-serif" fontWeight="700">ORS</text></>,
    blister: <><rect x="25" y="20" width="70" height="50" rx="9" fill={color} stroke="#87958e" strokeWidth="2" /><path d="M25 35h70M25 53h70M48 20v50M72 20v50" stroke="#b5c2bc" strokeWidth="1.5" /><g fill="#fff" stroke="#a4b1ab" strokeWidth="1.5">{[[36, 28], [60, 28], [84, 28], [36, 44], [60, 44], [84, 44], [36, 61], [60, 61], [84, 61]].map(([cx, cy]) => <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx="6" ry="4" />)}</g></>
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 90" aria-hidden="true" focusable="false">
      {drawings[kind] || drawings.tablet}
    </svg>
  );
}
