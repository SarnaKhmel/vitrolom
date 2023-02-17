import {
  Block,
  Title,
  Btn1,
  Btn2,
  Block2,
  Title2,
  Block2Img,
} from "./ButtonsBlock.style";
// import { question } from "./question";

const ButtonsBlock = () => {
  return (
    <>
      <Block>
        <Title>
          Omnium malorum origo otium бездіяльність – початок усіх бід
        </Title>
        <Btn1>заповнити анкету</Btn1>
        <Btn2>отримати допомогу</Btn2>
        <Block2>
          <Title2>Долучайся до нас!</Title2>
          <Block2Img src={""}></Block2Img>
        </Block2>
      </Block>
    </>
  );
};

export default ButtonsBlock;
