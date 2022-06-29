import React from 'react';
export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  } else if((!/(?=.*[0-9])/.test(input.password)))

  return errors;
};


export default function  Form() {
  
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });
  
  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  
  return (
    
      <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input type="text" name="username" onChange={handleInputChange} value={username} />
      </div>
      <div>
        <label>Password: </label>
        <input type="text" name="password" onChange={handleInputChange} value={password} />
      </div>
      <input type='submit' value='submit'>Submit!</input>
    </form>
    
  )
}
