import { AddNewProject } from "../Actions/addNewProject.js";
import { ViewProject } from "../Actions/viewProjects.js";
import { CreateDiv } from "../Elements/createDiv.js";
import { DeleteDiv } from "../Elements/deleteDiv.js";
import { ProjectDetails } from "../sections/projectDetails.js";
import { ProjectSection } from "../sections/projectSection.js";
var divId = "startSceneDiv";
export class StartScene {
  public mainDiv: any;
  public scene: any;

  constructor(mainDiv) {
    this.mainDiv = mainDiv;
    this.scene = new ProjectSection(mainDiv);
  }
}
