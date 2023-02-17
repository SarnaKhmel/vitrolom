import { Background, Circle, Circle2 } from "./MainBlock.style";

import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";
const MainBlock = () => {
  return (
    <>
      <Circle></Circle>
      <Circle2></Circle2>
      <Background>
        <ButtonsBlock />
      </Background>
    </>
  );
};

export default MainBlock;
