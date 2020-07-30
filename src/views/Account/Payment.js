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

const Payment = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box>
        <h3 className={classes.h3}>Change Credit Card</h3>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>Full Name</label>
              <TextField
                autoComplete="off"
                name="full-name"
                variant="outlined"
                required
                fullWidth
                id="full-name"
                placeholder="Name on the card"
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <label>Card Number</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="card-number"
                placeholder="Your Card Number"
                name="card-number"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <label>CVV</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cvv"
                placeholder="Card CVV"
                name="cvv"
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <label>Card Expiration Date</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="card-expiry-date"
                placeholder="Card expiration date"
                name="card-expiry-date"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label>Zip Code</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="zip-code"
                placeholder="Zip Code"
                name="zip-code"
                autoComplete="off"
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

export default Payment;
