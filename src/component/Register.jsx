import React, { useState } from 'react';
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Register = () => {
    const [send, setSend] = useState(false)

    const postData = () =>{
        axios({
            method:'POST',
            url:"http://prueba.brik.cl/api/register",
            data:{
                name: '',
                lastNameOne: '',
                lastNameTwo: '',
                rut: '',
                email: '',
                username: '',
                password: ''
            },
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })

    }
    return (
        <>
            <Formik
            initialValues={{
                name: '',
                lastNameOne: '',
                lastNameTwo: '',
                rut: '',
                email: '',
                username: '',
                password: ''

            }}
            //validacion del nombre
            validate ={(valor) => {
                let mistakes = {};

                if(!valor.name){
                    mistakes.name= 'favor ingresar nombre'
                } else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valor.name)) {
                    mistakes.name= 'Solo debe contener letras y espacios'
                } 

                //validacion correo                
                if(!valor.email){
                    mistakes.email= 'favor ingresar email valido'
                } else if( !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valor.email)) {
                    mistakes.email= 'favor ingresar email valido'
                }             
                //validacion de rut               
                if(!valor.rut){
                    mistakes.rut= 'favor ingresar rut valido'
                } else if( !/^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/.test(valor.rut)) {
                    mistakes.rut= 'favor ingresar rut valido'
                } 
                //validar rut      
                     
                return mistakes;
            }}                    

             onSubmit = {(values, {resetForm}) => {
                postData();
                resetForm();
                setSend(true);
            }}
            >      
                {( {errors}) => (                
                <Form className='formulario'>
                   
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <Field 
                        type="text" 
                        name="name" 
                        id="name"                        
                        />
                        <ErrorMessage name='name' component={() => (<p className='errors'>{errors.name}</p>)}/>
                        
                    </div>
                    <div>
                        <label htmlFor="lastNameOne">Apellido Paterno</label>
                        <Field 
                        type="text" 
                        name="lastNameOne" 
                        id="lastNameOne"                         
                        />
                    </div>
                    <div>
                        <label htmlFor="lastNameTwo">Apellido Materno</label>                        
                        <Field 
                        type="text" 
                        name="lastNameTwo" 
                        id="lastNameTwo"                        
                        />
                    </div>
                    <div>
                        <label htmlFor="rut">Rut</label>
                        <Field 
                        type='text' 
                        name="rut" 
                        id="rut"                        
                        />
                        <ErrorMessage name='rut' component={() => (<p className='errors'>{errors.rut}</p>)}/>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <Field 
                        type="email" 
                        name="email" 
                        id="email"  
                        />
                        <ErrorMessage name='email' component={() => (<p className='errors'>{errors.email}</p>)}/>
                    </div>
                    <div>
                        <label htmlFor="username">Nombre de Usuario</label>
                        <Field 
                        type="text" 
                        name="username" 
                        id="username" 
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <Field 
                        type="password" 
                        name="password" 
                        id="password" 
                        />                        
                    </div>
                    <button type="submit">Enviar</button>
                    { send && <p className='send'>Formulario enviado con exito</p>}
                </Form>
                )}
            </Formik>
        </>
    )
}

/*import React, { useState } from 'react';
//import { userApi } from './api/userApi'
import { Formik } from 'formik';

export const Register = () => {
    const [send, setSend] = useState(false)
    return (
        <>
            <Formik
            initialValues={{
                name: '',
                lastNameOne: '',
                lastNameTwo: '',
                rut: '',
                email: '',
                username: '',
                password: ''

            }}
            //validacion del nombre
            validate ={(valor) => {
                let mistakes = {};

                if(!valor.name){
                    mistakes.name= 'favor ingresar nombre'
                } else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valor.name)) {
                    mistakes.name= 'Solo debe contener letras y espacios'
                } 

                //validacion correo                
                if(!valor.email){
                    mistakes.email= 'favor ingresar email valido'
                } else if( !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valor.email)) {
                    mistakes.email= 'favor ingresar email valido'
                }             
                //validacion de rut               
                if(!valor.rut){
                    mistakes.rut= 'favor ingresar rut valido'
                } else if( !/^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/.test(valor.rut)) {
                    mistakes.rut= 'favor ingresar rut valido'
                } 
                //validar rut      
                     
                return mistakes;
            }}                    

             onSubmit = {(valor, {resetForm}) => {
                console.log(valor);
                console.log('hola formulario');
                resetForm();
                setSend(true);
            }}
            >      
                {( {values, errors, touched, handleSubmit, handleChange, handleBlur}) => (                
                <form onSubmit={handleSubmit}>
                   
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder='nombres' 
                        defaultValue={values.name}
                        onChange={handleChange} 
                        onBlur={handleBlur}/>
                        {touched.name && errors.name && <p className='errors'>{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="lastNameOne">Apellido Paterno</label>
                        <input 
                        type="text" 
                        name="lastNameOne" 
                        id="lastNameOne" 
                        defaultValue={values.lastNameOne}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    </div>
                    <div>
                        <label htmlFor="lastNameTwo">Apellido Materno</label>                        
                        <input 
                        type="text" 
                        name="lastNameTwo" 
                        id="lastNameTwo" 
                        defaultValue={values.lastNameTwo}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    </div>
                    <div>
                        <label htmlFor="rut">Rut</label>
                        <input 
                        type='text' 
                        name="rut" 
                        id="rut"                          
                        defaultValue={values.rut}
                        onChange={handleChange} 
                        onBlur={handleBlur}/>
                        {touched.rut && errors.rut && <p className='errors'>{errors.rut}</p>}
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email"            
                        defaultValue={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                        {touched.email && errors.email && <p className='errors'>{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="username">Nombre de Usuario</label>
                        <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        defaultValue={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        defaultValue={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur} />                        
                    </div>
                    <button type="submit">Enviar</button>
                    { send && <p className='send'>Formulario enviado con exito</p>}
                </form>
                )}
            </Formik>
        </>
    )
}*/

