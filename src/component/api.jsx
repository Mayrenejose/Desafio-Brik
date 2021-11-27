import axios from "axios";

//peticion post del registro
export const postData = (registerData) =>{   
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
        method:'POST',
        url:"http://prueba.brik.cl/api/register",
        data: formData
    })
    .then(res => {
        console.log(res.data);
        alert('registrado');
        
    })
    .catch(err => {
        console.log(err);
    }) 

}

//peticion post del login
export const postDataLogin = (loginData) =>{   
    const formDataLogin = new FormData();     

    formDataLogin.append('email', loginData.email)    
    formDataLogin.append('password', loginData.password)
    
     axios({
        method:'POST',
        url:"http://prueba.brik.cl/api/login",
        data: formDataLogin
    })
    .then(res => {
        console.log(res.data);
           
    })
    .catch(err => {
        console.log(err);
    }) 

}