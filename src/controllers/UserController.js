import generateToken from '../middlewares/authenticator';
import models from '../db/models';
import errorResponse from '../helpers/errorResponse';

const { User } = models;

/**
 * @description A class that represents user authentication
 * @class UserController
 */

class UserController {
  /**
   * @description - This method handles the creation of new users
   * @static
   * @param {object} request - Request sent to the router
   * @param {object} response - Response sent from the controller
   * @returns {object} - object representing response
   * @memberof UserController
   */

  static async signupUser(request, response) {
    const { username, email, password } = request.body;
    try {
      const userData = await User.create({
        username,
        email,
        password
      });
      const { id, role } = userData;
      const payload = { id, username: userData.username, role };

      const time = {};
      time.expiresIn = '24h';
      const token = generateToken(payload, time);
      response.status(201).json({
        message: 'User sign up was successful',
        token
      });
    } catch ({ errors: validationErrors }) {
      response.status(400).send(errorResponse([...validationErrors.map((error) => error.message)]));
    }
  }
}

const { signupUser } = UserController;

export default signupUser;
