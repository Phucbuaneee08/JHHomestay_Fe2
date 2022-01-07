import React, {useState, useEffect} from "react";
import axios from "axios";

const ServiceForm = (props) => {
  const [service, setService] = props.serviceProps;
  const [tempList, setTempList] = useState([])
  
  // get all services in homestays
  useEffect(() => {
    const fetchData = async() => {
        try {
            const {data: response} = await axios.get('http://localhost:8000/services');
            setTempList(response.content)
            console.log(response.content)
        } 
        catch (error) {
            console.error(error.message);
          }
    }
    fetchData()
  }, [])

  //add state checked or unchecked
  function addCheckedState(tempList){
    return {
      _id: tempList._id,
      name: tempList.name,
      pricePerUnit: tempList.pricePerUnit,
      personServe: tempList.personServe,
      checked: false
    };
  }

  let serviceList = tempList.map(addCheckedState)
  console.log(serviceList)

  //set checked for services homestay had had
  serviceList.map(item => item.checked=false)
  service.map(item1 => (
    serviceList.map(item2 =>
        {
          if (item1.name===item2.name) item2.checked=true
        })
  ))  

  return (
    <div className="p-2 border-t ">
      <h1 className="font-bold h-6 mb-4 text-gray-600 text-sm leading-8 uppercase"> Dịch vụ đặt kèm </h1>
      <div className="grid grid-cols-2 gap-2 px-4">
      {serviceList.map((item, index) => (
          <label class="text-gray-700">
            {!item.checked ?
            (<input 
                type="checkbox"
                value=""
                defaultChecked={false}
                onClick={() => {
                  service.push(item); 
                  item.checked=true
                }}

            />) : (
              <input 
                  type="checkbox"
                  value=""
                  defaultChecked
                  onClick={() => {
                    service.splice(service.indexOf(item),1); 
                    item.checked=false
                  }}
              />
            )
            }
            <span class="ml-2">{item.name}</span>
            
          </label>
        ))}
      </div>
      
    </div>
  );
};

export default ServiceForm;
