import React, {useState, useEffect} from "react";
import axios from "axios";

const ServiceForm = (props) => {
  const [service, setService] = props.serviceProps;
  const [serviceList, setServiceList] = useState([])
  const [addService, setAddService] = useState(false)
  
  useEffect(() => {
    const fetchData = async() => {
        try {
            const {data: response} = await axios.get('http://localhost:8000/services');
            setServiceList(response.content)
            console.log(response.content)
        } 
        catch (error) {
            console.error(error.message);
          }
    }
    fetchData()
  }, [])

  return (
    <div className="p-2 border-t ">
      <h1 className="font-bold h-6 mb-4 text-gray-600 text-sm leading-8 uppercase"> Dịch vụ đặt kèm </h1>
      <div className="grid grid-cols-2 gap-2 px-4">
        {serviceList.map((item, index) => (
          <label class="text-gray-700">
            <input 
              type="checkbox"
              value="" 
              onClick={() => {
                service.push(item);
                // newService.length
              }}
            />
            <span class="ml-2">{item.name}</span>
            
          </label>
        ))}
      </div>
      
    </div>
  );
};

export default ServiceForm;
