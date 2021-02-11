import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ArtistCard from "./components/artist-card";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./components/search-bar";
import SearchResult from "./components/search-result";

// class App extends Component{}
// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <h1>Hola catita</h1>
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

class PageSearchResult extends Component {
    //levantar el estado
    state = {
        busqueda:"",
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <React.Fragment>
                <SearchBar setValue={this.handleChange} searchResult={this.state.busqueda}></SearchBar>
                <SearchResult searchResult={this.state.busqueda}></SearchResult>
            </React.Fragment>
        );
    }
}

export default PageSearchResult;
