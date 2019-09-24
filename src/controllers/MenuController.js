import models from '../db/models';
import errorResponse from '../helpers/errorResponse';

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
    const allMenu = await Menu.findAll({
      attributes: ['id', 'foodName', 'foodPrice', 'foodImage']
    });
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

  /**
   * @description - This method handles the getting of a menu
   * @static
   * @param {object} request - Request sent to the router
   * @param {object} response - Response sent from the controller
   * @returns {object} - object representing response
   * @memberof MenuController
   */

  static async getOneMenu(request, response) {
    const { menuId } = request.params;
    const foundMenu = await Menu.findOne({
      where: { id: menuId },
      attributes: ['id', 'foodName', 'foodPrice', 'foodImage']
    });
    if (foundMenu) {
      return response.status(200).json({
        status: 'Success',
        message: 'Menu fetched successfully',
        foundMenu
      });
    }
    return response.status(404).json({
      statue: 'Fail',
      message: 'Menu not found',
    });
  }


  /**
   * @description - This method handles the posting a menu
   * @static
   * @param {object} request - Request sent to the router
   * @param {object} response - Response sent from the controller
   * @returns {object} - object representing response
   * @memberof MenuController
   */
  static async addOneMenu(request, response) {
    const { foodName, foodPrice, foodImage } = request.body;
    try {
      const newMenu = await Menu.create({
        foodName,
        foodPrice,
        foodImage
      });
      return response.status(201).json({
        status: 'success',
        message: 'Menu added successfully',
        newMenu
      });
    } catch ({ errors: validationErrors }) {
      response.status(400).send(errorResponse([...validationErrors.map((error) => error.message)]));
    }
  }

  /**
   * @description - This method handles the deleting of a menu
   * @static
   * @param {object} request - Request sent to the router
   * @param {object} response - Response sent from the controller
   * @returns {object} - object representing response
   * @memberof MenuController
  */
  static async deleteOneMenu(request, response) {
    const { menuId } = request.params;
    try {
      const menuToDelete = await Menu.destroy({
        where: { id: menuId }
      });
      if (menuToDelete) {
        return response.status(200).json({
          status: 'Success',
          message: 'Menu successfully deleted'
        });
      }
      return response.status(404).json({
        status: 'Fail',
        message: 'Menu not found'
      });
    } catch ({ errors: validationErrors }) {
      response.status(400).send(errorResponse([...validationErrors.map((error) => error.message)]));
    }
  }
}

const {
  getAllMenu, addOneMenu, getOneMenu, deleteOneMenu
} = MenuController;

export {
  getAllMenu, addOneMenu, getOneMenu, deleteOneMenu
};
