import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Container,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    boxShadow: "none",
    minHeight: "64px",
    padding: "16px 0 16px 0",
  },
  grow: {
    flexGrow: 1,
  },
  menuItem: {
    color: "#000000!important",
  },
  title: {
    color: "#000000",
  },
  sectionDesktop: {
    display: "flex",
  },
}));

const PublicHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link href="/">Your Website</Link>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <MenuItem className={classes.menuItem}>
                <Link href="/sign-in">Sign In</Link>
              </MenuItem>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default PublicHeader;
