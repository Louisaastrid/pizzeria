import React from "react";
import { arrayOf, shape } from "prop-types";
import PizzaCard from "../PizzaCard";
import { Typography } from "@material-ui/core";
import { isNilOrEmpty } from "ramda-adjunct";

export default function PizzaList({ data }) {
  if (isNilOrEmpty(data))
    return (
      <Typography variant="body1" componenr="p">
        pas de pizza en ce moment
      </Typography>
    );
  return (
    <>
      {data.map(({ id, name, ingredients, imageUrl, price }) => (
        <PizzaCard
          key={id}
          name={name}
          ingredients={ingredients}
          imageUrl={imageUrl}
          price={price}
        />
      ))}
    </>
  );
}

PizzaList.prototype = {
  data: arrayOf(shape(PizzaCard.prototypes)),
};
PizzaList.defaultProps = {
  data: [],
};
