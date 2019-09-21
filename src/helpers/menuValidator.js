/**
   * @description - This method handles validation of menu
   * @static
   */
class MenuValidator {
  /**
   * @method validateMenuId
   * @static
   * @description This sanitizes auth data
   * @param {object} request request object
   * @param {object} response response object
   * @param {object} next next function called
   * @returns {Object} Object
   */
  static validateMenuId(request, response, next) {
    request.checkParams('menuId', 'menu id must not be empty').notEmpty();
    request.checkParams('menuId', 'menu id must be a number').isInt();

    const errors = request.validationErrors();
    if (errors) {
      return response.status(400).json({
        status: 'failure',
        message: 'Menu validation not successful',
        data: errors
      });
    }
    return next();
  }
}

const { validateMenuId } = MenuValidator;

export default validateMenuId;
