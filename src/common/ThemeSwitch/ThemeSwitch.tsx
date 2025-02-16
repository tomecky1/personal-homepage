import {useDispatch, useSelector} from "react-redux";
import {Box, Button, IconWrapper, StyledSunIcon, Text, Wrapper} from "./styled.js";
import {selectIsDarkTheme, toggleTheme} from "../themeSlice.js";
// @ts-ignore
import SunIcon from "../../assets/images/sun.svg";

export const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectIsDarkTheme) || false;

    return (
        <Wrapper>
            <Button onClick={() => dispatch(toggleTheme())}>
                <Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
                <Box>
                    <IconWrapper moveToRight={isDarkTheme}>
                        <StyledSunIcon src={SunIcon} alt="sun icon"/>
                    </IconWrapper>
                </Box>
            </Button>
        </Wrapper>
    );
};
