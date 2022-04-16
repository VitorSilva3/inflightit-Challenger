import React, { Component } from 'react';

import AdicionarCliente from './adicionarCliente';
import ListarCliente from './listarCliente';

class pagCliente extends Component {
    state = {  } 

    

    render() { 
        return (
            <react-DocumentFragment>
                <AdicionarCliente />
                <ListarCliente />
            </react-DocumentFragment>
        );
    }
}
 
export default pagCliente;
