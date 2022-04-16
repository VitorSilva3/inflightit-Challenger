import { useState } from 'react';
import Api from '../Services/Api' 

export default function FormCliente() {
    const [user, setUser] = useState("");
    const [priority, setPriority] = useState("");

    const registar = (event) => {
        event.preventDefault();

        if(!priority || !user) { alert(`Preenchimento incompleto!`); return }
        if(priority > 10 || priority < 0) { alert(`Prioridade tem de estar entre 0 e 10`); return } 

        Api.post("addCustomer", {
            name: user,
            priority: priority
        })
        .then((res) => { alert(`Cliente registado com sucesso`); console.log(res.data) })
        .catch((err) => { 
            alert("Algo correu mal!")
            console.log(err)
        });
    }
 
    return (
            <div>
                <form onSubmit={registar}>
                    <label>Nome: <input type="text" value={user} onChange={(e) => setUser(e.target.value)} /></label>
                    <label>Prioridade: <input type="number" value={priority} onChange={(e) => setPriority(e.target.value)} /></label>
                    <input type="submit" /> 
                </form>
            </div>
    )
}