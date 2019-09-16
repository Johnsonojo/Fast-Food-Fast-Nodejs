import jwt from 'jsonwebtoken';
import 'dotenv/config';


/**
 * @description This class represents middelware that checks for user authentication with JWT
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
    const token = jwt.sign({ payload }, process.env.TOKEN_SECRET_KEY, time);
    return token;
  }
}

const { generateToken } = Authenticator;

export default generateToken;
