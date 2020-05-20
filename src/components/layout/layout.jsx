import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

//Компонент Cars
// const Cars = () => {
//   return <div>reno mazda bmw</div>;
// };

// const Tixon = props => {
//   props.pidr();
//   return <div>gei</div>;
// };
//
// export const Layout1 = props => (
//   <div>
//     <Navbar />
//     {props.children}
//     <Footer mob="+375336660038" site="onliner.by" />
//   </div>
// );
//
// export const Layout2 = ({ children }) => (
//   <div>
//     <Navbar />
//     {children}
//     <Footer mob="+375336660038" site="onliner.by" />
//   </div>
// );

export const Layout = props => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
       <Footer  />
    </div>
  );
};
