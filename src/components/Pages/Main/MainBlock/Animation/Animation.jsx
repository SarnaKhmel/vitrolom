import { AnimationBlock, MainAminmation, Amin } from "./Animation.styles";

import animation from "./animation.svg";
const Animation = () => {
  return (
    <>
      <AnimationBlock>
        <MainAminmation>
          <Amin src={animation}></Amin>
        </MainAminmation>
      </AnimationBlock>
    </>
  );
};

export default Animation;
