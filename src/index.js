import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// // Carga App.js
ReactDOM.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>,
    document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//js vanilla:
// let elemento = document.createElement("p");
// elemento.innerHTML = "Soy catita de lanu";

// //donde se va a renderizar:
// let contenedor = document.getElementById("root");
// contenedor.appendChild(elemento);

//jsx
// let elemento = <p>Hola soy catita desde jsx</p>;
// let container = document.getElementById("root");
// //React hace ese appendChild a traves de ReactDOM
// ReactDOM.render(elemento, container); //renderiza el elemento en el container

//create element
// let jsx = React.createElement("h1", {}, "Hola soy catita desde create element");
// let container = document.getElementById("root");
// ReactDOM.render(jsx, container);

//create element multiple
// let nombre = "cata";
// let numero = 6;
// let calculo = (num1, num2) => {
//     return num1 + num2;
// };
// let jsxMultiple = (
//     <div>
//         <h1>Hola {nombre}</h1>
//         <h3>Hola {numero + 3}</h3>
//         <p>Hola {calculo(3, 5)}</p>
//     </div>
// );

// let container = document.getElementById("root");
// ReactDOM.render(jsxMultiple, container);
