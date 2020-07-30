import React from "react";
import {
  Container,
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "24px 0 24px 0",
  },
  h3: {
    marginBottom: "0",
  },
  table: {
    marginTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  card: {
    padding: "15px 0 15px 0",
    marginTop: theme.spacing(2),
  },
}));

const Billing = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box>
        <h3 className={classes.h3}>Billing Details</h3>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography gutterBottom>Your plan</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Premium for $16.99/month
            </Typography>
            <Typography gutterBottom>Your next bill</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              August 14, 2020
            </Typography>
          </CardContent>
        </Card>
        <TableContainer className={classes.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Service period</TableCell>
                <TableCell align="left">Payment method</TableCell>
                <TableCell align="left">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">2020-07-14</TableCell>
                <TableCell align="left">Service 1</TableCell>
                <TableCell align="left">2020-07-14—2020-08-1</TableCell>
                <TableCell align="left">VISA •••• •••• •••• 3309</TableCell>
                <TableCell align="left">$16.99</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Billing;
