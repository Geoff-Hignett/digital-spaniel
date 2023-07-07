import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./apiSlice";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/nav/Nav";

function App() {

  return (
    <>
        <ApiProvider api={apiSlice}>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </ApiProvider>
    </>
  )
}

export default App
