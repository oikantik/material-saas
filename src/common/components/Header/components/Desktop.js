import React, { useState, useRef, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Container,
  Link,
  Avatar,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  Divider,
} from "@material-ui/core";

import { ArrowDropDown as ArrowDropDownIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuItem: {
    color: "#000000!important",
  },
  title: {
    color: "#000000",
  },
  paper: {
    margin: "0 24px 0 24px",
  },
  apiVersion: {
    padding: "6px 16px 6px 16px",
    fontSize: ".80rem",
    color: "#727272",
  },
  divider: {
    marginTop: "6px",
    marginBottom: "6px",
  },
  firstMenu: { marginLeft: "60px!important" },
  leftMenus: {
    margin: "0 20px 0 20px",
    color: "#000000",
  },
  appBarDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      backgroundColor: "#fff",
      boxShadow: "none",
      minHeight: "64px",
      padding: "16px 0 16px 0",
    },
  },
  sectionDesktop: {
    display: "flex",
  },
}));

const Desktop = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar position="static" className={classes.appBarDesktop}>
      <Container>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link href="/">Your Website</Link>
          </Typography>

          <Typography
            className={`${classes.leftMenus} ${classes.firstMenu}`}
            noWrap
          >
            <Link href="/">Menu 1</Link>
          </Typography>

          <Typography className={classes.leftMenus} noWrap>
            <Link href="/">Menu 2</Link>
          </Typography>

          <Typography className={classes.leftMenus} noWrap>
            <Link href="/">Menu 3</Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuItem className={classes.menuItem}>
              <Button variant="contained" color="primary">
                Create Event
              </Button>
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Avatar>OP</Avatar> <ArrowDropDownIcon />
            </MenuItem>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              placement="bottom-end"
              disablePortal={true}
              modifiers={{
                flip: {
                  enabled: true,
                },
                preventOverflow: {
                  enabled: false,
                  boundariesElement: "scrollParent",
                },
              }}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper className={classes.paper}>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem>
                          <Link href="/account">User Account</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="/account">Logout</Link>
                        </MenuItem>
                        <Divider className={classes.divider} />
                        <Typography className={classes.apiVersion}>
                          YourApp v1.0.0
                        </Typography>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Desktop;
