import {fetchRepositories, selectRepositories, selectStatus} from "../../personalHomepageSlice.jsx";
import {useEffect} from "react";
import {githubUsername} from "./githubUsername.js";
import {SubHeader} from "../SubHeader/SubHeader.jsx";
import {Header, MyRecentProjects, Section, StyledGithubIcon} from "./styled.js";
import {Content} from "./Content/Content.jsx";
// @ts-ignore
import githubIcon from "../../../../assets/images/github.png"
import {useAppDispatch, useAppSelector} from "../../../../hooks";

export const Portfolio = () => {
    const dispatch = useAppDispatch();

    const repositories = useAppSelector(selectRepositories);
    const repositoriesStatus = useAppSelector(selectStatus);

    useEffect(() => {
        if (githubUsername) {
            // @ts-ignore
            dispatch(fetchRepositories(githubUsername));
        }
    }, [dispatch, githubUsername]);


    return (
        <Section>
            <Header>
                <StyledGithubIcon src={githubIcon}/>
                <SubHeader>Portfolio</SubHeader>
                <MyRecentProjects>My recent projects</MyRecentProjects>
            </Header>
            <Content status={repositoriesStatus} repositories={repositories}/>
        </Section>
    );
};