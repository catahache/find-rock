import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./page-search-result";
import PageHome from "./page-home";
import PageArtist from "./page-artist";

class App extends Component {
    render() {
        return <PageArtist></PageArtist>;
    }
}

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

export default App;
