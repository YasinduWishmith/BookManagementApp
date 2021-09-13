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
            <Switch>
                <Route component={BookList} path = "" exact = {true}/>
                <Route component = {AddBook} path ="/add" />
            </Switch>
        </div>
        </BrowserRouter>
    );
};

export default AppRouter;