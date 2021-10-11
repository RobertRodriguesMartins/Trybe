import React from 'react';

class Cidade extends React.Component {
  render () {
    
    const { value, changeHandler, verifyFirstCharacter } = this.props;

    return (
      <label htmlFor="cidade">
        Cidade:
        <input
          maxLength="28"
          value={ value }
          name="cidade"
          id="cidade"
          onChange={ changeHandler }
          onBlur={ verifyFirstCharacter }
          required      
        />
      </label>
    )
  }
}

export default Cidade;
