import React, { useState} from "react";

import DeleteModal from "./DeleteHomestay/DeleteModal";
import UpdateModal from "./UpdateHomestay/UpdateModal"

function HomestayCard (homestay){
    const {_id, name, province, district, admin, hasAdmin} = homestay.detail;
    const [reload,setReload] = homestay.reload
    let [isOpen, setIsOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    return (
        <tr key={_id} className="break-all">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="text-base font-medium text-gray-900 truncate">{name}</div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-base text-gray-900">{province}</div>
                <div className="text-sm text-gray-500">{district}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {hasAdmin
                    ?(<span 
                        className="
                        px-2 inline-flex text-center text-sm leading-5 font-semibold rounded-full 
                      bg-green-100 text-green-800
                      ">
                        Đã có admin
                    </span>) 
                    :(<span 
                        className="
                        px-2 inline-flex text-center text-sm leading-5 font-semibold rounded-full 
                        bg-red-100 text-red-800
                      ">
                        Chưa có admin
                    </span>)}
            </td>
            <td>                 
                { hasAdmin
                ? (<p className="py-4 whitespace-nowrap text-base text-gray-500 truncate"> {admin?.name} </p>)
                : null
                }
            </td>

            <td className="px-3 py-4 whitespace-nowrap text-right text-base font-medium">
                <button 
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={() => setUpdate(true)}
                >
                Cập nhật
                </button>
            </td>

            <td className="px-3 py-4 whitespace-nowrap text-center text-base font-medium">
                <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={()=> setIsOpen(true)}
                >
                Xóa
                </button>
            </td>
            <DeleteModal 
                deleteProp = {[isOpen, setIsOpen]} 
                _id={_id}
                reload = {[reload,setReload]}
            />
            <UpdateModal
                openProp = {[update, setUpdate]}
                _id={_id}
                reload = {[reload,setReload]}
            />
        </tr>
    )
}
export default HomestayCard