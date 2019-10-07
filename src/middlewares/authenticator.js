import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.TOKEN_SECRET_KEY;

/**
 * @description represents middelware for user authentication and authorization
 * @class Authenticator
 */
class Authenticator {
  /**
   * @description - This method is responsible for generating user token
   * @static
   * @param {object} payload - Object representing encoded data that makes up the token
   * @param {object} time - Object representing token expiration time
   * @returns {object} - object representing response message
   * @memberof Authenticator
   */
  static generateToken(payload, time) {
    const token = jwt.sign({ payload }, secret, time);
    return token;
  }

  /**
   * @description - This method is responsible for creating new users
   *
   * @static
   * @param {object} request - Request sent to the router
   * @param {object} response - Response sent from the controller
   * @param {object} next - callback function to transfer to the next method
   * @param {object} userData - Object representing decoded data that made up the token
   * @param {object} error - Object representing JWT error
   *
   * @returns {object} - object representing response message
   *
   * @memberof Authenticator
   */
  static verifyToken(request, response, next) {
    const { token } = request.headers;
    if (!token) {
      return response.status(403).json({
        status: 'Fail',
        message: 'No token supplied, please login or signup'
      });
    }
    return jwt.verify(token, secret, (error, userData) => {
      if (error) {
        if (error.message.includes('signature')) {
          return response.status(403).json({
            status: 'Fail',
            message: 'Your input is not a JWT token'
          });
        }
        return response.status(403).json({
          message: error.message
        });
      }
      request.userData = userData;
      return next();
    });
  }

  /**
   * @description - This method is responsible for authenticating a user
   * @static
   * @param {object} request -  Request sent to the router
   * @param {object} response - Response sent from the controller
   * @param {object} next - calls the next function
   * @returns {object} - object representing response message
   * @memberof Authenticator
   */
  static authenticateUser(request, response, next) {
    try {
      const { token } = request.headers;
      if (!token || token === '') {
        response.status(401).json({
          status: 'failure',
          message: 'User not authenticated. No token provided'
        });
      }
      const verifiedToken = jwt.verify(token, secret);
      request.token = verifiedToken;
      return next();
    } catch (error) {
      response.status(401).json({
        status: 'failure',
        message: 'User authentication failed'
      });
    }
  }

  /**
   * @description - This method is responsible for authenticating an admin
   * @static
   * @param {object} request -  Request sent to the router
   * @param {object} response - Response sent from the controller
   * @param {object} next - calls the next function
   * @returns {object} - object representing response message
   * @memberof Authenticator
   */
  static authenticateAdmin(request, response, next) {
    try {
      const { token } = request.headers;
      const verifiedToken = jwt.verify(token, secret);
      const { role } = verifiedToken.payload;
      if (role !== 'admin') {
        response.status(403).json({
          status: 'failure',
          message: 'User not authorized to perform this action'
        });
      }
      return next();
    } catch (error) {
      response.status(401).json({
        status: 'failure',
        message: 'User authentication failed',
        error
      });
    }
  }
}

const {
  generateToken, authenticateUser, authenticateAdmin, verifyToken
} = Authenticator;

export {
  generateToken, authenticateUser, authenticateAdmin, verifyToken
};
