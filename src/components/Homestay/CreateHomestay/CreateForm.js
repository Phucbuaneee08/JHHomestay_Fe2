import React from "react";

import InformationForm from "./InformationForm";
import ServiceForm from "./ServiceForm";
import AmenityForm from "./AmenityForm";
import GeneralServiceForm from "./GeneralServiceForm";
import Images from "./Images";
import im from "./im";
const CreateForm = (props) => {
    return (          
        <div className="m-4">
            <InformationForm 
                inforProps={props.inforProps} 
                state={props.state}
            />
            <AmenityForm amenityProps={props.amenityProps} />
            <GeneralServiceForm generalProps={props.generalProps} />
            <ServiceForm serviceProps={props.serviceProps} />
            <Images imageProps={props.imageProps}/>
        </div>
    );
  };
  
export default CreateForm;
  