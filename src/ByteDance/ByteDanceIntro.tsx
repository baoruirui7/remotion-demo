import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Logo } from "./Scene1Logo";
import { Scene2Stats } from "./Scene2Stats";
import { Scene3Products } from "./Scene3Products";
import { Scene4Mission } from "./Scene4Mission";
import { Scene5Outro } from "./Scene5Outro";

// Total: 600 frames @ 30fps = 20 seconds
// Scene1: 0-120    (0s - 4s)
// Scene2: 120-240  (4s - 8s)
// Scene3: 240-360  (8s - 12s)
// Scene4: 360-480  (12s - 16s)
// Scene5: 480-600  (16s - 20s)

export const ByteDanceIntro: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "#000000" }}>
      <Sequence from={0} durationInFrames={120}>
        <Scene1Logo />
      </Sequence>

      <Sequence from={120} durationInFrames={120}>
        <Scene2Stats />
      </Sequence>

      <Sequence from={240} durationInFrames={120}>
        <Scene3Products />
      </Sequence>

      <Sequence from={360} durationInFrames={120}>
        <Scene4Mission />
      </Sequence>

      <Sequence from={480} durationInFrames={120}>
        <Scene5Outro />
      </Sequence>
    </AbsoluteFill>
  );
};