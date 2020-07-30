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

const Password = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box>
        <h3 className={classes.h3}>Change Password</h3>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>Current Password</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                placeholder="Current password"
                type="password"
                id="password"
              />
            </Grid>

            <Grid item xs={12}>
              <label>New Password</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="new-password"
                placeholder="New password"
                type="password"
                id="new-password"
              />
            </Grid>

            <Grid item xs={12}>
              <label>Repeat Password</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="repeat-password"
                placeholder="Repeat password"
                type="password"
                id="repeat-password"
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

export default Password;
