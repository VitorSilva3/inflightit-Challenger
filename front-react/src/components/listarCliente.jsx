import React, { useState, useEffect } from 'react';
import Api from '../Services/Api';

export default function ListarCliente() {
    const [cliente, setCliente] = useState("");

    const teste = []

    useEffect(() => {
        Api
            .get('')
            .then((res) => setCliente(res.data))
            .catch((err) => alert(err));
    }, []);
    
    const clientes = (cliente.length === 0) ? <h2>Sem Clientes</h2> : cliente
    console.log(`**** ${cliente.length} ****`)
    console.log(`---- ${clientes} ----`)
    //{ clientes.map((cli) => <h2 key={cli.id}>{cli.name} - {cli.priority}</h2>) }
    return ( 
        <div>
            { (clientes) ? clientes : <h2>false</h2>  }
        </div>
    )
}