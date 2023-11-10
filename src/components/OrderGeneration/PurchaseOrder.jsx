import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "./Grid";

const PurchaseOrder = () => {
  const [refNo, setRefNo] = useState("");
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [letter, setLetter] = useState("");
  const [payment, setPayment] = useState("");
  const [warranty, setWarranty] = useState("");
  const [delievery, setDelievery] = useState("");
  return (
    <div>
      <div>
        <div className="text-[24px] font-medium">Purchase Order</div>
        <div className="flex">
          <p className="flex items-center text-base text-[#5C59E8] font-medium mr-3">
            Order Generation
          </p>
          <p className="font-medium text-2xl text-[#A3A9B6] mr-3">
            <ArrowForwardIosIcon />
          </p>
          <p className="flex items-center text-base text-[#667085] font-medium">
            Purchase Order
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {" "}
        {/*main div of body*/}
        <div className="col-span-4 bg-[#F9F9FC] mt-4">
          {" "}
          {/*Left side div*/}
          <div className="h-auto rounded-xl bg-[#FFF] p-6">
            <div className="">
              <p className="font-medium text-xl ">General Information</p>
            </div>

            <div>
              <p className="font-medium text-sm text-[#4D5464] mt-3">
                Reference No:
              </p>
              <input
                className="bg-[#F9F9FC] rounded-md w-full pl-3 h-8 mt-2 placeholder:italic"
                placeholder="Enter the Reference no."
                onChange={(e) => setRefNo(e.target.value)}
              ></input>
            </div>

            <div>
              <p className="font-medium text-sm text-[#4D5464] mt-2">To :</p>
              <textarea
                className="w-full h-16 pl-3 rounded-md mt-2 placeholder:italic bg-[#F9F9FC]"
                id="productDescription"
                placeholder="Type product description..."
                onChange={(e) => setTo(e.target.value)}
              ></textarea>
            </div>

            <div>
              <p className="font-medium text-sm text-[#4D5464] mt-2">
                Subject :
              </p>
              <input
                className="bg-[#F9F9FC] rounded-md w-full pl-3 h-8 mt-2 placeholder:italic"
                placeholder="Enter the subject"
                onChange={(e) => setSubject(e.target.value)}
              ></input>
            </div>

            <div>
              <p className="font-medium text-sm text-[#4D5464] mt-2">
                Letter :
              </p>
              <textarea
                className="w-full h-24 pl-3 rounded-md mt-2 placeholder:italic bg-[#F9F9FC]"
                id="productDescription"
                placeholder="Type product description..."
                onChange={(e) => setLetter(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="h-auto rounded-xl bg-[#FFF] p-6 mt-5">
            <div>
              <p className="font-medium text-xl">Terms & Conditions</p>
            </div>

            <div>
              <p className="font-medium text-sm text-[#4D5464] mt-3">Payment</p>
              <input
                className="bg-[#F9F9FC] rounded-md w-full pl-3 h-8 mt-2 placeholder:italic"
                onChange={(e) => setPayment(e.target.value)}
              ></input>
            </div>

            <div>
              <p className="font-medium text-sm text-[#4D5464] mt-3">
                Warranty
              </p>
              <input
                className="bg-[#F9F9FC] rounded-md w-full pl-3 h-8 mt-2"
                onChange={(e) => setWarranty(e.target.value)}
              ></input>
            </div>

            <div>
              <p className="font-medium text-sm text-[#4D5464] mt-3">
                Delivery
              </p>
              <input
                className="bg-[#F9F9FC] rounded-md w-full pl-3 h-8 mt-2"
                onChange={(e) => setDelievery(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4 bg-[#F9F9FC]">
          {" "}
          {/*Right side div*/}
          <div className="rounded-xl bg-black">
            <div className="col-span-1 "></div>

            <div className="bg-black">
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Grid
          refNo={refNo}
          to={to}
          subject={subject}
          letter={letter}
          payment={payment}
          warranty={warranty}
          delievery={delievery}
        />
      </div>
    </div>
  );
};

export default PurchaseOrder;
