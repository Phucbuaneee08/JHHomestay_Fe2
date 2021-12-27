import React, { useState, useEffect } from 'react';
import axios from "axios";

import Pagination from "./Pagination";
import HomestayCard from "./HomestayCard"

const columnName = [
    {name: "Tên homestay"},
    {name: "Địa chỉ"},
    {name: "Trạng thái"},
    {name: "Admin"}
]
function HomestayTable(){
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null)
    const perPage=15

    useEffect(() => {
      const fetchData = async() => {
          try {
              const {data: response} = await axios.get('http://localhost:8000/super-admins/homestays');
              setTotalPage(Math.ceil(response.content.length/perPage))
          } 
          catch (error) {
              console.error(error.message);
            };

          try {
              const {data: response} = await axios.get('http://localhost:8000/super-admins/homestays',{
                params: {page: currentPage, perPage: perPage}
            } );
             
              setData(response.content)
              console.log(response.content)
          } 
          catch (error) {
              console.error(error.message);
            }
      }
      fetchData()
    }, [currentPage, perPage])

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div class="container my-8 pb-10 mx-auto">
          <div className="w-11/12 mx-auto shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columnName.map(item => (
                      <th
                    scope="col"
                    className="sticky px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
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
          
          <Pagination
                totalPage={totalPage}
                paginate={paginate}
            />
          <p className="text-center text-green-800"> Page {currentPage} of {totalPage} </p>
        </div>
    )
}
export default HomestayTable;