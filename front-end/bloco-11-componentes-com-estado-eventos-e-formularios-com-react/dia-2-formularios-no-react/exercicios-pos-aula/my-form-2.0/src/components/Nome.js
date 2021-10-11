import React from 'react';

class Nome extends React.Component {
  render () {
    
    const { value, changeHandler } = this.props;

    return (
      <label htmlFor="nome">
        Nome:
        <input
          maxLength="40"
          value={ value }
          name="nome"
          id="nome"
          onChange={ changeHandler }
          required      
        />
      </label>
    )
  }
}

export default Nome;
