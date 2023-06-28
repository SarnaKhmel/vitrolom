import { Block, Background, Circle, Circle2 } from "./MainBlock.style";

import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";
import Animation from "./Animation/Animation";

const MainBlock = () => {
  return (
    <>
      <Block>
        <Circle></Circle>
        <Circle2></Circle2>
        <Background>
          <ButtonsBlock />
          <Animation />
        </Background>
      </Block>
    </>
  );
};

export default MainBlock;
