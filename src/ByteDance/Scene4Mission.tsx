import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const Scene4Mission: React.FC = () => {
  const frame = useCurrentFrame();

  const mainText = "让信息找到人";
  const subText = "用技术改变世界";

  const mainOpacity = interpolate(frame, [15, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subOpacity = interpolate(frame, [55, 80], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subY = interpolate(frame, [55, 80], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ringScale = interpolate(frame, [0, 120], [0.8, 1.3], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ringOpacity = interpolate(frame, [0, 30, 90, 120], [0, 0.15, 0.1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const chars = mainText.split("");
  const charAnimStart = 20;
  const charDelay = 5;

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #B23000 0%, #FF4500 40%, #FF6A00 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "-apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", transform: `scale(${ringScale})`, opacity: ringOpacity }} />
      <div style={{ position: "absolute", width: 800, height: 800, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", transform: `scale(${ringScale * 0.8})`, opacity: ringOpacity * 0.7 }} />

      <div style={{ opacity: mainOpacity, fontSize: 20, color: "rgba(255,255,255,0.7)", letterSpacing: 10, marginBottom: 32, textTransform: "uppercase" as const }}>MISSION</div>

      <div style={{ display: "flex", flexDirection: "row", gap: 4, marginBottom: 40 }}>
        {chars.map((char, i) => {
          const charOpacity = interpolate(frame, [charAnimStart + i * charDelay, charAnimStart + i * charDelay + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const charY = interpolate(frame, [charAnimStart + i * charDelay, charAnimStart + i * charDelay + 15], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <span key={i} style={{ fontSize: 120, fontWeight: 900, color: "#FFFFFF", opacity: charOpacity, transform: `translateY(${charY}px)`, display: "inline-block", lineHeight: 1, textShadow: "0 4px 24px rgba(0,0,0,0.3)" }}>
              {char}
            </span>
          );
        })}
      </div>

      <div style={{ opacity: subOpacity, transform: `translateY(${subY}px)`, fontSize: 40, color: "rgba(255,255,255,0.85)", letterSpacing: 8, fontWeight: 300 }}>
        {subText}
      </div>
    </AbsoluteFill>
  );
};