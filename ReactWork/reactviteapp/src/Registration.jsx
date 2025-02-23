// import React, { useState } from 'react'

// function registration() {
//     const [myname, setName] = useState();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = usestate();
//     const [data, setData] = useState();

//     function doRegistration(e) {
//         e.preventDefault();
//         const onjectData = {
//             myname,
//             email,
//             password
//         }
//     }
//     return (
//         <div>

//         </div>
//     )
// }

// export default registration
import React, { useState } from 'react';

function Registration() {
  const [myname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Fixed typo in useState
  const [data, setData] = useState(null); // Defaulted to null

  function doRegistration(e) {
    e.preventDefault();
    const objectData = {
      myname,
      email,
      password,
    };
    console.log(objectData); // Logging the data for debugging
    setData(objectData); // Store the form data in the state (optional)
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={doRegistration}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={myname}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {data && (
        <div>
          <h3>Registration Data:</h3>
          <p>Name: {data.myname}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
        </div>
      )}
    </div>
  );
}

export default Registration;
