const amenityList = [
  {name: "Wifi", type:"Tiện ích"},
  {name: "Dầu gội, dầu xả", type:"Tiện ích"},
  {name: "Tivi", type:"Tiện ích"},
  {name: "Khăn tắm", type:"Tiện ích"},
  {name: "Kem đánh răng", type:"Tiện ích"},
  {name: "Xà phòng tắm", type:"Tiện ích"},
  {name: "Máy sấy", type:"Tiện ích"},
  {name: "Bếp điện", type:"Tiện ích bếp"},
  {name: "Tủ lạnh", type:"Tiện ích bếp"},
  {name: "Ban công", type:"Tiện ích bếp"}
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
              onClick={() => amenity.push(item)}
            />
            <span class="ml-2">{item.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AmenityForm;
