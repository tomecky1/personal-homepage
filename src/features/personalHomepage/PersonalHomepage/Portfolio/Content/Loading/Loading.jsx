import {StyledSpinner, Wrapper} from "./styled.js";
import spinner from './icon-spinner.svg';

export const Loading = () => (
  <Wrapper>
    Please wait until the portfolio is loaded...
    <StyledSpinner src={spinner} alt={"Loading"}/>
  </Wrapper>
);