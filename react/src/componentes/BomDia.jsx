import React from "react";

export default props =>
    <React.Fragment>
        <h1>Bom dia {props.nome}! Você completou {props.idade} e ganhou brinde por isso, <a href="www.mundotaticobr.com.br">saiba mais!</a></h1>
        <h3>:)</h3>
    </React.Fragment>


    /*
    import React, { Fragment } from "react";

    <Fragment>
        <h1>Bom dia {props.nome}! Você completou {props.idade} e ganhou brinde por isso, <a href="#">saiba mais!</a></h1>
        <h3>:)</h3>
    </Fragment>*/