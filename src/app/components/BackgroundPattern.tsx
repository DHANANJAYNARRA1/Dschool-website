export function DotPattern() {
  return (
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%">
        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-blue-900" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

export function GridPattern() {
  return (
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%">
        <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-900" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function WavePattern() {
  return (
    <div className="absolute bottom-0 left-0 right-0 opacity-10">
      <svg viewBox="0 0 1440 320" className="w-full">
        <path
          fill="currentColor"
          className="text-blue-900"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}

export function GeometricPattern() {
  return (
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="geometric" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <polygon points="50,0 100,50 50,100 0,50" fill="none" stroke="currentColor" strokeWidth="1" className="text-yellow-600" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-900" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric)" />
      </svg>
    </div>
  );
}
