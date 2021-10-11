import React from 'react';

class Email extends React.Component {
  render () {
    
    const { value, changeHandler } = this.props;

    return (
      <label htmlFor="email">
        Email:
        <input
          maxLength="50"
          value={ value }
          name="email"
          id="email"
          onChange={ changeHandler }
          required      
        />
      </label>
    )
  }
}

export default Email;
