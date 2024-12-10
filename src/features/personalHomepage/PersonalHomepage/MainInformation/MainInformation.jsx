import tomekPiotrowskiProfile from "../../../../assets/images/mojamordaoksy.jpg"
import {Avatar, ButtonIcon, Name, StyledButtonLink, Summary, ThisIs, Wrapper} from "./styled.js";
import message from "../../../../assets/images/Message.png"
import {email} from "../../../../email.js"

export const MainInformation = () => (

  <Wrapper>
    <Avatar src={tomekPiotrowskiProfile} alt={"Tomek Piotrowski"}/>
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Tomek Piotrowski</Name>
      <Summary>
        🦫 💻 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa expedita explicabo impedit
        laborum maxime ratione, voluptas? Asperiores, deserunt mollitia neque quia quidem rerum voluptas voluptatibus?
        Ad aliquam dolores esse inventore libero officiis tempore vitae voluptate!
      </Summary>
      <StyledButtonLink href={`mailto: ${email}`} title={email}>
        <ButtonIcon src={message} alt={"LetterIcon"}/>
        Hire me</StyledButtonLink>
    </div>
  </Wrapper>
);