import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

import CreateForm from "../CreateHomestay/CreateForm";

function Modal (props){
    const [isOpen, setIsOpen] = props.openProps;
    const closeModal = () => setIsOpen(false);

    const [amenities, setAmenities]= useState([])
    const [generalServices, setGeneralServices] = useState([])
    const [services, setServices] = useState([])

    const [infor, setInfor] = useState(
        {
            name: "" ,
            province: "",
            district : "",
            address : "",
            type: "",
            area: "",
            description: "",
            price : 0,
            adminId:""
        }, null
    )
    const [homestay, setHomestay]=useState({
        infor, amenities, generalServices, services
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (infor.name === "") {
            toast.error("Chưa điền Tên homestay");
        } else if (infor.province === "") {
            toast.error("Chưa điền Tỉnh/ Thành phố");
        } else 
        try {
            axios.post('http://localhost:8000/super-admins/create/homestays', {
                name: infor.name,
                province: infor.province,
                district: infor.district,
                address: infor.address,
                type: infor.type,
                price: infor.price,
                adminId: infor.adminId,
                description: infor.description,
                are: infor.area,
                amenities: amenities,
                generalServices: generalServices,
                services: services
            })
            toast.success("Thêm mới Homestay thành công!")
            setIsOpen(false)
            setAmenities([])
            setGeneralServices([])
            setServices([])
            setInfor({
                name: "" ,
                province: "",
                district : "",
                address : "",
                type: "",
                area: "",
                description: "",
                price : 0,
                adminId:""
            }, null)
        } catch(err) {
            console.log(err.message)
        }    
        
    }

    const uploadHomestay=(files) =>{
        const formData=new FormData();
        formData.append("files", files[0])
        formData.append("homestay", homestay)
    }
    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto backdrop-filter backdrop-brightness-50"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                        <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                        &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                        <div className="
                            inline-block w-11/12 p-6 my-8 overflow-hidden text-left 
                            align-middle transition-all transform bg-white shadow-xl rounded-2xl"
                            >
                            <div className="relative">
                                <Dialog.Title
                                    as="h3"
                                    className="text-xl font-bold leading-6 text-gray-900 text-center"
                                >
                                    Tạo Homestay mới
                                </Dialog.Title>
                                <button
                                    className="absolute top-0 right-0 rounded-full transition ease-in-out duration-400 hover:bg-gray-200"
                                    onClick={closeModal}
                                >
                                    <XIcon className="w-6 h-6" />
                                </button>
                            </div>
                            
                            <div className="my-4 border-t border-b max-h-xl overflow-x-hidden">
                                <div class="h-4 mt-3 text-gray-500 text-xs leading-8 text-right">
                                    <span class="text-red-400 mr-1">*</span> 
                                    Các trường bắt buộc phải điền
                                </div>
                                <CreateForm 
                                    inforProps={[infor, setInfor]}
                                    serviceProps={[services, setServices]}
                                    amenityProps={[amenities, setAmenities]}
                                    generalProps={[generalServices, setGeneralServices]}
                                />
                                <input
                                    type="file"
                                    onChange={(e)=>uploadHomestay(e.target.files)}
                                />
                            </div>

                            <div className="text-center">
                                <button 
                                    className="
                                        inline-flex justify-center px-4 py-2 text-md font-medium shadow-md 
                                        text-white bg-green-600 border border-transparent rounded-md 
                                        focus:cursor-pointer hover:bg-green-700 text-lg text-center"
                                    onClick={(e) => {
                                        handleSubmit(e);
                                        }}
                                    >
                                Xác nhận
                                </button>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
export default Modal;