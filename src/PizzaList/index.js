import React from "react";
import { arrayOf, shape, func } from "prop-types";
import PizzaCard from "../PizzaCard";
import { Grid, Typography } from "@material-ui/core";
import { isNilOrEmpty } from "ramda-adjunct";

export default function PizzaList({ data, addToCart }) {
  if (isNilOrEmpty(data))
    return (
      <Typography variant="body1" componenr="p">
        pas de pizza en ce moment
      </Typography>
    );
  return (
    <Grid container justify="space-evenly">
      {data.map(({ id, name, ingredients, imageUrl, price }) => (
        <Grid key={id} item xs={6}>
          <PizzaCard
            name={name}
            ingredients={ingredients}
            imageUrl={imageUrl}
            price={price}
            addToCart={addToCart}
          />
        </Grid>
      ))}
    </Grid>
  );
}

PizzaList.prototype = {
  data: arrayOf(shape(PizzaCard.prototypes)),
  addToCart: func,
};
PizzaList.defaultProps = {
  data: [],
  addToCart: Function.prototype,
};
