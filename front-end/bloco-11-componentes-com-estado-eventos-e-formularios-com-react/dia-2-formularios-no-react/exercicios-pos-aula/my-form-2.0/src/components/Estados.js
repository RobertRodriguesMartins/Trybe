import React from 'react';

class Estados extends React.Component {

  constructor () {
    super()

    this.state = {
      estados: [],
    }
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

  async componentDidMount() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados',{
      method: 'GET'
    })
    const toJson = await response.json();

    const states = this.mapStates(toJson);
    const sortedStates = this.sortStates(states);

    this.setState(() => ({
      estados: sortedStates,
    }))
  }

  render() {
    const { value, changeHandler } = this.props;
    const { estados } = this.state;
    return (
      <select value={ value } name="estado" onChange={ changeHandler }>
        <option value="">Selecione</option>
        {estados.map((state) => (
          <option key={ state } value={ state }>{ state }</option>
        ))}
      </select>
    )
  }
}

export default Estados;