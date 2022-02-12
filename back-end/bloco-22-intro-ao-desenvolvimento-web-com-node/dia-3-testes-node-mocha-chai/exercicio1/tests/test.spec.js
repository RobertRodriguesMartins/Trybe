const fs = require('fs');
const { expect } = require("chai");
const sinon = require('sinon');
const { soma, isApproved, readFile } = require('../myModules');


describe('Quando soma recebe 5, 5', () => {
  it('should be 10', () => {
    expect(soma(5, 5)).equal(10);
  });
});

describe('testing isApproved function', () => {
  it('should be "aprovado"', () => {
    const beApproved = isApproved(10);
    expect(beApproved).to.be.equal('aprovado');
  })
  it('should be "aprovado"', () => {
    const beApproved = isApproved(7);
    expect(beApproved).to.be.equal('aprovado');
  })
  it('should be "reprovado"', () => {
    const beApproved = isApproved(6);
    expect(beApproved).to.be.equal('reprovado');
  })
})

describe('testing readFile function', () => {
  before(() => {
    sinon.stub(fs, 'readFileSync')
      .returns('teste 1');
  })
  afterEach(() => {
    fs.readFileSync.restore()
  })
  const result = readFile('./io-files/arq1.txt');
  it('should return "teste 1"', () => {
    expect(result).to.be.a('string');
    expect(result).to.be.equal('teste 1', 'tem que ser 1 bro');
  })
  describe('teste quando da erro', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync')
        .throws(new Error('ocorreu algum erro'))
    })
    it('should receive a parameter', () => {
      const result = readFile('sla.txt');
      expect(result).to.be.an('Error');
    })
  })
})