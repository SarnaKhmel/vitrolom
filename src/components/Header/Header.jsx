import LogoBox from "./LogoBox/LogoBox";
import HeaderBar from "./HeaderBar/HeaderBar";
import { Box } from "./Header.styles";

const Header = () => {
  return (
    <Box>
      <div>
        <LogoBox />
      </div>
      <div>
        <HeaderBar />
      </div>
    </Box>
  );
};

export default Header;
