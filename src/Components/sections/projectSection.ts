import { AddNewProject } from "../Actions/addNewProject.js";
import { ViewProject } from "../Actions/viewProjects.js";

var self;
export class ProjectSection {
  public mainDiv: any;
  public ContentSectionDiv: any;
  public viewProjectButton: any;
  public addProjectButton: any;

  constructor(mainDiv) {
    self = this;
    this.mainDiv = mainDiv;
    this.createContentSection();
  }
  createContentSection() {
    this.ContentSectionDiv = document.createElement("div");
    this.ContentSectionDiv.id = "contentSectionDivId";
    this.mainDiv.appendChild(this.ContentSectionDiv);
    this.addProjectSection();
    this.viewProjectSection();
  }
  viewProjectSection() {
    this.viewProjectButton = document.createElement("button");
    this.viewProjectButton.id = "viewProjectButtonId";
    this.viewProjectButton.innerHTML = "View Project's";
    this.ContentSectionDiv.appendChild(this.viewProjectButton);
    this.viewProjectButton.onclick = function () {
      self.ContentSectionDiv.remove();
      new ViewProject(self.mainDiv);
    };
  }
  addProjectSection() {
    this.addProjectButton = document.createElement("button");
    this.addProjectButton.id = "addProjectButtonId";
    this.addProjectButton.innerHTML = "Add Project";
    this.ContentSectionDiv.appendChild(this.addProjectButton);
    this.addProjectButton.onclick = function () {
      self.ContentSectionDiv.remove();
      new AddNewProject(self.mainDiv);
    };
  }
}
