import { AddNewProject } from "../Actions/addNewProject.js";
import { ViewProject } from "../Actions/viewProjects.js";
import { LoginSignup } from "../sections/login-signup.js";
// import { CreateDiv } from "../Elements/createDiv.js";
// import { DeleteDiv } from "../Elements/deleteDiv.js";
import { ProjectDetails } from "../sections/projectDetails.js";
import { ProjectSection } from "../sections/projectSection.js";
var divId = "startSceneDiv";
export class StartScene {
  public mainDiv: any;
  public scene: any;

  constructor(mainDiv) {
    console.log("<<<<<<<<<<<<<<<<<<<<<<<");
    this.mainDiv = mainDiv;
    this.scene = new LoginSignup(mainDiv);
  }
}
