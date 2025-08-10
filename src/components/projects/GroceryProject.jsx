import ProjectTemplate from "./ProjectTemplate";
import { projectsData } from "../../utils/projectsData";

function GroceryProject() {
  const project = projectsData.find(p => p.id === "grocery");
  
  return <ProjectTemplate project={project} />;
}

export default GroceryProject;
