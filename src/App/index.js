import React from "react";
import { CircularProgress, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
//import { Button, CssBaseline } from "@material-ui/core";
import { theme } from "./theme";
import Header from "../Header";
//import PizzaCard from "../PizzaCard";
import PizzaList from "../PizzaList";
import { useQuery } from "react-query";
const fetechPizzas = () =>
  fetch("http://localhost:3001/pizzas").then((response) => response.json());

export default function App() {
  // const [pizzas, setPizzas] = React.useState([]);
  const { status, data } = useQuery("pizzas", fetechPizzas);

  /* React.useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((response) => response.json())
      .then((pizzas) => setPizzas(pizzas));
  }, []);*/

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header shoppingCartCount={3} />
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={data} />}
    </ThemeProvider>
  );
}
