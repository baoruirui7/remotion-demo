import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const StatItem: React.FC<{
  value: string;
  label: string;
  delay: number;
  color: string;
}> = ({ value, label, delay, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 70, stiffness: 50 },
  });

  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(progress, [0, 1], [60, 0]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        textAlign: "center",
        padding: "0 60px",
        fontFamily: "-apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 100,
          fontWeight: 800,
          color,
          lineHeight: 1,
          textShadow: `0 0 40px ${color}80`,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 28,
          color: "rgba(255,255,255,0.75)",
          marginTop: 16,
          letterSpacing: 3,
          fontWeight: 300,
        }}
      >
        {label}
      </div>
    </div>
  );
};

export const Scene2Stats: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [10, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [10, 35], [-20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Divider lines
  const lineWidth = interpolate(frame, [20, 60], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #050A28 0%, #0D1B5E 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "-apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif",
      }}
    >
      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 64,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: 8,
            fontWeight: 300,
          }}
        >
          数字见证力量
        </div>
        <div
          style={{
            width: `${lineWidth}px`,
            height: 2,
            background: "linear-gradient(to right, transparent, #1664FF, transparent)",
            margin: "16px auto 0",
          }}
        />
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <StatItem value="20亿+" label="月活用户" delay={15} color="#1664FF" />

        {/* Divider */}
        <div
          style={{
            width: 1,
            height: 140,
            background: "rgba(255,255,255,0.15)",
          }}
        />

        <StatItem value="150+" label="国家和地区" delay={30} color="#00C4CC" />

        <div
          style={{
            width: 1,
            height: 140,
            background: "rgba(255,255,255,0.15)",
          }}
        />

        <StatItem value="10万+" label="全球员工" delay={45} color="#7B61FF" />
      </div>
    </AbsoluteFill>
  );
};
