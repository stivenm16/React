import React from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  
  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }

  return errors;
};

export default function  Form() {
  //username es el estado y setUsername va a ser quien modifique el estado
  //el estado inicial de username será el valor pasado por useState
  // El React useStateHook nos permite rastrear el estado en un componente de función
 /*  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('') */

  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({});

  const handleInputChange = function(e) {

    //primero cambia estado
    setInput({
      ...input, //se trae todo lo que habia en el objeto input
      [e.target.name]: e.target.value //con [] entramos a la propiedad puntual del objeto
    });
     //llama al estado errores llamando mi funciono validate pasandole estado input recien cambiado
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <form>
      <div>
        <label>Username:</label>                
        <input className={errors.username && 'danger'} 
        type="text" 
        name="username" 
        value={input.username} 
        onChange={handleInputChange}/> 
        {errors.username && (<p className="danger">{errors.username}</p> )}
      </div>

      <div>
        <label>Password:</label>
        <input className={errors.password && 'danger'} 
        type="password" 
        name="password" 
        value={input.password} 
        onChange={handleInputChange}/>
        {errors.password && (<p className="danger">{errors.password}</p> )}
      </div>

      <input type="submit" value="Submit" />

    </form>
  )
}