import React from 'react';

class Cpf extends React.Component {
  render () {
    
    const { value, changeHandler } = this.props;

    return (
      <label htmlFor="cpf">
        CPF:
        <input
          maxLength="11"
          value={ value }
          name="cpf"
          id="cpf"
          onChange={ changeHandler }
          required      
        />
      </label>
    )
  }
}

export default Cpf;
