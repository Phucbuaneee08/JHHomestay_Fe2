function HomestayCard (homestay){
    const {name, province, district, admin, hasAdmin} = homestay.detail;
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">{name}</div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{province}</div>
                <div className="text-sm text-gray-500">{district}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {hasAdmin
                    ?(<span 
                        className="
                        px-2 inline-flex text-center text-xs leading-5 font-semibold rounded-full 
                      bg-green-100 text-green-800
                      ">
                        Đã có admin
                    </span>) 
                    :(<span 
                        className="
                        px-2 inline-flex text-center text-xs leading-5 font-semibold rounded-full 
                        bg-red-100 text-red-800
                      ">
                        Chưa có admin
                    </span>)}
                
            </td>
            <td> 
                {hasAdmin
                ? (<p className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> {admin.email} </p>)
                : null}
            </td>
            {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{_id}</td> */}
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="!#" className="text-indigo-600 hover:text-indigo-900">
                Cập nhật
                </a>
            </td>
        </tr>
    )
}
export default HomestayCard