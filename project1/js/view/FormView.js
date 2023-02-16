/**
 * Represents the View. View holds refences to all GUI elements user interacts with.
 * The View exposes methods to interact with the view elements.
 */
export class FormView {
  constructor() {
    this.inputs = null;
    this.form = document.querySelector("#form-outfit-name");
  }

  /**
   * Creates form inputs based on the injected JS object with data.
   *
   * @param {Object} dataObject - JS object containing input data for this form
   * @returns {undefined}
   */
  createInputs(dataObject) {
    for (let property in dataObject) {
      this.form.querySelector(".field-container").insertAdjacentHTML(
        "beforeend",
        `<div class='field'>
        <label>${property.toUpperCase()} </label>
         <input name='${property}' 
                id='form--${property}'
                class='form-input'
                value='${dataObject[property]}' 
                type='text' size='30'/>
                </div>`
      );
    }
    this.inputs = this.form.querySelectorAll("input[type=text]");
  }
}
