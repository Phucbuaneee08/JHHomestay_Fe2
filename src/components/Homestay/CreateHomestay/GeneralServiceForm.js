const generalList = [
  {name: "Bể bơi"},
  {name: "Phòng karaoke"},
  {name: "Suối nước nóng"},
  {name: "Coffee bên hồ"},
  {name: "Dọn phòng"},
  {name: "Cho thuê xe tự lái"},
  {name: "Dịch vụ giặt ủi"},
  {name: "Massage trị liệu"},
  {name: "Xông hơi"},
  {name: "Thuê hướng dẫn viên du lịch"}
]
const GeneralServiceForm = (props) => {
  const [general, setGeneral] = props.generalProps;
  
  return (
    <div className="p-2 border-t ">
      <h1 className="font-bold h-6 mb-4 text-gray-600 text-sm leading-8 uppercase"> Dịch vụ chung </h1>
      <div className="grid grid-cols-2 gap-2 px-4">
        {generalList.map((item, index) => (
          <label class="text-gray-700">
            <input 
              type="checkbox"
              value="" 
              onClick={() => {
                general.push(item);
              }}
            />
            <span class="ml-2">{item.name}</span>
            
          </label>
        ))}
      </div>
    </div>
  );
};

export default GeneralServiceForm;