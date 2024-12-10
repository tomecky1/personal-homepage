import {email} from "../../../../email.js";
import {Address, EmailLink, EmailWrapper, LetsTalk, Paragraph, Wrapper} from "./styled.js";

export const Footer = () => {
  return (
    <Wrapper>
      <LetsTalk>Lets' talk!</LetsTalk>
      <Address>
        <EmailWrapper>
          <EmailLink href={`mailto:${email}`}> {email} </EmailLink>
        </EmailWrapper>
        <Paragraph>
          I'm always open for new opportunities along with new projects.&nbsp; If you have a website, dashboard or
          application that you would like to see on my portfolio, please don't hesitate to contact me.
        </Paragraph>
      </Address>
    </Wrapper>
  )
}
