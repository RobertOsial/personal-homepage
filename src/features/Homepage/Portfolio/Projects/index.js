import { useEffect, useState } from "react";
import { List } from "./styled";
import { Tile } from "./Tile";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.github.com/users/RobertOsial/repos");
      const data = await response.json();
      setProjects(data);
    })();
  }, []);


  return (
    <List>
      {projects.map((project) =>
        <Tile
          name={project.name}
          description={project.description}
          repoUrl={project.html_url}
          demoUrl={project.homepage}
        />
      )
      }
    </List>
  );
};