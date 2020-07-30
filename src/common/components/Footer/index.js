import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
