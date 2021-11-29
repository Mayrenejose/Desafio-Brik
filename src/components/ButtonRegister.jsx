import React from 'react';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

export const ButtonRegister = () => {
    return (
        <div> 

            <Link to='/register'><Button color="secondary" block>
                Registrate
            </Button></Link>

        </div>
    )
}
