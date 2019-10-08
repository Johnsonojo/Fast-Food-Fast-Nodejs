/**
 * @description class that validates inputs for user profile
 * @class ProfileInputValidator
 */
class ProfileInputValidator {
  /**
   * @description - This method is responsible for checking the image format
   * @static
   * @param {object} request - Request sent to the router
   * @param {object} response - Response sent from the controller
   * @param {object} next - callback function to transfer to the next method
   * @returns {object} - object representing response message
   * @memberof ProfileInputValidator
   */
  static async checkImageUrl(request, response, next) {
    let { image } = request.body;
    image = image.trim();
    const errors = [];
    const imageRegex = /(https?:\/\/.*\.(?:png|jpg|JPEG|JPG|GIF))/i;
    if (!imageRegex.test(image)) {
      const error = {
        message: 'please enter a valid image URL'
      };
      errors.push(error);
      return response.status(400).json({
        errors: { body: errors.map((err) => err.message) }
      });
    }
    next();
  }

  /**
   * @description - This method is responsible for checking if the request fields are undefined
   * @static
   * @param {object} request - Request sent to the router
   * @param {object} response - Response sent from the controller
   * @param {object} next - callback function to transfer to the next method
   * @returns {object} - object representing response message
   * @memberof ProfileInputValidator
   */
  static async checkUndefined(request, response, next) {
    const {
      username, address, image, phoneNumber
    } = request.body;

    const errors = [];
    if (username === undefined) {
      const error = {
        message: 'please add a username'
      };
      errors.push(error);
    }
    if (address === undefined) {
      const error = {
        message: 'please add an address'
      };
      errors.push(error);
    }
    if (image === undefined) {
      const error = {
        message: 'please add an image field'
      };
      errors.push(error);
    }
    if (phoneNumber === undefined) {
      const error = {
        message: 'please add a phoneNumber field'
      };
      errors.push(error);
    }
    if (errors.length > 0) {
      return response.status(400).json({
        errors: { body: errors.map((error) => error.message) }
      });
    }
    next();
  }

  /**
   * @description - This method is responsible for checking if the request fields are empty
   *
   * @static
   * @param {object} request - Request sent to the router
   * @param {object} response - Response sent from the controller
   * @param {object} next - callback function to transfer to the next method
   * @returns {object} - object representing response message
   * @memberof ProfileInputValidator
   */
  static async checkEmpty(request, response, next) {
    let {
      username, address, image, phoneNumber
    } = request.body;
    const usernameTrim = username.trim();
    const addressTrim = address.trim();
    const imageTrim = image.trim();
    const phoneNumberTrim = phoneNumber.trim();
    const errors = [];
    if (usernameTrim === '') {
      const error = {
        message: 'please enter a username'
      };
      errors.push(error);
    }
    if (addressTrim === '') {
      const error = {
        message: 'please enter an address'
      };
      errors.push(error);
    }
    if (imageTrim === '') {
      const error = {
        message: 'please enter a image url'
      };
      errors.push(error);
    }
    if (phoneNumberTrim === '') {
      const error = {
        message: 'please enter a phone number'
      };
      errors.push(error);
    }
    if (errors.length > 0) {
      return response.status(400).json({
        errors: { body: errors.map((error) => error.message) }
      });
    }
    username = usernameTrim;
    address = addressTrim;
    image = imageTrim;
    phoneNumber = phoneNumberTrim;
    request.body = {
      username,
      address,
      image,
      phoneNumber
    };
    next();
  }

  /**
   * @description - This method is responsible for checking the length of the inputs
   *
   * @static
   * @param {object} request - Request sent to the router
   * @param {object} response - Response sent from the controller
   * @param {object} next - callback function to transfer to the next method
   * @returns {object} - object representing response message
   * @memberof ProfileInputValidator
   */
  static async checkLength(request, response, next) {
    const { username, address, phoneNumber } = request.body;
    const errors = [];
    if (address.length > 240) {
      const error = {
        message: 'please address should not be more than 240 characters'
      };
      errors.push(error);
    }
    if (username.length > 60) {
      const error = {
        message: 'please username should not be more than 60 characters'
      };
      errors.push(error);
    }
    if (phoneNumber.length > 13) {
      const error = {
        message: 'please phone should not be more than 13 characters'
      };
      errors.push(error);
    }
    if (errors.length > 0) {
      return response.status(400).json({
        errors: { body: errors.map((error) => error.message) }
      });
    }
    next();
  }
}

const {
  checkImageUrl,
  checkUndefined,
  checkEmpty,
  checkLength
} = ProfileInputValidator;

export {
  checkImageUrl,
  checkUndefined,
  checkEmpty,
  checkLength
};
