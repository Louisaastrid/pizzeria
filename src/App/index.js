import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
//import { Button, CssBaseline } from "@material-ui/core";
import { theme } from "./theme";
import Header from "../Header";
import PizzaCard from "../PizzaCard";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header shoppingCartCount={3} />

      <PizzaCard
        name="Reine"
        ingredients={["Olives", "Tomates", "Champignons"]}
        imageUrl="https://picsum.photos/350"
        price={8.99}
      />
    </ThemeProvider>
  );
}
