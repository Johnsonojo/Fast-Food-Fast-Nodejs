import crypto from 'crypto';
import models from '../db/models';
import emailSender from '../helpers/emailSender';
import errorResponse from '../helpers/errorResponse';
import generateToken from '../middlewares/authenticator';

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
      try {
        if (userData) {
          const createdEmailToken = crypto.randomBytes(16).toString('hex');
          const userVerifier = await User.update({
            emailToken: createdEmailToken
          }, { where: { email } });
          if (userVerifier) {
            emailSender(userData.email, createdEmailToken);
          }
        }
        const time = {};
        time.expiresIn = '24h';
        const token = generateToken(payload, time);
        response.status(201).json({
          message: 'User signup was successful',
          token
        });
      } catch (error) {
        response.status(500).send(errorResponse(['Error generating email token']));
      }
    } catch ({ errors: validationErrors }) {
      response.status(400).send(errorResponse([...validationErrors.map((error) => error.message)]));
    }
  }
}

const { signupUser } = UserController;

export default signupUser;
