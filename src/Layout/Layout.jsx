import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ChildrenBlock>{children}</ChildrenBlock>
      <Footer />
    </>
  );
};

const ChildrenBlock = styled.div`
  min-height: 100vh;
`;
export default Layout;
