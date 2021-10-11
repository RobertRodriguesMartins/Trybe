import React from 'react';

class Endereco extends React.Component {
  render () {
    
    const { value, changeHandler } = this.props;

    return (
      <label htmlFor="endereco">
        Endereco:
        <input
          maxLength="200"
          value={ value }
          name="endereco"
          id="endereco"
          onChange={ changeHandler }
          required      
        />
      </label>
    )
  }
}

export default Endereco;
