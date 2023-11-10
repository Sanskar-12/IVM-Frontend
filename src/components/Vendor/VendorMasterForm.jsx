import React from 'react'

const VendorMasterForm = () => {
  return (
    <div>
      <div className="mx-4 mt-4 border">
          <div className="w-full bg-gray-200 px-2 py-2 font-semibold text-lg">
          <span>Vendor Master Form</span>
          </div>
        
        <div className="border">
        <table className="table w-full font-medium text-gray-500 text-sm">
        <thead>
          <tr >
          <th className="py-3">Sr. no</th>
          <th>Particulars</th>
          <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center border">
           <td className="py-3">1</td>
           <td>Name of company</td>
           <td><input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input></td>
          </tr>
          <tr className="text-center border">
           <td className="py-3">2</td>
           <td>Registerd address</td>
           <td><input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input></td>
          </tr>
          <tr className="text-center border">
           <td className="py-3">3</td>
           <td>Place of billing address</td>
           <td><input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input></td>
          </tr>
          <tr className="text-center border">
           <td className="py-3">4</td>
           <td>Status of organization</td>
           <td><input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input></td>
          </tr>
          <tr className="text-center border">
           <td className="py-3">5</td>
           <td>Contact person</td>
           <td><input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input></td>
          </tr>
          <tr className="text-center border">
           <td className="py-3">6</td>
           <td>Contact no.(Office)</td>
           <td><input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input></td>
          </tr>
          <tr className="text-center border">
           <td className="py-3">7</td>
           <td>Email ID</td>
           <td><input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input></td>
          </tr>
          <tr className="text-center border">
           <td className="py-3">8</td>
           <td>Contact no.(mobile)</td>
           <td><input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input></td>
          </tr>
          <tr className="text-center border">
           <td className="py-3">9</td>
           <td>Date of formation</td>
           <td><input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input></td>
          </tr>
          <tr className="text-center border">
           <td className="py-3">10</td>
           <td>PAN No.</td>
           <td><input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input></td>
          </tr>
          <tr className="text-center border">
           <td className="py-3">11</td>
           <td>TAN Number</td>
           <td><input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input></td>
          </tr>
          <tr className="text-center border">
           <td className="py-3">12</td>
           <td>GST No.</td>
           <td><input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input></td>
          </tr>
          


         </tbody>
        </table>
        </div>

        

      </div>
      <div className="border mt-2 mx-4 rounded-lg">
        <span className="mx-4 my-4 text-lg font-semibold ">Vendor</span>
        <div className="mx-4 mt-4">
        <label className="text-gray-400 font-semibold">Name</label>
        <input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input>
        </div>
        <div className="mx-4 my-2">
        <label className="text-gray-400 font-semibold ">Designation</label>
        <input type="text" className="border p-1 rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "></input> 
        </div>
        <div className="flex flex-col mx-4 my-2">
          <label className="text-gray-400 font-semibold ">Upload Sign/Stamp </label>
          <div class='flex items-center justify-center border'>
          <input type="file" placeholder='Upload image' className="py-10"></input>

          </div>
        </div>
       
        </div>
        <div className="flex justify-end mx-20 py-5">
          <button type="submit" className="bg-[#5C59E8] rounded py-1 px-5 text-white">Submit</button>
        </div>
    </div>
  )
}

export default VendorMasterForm