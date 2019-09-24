import models from '../db/models';

const { Menu } = models;

/**
 * @description A class that represents menu helpers
 * @class MenuHelper
 */
class MenuHelper {
  /**
   * @description - This method is responsible for querying the database for a menu
   * @static
   * @param {string} menuId
   * @returns {object} - object representing response message
   * @memberof MenuHelper
   */
  static async queryOneMenu(menuId) {
    const foundMenu = await Menu.findOne({
      where: {
        id: menuId
      }
    });
    if (foundMenu) {
      return foundMenu;
    }
    return {};
  }
}

const { queryOneMenu } = MenuHelper;

export default queryOneMenu;
