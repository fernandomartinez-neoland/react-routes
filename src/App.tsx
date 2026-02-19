import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.component.tsx";
import "./App.css";
import About from "./pages/About.component.tsx";

const router = createBrowserRouter([
  {
    path: "/contact",
    element: <Contact />,
  },
  { path: "/about", element: <About /> },
]);

function App() {


  return <RouterProvider router={router} />;
}

export default App;
