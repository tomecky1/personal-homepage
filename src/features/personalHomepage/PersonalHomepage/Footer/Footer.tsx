import {email} from "../../../../email.js";
// @ts-ignore
import GithubIcon from "../Footer/SocialIcons/Github_black.svg";
// @ts-ignore
import linkedin from "../Footer/SocialIcons/LinkedIN_black.svg";
import {
  Address,
  EmailLink,
  EmailWrapper,
  LetsTalk,
  Link,
  Paragraph,
  SocialIcons,
  StyledSocialImage,
  Wrapper,
} from "./styled.js";

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
                    <Link href={"https://github.com/tomecky1"} rel={"noreferrer"} target="_blank">
                        <StyledSocialImage src={GithubIcon} alt={"GitHub"}/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/tomasz-piotrowski-50821a331"} rel={"noreferrer"}
                          target="_blank">
                        <StyledSocialImage src={linkedin} alt={"LinkedIn"}/>
                    </Link>
                </SocialIcons>
            </Address>
        </Wrapper>
    );
};
