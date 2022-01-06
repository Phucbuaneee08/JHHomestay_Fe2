function Images(props) {
    const setImageSelected=props.imageProps
    return(
        <div className="p-2 mt-5 border-t ">
            <h1 className="font-bold h-6 mb-4 text-gray-600 text-sm leading-8 uppercase"> 
                Thêm ảnh
            </h1>

            <input
                type="file"
                name="files"
                onChange={(e)=>setImageSelected(e.target.files)}
                multiple={true}
            />
        </div> 
        
    )
}
export default Images