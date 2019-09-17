import models from '../db/models';

const { User } = models;

/**
 * @description class representing Email Verification
 * @class EmailController
 */
class EmailController {
  /**
   * @description - This method is responsible for verifying a user using their email
   * @static
   * @param {object} request - Request sent to the router
   * @param {object} response - Response sent from the controller
   * @returns {object} - object representing response message
   * @memberof EmailController
   */

  static async emailController(request, response) {
    const { yourEmail, yourEmailToken } = request.query;
    try {
      const foundUser = await User.findOne({
        where: { email: yourEmail }
      });
      const { isVerified, emailToken } = foundUser;
      if (isVerified) {
        return response.status(204).json({
          message: 'Email already verified'
        });
      }
      if (emailToken === yourEmailToken && !isVerified) {
        await User.update({ isVerified: true }, { where: { email: yourEmail } });
        return response.status(201).json({
          status: 'Success',
          message: `Your email: ${foundUser.email} has been verified`
        });
      }
      return response.status(404).json({
        status: 'Fail',
        message: 'Unable to find a valid token'
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Fail',
        message: 'Something really went wrong'
      });
    }
  }
}

const { emailController } = EmailController;

export default emailController;
