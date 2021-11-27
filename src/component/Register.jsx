import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { postData } from './api';

export const Register = () => {
    const [send, setSend] = useState(false)
    
    return (
        
        <>
         <Formik
            initialValues={{
                nombres: '',
                apellido_paterno: '',
                apellido_materno: '',
                rut: '',
                email: '',
                name: '',
                password: '',
                password_confirmation:''
            }}
            //validacion del nombre
            validate ={(valor) => {
                let mistakes = {};

                if(!valor.nombres){
                    mistakes.nombres= 'favor ingresar nombre'
                } else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valor.nombres)) {
                    mistakes.nombres= 'Solo debe contener letras y espacios'
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
                  
                     
                return mistakes;
            }}                    

             onSubmit = {(values, {resetForm}) => {
                postData(values);
                resetForm();
                setSend(true);
            }}
            
            >      
                {( {errors}) => (                
                <Form className='formulario'>                   
                    <div>
                        <label htmlFor="nombres">Nombres</label>
                        <Field 
                        type="text" 
                        name="nombres" 
                        id="nombres"                        
                        />
                        <ErrorMessage name='nombres' component={() => (<p className='errors'>{errors.nombres}</p>)}/>
                        
                    </div>
                    <div>
                        <label htmlFor="apellido_paterno">Apellido Paterno</label>
                        <Field 
                        type="text" 
                        name="apellido_paterno" 
                        id="apellido_paterno"                         
                        />
                    </div>
                    <div>
                        <label htmlFor="apellido_materno">Apellido Materno</label>                        
                        <Field 
                        type="text" 
                        name="apellido_materno" 
                        id="apellido_materno"                        
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
                        <label htmlFor="name">Nombre de Usuario</label>
                        <Field 
                        type="text" 
                        name="name" 
                        id="name" 
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
                    <div>
                        <label htmlFor="password_confirmation">Confirma tu Contraseña</label>
                        <Field 
                        type="password" 
                        name="password_confirmation" 
                        id="password_confirmation" 
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

