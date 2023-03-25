import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import RecipeList from "../pages/RecipeList";
import NewRecipe from "../pages/NewRecipe";
import { useAutoLoginQuery, userApi } from '../app/services/userApi'

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/api/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  const { data: user=null, isFetching, error, refetch } = useAutoLoginQuery()
  console.log("🚀 ~ file: App.jsx:22 ~ App ~ error:", error)
  console.log("🚀 ~ file: App.jsx:22 ~ App ~ user:", user)

  const resetUserState = () => userApi.util.resetApiState()

  if (!user) return <Login refetch={refetch} />;

  return (
    <>
      <NavBar refetch={refetch} reset={resetUserState} />
      <main>
        <Switch>
          <Route path="/new">
            <NewRecipe user={user} />
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
