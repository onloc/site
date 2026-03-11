import { SocialIcon, StyledSocialBar } from "./styles";

import YoutubeIcon from "../../assets/youtube.png";
import FacebookIcon from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedInIcon from "../../assets/linkedin.png";

function SocialBar() {
    return (
        <StyledSocialBar>
          Redes sociais
          <SocialIcon src={YoutubeIcon} alt="YouTube" />
          <SocialIcon src={FacebookIcon} alt="Facebook" />
          <SocialIcon src={InstagramIcon} alt="Instagram" />
          <SocialIcon src={LinkedInIcon} alt="LinkedIn" />
        </StyledSocialBar>
    );
}

export default SocialBar;