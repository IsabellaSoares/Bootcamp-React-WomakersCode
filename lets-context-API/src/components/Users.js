
import React from 'react'
 
import { getUsers } from '../service/api'
 
function Users(props) {
 
    const handleGetUsers = async () => {
        const { showLoading, hideLoading } = props;

        showLoading('Carregando usuários...');

        const response = await getUsers().then(response => {
            hideLoading();
            return response;
        });

        console.log({ response });
    }
 
    return(<button onClick={handleGetUsers}>Buscar usuários</button>);
}
 
export default Users