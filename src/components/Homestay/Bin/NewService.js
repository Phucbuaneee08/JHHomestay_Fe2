import {useState} from 'react';

function NewService (props){
    const service=props.addServiceProps;
    const [isOpen, setIsOpen]=props.openProps
    const [newService, setNewService]=useState({})

    const handleInput = (e) => {
        const temp= {...newService}
        temp[e.target.name] = e.target.value 
        setNewService(temp)
        // service.push(newService)
        console.log(newService)
    };
    
    const handleAdd = () => {
        service.push(newService);
        alert("đã thêm service!")
      }
    return (
        <div show={isOpen}>
        <label htmlFor="name" className="flex flex-col p-2">
            <div class="font-bold h-6 text-gray-600 text-sm leading-8 uppercase">
                <span class="text-red-400 mr-1">*</span> 
                Tên dịch vụ
            </div>
            <input
               required
               className="border px-4 py-2 rounded-md focus:outline-none"
               id="name"
               type="text"
               name="name"
               value={newService.name}
               onChange = {(e) => handleInput (e)}
           />
       </label>
       <label htmlFor="pricePerUnit" className="flex flex-col p-2">
           <div class="font-bold h-6 mt-3 text-gray-600 text-sm leading-8 uppercase">
               Giá/ người
           </div>                
           <input
               className="border px-4 py-2 rounded-md focus:outline-none"
               id="pricePerUnit"
               type="text"
               name="pricePerUnit"
               pattern="[0-9]*"
               value={newService.pricePerUnit}
               onChange = {(e) => handleInput (e)}
           />
       </label>
       <label htmlFor="personServe" className="flex flex-col p-2">
           <div class="font-bold h-6 mt-3 text-gray-600 text-sm leading-8 uppercase">
               Số người phục vụ
           </div>                
           <input
               className="border px-4 py-2 rounded-md focus:outline-none"
               id="personServe"
               type="text"
               name="personServe"
               pattern="[0-9]*"
               value={newService.personServe}
               onChange = {(e) => handleInput (e)}
           />
       </label>
       <div className="text-center">
         <button 
             className="
                 inline-flex justify-center px-4 py-2 text-md font-medium shadow-md 
                 text-white bg-green-600 border border-transparent rounded-md 
                 focus:cursor-pointer hover:bg-green-700 text-lg text-center"
             onClick={(e) => {
                 handleAdd(e);
                 }}
             >
         Thêm
         </button>
     </div>
    
     </div>
    )
}
export default NewService;