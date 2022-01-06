import React from "react";

import InformationForm from "./InformationForm";
import ServiceForm from "./ServiceForm";
import AmenityForm from "./AmenityForm";
import GeneralServiceForm from "./GeneralServiceForm";

const CreateForm = (props) => {
    
    return (          
        <div className="m-4 grid grid-cols-2 space-x-10">
            <InformationForm 
                inforProps={props.inforProps} 
            />
            <div>
                <AmenityForm amenityProps={props.amenityProps} />
                <GeneralServiceForm generalProps={props.generalProps} />
                <ServiceForm serviceProps={props.serviceProps} />
            </div>

        </div>
    );
  };
  
export default CreateForm;
  