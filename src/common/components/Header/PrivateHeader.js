import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

const PrivateHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <Desktop />
      <Mobile />
    </div>
  );
};

export default PrivateHeader;
