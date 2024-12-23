import {email} from "../../../../email.js";
import {Address, EmailLink, EmailWrapper, LetsTalk, Paragraph, Wrapper} from "./styled.js";
import githubIcon from "../Footer/SocialIcons/Github_black.png";
import linkedinIcon from "../Footer/SocialIcons/LinkedIN_black.png";

export const Footer = () => {
  return (
    <Wrapper>
      <LetsTalk>Let's talk!</LetsTalk>
      <Address>
        <EmailWrapper>
          <EmailLink href={`mailto:${email}`}> {email} </EmailLink>
        </EmailWrapper>
        <Paragraph>
          I'm always open for new opportunities along with new projects.&nbsp; If you have a website, dashboard or
          application that you would like to see on my portfolio or review, please don't hesitate to contact me.👍
        </Paragraph>

        <a href={"https://github.com/tomecky1"}
           target={"_blank"} rel={"referrer"}><img src={githubIcon} alt={"Github"}/></a> <a
        href={"https://www.linkedin.com/in/tomasz-piotrowski-50821a331/?trk=opento_sprofile_details"} target={"_blank"}
        rel={"referrer"}><img
        src={linkedinIcon} alt={"Linkedin"}/></a>
      </Address>
    </Wrapper>
  )
}
