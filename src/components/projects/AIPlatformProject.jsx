import ProjectTemplate from "./ProjectTemplate";
import { projectsData } from "../../utils/projectsData";

function AIPlatformProject() {
  const project = projectsData.find(p => p.id === "ai-platform");
  
  return <ProjectTemplate project={project} />;
}

export default AIPlatformProject;
