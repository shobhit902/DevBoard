import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Layout from "./RootLayout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { UserProvider } from "./appwrite/User";
import { Login } from "./Pages/Login";

function App() {
  const isLoginPage = window.location.pathname === "/login";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />

      </Route>
    )
  );

  return (
    <UserProvider>
      <main>
        <RouterProvider router={router} />
        {isLoginPage ? <Login /> : ""}
      </main>
    </UserProvider>
  );
}

export default App;
