
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <form>
//      <div class="form-group">
//     <label for="exampleInputname">Name</label>
//     <input type="email" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Name"/>
//     <small id="emailHelp" class="form-text text-muted">We'll never share your Name with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
//   </div>
//   <div class="form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';

// function Registration() {
//   const [myname, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState(''); 
//   const [data, setData] = useState(null);

//   function doRegistration(e) {
//     e.preventDefault();
//     const objectData = {
//       myname,
//       email,
//       password,
//     };
//     console.log(objectData); 
//     setData(objectData);
//   }

//   return (
//     <div>
//       <h2>Registration Form</h2>
//       <form onSubmit={doRegistration}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={myname}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your name"
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       {data && (
//         <div>
//           <h3>Registration Data:</h3>
//           <p>Name: {data.myname}</p>
//           <p>Email: {data.email}</p>
//           <p>Password: {data.password}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Registration;


import { useState } from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.css';

function Registration() {
  const [myname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null);

  function doRegistration(e) {
    e.preventDefault();
    const objectData = {
      myname,
      email,
      password,
    };
    console.log(objectData); 
    setData(objectData);
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registration Form</h2>
      <form onSubmit={doRegistration}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={myname}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {/* <small id="nameHelp" className="form-text text-muted">
            We'll never share your name with anyone else.
          </small> */}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsCheck"
          />
          {/* <label className="form-check-label" htmlFor="termsCheck">
            I agree to the terms and conditions
          </label> */}
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
      {data && (
        <div className="mt-4">
          <h3>Registration Data</h3>
          <p>
            <strong>Name:</strong> {data.myname}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Password:</strong> {data.password}
          </p>
        </div>
      )}
    </div>
  );
}

export default Registration;
