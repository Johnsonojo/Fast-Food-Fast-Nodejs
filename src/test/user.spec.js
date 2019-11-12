import chaiHttp from 'chai-http';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import server from '../server';
import userData from './__mock__/userData';
import models from '../db/models';

const {
  signUpDetails,
  signUpNoName,
  wrongUser, invalidPwd,
  notAUser, seededAdmin
} = userData;

let request;
let jwtSecret;

const signupEndpoint = '/api/auth/signup';
const loginEndpoint = '/api/auth/login';

const { User } = models;
const { expect } = chai;


chai.use(chaiHttp);
chai.use(sinonChai);

describe('User Controller', () => {
  before(() => {
    request = chai.request(server).keepOpen();
  });

  afterEach(() => {
    sinon.restore();
    process.env.TOKEN_SECRET_KEY = jwtSecret;
  });

  after(async () => {
    await User.destroy({ cascade: true, truncate: true });
    request.close();
  });

  describe('SignUp ', () => {
    it('should signup a new user', async () => {
      const response = await request
        .post(signupEndpoint)
        .send(signUpDetails);
      expect(response.status).to.equal(201);
      expect(response.body).to.be.an('object');
      expect(response.body.message).to.equal('User signup was successful');
      expect(response.body).to.have.a.property('token');
    });

    it('should throw an error for already existing user', async () => {
      const response = await request
        .post(signupEndpoint)
        .send(signUpDetails);
      expect(response.status).to.equal(400);
      expect(response.body).to.be.an('object');
      expect(response.body.errors.body[0]).to.equal('Username already exists');
    });

    it('should not create a user without a username', async () => {
      const response = await request
        .post(signupEndpoint)
        .send(signUpNoName);
      expect(response.status).to.equal(400);
      expect(response.body).to.be.an('object');
      expect(response.body.errors.body[0]).to.equal('Please provide a username');
    });
  });

  describe('Login', () => {
    it('should signup a new user', async () => {
      const response = await request
        .post(loginEndpoint)
        .send(seededAdmin);
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body.message).to.equal('Welcome back Johnson');
      expect(response.body).to.have.property('token');
    });

    it('should throw an validation failed message for wrong password', async () => {
      const response = await request
        .post(loginEndpoint)
        .send(wrongUser);
      expect(response.status).to.equal(401);
      expect(response.body).to.be.an('object');
      expect(response.body.status).to.equal('Failure');
      expect(response.body.message).to.equal('Incorrect login credentials');
    });

    it('should throw a 404 error for non-existent user', async () => {
      const response = await request
        .post(loginEndpoint)
        .send(notAUser);
      expect(response.status).to.equal(404);
      expect(response.body).to.be.an('object');
      expect(response.body.status).to.equal('Failure');
      expect(response.body.message).to.equal('User not found');
    });

    it('should throw a 401 error for wrong password', async () => {
      const response = await request
        .post(loginEndpoint)
        .send(invalidPwd);
      expect(response.status).to.equal(401);
      expect(response.body).to.be.an('object');
      expect(response.body.status).to.equal('Failure');
      expect(response.body.message).to.equal('Incorrect login credentials');
    });
  });
});
