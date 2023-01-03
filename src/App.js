//ESTO ES PARA LA FORMA 1
// import React, { useState } from "react";

// ESTO ES PARA FORMA 2
// import React from "react";
// import { Route, Link } from "react-router-dom";

// // import MainHeader from "./components/MainHeader/MainHeader";
// import Register from "./Views/Register";
// import Login from "./Views/Login";
// import Home from "./Views/Home";
// import MainHeader from "./components/MainHeader/MainHeader";
// // import Navigation from "./components/MainHeader/Navigation";

// function App() {
//   return <div></div>;
// }
// export default App;

//FORMA 1
// function App() {
//   const [IsRegister, setRegister] = useState(false);
//   const [IsLogin, setLogin] = useState(false);

//   const RegisterHandler = (first_name, last_name, email, password) => {
//     setRegister(true);
//   };

//   const LoginHandler = (email, password) => {
//     setLogin(true);
//   };
//   return (
//     <React.Fragment>
//       <MainHeader isAuthenticated={IsRegister} />
//       <main>{!IsRegister && <Register onLogin={RegisterHandler} />}</main>
//       <MainHeader isAuthenticated={IsLogin} />
//       <main>{!IsLogin && <Login onLogin={LoginHandler} />}</main>
//     </React.Fragment>
//   );
// };
// export default App;

//FORMA 2
// function App() {
//   return (
//     <div>
//       {/* <Route exact path="/" component={Home} />
//       <Route exact path="/register" component={Register} />
//       <Route exact path="/login" component={Login} /> */}
//     </div>
//   );
// }
// export default App;

//FORMA 3
// function App() {
//   return (
//     <div>
//         <Home />
//       <MainHeader />
//       <Register />
//       <MainHeader />
//       <Login />
//     </div>
//   );
// }
// export default App;

// Forma 4
// function App() {
//   // const [IsRegister, setRegister] = useState(false);
//   const [IsLogin, setLogin] = useState(false);

//   // const RegisterHandler = (first_name, last_name, email, password) => {
//   //   setRegister(true);
//   // };

//   const LoginHandler = (email, password) => {
//     setLogin(true);
//   };
//   return (
//     <React.Fragment>
//       {/* <main>{!IsRegister && <Register onLogin={RegisterHandler} />}</main> */}
//       <MainHeader />
//       <main>{!IsLogin && <Login onLogin={LoginHandler} />}</main>
//     </React.Fragment>
//   );
// }
// export default App;

//FORMA 5
// function App() {
//   return (
//     <div>
//       <MainHeader />
//       <Register />

//       <MainHeader />
//       <Login />
//     </div>
//   );
// }
// export default App;
