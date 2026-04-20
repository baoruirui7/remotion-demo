import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene5Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const logoProgress = spring({ frame: frame - 10, fps, config: { damping: 90, stiffness: 70 } });
  const logoScale = interpolate(logoProgress, [0, 1], [0.6, 1]);
  const logoOpacity = interpolate(frame, [10, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const urlOpacity = interpolate(frame, [50, 75], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const urlY = interpolate(frame, [50, 75], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 30, durationInFrames], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lineWidth = interpolate(frame, [30, 70], [0, 500], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lineOpacity = interpolate(frame, [30, 70, 90, durationInFrames - 30], [0, 0.8, 0.5, 0.3], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "radial-gradient(ellipse at center, #0a0a1a 0%, #000000 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "-apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: lineWidth, height: 1, background: "linear-gradient(to right, transparent, #1664FF, transparent)", opacity: lineOpacity, top: "44%" }} />
      <div style={{ opacity: logoOpacity, transform: `scale(${logoScale})`, textAlign: "center" }}>
        <div style={{ fontSize: 88, fontWeight: 800, color: "#FFFFFF", letterSpacing: 8, lineHeight: 1.1 }}>字节跳动</div>
        <div style={{ fontSize: 44, fontWeight: 300, color: "#1664FF", letterSpacing: 16, marginTop: 8 }}>ByteDance</div>
      </div>
      <div style={{ opacity: urlOpacity, transform: `translateY(${urlY}px)`, marginTop: 52, fontSize: 24, color: "rgba(255,255,255,0.45)", letterSpacing: 4 }}>
        www.bytedance.com
      </div>
      <AbsoluteFill style={{ background: "#000000", opacity: fadeOut }} />
    </AbsoluteFill>
  );
};