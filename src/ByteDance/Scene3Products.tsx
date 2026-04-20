import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const products = [
  { name: "抖音", sub: "TikTok", color: "#000000", bg: "#FE2C55", emoji: "🎵" },
  { name: "今日头条", sub: "Toutiao", color: "#FFFFFF", bg: "#FF4545", emoji: "📰" },
  { name: "西瓜视频", sub: "Xigua Video", color: "#FFFFFF", bg: "#FF8C00", emoji: "🎬" },
  { name: "飞书", sub: "Lark", color: "#FFFFFF", bg: "#1664FF", emoji: "🚀" },
  { name: "剪映", sub: "CapCut", color: "#FFFFFF", bg: "#0D0D0D", emoji: "✂️" },
  { name: "懂车帝", sub: "DCD", color: "#FFFFFF", bg: "#00AA44", emoji: "🚗" },
];

const ProductCard: React.FC<{
  name: string; sub: string; color: string; bg: string; emoji: string; delay: number;
}> = ({ name, sub, bg, emoji, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({ frame: frame - delay, fps, config: { damping: 60, stiffness: 120, mass: 0.8 } });
  const scale = interpolate(progress, [0, 1], [0.4, 1]);
  const opacity = interpolate(progress, [0, 0.3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ opacity, transform: `scale(${scale})`, display: "flex", flexDirection: "column", alignItems: "center", gap: 14, width: 200, fontFamily: "-apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
      <div style={{ width: 110, height: 110, borderRadius: 28, background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52, boxShadow: `0 8px 32px ${bg}60` }}>
        {emoji}
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", letterSpacing: 1 }}>{name}</div>
        <div style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>{sub}</div>
      </div>
    </div>
  );
};

export const Scene3Products: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [5, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [5, 30], [-30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "linear-gradient(160deg, #0D0D1A 0%, #111130 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "-apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
      <div style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)`, textAlign: "center", marginBottom: 60 }}>
        <div style={{ fontSize: 18, color: "#1664FF", letterSpacing: 8, marginBottom: 12 }}>PRODUCT ECOSYSTEM</div>
        <div style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", letterSpacing: 4 }}>多元产品矩阵</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 48, justifyContent: "center", maxWidth: 1400 }}>
        {products.map((p, i) => <ProductCard key={p.name} {...p} delay={20 + i * 12} />)}
      </div>
    </AbsoluteFill>
  );
};