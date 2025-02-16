import {ButtonLink} from "../../../ButtonLink/ButtonLink.tsx";
import {githubUsername} from "../../githubUsername.js";
import {Header, Paragraph, Wrapper} from "./styled.js";

export const ErrorBox = () => {
  return (
    <Wrapper>
      <Header>Ooops! Something went&nbsp;wrong...</Header>
      <Paragraph>
        Sorry, but I couldn't load the portfolio.<br/> Please try again later.'
      </Paragraph>
      <ButtonLink href={`https://github.com/${githubUsername}`} target={"_blank"} rel={"noreferrer noopener"}>Go to
        Github</ButtonLink>
    </Wrapper>
  )
};