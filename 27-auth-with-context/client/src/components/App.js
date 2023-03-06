import React, { useEffect, useContext } from "react";
import { UserContext } from '../context/user'
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import RecipeList from "../pages/RecipeList";
import NewRecipe from "../pages/NewRecipe";

function App() {
  // const [user, setUser] = useState(null);

  const [user, setUser] = useContext(UserContext)
  console.log(user)
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login />;

  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route path="/new">
            <NewRecipe />
          </Route>
          <Route path="/">
            <RecipeList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
