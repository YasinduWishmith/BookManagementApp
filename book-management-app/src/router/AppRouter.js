import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";
import useLocalStorage from "../Hooks/useLocalStorage";
import EditBook from "../components/EditBook";

const AppRouter = () => {

    const [books, setBooks] = useLocalStorage('books', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route
                        render={(props) => (
                            <BookList {...props} books={books} setBooks={setBooks} />
                        )}
                        path="/"
                        exact={true}
                    />
                    <Route
                        render={(props) => (
                            <AddBook {...props} books={books} setBooks={setBooks} />
                        )}
                        path="/add"
                    />
                    <Route
                        render={(props) => (
                            <EditBook {...props} books={books} setBooks={setBooks} />
                        )}
                        path="/edit/:id"
                    />
                    <Route component = {() => <Redirect to = "/"/>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;