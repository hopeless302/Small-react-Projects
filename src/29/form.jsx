import React from 'react';

class SimpleForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj); // Display form data in console
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="last name" />
        </label>
        <br />

        <label>
          User Name:
          <input type="text" name="User name" />
        </label>
        <br />
        <label>
          Address :
          <input type="text" name="Address" />
        </label>
        <br />
        <label>
          zip code :
          <input type="text" name="zip code" />
        </label>
        <br />
        <label>
          Phone Number :
          <input type="text" name="phone Number" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SimpleForm;