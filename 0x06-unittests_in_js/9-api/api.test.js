const { expect } = require('chai');
const request = require('request');

describe('Index Page', () => {
  it('should respond with the correct status code', (done) => {
    request('http://localhost:7865', (error, res, body) => {
      if (error) return done(error);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should have the correct content of the body', (done) => {
    request('http://localhost:7865', (error, res, body) => {
      if (error) return done(error);
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  }); 

  it('should have the correct Content-Type', (done) => {
    request('http://localhost:7865', (error, res, body) => {
      if (error) return done(error);
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });

  it('should have the correct Content-Length', (done) => {
    request('http://localhost:7865', (error, res, body) => {
      if (error) return done(error);
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});

describe('Cart Page', () => {
  it('should respond with status code 200 when :id is a number', (done) => {
    request('http://localhost:7865/cart/123', (error, res, body) => {
      if (error) return done(error);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should respond with status code 404 when :id is NOT a number', (done) => {
    request('http://localhost:7865/cart/abc', (error, res, body) => {
      if (error) return done(error);
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  
  it('should have the correct Content-Type', (done) => {
    request('http://localhost:7865/cart/123', (error, res, body) => {
      if (error) return done(error);
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });

  it('should have the correct Content-Length', (done) => {
    request('http://localhost:7865/cart/123', (error, res, body) => {
      if (error) return done(error);
      expect(res.headers['content-length']).to.equal('25'); // Update the expected value based on the actual content length
      done();
    });
  });
});