import {email} from "../../../../email.js";
import {Address, EmailLink, EmailWrapper, LetsTalk, Link, Paragraph, SocialIcons, Wrapper,} from "./styled.js";
import github from "../Footer/SocialIcons/Github_black.svg"
import linkedin from "../Footer/SocialIcons/LinkedIN_black.svg"

export const Footer = () => {
  return (
    <Wrapper>
      <LetsTalk>Let's talk!</LetsTalk>
      <Address>
        <EmailWrapper>
          <EmailLink href={`mailto:${email}`}> {email} </EmailLink>
        </EmailWrapper>
        <Paragraph>
          I'm always open for new opportunities along with new projects.&nbsp;
          If you have a website, dashboard or application that you would like to
          see on my portfolio or review, please don't hesitate to contact me.👍
        </Paragraph>
        <SocialIcons>
          <Link href={"https://github.com/tomecky1"} rel={"noreferrer"} target="_blank"> <img
            src={github} alt={"Github"}/></Link>
          <Link href={"https://www.linkedin.com/in/tomasz-piotrowski-50821a331"} rel={"noreferrer"} target="_blank"><img
            src={linkedin} alt={"LinkedIn"}/></Link>
        </SocialIcons>

      </Address>
    </Wrapper>
  );
};
