// @ts-ignore
import tomekPiotrowskiProfile from "../../../../assets/images/portrait.jpg";
import {
  Avatar,
  ButtonIcon,
  Name,
  StyledButtonLink,
  Summary,
  ThisIs,
  Wrapper,
} from "./styled.js";
// @ts-ignore
import message from "../../../../assets/images/Message.png";
import { email } from "../../../../email.js";

export const MainInformation = () => (
  <Wrapper>
    <Avatar src={tomekPiotrowskiProfile} alt={"Tomek Piotrowski"} />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Tomasz Piotrowski</Name>
      <Summary>
        🦫 💻 Hello guys I'm a passionate frontend developer actually looking
        for new jobs opportunities. Also I used to work for a big company in
        Poland as an electronic medical documentation archivist for several
        years. Not much interesting, if you ask me. So I'm glad now I can be
        part of this cool community. Wish you best luck and cheers. 🎸🎸🎸
      </Summary>
      <StyledButtonLink href={`mailto: ${email}`} title={email}>
        <ButtonIcon src={message} alt={"LetterIcon"} />
        Hire me
      </StyledButtonLink>
    </div>
  </Wrapper>
);
