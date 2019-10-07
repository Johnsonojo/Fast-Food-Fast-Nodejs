import models from '../db/models';

const { User } = models;

/**
 * @description A class that represents user profile
 * @class ProfileController
 */

class ProfileController {
  /**
   * @description - This method gets the currently logged in user
   * @static
   * @param {object} request - Request sent to the router
   * @param {object} response - Response sent from the controller
   * @returns {object} - object representing response
   * @memberof ProfileController
   */

  static async getCurrentUser(request, response) {
    const { payload } = request.userData;
    const userId = payload.id;
    try {
      const foundUser = await User.findOne({
        where: { id: userId }
      });
      if (foundUser) {
        const currentUser = {
          id: foundUser.id,
          username: foundUser.username,
          email: foundUser.email,
          image: foundUser.image,
          role: foundUser.role
        };
        return response.status(200).json({
          status: 'Success',
          message: 'Fetched user successfully',
          currentUser
        });
      }
    } catch (error) {
      response.status(500).json({
        status: 'Fail',
        error: errorMessage
      });
    }
  }
}


const { getCurrentUser } = ProfileController;

export default getCurrentUser;
