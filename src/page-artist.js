import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./components/search-bar";
import "./page-artist.css";
import SimilarArtist from "./components/similar-artist";

class PageArtist extends Component {
    //levantar el estado
    state = {
        busqueda: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    render() {
        return (
            <React.Fragment>
                <SearchBar
                    setValue={this.handleChange}
                    searchResult={this.state.busqueda}
                ></SearchBar>
                <div className="container">
                    <div className="row centrar">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <img
                                src="https://yt3.ggpht.com/Y0WeBddVJrxONL5YDRcW2wHJ7bJhn-LUpokdlZgVm6HvfXFtu8GkbYQsjGR-U-JqPEp3bGiy-A=s900-c-k-c0x00ffffff-no-rj"
                                alt="Bhavi"
                                className="pic-artist top50 margenes50"
                            />
                            <h2>Bhavi</h2>
                            <p>
                                Bhavi es un cantante de trap nacido como Indra
                                Bhalavan en Bélgica, el 22 de octubre de 1997, y
                                radicado en Argentina. En 2017 comenzó a grabar
                                y al poco tiempo se conectó con Mueva Records,
                                la productora con la cual trabaja.
                            </p>
                        </div>
                    </div>
                    <div className="row centrar centrado-flex">
                        <SimilarArtist></SimilarArtist>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PageArtist;
