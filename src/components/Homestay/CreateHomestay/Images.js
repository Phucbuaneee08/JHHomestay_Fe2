import {useState} from "react";
import { XIcon } from "@heroicons/react/outline";

function Images(props) {
    const [images, setImages] = useState([]);
    const setImageSelected=props.imageProps;
    const [select, setSelect]=useState([])
    const oldImages=props.oldImages;
    
    const viewImage = (files) => {
        if (files) {
            let imagesData = [];
            for(let i = 0; i < files.length; i++) {
                imagesData.push(URL.createObjectURL(files[i]))
            }
            setImages(imagesData);
            console.log("image",imagesData)
        }
    }

    const removeImage =(index, e) =>{
        const temp=[...images]
        console.log("index", index)
        temp.splice(index, 1)
        setImages(temp)


        const t = [...select]
        t.splice(index, 1)
        setSelect(t)
        setImageSelected(select)
        console.log("images",images)
    }
    const removeOldImage =(index, e) =>{
        oldImages.splice(index, 1)
        console.log("OldIndex", index)
        console.log("oldImages", oldImages)

    }

    return (
        <div className="p-2 mt-5 border-t ">
            <h1 className="font-bold h-2 mb-2 text-gray-600 text-sm leading-8 uppercase"> 
                Thêm ảnh
            </h1>

            <input
                type="file"
                name="files"
                className="p-3"
                onChange={(e)=> {
                    viewImage(e.target.files);
                    setSelect(e.target.files);
                    setImageSelected(e.target.files)
                }}
                multiple={true}
            />
            <div className="grid grid-cols-4 gap-4 relative">
                {oldImages && oldImages.map((image, index) => {
                    return (
                        <div className="flex items-center">
                            <img 
                                className="h-20 w-32 rounded-md overflow-x-hidden overflow-y-hidden m-1" 
                                key={index} 
                                id={index} 
                                src={`http://localhost:8000${image.url}`} 
                                alt="images of homestays"
                            />
                            
                            <button
                            type="reset"
                            className="z-30 absolute place-items-end"
                            onClick={(e)=>{
                                removeOldImage(index, e)
                                }
                            }
                        >
                            <XIcon className="w-7 h-7 mb-16 rounded-full bg-opacity-10 hover:bg-black hover:bg-opacity-20 p-1 text-white" />
                        </button>
                        </div>
                        )
                })}
            
                {(images.length || 0 ) && images.map((image, index) => {
                    return (
                        <div className="flex items-center">
                            <img className="h-20 w-32 rounded-md overflow-x-hidden overflow-y-hidden m-1"
                                key={index} 
                                id={index} 
                                src={image} 
                                alt="images of homestays"
                            />
                            <button
                                type="reset"
                                className="z-30 absolute place-items-end"
                                // onClick={(e)=>{
                                //     removeImage(index, e)
                                //     }
                                // }
                            >
                                <XIcon className="w-7 h-7 mb-16 rounded-full bg-opacity-10 hover:bg-black hover:bg-opacity-20 p-1 text-white" />
                            </button>
                    </div>)
                })}
            </div>
        </div> 
        
    )
}
export default Images
