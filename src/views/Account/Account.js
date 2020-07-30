import React, { Fragment } from "react";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import {
  Container,
  CssBaseline,
  MenuItem,
  Toolbar,
  Divider,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Password from "./Password";
import Profile from "./Profile";
import Billing from "./Billing";
import Payment from "./Payment";

const useStyles = makeStyles((theme) => ({
  topContainer: {
    backgroundColor: "#3f51b5",
  },
  topPaper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    padding: "96px 24px 96px 24px",
    "& h1": {
      color: "#ffffff",
      fontSize: "2.7849rem",
      margin: "0",
    },
    "& p": {
      color: "#ffffff",
      fontSize: "20px",
    },
  },
  paper: {
    marginTop: theme.spacing(-2),
    borderRadius: "4px",
    paddingRight: "24px",
    paddingLeft: "24px",
    background: "#ffffff",
  },
  menuItem: {
    flexWrap: "wrap",
    padding: "15px 0 15px 0",
  },
}));

const Account = () => {
  const classes = useStyles();

  const { path, url } = useRouteMatch();

  return (
    <Fragment>
      <div className={classes.topContainer}>
        <Container>
          <CssBaseline />
          <div className={classes.topPaper}>
            <h1>Account Settings</h1>
            <p>Change account information and settings</p>
          </div>
        </Container>
      </div>
      <Container>
        <Box className={classes.paper} boxShadow={3}>
          <Toolbar className={classes.menuItem}>
            <MenuItem>
              <Link to={`${url}/profile`}>Change Profile</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`${url}/password`}>Password & Security</Link>
            </MenuItem>{" "}
            <MenuItem>
              <Link to={`${url}/billing`}>Billing Information</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`${url}/payment`}>Change Payment Method</Link>
            </MenuItem>
          </Toolbar>
          <Divider />
          <Switch>
            <Route exact path={`${path}`}>
              <Profile />
            </Route>
            <Route exact path={`${path}/profile`}>
              <Profile />
            </Route>
            <Route exact path={`${path}/password`}>
              <Password />
            </Route>
            <Route exact path={`${path}/billing`}>
              <Billing />
            </Route>
            <Route exact path={`${path}/payment`}>
              <Payment />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Account;
