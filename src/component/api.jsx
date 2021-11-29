import axios from "axios";

//peticion post del registro
export const postData = (registerData) => {
    const formData = new FormData();

    formData.append('nombres', registerData.nombres)
    formData.append('apellido_paterno', registerData.apellido_paterno)
    formData.append('apellido_materno', registerData.apellido_materno)
    formData.append('rut', registerData.rut)
    formData.append('email', registerData.email)
    formData.append('name', registerData.name)
    formData.append('password', registerData.password)
    formData.append('password_confirmation', registerData.password_confirmation)
    axios({
        method: 'POST',
        url: "http://prueba.brik.cl/api/register",
        data: formData
    })
        .then(res => {
            console.log(res.data);
            alert('registrado');

        })
        .catch(err => {
            console.log(err);
        })

};
//peticion post del login
export const postDataLogin = (loginData) => {
    const data = JSON.stringify({
        "email": loginData.email,
        "password": loginData.password
    });

    const config = {
        method: 'post',
        url: 'http://prueba.brik.cl/api/login',
        headers: {
            'Authorization': 'Basic Og==',
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            let token= 'Bearer '+ response.data.data.accessToken
            console.log(JSON.stringify(response.data));
            localStorage.setItem('token', token);
            window.location.href = '/users'
        })
        .catch(function (error) {
            alert('Vuelve a intentarlo!')
            console.log(error);
        })
};
