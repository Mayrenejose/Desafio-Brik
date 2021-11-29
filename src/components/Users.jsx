import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ButtonBack } from './ButtonBack';
import { Table } from 'reactstrap';

export const Users = () => {

    const [user, setsUser] = useState([])

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        const data = '';
        const config = {
            method: 'get',
            url: 'http://prueba.brik.cl/api/users',
            headers: {
                'Authorization': localStorage.getItem('token')
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                setsUser(response.data.data);
                console.log( response.data.data, localStorage.getItem('token'));
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    return (
        <div>

            <Table striped>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Usuario
                        </th>
                        <th>
                           Email
                        </th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(item => (
                            <tr  key={item.id}>
                                <th scope="row">
                                {item.id}
                                </th>
                                <td>
                                {item.name}
                                </td>
                                <td>
                                {item.email}
                                </td>                                
                            </tr>
                            
                        ))
                    }
                </tbody>
            </Table>
                 
            <ButtonBack />
        </div>
    )
}
