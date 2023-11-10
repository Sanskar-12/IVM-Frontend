import {Link} from 'react-router-dom'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import { useState ,useEffect } from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const Products=[
  {
    name:"Chalk",
    id:1234,
    quantity:3,
    price:100
  },
  {
    name:"Duster",
    id:1234,
    quantity:3,
    price:100
  },
  {
    name:"Coffee",
    id:1234,
    quantity:4,
    price:1000
  },
  {
    name:"Book",
    id:1234,
    quantity:13,
    price:10
  }
]

const OrderDetailsPage = () => {
  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    let newTotalCost = 0;
    for (const product of Products) {
      newTotalCost += product.quantity * product.price;
    }
    setTotalCost(newTotalCost);
  }, [])
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col px-4 '>
       <p className='text-[24px]'> Order Details</p>
       <div className='flex flex-row'>
       <Link to="/"> 
          <div className="font-medium text-[#5C59E8] mr-3 hover:underline flex items-center">
            Dashboard  
          </div>
        </Link>  
   
        <Link to='/orders-page'>
        <div className='text-[#667085]'>     <ChevronRightIcon /> Order List</div>
        </Link>  

       </div>
  
      </div>
      <div className='flex flex-row items-start justify-between'>
        <div className='flex flex-col bg-white p-8 m-4 w-1/4  border-2  border-[#E0E2E7] rounded-md'>
          <div>
            <div className='flex flex-row justify-between'>
            <div className="text-lg font-semibold flex  items-center ">Order #302011</div>
            <div className="bg-[#FDF1E8] rounded-full h-auto w-auto  text-center text-sm p-2 text-[#E46A11] font-extrabold">Processing</div>

            </div>
            <div className='flex flex-row justify-between mt-4 py-6'> 
              <div><span className='bg-[#E0E2E7] p-2 rounded-full'><EventAvailableIcon /></span>
              <span className='p-2  font-medium text-md'>Added</span></div>
              <div className='mr-6'>TimeLine</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col bg-white p-6 m-4 w-1/4  border-2   border-[#E0E2E7] rounded-md'>
          <div>
            <div className='flex flex-row justify-between'>
            <div className="text-lg font-semibold">Document</div>
            </div>
            <div className='flex flex-col justify-between mt-4 w-1/2'> 
              <div className='py-6'>
                <span className='bg-[#E0E2E7] p-2 rounded-full'><DescriptionIcon /></span>
              <span className='p-4 font-medium text-md'>Invoice</span>
              </div>
              <div className='py-6'>
                <span className='bg-[#E0E2E7] p-2 rounded-full'><LocalShippingIcon /></span>
                <span className='p-4  font-medium text-md'>Shipping</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col bg-white p-6 m-4 w-1/4  border-2  border-[#E0E2E7] rounded-md'>
          <div>
            <div className='flex flex-row justify-between'>
            <div className="text-lg font-semibold">Customer</div>
            </div>
            <div className='flex flex-col'> 
              <div className='py-6 flex flex-row justify-between '>
                <div className='flex flex-row'>
                <div className='bg-[#E0E2E7] p-2 rounded-full'><Person2OutlinedIcon /></div>
                <div className='p-2  font-medium text-md'>Customer</div>
                </div>
                <div className='p-2'>Demo</div>
              </div>
              <div className='py-6 flex flex-row justify-between'>
                <div className='flex flex-row'>
                <div className='bg-[#E0E2E7] p-2 rounded-full'><EmailOutlinedIcon /></div>
                <div className='p-2 font-medium text-md'>Email</div>      
                </div>
               <div className='p-2'>Demo@gmail.com</div>
              </div>
              <div className='py-6 flex flex-row justify-between'>
                <div className='flex flex-row'>
                <div className='bg-[#E0E2E7] p-2 rounded-full'><SmartphoneOutlinedIcon /></div>
                <div className='p-2 font-medium text-md'>Phone</div>
                </div>
                <div className='p-2'>1234567890</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-start'>
        <div className='w-3/5 h-80'>
          <div>
            <div className="relative overflow-x-auto mx-2 rounded-md">
              <table className="w-full text-sm text-left text-gray-500 border-2  " >
      <thead className="text-xs text-gray-700 uppercase bg-[#F9F9FC]">
        <tr>
          <th scope="col" className="px-6 py-3 text-center">
            Product
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Id
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Quantity
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Price
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Total
          </th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {Products.map((data, index) => (
          <tr key={index} className="bg-white  border-[#E0E2E7] border-b">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {data.name}
            </td>
            <td className="px-6 py-4 text-[#5C59E8] font-bold">{data.id}</td>
            <td className="px-6 py-4">{data.quantity}</td>
            <td className="px-6 py-4">Rs. {data.price}</td>
            <td className="px-6 py-4">Rs. {data.quantity * data.price}</td>
          </tr>
        ))}
      </tbody>
      <tbody className='text-center'>
        <tr className="bg-white border-b">
          <td></td>
          <td></td>
          <td></td>
        <td className="px-6 py-4 font-medium text-gray-900">Total</td>
        <td className="px-6 py-4  text-gray-900 font-bold">Rs. {totalCost}</td>
        </tr>

      </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='w-2/5 h-80'>

        <div className='flex flex-col p-6 bg-white border-2   border-[#E0E2E7] rounded-md'> 
        <div className='flex flex-row justify-between'>
            <div className="text-lg font-semibold">Address</div>
            </div>
              <div className='py-6 flex flex-row justify-between '>
                <div className='flex flex-row'>
                <div className='bg-[#E0E2E7] p-2 rounded-full'><FmdGoodIcon  /></div>
                <div className='p-2  font-medium text-md'>Billing</div>
                </div>
                <div className='p-2'>Kandivali</div>
              </div>
              <div className='py-6 flex flex-row justify-between'>
                <div className='flex flex-row'>
                <div className='bg-[#E0E2E7] p-2 rounded-full'><FmdGoodIcon  /></div>
                <div className='p-2 font-medium text-md'>Shipping</div>      
                </div>
               <div className='p-2'>Malad</div>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetailsPage
