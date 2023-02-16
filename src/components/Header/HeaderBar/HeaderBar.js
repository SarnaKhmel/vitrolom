import { Bar, BarBtn, BarBtnHelp } from "./Bar.styles";

const HeaderBar = () => {
  return (
    <Bar>
      <BarBtn>Наші проєкти</BarBtn>
      <BarBtn>Звітність </BarBtn>
      <BarBtn>Контакти</BarBtn>
      <BarBtnHelp>Наші проєкти</BarBtnHelp>
    </Bar>
  );
};
export default HeaderBar;
