import { AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
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

const FADE_DURATION = 18; // frames for fade in / fade out

const FadeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - FADE_DURATION, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const opacity = Math.min(fadeIn, fadeOut);

  return (
    <AbsoluteFill style={{ opacity }}>
      {children}
    </AbsoluteFill>
  );
};

export const ByteDanceIntro: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "#000000" }}>
      <Sequence from={0} durationInFrames={120}>
        <FadeWrapper>
          <Scene1Logo />
        </FadeWrapper>
      </Sequence>

      <Sequence from={120} durationInFrames={120}>
        <FadeWrapper>
          <Scene2Stats />
        </FadeWrapper>
      </Sequence>

      <Sequence from={240} durationInFrames={120}>
        <FadeWrapper>
          <Scene3Products />
        </FadeWrapper>
      </Sequence>

      <Sequence from={360} durationInFrames={120}>
        <FadeWrapper>
          <Scene4Mission />
        </FadeWrapper>
      </Sequence>

      <Sequence from={480} durationInFrames={120}>
        <FadeWrapper>
          <Scene5Outro />
        </FadeWrapper>
      </Sequence>
    </AbsoluteFill>
  );
};
