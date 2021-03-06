import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
//import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { func, number } from "prop-types";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});
export default function Header({ shoppingCartCount, displayPopinCart }) {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Pizzeria Astrid
        </Typography>
        <IconButton
          aria-label={`${shoppingCartCount} pizza`}
          color="inherit"
          onClick={displayPopinCart}
        >
          <Badge badgeContent={shoppingCartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
Header.defaultProps = {
  shoppingCartCount: 0,
  displayPopinCart: Function.prototype,
};
Header.propTypes = {
  shoppingCartCount: number,
  displayPopinCart: func,
};
