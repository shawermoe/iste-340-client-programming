/**
 * Class that represents the application controller. The controller is responsible
 * for accessing data from the model and displaying it on the view. The controller
 * is used to intermediate between the view and the model. It monitors user interactions
 * with the view and communicates any changes to the model. On the other hand,
 * changes (if any) to the model are observed by the controller and subsequently
 * reflected in the view.
 *
 * The controller contains the code that handles different types of events. The
 * controller's methods are event handlers.
 *
 */
class OutfitController {
  /**
   * Creates an object representing the outfit controller.
   *
   * @param {type} model - The model the controller interacts with.
   * @param {type} view - The view the controller interatcs with.
   * @returns {OutfitController} The object representing the outfit controller.
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.outfitForm.addEventListener("submit", (event) => {
      //prevent the default action of a form (prevent submitting it)
      event.preventDefault();
      this.view.renderOutfit(
        this.model.wearType,
        this.model.clothes,
        this.model.color
      );
    });
  }

  handleFormSubmit = (event) => {
    //prevent the default action of a form (prevent submitting it)
    event.preventDefault();
    this.view.renderOutfit(
      this.model.type,
      this.model.clothes,
      this.model.color
    );
  };
}
