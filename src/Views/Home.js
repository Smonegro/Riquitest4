import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <HomeStyled>
      <div>
        {" "}
        <h1>Estas en Home! </h1>
      </div>
    </HomeStyled>
  );
}

export default Home;

const HomeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
  font-size: 1rem;
`;

//Forma 1
// function Home(props) {
//     return (
//       <HomeStyled>
//         <div>
//           {" "}
//           <h1>Your are in Home!</h1>
//           <ul>
//             <li>
//               <a href="/register">Register</a>
//             </li>

//             <li>
//               <a href="/login">Login</a>
//             </li>
//           </ul>
//         </div>
//       </HomeStyled>
//     );
//   }

//   export default Home;
