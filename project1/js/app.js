import { OutfitView } from "./view/OutfitView.js";
import { OutfitController } from "./controller/OutfitController.js";
import { OutfitModel } from "./model/OutfitModel.js";

const app = new OutfitController(new OutfitModel(), new OutfitView());
