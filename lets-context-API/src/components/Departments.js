
import React from 'react'
 
import { getDepartments } from '../service/api'
 
function Departments(props) {
 
    const handleGetDepartments = async () => {
        const { showLoading, hideLoading } = props;

        showLoading('Carregando departamentos...');

        const response = await getDepartments().then(response => {
            hideLoading();
            return response;
        });

        console.log({ response });
    }
 
    return(<button onClick={handleGetDepartments}>Buscar departamentos</button>);
}
 
export default Departments
