import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

import MainHeader from "../components/MainHeader/MainHeader";

const Layout = () => {
  return (
    <>
      <Nav>
        <div className="general">
          <header className="header">
            <div className="content">
              <a href="/">
                <MainHeader className="img" />
              </a>
            </div>

            <div className="content-menu">
              <div className="githubstyled">
                <img
                  alt="github"
                  src="https://upnread.com/_next/static/images/github-8684d899f96b311f15a31d7e9b376bad.png"
                  title="Github"
                />
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/upnread/post-renderer"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </div>

              <div className="box-login">
                <Link
                  style={{ textDecoration: "none" }}
                  className="box-login-a"
                  to="/login"
                >
                  Log in
                </Link>
              </div>

              <div className="box-register">
                <Link
                  style={{ textDecoration: "none" }}
                  className="box-register-a"
                  to="/register"
                >
                  Register
                </Link>
              </div>

              <img
                alt="icon"
                class="menu-icon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3oiLz48L3N2Zz4="
              />
            </div>
          </header>
        </div>
      </Nav>

      <Outlet />
    </>
  );
};

export default Layout;

const Nav = styled.div`
  .body {
    font-family: Helvetica;
    font-size: 16px;
  }
  .general {
    margin: 0px auto;
    width: 100%;
    max-width: 2000px;
    position: relative;
    display: block;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    line-height: 1.15;
  }
  .header {
    display: flex;
    box-align: center;
    align-items: center;
    box-pack: justify;
    justify-content: space-between;
    height: 4.5rem;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgba(163, 162, 168, 0.25);
    position: sticky;
    top: 0px;
    line-height: 1.15;
    text-size-adjust: 100%;
  }

  .content {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1.15;
  }

  .menu-icon {
    display: flex;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  .img {
    border-style: none;
  }
  .content-menu {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  .githubstyled {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 1.5rem;
    -webkit-font-smoothing: antialiased;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  .githubstyled img {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }
  .githubstyled a {
    color: rgb(0, 0, 0);
  }
  .github {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  .box-login {
    margin-right: 1.5rem;
    text-decoration: none;
    background-color: transparent;
    color: black;
    cursor: pointer;
    line-height: 1.15;
  }

  .box-login-a {
    color: rgb(0, 0, 0);
    font-size: 1rem;
    font-weight: 500;
    display: block;
    cursor: pointer;
    line-height: 1.15;
  }
  .box-register {
    margin-right: 1.5rem;
    text-decoration: none;
    background-color: transparent;
    color: black;
    cursor: pointer;
    line-height: 1.15;
  }

  .box-register-a {
    color: rgb(0, 0, 0);
    font-size: 1rem;
    font-weight: 500;
    display: block;
    cursor: pointer;
    line-height: 1.15;
  }
  .img {
    margin-top: 8px;
    width: 9rem;
    height: auto;
  }
`;

// width: 100%;
// height: 80px;
// border: solid 1px red;
// .font{}
// display: flex;
// flex-direction: row;
// justify-content: space-evenly;
// align-items: flex-start;
// font-size: 1.5rem;
// background-color: white;

//FORMA QUE FUNCIONA
// const Layout = () => {
//   return (
//     <>
//       <Nav>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//             <li>
//               <Link to="/login">Log in</Link>
//             </li>
//           </ul>
//         </nav>
//       </Nav>
//       <Outlet />
//     </>
//   );
// };

// export default Layout;

// estoo era lo que tenia

// .wrapper {
//   width: 100%;
//   height: 1px;
//   border: solid 1px red;
// }
// .generalstyled {
//   flex-direction: row;
// }
// .img {
//   height: 50px;
//   display: flex;
//   align-items: strech;
//   margin-top: 0.3rem;
// }

// .font {
//   background-color: yellow;
//   display: flex;
//   justify-content: flex-end;
//   align-items: flex-start;
//   font-size: 1rem;
//   margin-top: 0.3rem;
// }
//forma 2
// //.box1 {
//   height: 50px;
//   width: 60px;
//   font-size: 1.2rem;
//   font-family: "Times New Roman", Times, serif;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .box2 {
//   height: 50px;
//   width: 80px;
//   font-size: 1.2rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
// .box3 {
//   height: 50px;
//   width: 60px;
//   font-size: 1.2rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .imgdiv {
//   height: 50px;
//   width: 15%;
// }
// .img {
//   height: 50px;
//   display: flex;
//   margin-top: 0.2rem;
// }

// .wrapper {
//   background-color: white;
//   border: solid 1px black;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
// }
// `;

// forma 2
// const Layout = () => {
//   return (
//     <>
//       <section>
//         <Nav>
//           <nav className="wrapper">
//             <MainHeader className="img" />

//             <div className="box1">
//               <Link to="/">Home</Link>
//             </div>

//             <div className="box2">
//               <Link to="/register">Register</Link>
//             </div>

//             <div className="box3">
//               <Link to="/login">Log in</Link>
//             </div>
//           </nav>
//         </Nav>
//       </section>

//       <Outlet />
//     </>
//   );
// };

// export default Layout;

//-webkit-text-size-adjust: 100%;
