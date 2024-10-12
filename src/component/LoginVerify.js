const LoginCheck = (event) =>{
    fetch('http://localhost:5000/accounts', {method: 'GET'})

    if('http://localhost:5000/accounts/:id' === "HotelGuest@email.com" && 'http://localhost:5000/accounts/:password' === 'Guest123'){
        document.getElementById('Login').hidden = true;
        document.getElementById('Register').hidden = true;

        window.location = '/';
    }
    else if ('http://localhost:5000/accounts/:email' === "HotelGuest2@email.com" && 'http://localhost:5000/accounts/:password' === "Guest2123"){
        document.getElementById('Login').hidden = true;
        document.getElementById('Register').hidden = true;

        window.location = '/';
    }
    else if (!'http://localhost:5000/accounts/:email' || !'http://localhost:5000/accounts/:password'){
        alert('Invalid Username or Password');
    }

}

export default LoginCheck;