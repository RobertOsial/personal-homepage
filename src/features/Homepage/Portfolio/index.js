
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../hompageSlice";
import { Projects } from "./Projects";
import { githubUsername } from "./githubaUsername";
import { Header, Icon, SubTitle, Title } from "./styled";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositories = useSelector(selectRepositories);
  const repositoriesStatus = useSelector(selectRepositoriesStatus);

  useEffect(() => {
    dispatch(fetchRepositories(githubUsername))
  }, [dispatch])

  return (
    <section>
      <Header>
        <Icon />
        <Title>Portfolio</Title>
        <SubTitle>My recent projects</SubTitle>
      </Header>
      <Projects
        projects={repositories}
        status={repositoriesStatus}
      />
    </section>
  );
};