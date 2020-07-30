import React from "react";
import { useLocation } from "react-router";

import PrivateHeader from "./PrivateHeader";
import PublicHeader from "./PublicHeader";

const Header = () => {
  const { pathname } = useLocation();

  if (/account/.test(pathname)) {
    return <PrivateHeader />;
  } else {
    return <PublicHeader />;
  }
};

export default Header;
