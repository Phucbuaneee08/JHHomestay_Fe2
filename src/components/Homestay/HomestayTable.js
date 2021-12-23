import React, { useState, useEffect } from 'react';
import axios from "axios";

import HomestayCard from "./HomestayCard"

const columnName = [
    {name: "Tên homestay"},
    {name: "Địa chỉ"},
    {name: "Trạng thái"},
    {name: "Admin"}
]
function HomestayTable(){
    const [data, setData] = useState([])
    
    useEffect(() => {
      const fetchData = async() => {
          try {
              const {data: response} = await axios.get('http://localhost:8000/super-admins/homestays');
              setData(response.content)
              console.log(response.content)
          } 
          catch (error) {
              console.error(error.message);
            }
      }
      fetchData()
  }, [])

    return (
        <div class="container my-8 pb-10">
          <div className="w-11/12 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columnName.map(item => (
                      <th
                    scope="col"
                    className="sticky px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                    {item.name} 
                    </th>
                  ))}
                  
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {data && data.length ?
                data.map(homestay => (
                    <HomestayCard detail = {homestay}/>
                )): null}
              </tbody>
            </table>
          </div>
        </div>
    )
}
export default HomestayTable;