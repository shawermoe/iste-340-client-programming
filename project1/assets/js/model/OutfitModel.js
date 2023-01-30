/**
 * Represents the application model. The model contains the data, the information
 * regarding the outfit such as: wear_type and color. The model can obtain data either
 * from a database or files, which could be located locally or externally. The
 * model does not talk directly to a view, instead is made available to a controller
 * which accesses it when needed.
 */
export class OutfitModel {
  /**
   * Creates an object representing the outfit model.
   *
   * @param {String} wear_type - The wear_type of the outfit.
   * @param {String} color - The color of the outfit.
   * @param {String} outfit_combo - The choice of clothes for the outfit itself.
   * @returns {OutfitModel} The object representing the outfit model.
   */
  constructor(wear_type, outfit_combo, color) {
    this._wear_type = wear_type;
    this._outfit_combo = outfit_combo;
    this._color = color;
  }

  get wear_type() {
    return this._wear_type;
  }

  get color() {
    return this._color;
  }

  get outfit_combo() {
    return this._outfit_combo;
  }

  set outfit_combo(outfit_combo) {
    this._outfit_combo = outfit_combo;
  }

  set wear_type(wear_type) {
    this._wear_type = wear_type;
  }

  set color(color) {
    this._color = color;
  }
}
