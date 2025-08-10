import ProjectTemplate from "./ProjectTemplate";
import { projectsData } from "../../utils/projectsData";

function TravelAfricaProject() {
  const project = projectsData.find(p => p.id === "travel-africa");
  
  return <ProjectTemplate project={project} />;
}

export default TravelAfricaProject;
