import React, { useState, useEffect } from 'react';
import axios from "axios";

import Pagination from "./Pagination";
import HomestayCard from "./HomestayCard"

function HomestayTable(props){
    const [homestay, setHomestay] = props.homestayProps;

    return (
        <div class="container mt-8 mb-5 mx-auto w-full px-4">
          <div className="mx-auto shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <table className="w-full divide-y divide-gray-200 table-fixed">
              <thead className="bg-gray-50">
                <tr>
                    <th
                      scope="col"
                      className="w-1/3 sticky px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tên Homestay
                    </th>
                    <th
                      scope="col"
                      className="w-1/6 sticky px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Địa chỉ
                    </th>
                    <th
                      scope="col"
                      className="w-1/6 sticky px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Trạng thái
                    </th>
                    <th
                      scope="col"
                      className="w-1/6 sticky px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Admin
                    </th>
                    <th 
                      scope="col" 
                      className="w-1/12 relative px-6 py-3"
                    >
                      <span className="sr-only"> Update </span>
                    </th>
                    <th 
                      scope="col" 
                      className="w-1/12 relative px-6 py-3"
                    >
                      <span className="sr-only"> Delete </span>
                    </th>
                  
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {homestay && homestay.length ?
                homestay.map(homestay => (
                    <HomestayCard detail = {homestay}/>
                )): null}
              </tbody>
            </table>
          </div>
          
        </div>
    )
}
export default HomestayTable;