import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { postDataLogin } from './api';
import { ButtonRegister } from './ButtonRegister';
import { Button } from 'reactstrap';


export const Beginning = () => {

    return (

        <>
            <Formik
                initialValues={{
                    email: '',
                    password: ''

                }}
                //validacion del email
                validate={(valor) => {
                    let mistakesLogin = {};

                    if (!valor.email) {
                        mistakesLogin.email = 'favor ingresar email valido'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valor.email)) {
                        mistakesLogin.email = 'favor ingresar email valido'
                    }

                    return mistakesLogin;
                }}

                onSubmit={(values, { resetForm }) => {
                    postDataLogin(values);
                    resetForm();

                }}

            >
                {({ errors }) => (
                    <Form className='formularioLogin'>
                        <div>
                            <h1>Login</h1>
                            <label htmlFor="email" className='labelLogin'>E-mail</label><br/>
                            <Field
                                className='inputLogin'
                                type="email"
                                name="email"
                                id="email"
                            />
                            <ErrorMessage name='email' component={() => (<p className='errors'>{errors.email}</p>)} />

                        </div>
                        <div>
                            <label htmlFor="password" className='labelLogin'>Contraseña</label><br/>
                            <Field
                                className='inputLogin'
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>
                        <br/>
                        <Button type="submit" color="light" outline size="lg" className='buttonLogin'>Enviar</Button><br/>
                        <br/>
                        <ButtonRegister /><br/>
                    </Form>
                )}
            </Formik>
            
        </>
    )
}

