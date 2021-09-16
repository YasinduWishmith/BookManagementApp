import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";
import useLocalStorage from "../Hooks/useLocalStorage";
import EditBook from "../components/EditBook";
import BooksContext from "../context/BooksContext";

const AppRouter = () => {

    const [books, setBooks] = useLocalStorage('books', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className = "main-content">
                    <BooksContext.Provider value = {{books, setBooks}}>
                        <Switch>
                            <Route component = {BookList} path = "/" exact = {true}/>
                            <Route component = {AddBook} path = "/add"/>
                            <Route component = {EditBook} path = "/edit/:id"/>
                            <Route component = {() => <Redirect to ="/"/>}/>
                        </Switch>

                    </BooksContext.Provider>

                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;