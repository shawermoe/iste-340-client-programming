export class FormModel {
  constructor() {
    this.name = "";
    this.email = "";
    this.init();
  }

  /**
   * Initializes this object properties. New properties are added based on the
   * data loaded from  localStorage.
   *
   * @returns {undefined}
   */
  init() {
    let outfit = JSON.parse(localStorage.getItem("outfit"));
    for (let property in outfit) {
      this[property] = outfit[property];
    }
  }

  /**
   * Converts this object to a data object for the view. We could have also
   * returned Object.entries(this), but in this case, we would be dealing
   * with an array of arrays.
   *
   * @returns {Object} a simple data object with inputs for the form view
   */
  getInputData() {
    // 1. stringify this object to get rid of this object methods
    let inputsString = JSON.stringify(this);
    // 2. return as plain JS data object
    return JSON.parse(inputsString);
  }

  /**
   * Stores outfit data accross browser sessions. Window.localStorage is used
   * to store the model as a JSON string under the key 'outfit'.
   *
   * @returns {undefined}
   */
  persist() {
    localStorage.setItem("outfit", JSON.stringify(this));
  }
}
