/**
 * Represents the application model. The model contains the data, the information
 * regarding the outfit such as: type and color. The model can obtain data either
 * from a database or files, which could be located locally or externally. The
 * model does not talk directly to a view, instead is made available to a controller
 * which accesses it when needed.
 */
class OutfitModel {
  /**
   * Creates an object representing the outfit model.
   *
   * @param {String} wearType - The wear type of the outfit.
   * @param {String} clothes - The clothes of the outfit.
   * @param {String} color - The color of the outfit.
   * @returns {OutfitModel} The object representing the outfit model.
   */
  constructor(wearType, clothes, color) {
    this._wearType = wearType;
    this._clothes = clothes;
    this._color = color;
  }

  get wearType() {
    return this._wearType;
  }

  get clothes() {
    return this._clothes;
  }

  get color() {
    return this._color;
  }

  set wearType(wearType) {
    this._wearType = wearType;
    this._clothes = "undefined";
    this._color = "undefined";
  }

  set clothes(clothes) {
    this._clothes = clothes;
    this._color = "undefined";
  }

  set color(color) {
    this._color = color;
  }
}
