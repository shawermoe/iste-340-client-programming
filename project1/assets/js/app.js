/**
 * This is application's entry point based on the MVC architectural pattern.
 * The controller that represents the brains of the application is being
 * initialized and connects the model and the view.
 *
 * The controller is used to intermediate between the view and the model.
 * The controller monitors user interaction with the view and communicates
 * any changes to the model.
 */

import { OutfitModel } from "./model/OutfitModel.js";
import { OutfitView } from "./view/OutfitView.js";
import { OutfitController } from "./controller/OutfitController.js";

const app = new OutfitController(
  new OutfitModel("casual", "hoodie", "red"),
  new OutfitView()
);
