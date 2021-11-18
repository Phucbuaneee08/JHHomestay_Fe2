import React, {useState} from "react";

function Dropdown(Options){
    const [showOptions, setShowOptions] =useState(false);
    const handleClick=(
        setShowOptions(!showOptions)
    );
    return(
        <div class="h-screen w-screen bg-gray-300 flex justify-center items-center">
            <div class="relative inline-block text-left">
                <div>
                    <button onClick={handleClick} class="inline-flex justify-center w-full rounded-md border border-gray-300">
                        Options
                    </button>
                </div>
                {showOptions && (
                    <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                        <div class="py-1">
                            <a href="!#">
                                Choice 1
                            </a>
                            <a href="!#">
                                Choice 2
                            </a>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    )
}
export default Dropdown;