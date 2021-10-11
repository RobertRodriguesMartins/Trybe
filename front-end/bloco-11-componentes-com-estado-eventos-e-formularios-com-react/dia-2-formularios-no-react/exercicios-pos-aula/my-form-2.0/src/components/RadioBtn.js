import React, { Component } from 'react';

class RadioBtn extends Component {

  render() {

    const { changeHandler } = this.props;

    return (
      <>
        <label htmlFor="casa">
          Casa:
          <input 
            id="casa"
            type="radio"
            name="radio"
            value="casa" 
            required
            onChange={ changeHandler }
          />
        </label>
        <label htmlFor="apartamento">
          Apartamento:
          <input 
            id="apartamento"
            type="radio"
            name="radio"
            value="Apartamento" 
            onChange={ changeHandler }
          />
        </label>
      </>
    )
  }
}

export default RadioBtn;