import React, { useState, useEffect,  } from 'react';
import { useSelector } from 'react-redux'
import ModalCreate from "../User/CreateAdmin/ModalCreate"
import axios from 'axios';
import AdminTable from '../User/AdminTable';


function User() {
    const { token } = useSelector((state) => state.authReducer);
    const [isCreate, setIsCreate] = useState(false)
    const [admin, setAdmin] = useState([])
    
    useEffect(() => {
        const fetchData = async() => {
            try {
                const {data: response} = await axios.get('http://localhost:8000/super-admins/get/admins', {
                    headers:{
                        Authorization: "Bearer " + token,
                    }
                });
                setAdmin(response.content)
            } 
            catch (error) {
                console.error(error.message);
              }
        }
        fetchData()
      },[])
    return(
        <div>
            <div>
                <button
                    className="
                    mx-2 my-2 px-3 py-2
                    border-2 border-gray-200 
                    rounded-lg
                    text-sm
                    transition duration-150 ease-in-out 
                    hover:border-gray-300"
                    onClick={() => setIsCreate(true)}
                >
                + Thêm Admin
                </button>
                    <ModalCreate openCreate={[isCreate, setIsCreate]} />
            </div>
                <div className='pb-10'>
                    <AdminTable 
                        adminProps={[admin, setAdmin]}
                    />
                    </div>    
        </div>
    )

}

export default User;