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
  
  return (
    <div className="p-2 border-t ">
      <h1 className="font-bold h-6 mb-4 text-gray-600 text-sm leading-8 uppercase"> Tiện nghi Homestay </h1>
      <div className="grid grid-cols-2 gap-2 px-4">
      {amenityList.map((item, index) => (
          <label class="text-gray-700">
            <input 
              type="checkbox"
              value="" 
              onClick={() => {
                if (!item.checked) {amenity.push(item); item.checked=true}
                else {amenity.splice(amenity.indexOf(item),1); item.checked=false}
              }}
            />
            <span class="ml-2">{item.name}</span>
            
          </label>
        ))}
      </div>
    </div>
  );
};

export default AmenityForm;
