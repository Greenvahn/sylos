import React from "react";
import Link from "./link";

// class NavBar extends React.Component {
//   render() {
//     return (
//       <>
//         <nav className="nav nav-masthead justify-content-center float-md-end">
//           {this.props.links.map((item) => (
//             <Link text={item.text} url={item.url} />
//           ))}
//         </nav>
//       </>
//     );
//   }
// }

const NavBar = (props) => {
  return (
    <>
      <nav className="nav nav-masthead justify-content-center float-md-end">
        {props.links.map((item, index) => (
          <Link key={index} text={item.text} url={item.url} />
        ))}
      </nav>
    </>
  );
};

export default NavBar;
