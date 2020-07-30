import React from "react";
import { Container, Box, Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: "24px 0 24px 0",
    "& label": {
      fontSize: "16px",
      marginBottom: "5px",
      display: "block",
    },
  },
  button: {
    margin: "24px 0 24px 0",
  },
  h3: {
    marginBottom: "0",
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box>
        <h3 className={classes.h3}>Basic Information</h3>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <label>First Name</label>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                placeholder="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label>Last Name</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                placeholder="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <label>Email Address</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Save
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Profile;
