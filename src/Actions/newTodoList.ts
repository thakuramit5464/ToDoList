var self;
var taskList = ["hello", "hi", "ho", "when"];
var position = 0;
export class NewTodoList {
  public mainDiv;
  public listDiv;
  public addNewTask;
  public addNewTaskButton;
  public taskListDiv;
  public task;
  public deleteButton;
  constructor(mainDiv) {
    self = this;
    this.mainDiv = mainDiv;
    this.createList();
  }
  createList() {
    position = position * taskList.length + 60;
    console.log("createing list");
    this.listDiv = document.createElement("div");
    this.listDiv.id = "listDiv3Id";
    this.mainDiv.appendChild(this.listDiv);
    this.addNewTask = document.createElement("input");
    this.addNewTask.placeholder = "addNew Task";
    this.addNewTask.id = "addNewTask4Id";
    this.listDiv.appendChild(this.addNewTask);
    this.addNewTaskButton = document.createElement("button");
    this.addNewTaskButton.id = "addNewTaskButton4Id";
    this.listDiv.appendChild(this.addNewTaskButton);
    this.createTaskList();
  }
  createTaskList() {
    this.taskListDiv = document.createElement("div");
    this.taskListDiv.id = "taskListDiv4Id";
    this.taskListDiv.style.height = "" + position + "vh";
    this.listDiv.appendChild(this.taskListDiv);
    for (let i = 1; i <= taskList.length; i++) {
      this.createTasks(taskList[i - 1], i);
    }
  }
  createTasks(task, i) {
    this.task = document.createElement("div");
    this.task.id = "taskid" + i;
    this.task.className = "task4ClassName";
    this.task.innerHTML = task;
    this.taskListDiv.appendChild(this.task);
    this.deleteButton = document.createElement("button");
    this.deleteButton.className = "deleteButton4ClassName";
    this.task.appendChild(this.deleteButton);
  }
}
