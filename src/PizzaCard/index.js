import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Price from "../Price";

import { arrayOf, string, number, func } from "prop-types";
const imageSize = 175;
const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(2)}px`,
  },
  Button: {
    flexGrow: 1,
  },
}));

export default function PizzaCard({
  id,
  name,
  ingredients,
  price,
  imageUrl,
  addToCart,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {imageUrl && (
        <CardMedia
          component="img"
          alt={name}
          height={imageSize}
          image={imageUrl}
          title={name}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {ingredients.join(", ")}
        </Typography>
        <Typography variant="h4" component="p">
          <Price value={price} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.Button}
          color="primary"
          variant="contained"
          onClick={() => {
            addToCart({ id, name, price, addDate: Date.now() });
          }}
        >
          Ajouter
        </Button>
      </CardActions>
    </Card>
  );
}

PizzaCard.propTypes = {
  id: number,
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  price: number.isRequired,
  imageUrl: string,
  addToCart: func,
};
PizzaCard.defaultProps = {
  imageUrl: null,
  addToCart: Function.prototype,
};
