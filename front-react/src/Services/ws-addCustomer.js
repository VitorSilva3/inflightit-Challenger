import React, { useEffect, useState } from 'react'
import Api from './Api'

export default function addCustomer(name, priority) {
    const [user, setUser] = useState();
    
    useEffect() {
        Api.post("addCustomer", {
            name: this.state.name,
            priority: this.state.priority
        })
        .then((res) => setUser(res.data))
        .catch((err) => { 
            alert("Algo correu mal!")
            console.log(err)
        });
    }
}
