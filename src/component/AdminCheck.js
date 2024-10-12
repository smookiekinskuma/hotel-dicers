const AdminCheck = (event) =>{
    fetch('http://localhost:5000/accounts', {method: 'GET'})

    if('http://localhost:5000/accounts/:Role' === "Admin"){
        document.getElementById('Admin').hidden = false
    }
    else{
        document.getElementById('Admin').hidden = true
    }
}

export default AdminCheck;