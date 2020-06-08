import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import { arrayOf, string, number } from "prop-types";
const imageSize = 175;
const useStyles = makeStyles({
  root: {
    maxWidth: imageSize,
  },
});

export default function PizzaCard({ name, ingredients, price, imageUrl }) {
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
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
}

PizzaCard.propTypes = {
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  price: number.isRequired,
  imageUrl: string,
};
PizzaCard.defaultProps = {
  imageUrl: null,
};
