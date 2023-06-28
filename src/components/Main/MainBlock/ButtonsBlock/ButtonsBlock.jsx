import {
  Block,
  Title,
  BtnBlock,
  Btn1,
  Btn2,
  Block2,
  Title2,
  Block2Img,
} from "./ButtonsBlock.style";

import question from "./question.svg";

const ButtonsBlock = () => {
  return (
    <>
      <Block>
        <Title>
          Omnium malorum origo otium <br />
          Бездіяльність – початок усіх бід
        </Title>
        <BtnBlock>
          <Btn1>заповнити анкету</Btn1>
          <Btn2>отримати допомогу</Btn2>
        </BtnBlock>

        <Block2>
          <Title2>Долучайся до нас!</Title2>
          <Block2Img src={question}></Block2Img>
        </Block2>
      </Block>
    </>
  );
};

export default ButtonsBlock;
