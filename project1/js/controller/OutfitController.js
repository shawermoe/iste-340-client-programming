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
export class OutfitController {
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

    // 1. render all selects
    let properties = this.model.getProperties();
    this.view.renderSelects(properties);

    // 2. populate the first select
    let firstSelectID = properties[0];
    this.view.addOptions(firstSelectID, this.model.getOptions(firstSelectID));

    // 3. register one event handler for all select 'change' events
    this.view.selects.forEach((select) => {
      select.addEventListener("change", this.handleSelectChange);
    });

    // 4. register form submit handler
    this.view.outfitForm.addEventListener("submit", this.handleFormSubmit);
  }
  handleSelectChange = (event) => {
    let select = event.target;

    //1. UPDATE MODEL ------------------------------------------------------
    //Once the current model property is update, the other model properties
    //that are defined after the current property, they need to be reset to
    //"undefined".
    this.model[select.id] = select.value;
    this.model.resetNextProperties(select.id);

    //2. UPDATE VIEW (selectsDiv + outfitDiv -------------------------------

    //2.1 Update the selectsDiv - reset next selects & load new options into
    // the next select only if the current selected option is different than
    // '-- Select the ... --', which index is 0
    this.view.resetNextSiblings(select.id);
    let nextSelect = select.nextElementSibling;
    if (select.selectedIndex > 0 && nextSelect) {
      this.view.addOptions(nextSelect.id, this.model.getOptions(nextSelect.id));
    }

    //2.2. Update the outfitDiv
    this.view.renderOutfit();
  };

  handleFormSubmit = (event) => {
    //prevent the default action of a form (prevent submitting it)
    // event.preventDefault();
    this.model.persist();
  };
}
