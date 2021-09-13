import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
            <Header />
        </div>
        </BrowserRouter>
    );
};

export default AppRouter;