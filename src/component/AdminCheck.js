import React, { useState } from 'react';

const AdminCheck = (event) =>{
    const [index] = useState([]);

    fetch('http://localhost:5000/accounts', {method: 'GET'})
        .then(response => index.json());

    if('http://localhost:5000/accounts/:Role' === "Admin"){
        document.getElementById('Admin').hidden = false
    }
    else{
        document.getElementById('Admin').hidden = true
    }
}

export default AdminCheck;