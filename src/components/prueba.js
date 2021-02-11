import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ArtistCard from "./components/artist-card";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./components/search-bar";
import SearchResult from "./components/search-result";

class Prueba extends Component {
    render() {
        return (
            <React.Fragment>
                <SearchBar></SearchBar>
                <SearchResult></SearchResult>
            </React.Fragment>
        );
    }
}

export default Prueba;