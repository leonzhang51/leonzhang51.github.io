import ProjectTemplate from "./ProjectTemplate";
import { projectsData } from "../../utils/projectsData";

function ReservationProject() {
  const project = projectsData.find((p) => p.id === "reservation");

  return <ProjectTemplate project={project} />;
}

export default ReservationProject;
