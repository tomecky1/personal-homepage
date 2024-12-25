import {useDispatch, useSelector} from "react-redux";
import {fetchRepositories, selectRepositories, selectStatus} from "../../personalHomepageSlice.jsx";
import {useEffect} from "react";
import {githubUsername} from "./githubUsername.js";
import {SubHeader} from "../SubHeader/SubHeader.jsx";
import {Header, MyRecentProjects, Section, StyledGithubIcon} from "./styled.js";
import {Content} from "./Content/Content.jsx";
import githubIcon from "../../../../assets/images/github.png"

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositories = useSelector(selectRepositories);
  const repositoriesStatus = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchRepositories(githubUsername));
  }, [dispatch]);

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