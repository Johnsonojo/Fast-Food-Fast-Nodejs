import chaiHttp from 'chai-http';
import chai from 'chai';
import server from '../server';

const { expect } = chai;

chai.use(chaiHttp);

describe('Server Controller', () => {
  it('it should get the homepage route', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.status).to.be.eql('Success');
        expect(res.body.message).to.be.eql('Welcome to fast food fast, a platform to order for food');
        done(err);
      });
  });
});
