/**
 * Class that represents the application view. The view displays information
 * contained in the model: type & color. The view does not obtain the information
 * directly from the model, it uses the controller as a mediator which instructs
 * it when and what to display.
 *
 * The view holds references to all UI elements with which the user interacts with
 * AND for which the event-handling mechanism needs to be implemented.
 */
export class OutfitView {
  constructor() {
    this.outfitForm = document.querySelector("#form-outfit");
    this.outfitDiv = document.querySelector("#div-outfit");
  }

  /**
   * Renders the image based on the model data.
   */
  renderOutfit(wearType, clothes, color) {
    let imgSrc = `./media/outfits/${wearType}-${clothes}-${color}.jpeg`;
    this.outfitDiv.innerHTML = `<img src='${imgSrc}' alt='outfit'>`;
  }
}
