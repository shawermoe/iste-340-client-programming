import { OutfitView } from "./view/OutfitView.js";
import { OutfitController } from "./controller/OutfitController.js";
import { OutfitModel } from "./model/OutfitModel.js";

import { FormView } from "./view/FormView.js";
import { FormController } from "./controller/FormController.js";
import { FormModel } from "./model/FormModel.js";

class App {
  constructor() {
    /*
     * Find which page is requested. The window.location.href is used to get
     * the url. Then, we extract the page name from the url using a regular
     * expression. The string's match() method retrieves the result of
     * matching a string against a regular expression. Return value is an
     * Array whose contents depend on the presence or absence of the global
     * (g) flag, or null if no matches are found.
     */
    const url = window.location.href; // e.g. http://localhost:8383/form.html
    const page = url.match(/[a-z]+.html/)[0]; // match returns an array of matches

    switch (page) {
      case "index.html":
        new OutfitController(new OutfitModel(), new OutfitView());
        break;
      case "form.html":
        new FormController(new FormModel(), new FormView());
        break;
    }
  }
}

const app = new App();
