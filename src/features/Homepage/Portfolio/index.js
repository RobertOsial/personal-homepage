
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../hompageSlice";
import { Projects } from "./Projects";
import { githubUsername } from "./githubaUsername";
import { Header, Icon, MyRecentProjects } from "./styled";
import { SubHeader } from "../SubHeader";

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
        <SubHeader>Portfolio</SubHeader>
        <MyRecentProjects>My recent projects</MyRecentProjects>
      </Header>
      <Projects
        projects={repositories}
        status={repositoriesStatus}
      />
    </section>
  );
};