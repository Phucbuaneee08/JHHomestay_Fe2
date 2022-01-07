import React from "react";

import InformationForm from "./InformationForm";
import ServiceForm from "./ServiceForm";
import AmenityForm from "./AmenityForm";
import GeneralServiceForm from "./GeneralServiceForm";
import Images from "./Images";

const CreateForm = (props) => {
    return (          
        <div className="m-4 grid grid-cols-2 space-x-10">
            <InformationForm 
                inforProps={props.inforProps} 
                state={props.state}
            />
            <div>
                <AmenityForm amenityProps={props.amenityProps} />
                <GeneralServiceForm generalProps={props.generalProps} />
                <ServiceForm serviceProps={props.serviceProps} />
                <Images imageProps={props.imageProps}/>
            </div>

        </div>
    );
  };
  
export default CreateForm;
  