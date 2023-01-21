import { AddNewProject } from "../Actions/addNewProject.js";
// import { NewTodoList } from "../Actions/newTodoList.js";
import { ViewProject } from "../Actions/viewProjects.js";
var taskList;
var self;
// console.log(taskList);
export class ProjectSection {
  public mainDiv: any;
  public ContentSectionDiv: any;
  public viewProjectButton: any;
  public addProjectButton: any;
  public todoListDiv: any;
  public addNewTask: any;
  public addNewTaskButton: any;
  public listDiv: any;
  public task: any;
  public deleteTaskButton: any;
  public taskCheckedButton: any;

  constructor(mainDiv) {
    taskList = JSON.parse(localStorage.getItem("checkList")) || [];
    self = this;
    this.mainDiv = mainDiv;
    this.createContentSection();
  }
  createContentSection() {
    this.ContentSectionDiv = document.createElement("div");
    this.ContentSectionDiv.id = "contentSectionDivId";
    this.mainDiv.appendChild(this.ContentSectionDiv);
    this.createTodoList();
    this.addProjectSection();
    this.viewProjectSection();
  }
  createTodoList() {
    this.todoListDiv = document.createElement("div");
    this.todoListDiv.id = "todoListDiv3ID";
    this.ContentSectionDiv.appendChild(this.todoListDiv);
    this.addNewTask = document.createElement("input");
    this.addNewTask.placeholder = "Add New Task";
    this.addNewTask.id = "addNewTask4Id";
    this.todoListDiv.appendChild(this.addNewTask);
    this.addNewTaskButton = document.createElement("button");
    this.addNewTaskButton.id = "addNewTaskButton4Id";
    this.addNewTaskButton.innerHTML = "Add Task";
    this.addNewTaskButton.onclick = function () {
      if (self.addNewTask.value.length != 0) {
        taskList.push(self.addNewTask.value);
        var data = JSON.stringify(taskList);
        self.addTask(self.addNewTask.value, taskList.length);
        localStorage.setItem("checkList", data);
        self.addNewTask.value = "";
      }
    };
    this.todoListDiv.appendChild(this.addNewTaskButton);
    this.listDiv = document.createElement("div");
    this.listDiv.id = "listDiv4ID";
    this.todoListDiv.appendChild(this.listDiv);
    if (taskList) {
      this.createList();
    }
  }
  createList() {
    for (let i = 1; i <= taskList.length; i++) {
      this.addTask(taskList[i - 1], i);
    }
  }
  addTask(task, i) {
    this.task = document.createElement("div");
    this.task.innerHTML = task;
    this.task.className = "taskClassName4";
    this.task.id = "task3" + i;
    this.listDiv.appendChild(this.task);
    this.deleteTaskButton = document.createElement("button");
    this.deleteTaskButton.id = i;
    this.deleteTaskButton.className = "deleteTaskButton4ClassName";
    this.deleteTaskButton.addEventListener("click", self.deleteTask);
    this.deleteTaskButton.innerHTML = "🚮";
    this.taskCheckedButton = document.createElement("button");
    this.taskCheckedButton.innerHTML = "✓";
    this.taskCheckedButton.className = "taskCheckedButtonClass";
    this.taskCheckedButton.addEventListener("click", self.taskDone);
    this.taskCheckedButton.id = i;
    this.task.appendChild(this.taskCheckedButton);
    this.task.appendChild(this.deleteTaskButton);
  }
  taskDone = (e) => {
    var id = "task3" + e.target.id;
    document.getElementById(id).style.textDecoration = "line-through";
  };
  deleteTask = (e) => {
    var id = "task3" + e.target.id;
    for (let i = e.target.id - 1; i < taskList.length - 1; i++) {
      var divId = "listDiv" + i;
      taskList[i] = taskList[i + 1];
      // document.getElementById(divId).style.top = "" + position + "vh";
    }
    taskList.length = taskList.length - 1;
    var data = JSON.stringify(taskList);
    localStorage.setItem("checkList", data);
    document.getElementById(id).remove();
  };
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
