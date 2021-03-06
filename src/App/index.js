import React from "react";
import { CircularProgress, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
//import { Button, CssBaseline } from "@material-ui/core";
import { theme } from "./theme";
import Header from "../Header";
//import PizzaCard from "../PizzaCard";
import PizzaList from "../PizzaList";
import { useQuery } from "react-query";
import PopinCart from "../PopinCart";
import { useList } from "react-use";

const fetechPizzas = () => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || "http://localhost:3001";

  return fetch(`${baseUrlApi}/pizzas`).then((response) => response.json());
};

export default function App() {
  // const [pizzas, setPizzas] = React.useState([]);
  const { status, data } = useQuery("pizzas", fetechPizzas);
  const [poppinCartOpen, setPopinCardOpen] = React.useState(false);
  const [cart, { push, reset }] = useList([]);

  const displayPopinCart = () => {
    setPopinCardOpen(true);
  };
  const hidePopinCart = () => {
    setPopinCardOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        shoppingCartCount={cart.length}
        displayPopinCart={displayPopinCart}
      />
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={data} addToCart={push} />}
      <PopinCart
        open={poppinCartOpen}
        hidePopinCart={hidePopinCart}
        reset={reset}
        cart={cart}
      />
    </ThemeProvider>
  );
}
