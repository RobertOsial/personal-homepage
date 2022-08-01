import { Repositories } from "./Repositories";
import { Loading } from "./Loading";
import { ErrorBox } from "./ErrorBox";

export const Projects = ({ projects, status }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loading />

    case "error":
      return <ErrorBox />

    case "success":
      return <Repositories projects={projects} />

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};