import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene1Logo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoProgress = spring({ frame, fps, config: { damping: 80, stiffness: 60 } });
  const logoScale = interpolate(logoProgress, [0, 1], [0.3, 1]);
  const logoOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subtitleOpacity = interpolate(frame, [50, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subtitleY = interpolate(frame, [50, 80], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const particles = Array.from({ length: 20 }, (_, i) => {
    const x = ((i * 73 + 11) % 100);
    const y = ((i * 47 + 23) % 100);
    const size = 2 + (i % 4);
    const particleOpacity = interpolate(
      frame,
      [i * 3, i * 3 + 30, i * 3 + 60, i * 3 + 90],
      [0, 0.8, 0.8, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    const offsetY = interpolate(frame, [0, 120], [0, -30 - (i % 20) * 2], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return { x, y, size, particleOpacity, offsetY };
  });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(ellipse at center, #0a0a1a 0%, #000000 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "-apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif",
        overflow: "hidden",
      }}
    >
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "#1664FF",
            opacity: p.particleOpacity,
            transform: `translateY(${p.offsetY}px)`,
            boxShadow: `0 0 ${p.size * 2}px #1664FF`,
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          width: 400,
          height: 1,
          background: "linear-gradient(to right, transparent, #1664FF, transparent)",
          opacity: logoOpacity * 0.6,
          top: "45%",
        }}
      />

      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, color: "#FFFFFF", letterSpacing: 8, lineHeight: 1.1 }}>
          字节跳动
        </div>
        <div style={{ fontSize: 48, fontWeight: 300, color: "#1664FF", letterSpacing: 16, marginTop: 8 }}>
          ByteDance
        </div>
      </div>

      <div
        style={{
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
          marginTop: 48,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.7)", letterSpacing: 6, fontWeight: 300 }}>
          激发创造，丰富生活
        </div>
      </div>
    </AbsoluteFill>
  );
};