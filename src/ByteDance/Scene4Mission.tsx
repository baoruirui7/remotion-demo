import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const Scene4Mission: React.FC = () => {
  const frame = useCurrentFrame();

  const mainText = "让信息找到人";
  const subText = "用技术改变世界";

  // 过渡由外层 FadeWrapper 统一处理，此处无需重复

  const labelOpacity = interpolate(frame, [15, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subOpacity = interpolate(frame, [55, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subY = interpolate(frame, [55, 80], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ringScale = interpolate(frame, [0, 120], [0.8, 1.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ringOpacity = interpolate(frame, [0, 30, 90, 115], [0, 0.18, 0.12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const chars = mainText.split("");
  const charAnimStart = 20;
  const charDelay = 5;

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(135deg, #040D2E 0%, #071547 50%, #0D1B5E 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "-apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* 装饰光圈 */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          border: "1.5px solid rgba(22, 100, 255, 0.35)",
          transform: `scale(${ringScale})`,
          opacity: ringOpacity,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 860,
          height: 860,
          borderRadius: "50%",
          border: "1px solid rgba(22, 100, 255, 0.15)",
          transform: `scale(${ringScale * 0.82})`,
          opacity: ringOpacity * 0.6,
        }}
      />
      {/* 中心光晕 */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(22,100,255,0.15) 0%, transparent 70%)",
          opacity: ringOpacity * 2,
        }}
      />

      {/* MISSION 标签 */}
      <div
        style={{
          opacity: labelOpacity,
          fontSize: 20,
          color: "#1664FF",
          letterSpacing: 12,
          marginBottom: 28,
          textTransform: "uppercase" as const,
          fontWeight: 300,
        }}
      >
        MISSION
      </div>

      {/* 主文字逐字动画 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          marginBottom: 44,
        }}
      >
        {chars.map((char, i) => {
          const charOpacity = interpolate(
            frame,
            [charAnimStart + i * charDelay, charAnimStart + i * charDelay + 15],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const charY = interpolate(
            frame,
            [charAnimStart + i * charDelay, charAnimStart + i * charDelay + 15],
            [40, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          return (
            <span
              key={i}
              style={{
                fontSize: 112,
                fontWeight: 900,
                color: "#FFFFFF",
                opacity: charOpacity,
                transform: `translateY(${charY}px)`,
                display: "inline-block",
                lineHeight: 1,
                textShadow: "0 4px 32px rgba(22,100,255,0.4)",
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* 副标题 */}
      <div
        style={{
          opacity: subOpacity,
          transform: `translateY(${subY}px)`,
          fontSize: 38,
          color: "rgba(255,255,255,0.7)",
          letterSpacing: 10,
          fontWeight: 300,
        }}
      >
        {subText}
      </div>

      {/* 底部装饰线 */}
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          width: interpolate(frame, [60, 95], [0, 320], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          height: 1,
          background:
            "linear-gradient(to right, transparent, #1664FF, transparent)",
          opacity: interpolate(frame, [60, 90], [0, 0.6], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};
