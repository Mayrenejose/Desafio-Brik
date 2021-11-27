import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { postDataLogin } from './api';

export const Beginning = () => {
        
    return (
        
        <>
         <Formik
            initialValues={{                
                email: '',
                password: ''
                
            }}
            //validacion del email
            validate ={(valor) => {
                let mistakesLogin = {};
                             
                if(!valor.email){
                    mistakesLogin.email= 'favor ingresar email valido'
                } else if( !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valor.email)) {
                    mistakesLogin.email= 'favor ingresar email valido'
                }          
                   //"N4V2VAaX7UmSdg09WGcSn92pDgrVgyj55Gm7Yo7JQu6BUfw3ShyZu2MIZxjo"
                     
                return mistakesLogin;
            }}                    

             onSubmit = {(values, {resetForm}) => {
                postDataLogin(values);
                resetForm();
                
            }}
            
            >      
                {( {errors}) => (                
                <Form className='formularioLogin'>                   
                  
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
                        <label htmlFor="password">Contraseña</label>
                        <Field 
                        type="password" 
                        name="password" 
                        id="password" 
                        />                        
                    </div>                    
                    <button type="submit">Enviar</button>
                   
                </Form>
                )}
            </Formik>
        </>
    )
}