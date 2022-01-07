const amenityList = [
  {name: "Wifi", type:"Tiện ích", checked: false},
  {name: "Dầu gội, dầu xả", type:"Tiện ích", checked: false},
  {name: "Tivi", type:"Tiện ích", checked: false},
  {name: "Khăn tắm", type:"Tiện ích", checked: false},
  {name: "Kem đánh răng", type:"Tiện ích", checked: false},
  {name: "Xà phòng tắm", type:"Tiện ích", checked: false},
  {name: "Máy sấy", type:"Tiện ích", checked: false},
  {name: "Bếp điện", type:"Tiện ích bếp", checked: false},
  {name: "Tủ lạnh", type:"Tiện ích bếp", checked: false},
  {name: "Ban công", type:"Tiện ích bếp", checked: false}
]

const AmenityForm = (props) => {
  const [amenity, setAmenity] = props.amenityProps;
  amenityList.map(item => item.checked=false)
  amenity.map(item1 => (
      amenityList.map(item2 =>
        {
          if (item1.name===item2.name) item2.checked=true
        })
  ))  
  console.log(amenityList)
  
  return (
    <div className="p-2 border-t ">
      <h1 className="font-bold h-6 mb-4 text-gray-600 text-sm leading-8 uppercase"> Tiện nghi Homestay </h1>
      <div className="grid grid-cols-2 gap-2 px-4">
      {amenityList.map((item, index) => (
          <label class="text-gray-700">
            {!item.checked ?
            (<input 
                type="checkbox"
                value=""
                defaultChecked={false}
                onClick={() => {
                  amenity.push(item); 
                  item.checked=true
                }}

            />) : (
              <input 
                  type="checkbox"
                  value=""
                  defaultChecked
                  onClick={() => {
                    amenity.splice(amenity.indexOf(item),1); 
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

export default AmenityForm;
