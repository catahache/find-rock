import React from "react";
import "./search-bar.css";
import logo from "../logo.svg";

class SearchBar extends React.Component {
    // Variable de estado
    // state = {
    //     busqueda: "",
    // };
    // handleChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };
    // handleCatiten = (e) => {
    //     this.props.catiten(e.target.value)
    // }

    // handleClick = (e) => {
    //     e.preventDefault();//no refresh
    // };

    handleSubmit = (e) => {
        e.preventDefault();
    };
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-2">
                        <img src={logo} alt="" className="logo-barra" />
                    </div>
                    <div className="col-md-4">
                        <form
                            name="form"
                            action=""
                            className="form-inline"
                            onSubmit={this.handleSubmit}
                        >
                            <div className="busqueda">
                                <input
                                    name="busqueda"
                                    type="text"
                                    id="buscar"
                                    value={this.props.searchResult}//renderiza una sola vez, esta prop se la envia el padre
                                    placeholder="Busca una banda"
                                    onChange={this.props.setValue}//handleChange
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
            </React.Fragment>
        );
    }
}

export default SearchBar;
