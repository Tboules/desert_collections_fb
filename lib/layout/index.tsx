import React from "react";
import { useUserContext } from "../context/UserContext";
import NavBar from "./NavBar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
