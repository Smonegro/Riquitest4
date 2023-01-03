import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom"; //ESTO ES PARA LA FORMA 2

const Navigation = (props) => {
  return (
    <Nav>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {props.isRegisterIn && (
            <li>
              <a href="/register">Register</a>
            </li>
          )}
          {props.isLoggedIn && (
            <li>
              <a href="/login">Login</a>
            </li>
          )}
        </ul>
      </nav>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.div`
  .nav ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  .nav li {
    margin-left: 2rem;
  }

  .nav a {
    text-decoration: none;
    color: white;
  }
`;

// FORMA 1
// const Navigation = (props) => {
//   return (
//     <Nav>
//       <nav className="nav">
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           {props.isRegisterIn && (
//             <li>
//               <a href="/register">Register</a>
//             </li>
//           )}
//           {props.isLoggedIn && (
//             <li>
//               <a href="/login">Login</a>
//             </li>
//           )}
//           {props.isLoggedIn && (
//             <li>
//               <button onClick={props.onLogout}>Logout</button>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </Nav>
//   );
// };

// export default Navigation;

// //FORMA 2
// function Navigation() {
//   return (
//     <Nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/register">Register</Link>
//         </li>
//       </ul>
//     </Nav>
//   );
// }

// export default Navigation;
