import GithubIcon from "./Github_black.svg";
import LinkedInIcon from "./LinkedIN_black.svg";
import {styleIcon} from "./styled.js";

export const socials = [
  {
    name: "Github",
    url: "https://github.com/tomecky1",
    Icon: styleIcon(GithubIcon, "Github"),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tomasz-piotrowski-50821a331",
    Icon: styleIcon(LinkedInIcon, "LinkedIn"),
  },
];