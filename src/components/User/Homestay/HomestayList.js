
import axios from "axios";
import { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import { toast } from "react-toastify";

function HomestayList(props){
    const _id  = props._id
    const { token } = useSelector((state) => state.authReducer);
    const [homestayNameList,setHomestayNameList] = useState([])
    const [homestayIdList,setHomestayIdList] = useState([])
   
    useEffect(()=>{
        axios({
            method: "GET",
            url:`http://localhost:8000/super-admins/get/admin/${_id}`,
            headers:{
                Authorization: "Bearer " + token
            }
        }).then((res)=>{
            const tmphomestayIdList = [...res.data.content.homestays]
            setHomestayIdList(tmphomestayIdList)
            console.log(tmphomestayIdList)
            homestayIdList.map((item,index)=>{
                axios({
                    method:"GET",
                    url:`http://localhost:8000/homestays/information/${item}`,
                    headers:{
                        Authorization: "Bearer " + token
                    }
                }).then((response)=>{
                    console.log(response.data.content.homestay.name)
                    const name = [...response.data.content.homestay.name]
                    
                })
            })
        }).catch((err)=>{
            console.log(err)
            toast(err.message)
        })
    },[])

    return(
        <div>
            {homestayIdList}
        </div>
    )
}

export default HomestayList