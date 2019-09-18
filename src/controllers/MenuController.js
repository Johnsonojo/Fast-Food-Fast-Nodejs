import models from '../db/models';

const { Menu } = models;

/**
 * @description A class that represents menu
 * @class MenuController
 */
class MenuController {
  /**
   * @description - This method handles the getting of all menu
   * @static
   * @param {object} request - Request sent to the router
   * @param {object} response - Response sent from the controller
   * @returns {object} - object representing response
   * @memberof MenuController
   */

  static async getAllMenu(request, response) {
    const allMenu = await Menu.findAll();
    const menuCount = allMenu.count;

    if (menuCount < 1) {
      response.status(404).json({
        statue: 'Fail',
        message: 'No menu found',
      });
    }
    return response.status(200).json({
      statue: 'Success',
      message: 'All menu fetched successfully',
      allMenu
    });
  }
}

const { getAllMenu } = MenuController;

export default getAllMenu;
