import models from '../db/models';

const { User } = models;
const errorMessage = 'Could not complete action at this time';

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
        status: 'Failure',
        message: errorMessage,
        error: error.message
      });
    }
  }

  /**
   * @description - This method edit a user's profile
   * @static
   * @param {object} request - Request sent to the router
   * @param {object} response - Response sent from the controller
   * @returns {object} - object representing response
   * @memberof ProfileController
   */

  static async editUserProfile(request, response) {
    const { payload } = request.userData;
    const userId = payload.id;
    try {
      const foundUser = await User.findOne({
        where: { id: userId }
      });
      if (!foundUser) {
        return response.status(404).json({
          status: 'Failure',
          message: 'Please sign up'
        });
      }
      const {
        username, address, image, phoneNumber
      } = foundUser;

      await User.update(
        {
          username: request.body.username || username,
          address: request.body.address || address,
          image: request.body.image || image,
          phoneNumber: request.body.phoneNumber || phoneNumber
        },
        { where: { id: foundUser.id } }
      );

      return response.status(200).json({
        status: 'Success',
        message: 'Updated profile successfully',
      });
    } catch (error) {
      response.status(500).json({
        status: 'Fail',
        message: errorMessage,
        error
      });
    }
  }
}


const { getCurrentUser, editUserProfile } = ProfileController;

export { getCurrentUser, editUserProfile };
