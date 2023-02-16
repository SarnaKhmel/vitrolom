import LogoBox from "./LogoBox/LogoBox";
import HeaderBar from "./HeaderBar/HeaderBar";
import { Box } from "./Header.styles";

const Header = () => {
  return (
    <Box>
      <LogoBox />
      <HeaderBar />
    </Box>
  );
};

export default Header;
