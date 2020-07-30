import React, { useState, useRef, useEffect } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import clsx from "clsx";

import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Container,
  Link,
  Avatar,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import {
  ArrowDropDown as ArrowDropDownIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon,
} from "@material-ui/icons";

const drawerWidth = 160;

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
  leftMenus: {
    margin: "0 20px 0 20px",
    color: "#000000",
  },
  appBarMobile: {
    display: "flex",
    backgroundColor: "#fff",
    boxShadow: "none",
    minHeight: "64px",
    padding: "16px 0 16px 0",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "flex",
  },

  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

const Desktop = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const anchorRef = useRef(null);

  const theme = useTheme();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

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
    <AppBar position="static" className={classes.appBarMobile}>
      <Container>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="persistent"
            anchor="left"
            open={drawerOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <List>
                <ListItem>
                  <ListItemText>
                    Logo{" "}
                    <IconButton onClick={handleDrawerClose}>
                      {theme.direction === "ltr" ? (
                        <ChevronLeftIcon />
                      ) : (
                        <ChevronRightIcon />
                      )}
                    </IconButton>
                  </ListItemText>
                </ListItem>
              </List>
            </div>
            <Divider />
            <List>
              <ListItem>
                <ListItemText>Create Event</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Menu 1</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Menu 2</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Menu 3</ListItemText>
              </ListItem>
            </List>
          </Drawer>

          <Typography className={classes.title} variant="h6" noWrap>
            <Link href="/">Logo</Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
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
