import ProjectTemplate from "./ProjectTemplate";
import { projectsData } from "../../utils/projectsData";

function FintechProject() {
  const project = projectsData.find(p => p.id === "fintech");
  
  return <ProjectTemplate project={project} />;
}

export default FintechProject;
