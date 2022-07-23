
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../hompageSlice";
import { Header } from "./Header";
import { Projects } from "./Projects";
import { githubUsername } from "./githubaUsername";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositories = useSelector(selectRepositories);
  const repositoriesStatus = useSelector(selectRepositoriesStatus);

  useEffect(() => {
    dispatch(fetchRepositories(githubUsername))
  }, [dispatch])

  return (
    <section>
      <Header />
      <Projects projects={repositories} repositoriesStatus={repositoriesStatus} />
    </section>
  );
};