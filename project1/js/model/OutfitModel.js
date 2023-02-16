/**
 * Represents the application model. The model contains the data, the information
 * regarding the outfit such as: type and color. The model can obtain data either
 * from a database or files, which could be located locally or externally. The
 * model does not talk directly to a view, instead is made available to a controller
 * which accesses it when needed.
 */
import { selectData } from "../store/selectData.js";

export class OutfitModel {
  static store = selectData; // external resource

  /**
   * Creates an object representing the outfit model.
   *
   * @param {String} type - The wear type of the outfit.
   * @param {String} clothes - The clothes of the outfit.
   * @param {String} color - The color of the outfit.
   * @returns {OutfitModel} The object representing the outfit model.
   */
  constructor() {
    this.type = "undefined";
    this.clothes = "undefined";
    this.color = "undefined";
  }

  getProperties() {
    return Object.keys(this);
  }

  getOptions(selectID) {
    // 1. extract the data from the external resource (AnimalModel.store).
    let options; // a JS object
    switch (selectID) {
      case "type":
        options = Object.keys(OutfitModel.store);
        // ["casual","sporty"]
        break;
      case "clothes":
        options = Object.keys(OutfitModel.store[this.type]);
        // ["shirt", "pants"]} OR ["dress", "skirt"]
        break;
      case "color":
        options = Object.keys(OutfitModel.store[this.type][this.clothes]);
        // ["grey", "red"]} OR ["brown", "blue]
        break;
    }

    // 2. return select options
    return options;
  }

  resetNextProperties(property) {
    let properties = Object.keys(this);
    let index = properties.indexOf(property);
    while (++index < properties.length) {
      this[properties[index]] = "undefined";
    }
  }

  /**
   * Stores animal data accross browser sessions. Window.localStorage is used
   * to store the model as a JSON string under the key 'animal'.
   *
   * @returns {undefined}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON}
   */
  persist() {
    localStorage.setItem("outfit", JSON.stringify(this));

    //Let's test if this is stored. Delete this from your project:
    //        let animal = localStorage.getItem('animal');
    //        console.log(animal === null ? 'No animal found in local storage' : JSON.parse(animal));
    //        console.log(animal === null ? 'No animal found in local storage' : animal);
  }
}
