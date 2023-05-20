import React, {useState, useEffect} from "react";

const FilterApi = ()=>{

    ///setear los hook useState
    const [users, setUsers]= useState([])
    const [buscar, setBuscar]= useState("")


    ///funcion para traer los datos de la api
    const showData= async ()=>{
        const resp= await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        ///console.log(data);
        setUsers(data)


    }

    useEffect(()=>{
        showData();
    }, [])


    ///metodo de filtrado
    let results=[]

    if(!buscar){
        results=users
    }else{
        results= users.filter((dato)=> 
            dato.name.toLowerCase().includes(buscar.toLocaleLowerCase())
            )
    }




    ///funcion de busqueda
    const buscador=(e)=>{
        setBuscar(e.target.value)
        console.log(buscar)
    }


    //rendarizacion de la vista
    return(
        <>
            <input value={buscar} onChange={buscador} type="text" placeholder="Buscar" className="form-control"/>
            <table className="table table-striped table-hover mt-5 shadow-lg">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">UserName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        results.map((user)=>(
                           <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                           </tr> 
                        ))
                    }

                </tbody>
            </table>
        </>
    );
}

export default FilterApi;