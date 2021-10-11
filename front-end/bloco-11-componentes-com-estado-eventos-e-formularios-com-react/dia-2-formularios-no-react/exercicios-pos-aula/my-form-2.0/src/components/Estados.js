import React from 'react';

class Estados extends React.Component {

  constructor () {
    super()
    
    this.getStates = this.getStates.bind(this);

    this.state = {
      estados: '',
    }

    this.getStates();
  }

  sortStates(states) {
    return (
      states.sort()
    )
  }

  mapStates(states) {
    return (
      states.map((elemento) => elemento.sigla)
    )
  }

  async getStates() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados',{
      method: 'GET'
    })
    const toJson = await response.json();

    const states = this.mapStates(toJson);
    const sortedStates = this.sortStates(states);

    this.state.estados = sortedStates;
  }

  render() {
    const { value, changeHandler } = this.props;

    return (
      <select value={ value } name="estado" onChange={ changeHandler }>
        <option value="">Selecione</option>
        {/* {this.state.estados.map((el))} */}
      </select>
    )
  }
}

export default Estados;