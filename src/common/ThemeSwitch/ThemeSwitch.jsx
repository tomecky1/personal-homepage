import {selectIsDarkTheme, toggleTheme} from "../themeSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, IconWrapper, Text, Wrapper} from "./styled.js";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>Dark mode {isDarkTheme ? "on" : "off"} </Text>
        <Box>
          <IconWrapper moveToRight={isDarkTheme}>

          </IconWrapper>
        </Box>
      </Button>
    </Wrapper>
  );
};