import { SocialIcon, StyledSocialBar } from "./styles";

import YoutubeWhite from "../../assets/youtube.png";
import FacebookWhite from "../../assets/facebook.png";
import InstagramWhite from "../../assets/instagram.png";
import LinkedInWhite from "../../assets/linkedin.png";

import YoutubeBlue from "../../assets/blue-youtube.png";
import FacebookBlue from "../../assets/blue-facebook.png";
import InstagramBlue from "../../assets/blue-instagram.png";
import LinkedInBlue from "../../assets/blue-linkedin.png";

function SocialBar({ color = "white", styleCustom }) {
  const icons =
    color === "blue"
      ? {
          youtube: YoutubeBlue,
          facebook: FacebookBlue,
          instagram: InstagramBlue,
          linkedin: LinkedInBlue,
        }
      : {
          youtube: YoutubeWhite,
          facebook: FacebookWhite,
          instagram: InstagramWhite,
          linkedin: LinkedInWhite,
        };

  return (
    <StyledSocialBar color={color} style={styleCustom}>
      Redes sociais
      <a
        href="https://www.facebook.com/onloc.brasil/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon src={icons.facebook} alt="Facebook" />
      </a>
      <a
        href="https://www.instagram.com/on.loc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon src={icons.instagram} alt="Instagram" />
      </a>
      <a
        href="https://www.linkedin.com/company/on.loc?originalSubdomain=br"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon src={icons.linkedin} alt="LinkedIn" />
      </a>
        <SocialIcon src={icons.youtube} alt="YouTube" />
    </StyledSocialBar>
  );
}

export default SocialBar;
