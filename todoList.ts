// import { LevelSelectionScreen } from "./src/scenes/level-selection-scene.js";
// import { getData } from "./src/data/api-data.js";
// import { DataModal } from "./src/data/data-modal.js";
import { StartScene } from "./src/Components/scenes/startScene.js";
// import { CanvasStack } from "./src/utility/canvas-stack.js";
// import { firebaseConfig } from "./src/firebase/firebase_config.js";
// import {
//   getDatafromStorage,
//   ProfileData,
//   setDataToStorage,
// } from "./src/data/profile-data.js";
// import { PWAInstallStatus } from "./src/common/common.js";
// import { Workbox } from "workbox-window";
// import { lang } from "./global-variables.js";
// import { StartScene } from "./src/Components/sections/projectSection.js";
import { Hello } from "./hello.js";
import { LoginSignup } from "./src/Components/sections/login-signup.js";
declare const window: any;
declare const app: any;
declare global {
  var aboutCompany: string;
  var descriptionText: string;
}

window.addEventListener("load", async function () {
  this.mainDiv = document.getElementById("main");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", function (event) {
      if (event.data.msg == "Update Found") {
        let text = "Update Found\nPress ok to update.";
        if (confirm(text) == true) {
          window.location.reload();
        } else {
          text = "You canceled!";
        }
      }
    });

  //   // let wb = new Workbox("./sw.js");
  //   // wb.register();
  // }

  // if (navigator.onLine) {
  //   this.app = firebase.initializeApp(firebaseConfig);
  //   this.analytics = firebase.analytics(this.app);
  // }
  // const canvas: any = <HTMLElement>document.getElementById("canvas");
  // canvas.height = window.innerHeight;
  // canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;

  {
    /* let data = await getData(); */
  }
  {
    /* let d = new DataModal(
    data.OtherAudios,
    data.Levels,
    data.FeedbackTexts,
    data.RightToLeft,
    data.FeedbackAudios
  ); */
  }

  // globalThis.aboutCompany = data.aboutCompany;
  // globalThis.descriptionText = data.descriptionText;

  // window.addEventListener("resize", async () => {
  //   // canvas.height = window.innerHeight;
  //   // canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;

  //   new StartScene(this.mainDiv);
  //   // this.startScene = new StartScene(canvas, d, this.analytics);
  // });
  {
    this.scene= new StartScene(this.mainDiv);
    // new LoginSignup(this.mainDiv);
    /* this.startScene = new StartScene(canvas, d, this.analytics); */
  }
});
