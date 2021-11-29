import React from 'react';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

export const ButtonBack = () => {
    return (
        <div> 

            <Link to='/'><Button color="secondary" size='lg' className='buttonBack'>Volver</Button></Link>

        </div>
    )
}
