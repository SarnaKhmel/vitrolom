import {
  LogoBlock,
  LogoImage,
  SocialBlock,
  SocialLink,
  SocialImg,
} from "./LogoBox.styles";
import logo from "./logoImg/LOGO.svg";
import fb from "./logoImg/facebook.svg";
import inst from "./logoImg/instagram.svg";
import yt from "./logoImg/youtube.svg";
import tel from "./logoImg/telegram.svg";

const LogoBox = () => {
  return (
    <LogoBlock>
      <LogoImage src={logo} />
      <SocialBlock>
        <SocialLink href="https://twitter.com/">
          <SocialImg src={fb} />
        </SocialLink>
        <SocialLink href="https://github.com/">
          <SocialImg src={inst} />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com">
          <SocialImg src={yt} />
        </SocialLink>
        <SocialLink href="https://www.youtube.com">
          <SocialImg src={tel} />
        </SocialLink>
      </SocialBlock>
    </LogoBlock>
  );
};

export default LogoBox;
