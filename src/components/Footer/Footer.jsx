import * as Style from "./Footer.styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Style.Container>
      <h1>CONTATO</h1>
      <Style.SocialMedias>
        <a href="https://www.linkedin.com/in/andersonheidrich/" target="_blank">
          <LinkedInIcon className="media-icon" />
        </a>
        <a href="https://github.com/andersonheidrich/" target="_blank">
          <GitHubIcon className="media-icon" />
        </a>
      </Style.SocialMedias>
    </Style.Container>
  );
};

export default Footer;
