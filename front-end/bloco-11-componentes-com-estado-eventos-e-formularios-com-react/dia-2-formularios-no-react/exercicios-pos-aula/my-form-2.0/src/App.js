import React from 'react';
import './App.css';
import Cpf from './components/Cpf';
import Email from './components/Email';
import Nome from './components/Nome';
import Endereco from './components/Endereco';
import Cidade from './components/Cidade';
import Estados from './components/Estados';
import RadioBtn from './components/RadioBtn';

class App extends React.Component {
  constructor () {
    super()

    this.changeHandler = this.changeHandler.bind(this);
    this.changeState = this.changeState.bind(this);
    this.verifyFirstCharacter = this.verifyFirstCharacter
      .bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      radio: '',
    }
  }

  changeHandler({ target }) {
    let { name, value } = target;

    if (name === 'endereco') value = this.validateAddress(value);
    if (name === 'nome') value = value.toUpperCase();
    if (name === 'cpf') value = this.validateCpf(value);

    this.changeState(name, value);
  }

  changeState(name, value) {
    this.setState((lastState) => ({
      [name]: value,
    }))
  }

  validateAddress(valorEndereco) {
    return valorEndereco.replace(/[^\w\s]/, '');
  }

  validateCpf(valorCpf) {
    return valorCpf.replace(/[^0-9]/, '');
  }

  verifyFirstCharacter(event) {
    if (this.state.cidade) {
      if (this.state.cidade.match(/^[0-9]/)) {
        event.target.value = '';
        this.changeHandler(event);
      }
    }
  }
  sendForm (event) {
    event.preventDefault();

    console.log('formulário enviado.')
  }
  render () {
    return (
      <form onSubmit={this.sendForm}>
        <fieldset>
          <Nome
            value={this.state.nome}
            changeHandler={this.changeHandler}
          />
          <Email
            value={ this.state.email }
            changeHandler={ this.changeHandler }
          />
          <Cpf
            value={ this.state.cpf }
            changeHandler={ this.changeHandler }
          />
          <Endereco
            value={ this.state.endereco }
            changeHandler={ this.changeHandler }
          />
          <Cidade
            value={ this.state.cidade }
            changeHandler={ this.changeHandler }
            verifyFirstCharacter={ this.verifyFirstCharacter }
          />
          <Estados
            value={ this.state.estado }
            changeHandler= { this.changeHandler }
          />
          <RadioBtn 
            changeHandler= { this.changeHandler }  
          />
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default App;
