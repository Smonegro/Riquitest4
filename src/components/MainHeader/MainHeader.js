import React from "react";
import styled from "styled-components";

const MainHeader = (props) => {
  return (
    <Tittle>
      <div>
        <img
          className="img"
          src="https://upnread.com/_next/static/images/logo-ab7c6c45653b38116341ed6df15bc549.svg"
          alt=""
        />
      </div>
    </Tittle>
  );
};

export default MainHeader;

const Tittle = styled.div`
  .img {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
`;
// FORMA 1
// const MainHeader = (props) => {
//   return (
//     <Tittle>
//       <div>
//         <img
//           className="img"
//           src="https://upnread.com/_next/static/images/logo-ab7c6c45653b38116341ed6df15bc549.svg"
//           alt=""
//         />
//       </div>
//       <Navigation
//         isLoggedIn={props.isAuthenticated}
//         IsRegister={props.isAuthenticated}
//         onLogout={props.onLogout}
//       />
//       <div IsRegister={props.isAuthenticated} />
//     </Tittle>
//   );
// };

// export default MainHeader;

//FORMA 2
// const MainHeader = (props) => {
//   return (
//     <Tittle>
//       <div>
//         <img
//           className="img"
//           src="https://upnread.com/_next/static/images/logo-ab7c6c45653b38116341ed6df15bc549.svg"
//           alt=""
//         />
//       </div>
//     </Tittle>
//   );
// };

// export default MainHeader;
