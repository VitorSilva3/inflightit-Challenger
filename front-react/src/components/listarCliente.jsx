import React, { useState, useEffect } from 'react';
import Api from '../Services/Api';

export default function ListarCliente() {
    const [cliente, setCliente] = useState("");


    useEffect(() => {
        Api
            .get('')
            .then((res) => {setCliente(res.data); console.log(res.data)})
            .catch((err) => alert(err));
    }, []);
    
    // const clientes = (cliente.length === 0) ? <h2>Sem Clientes</h2> : cliente
    // console.log(`**** ${cliente.length} ****`)
    // console.log(`---- ${clientes} ----`)

    // console.log(`**** ${cliente.length} ****`)
    // console.log(`---- ${cliente[2].name} ----`)

    //{ clientes.map((cli) => <h2 key={cli.id}>{cli.name} - {cli.priority}</h2>) }
    // { (clientes) ? clientes : <h2>false</h2>  }

    //{ (!cliente) ? <h2>Sem dados</h2> : cliente.map((cli) => { return (<h3>{cli.name} -- {cli.priority}</h3> )}) }
    return ( 
        <div>
            <ul>
                { (!cliente.length) ? <h2>Sem dados</h2> : cliente.map((cli) => { 
                return (                   
                    <li key={cli._id}>
                        <h3>{cli.name} -- {cli.priority}</h3>
                    </li>
                )}) }
            </ul>
        </div>
    )
}