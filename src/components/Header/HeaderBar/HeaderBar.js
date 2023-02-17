import {
  Bar,
  BarBtn,
  BarBtnHelp,
  BarMobile,
  BarImage,
  BarInput,
  BarLabel,
} from "./Bar.styles";
import menu from "./menu.svg";
const HeaderBar = () => {
  return (
    <>
      {/* <BarLabel for="toggle">
        <BarImage src={menu}></BarImage>
      </BarLabel> */}
      <Bar>
        <BarBtn>Наші проєкти</BarBtn>
        <BarBtn>Звітність</BarBtn>
        <BarBtn>Контакти</BarBtn>
        <BarBtnHelp>Підтримати</BarBtnHelp>
      </Bar>

      {/* <BarInput type="checkbox" id="toggle" name="toggle"></BarInput> */}
      {/* <BarImage src={menu}></BarImage> */}

      <BarMobile>
        <BarBtn>Наші проєкти mob</BarBtn>
        <BarBtn>Звітність mob</BarBtn>
        <BarBtn>Контакти mob</BarBtn>
        <BarBtnHelp>Підтримати mob</BarBtnHelp>
      </BarMobile>
    </>
  );
};
export default HeaderBar;
