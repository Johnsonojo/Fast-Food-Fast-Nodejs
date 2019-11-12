
import chaiHttp from 'chai-http';
import chai from 'chai';
import server from '../server';
import menuData from './__mock__/menuData';
import userData from './__mock__/userData';

const {
  completeDetails,
  noFoodName,
  duplicate,
} = menuData;

const { seededAdmin } = userData;

let userToken;
let request;
const userSignin = '/api/auth/login';

const { expect } = chai;

chai.use(chaiHttp);

describe('Menu Controller', () => {
  before(async () => {
    request = chai.request(server).keepOpen();
  });

  before(async () => {
    const mainUser = await request
      .post(`${userSignin}`)
      .send(seededAdmin);
    userToken = mainUser.body.token;
  });

  after(async () => {
    request.close();
  });

  describe('Post Menu', () => {
    it('should allow admin to add a menu to the database', async () => {
      const response = await request
        .post('/api/menu')
        .set('token', userToken)
        .send(completeDetails);
      expect(response.status).to.equal(201);
      expect(response.body).to.be.an('object');
      expect(response.body.status).to.equal('Success');
      expect(response.body.message).to.equal('Menu added successfully');
    });

    it('should not allow admin to duplicate a menu in the database', async () => {
      const response = await request
        .post('/api/menu')
        .set('token', userToken)
        .send(duplicate);
      expect(response.status).to.equal(409);
      expect(response.body).to.be.an('object');
      expect(response.body.errors.body[0]).to.equal('food name already exists');
    });

    it('should throw an error when adding food without a name', async () => {
      const response = await request
        .post('/api/menu')
        .set('token', userToken)
        .send(noFoodName);
      expect(response.status).to.equal(409);
      expect(response.body).to.be.an('object');
      expect(response.body.errors.body[0]).to.equal('Please provide a food name');
    });

    it('should throw an authentication error when no token set in header', async () => {
      const response = await request
        .post('/api/menu')
        .set('authorization', userToken)
        .send(completeDetails);
      expect(response.status).to.equal(401);
      expect(response.body).to.be.an('object');
      expect(response.body.status).to.equal('Failure');
      expect(response.body.message).to.equal('User authentication failed');
    });
  });
  describe('Get Menu', () => {
    it('should get all the menu from database', async () => {
      const response = await request
        .get('/api/menu')
        .set('token', userToken);
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body.status).to.equal('Success');
      expect(response.body.message).to.equal('All menu fetched successfully');
      expect(response.body.message).to.equal('All menu fetched successfully');
      expect(response.body.allMenu.length).to.equal(5);
    });

    it('should get a menu from the database', async () => {
      const response = await request
        .get('/api/menu/1')
        .set('token', userToken);
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body.status).to.equal('Success');
      expect(response.body.message).to.equal('Menu fetched successfully');
    });
  });

  describe('Delete Menu', () => {
    it('should allow admin to delete a menu from the database', async () => {
      const response = await request
        .delete('/api/menu/4')
        .set('token', userToken);
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body.status).to.equal('Success');
      expect(response.body.message).to.equal('Menu successfully deleted');
    });

    it('should throw an error when trying to delete a food id that does not exist', async () => {
      const response = await request
        .delete('/api/menu/200')
        .set('token', userToken);
      expect(response.status).to.equal(404);
      expect(response.body).to.be.an('object');
      expect(response.body.status).to.equal('Failure');
      expect(response.body.message).to.equal('Menu not found');
    });

    it('should throw an error when trying to delete a food with invalid id', async () => {
      const response = await request
        .delete('/api/menu/er1')
        .set('token', userToken);
      expect(response.status).to.equal(409);
      expect(response.body).to.be.an('object');
      expect(response.body.status).to.equal('Failure');
      expect(response.body.message).to.equal('Menu validation not successful');
    });

    it('should error out when trying to delete a string food id', async () => {
      const response = await request
        .delete('/api/menu/iid')
        .set('token', userToken);
      expect(response.status).to.equal(409);
      expect(response.body).to.be.an('object');
      expect(response.body.status).to.equal('Failure');
      expect(response.body.message).to.equal('Menu validation not successful');
      expect(response.body.data[0].msg).to.equal('menu id must be a number');
    });
  });
});
