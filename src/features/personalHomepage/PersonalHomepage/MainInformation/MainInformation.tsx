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
        💻 Hello and welcome. I'm a self-taught frontend web developer actually
        looking for new jobs opportunities that allow me to expand my skillset.
        Also I used to work for a big company as an electronic medical
        documentation archivist for several years. So I'm glad now I can be part
        of the community. Feel free to contact me! 😊
      </Summary>
      <StyledButtonLink href={`mailto: ${email}`} title={email}>
        <ButtonIcon src={message} alt={"LetterIcon"} />
        Say hi!
      </StyledButtonLink>
    </div>
  </Wrapper>
);
