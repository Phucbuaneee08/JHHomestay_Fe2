import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import HomestayPicker from "./HomestayPicker";
import BillStatusPicker from "./BillStatusPicker";
import BillData from "./BillData";
import { toast } from "react-toastify";
import UpdateModal from "./UpdateModal";

const dumbData = {
  checkinDate: "Test checkin",
  checkoutDate: "Test checkout",
  customer: {
    age: -1,
    email: "Test email",
    identification: "Test identification",
    name: "Test name",
    phoneNumber: "Test phone number",
  },
  customerTogether: [
    { age: -1, name: "Test name 1", _id: "-1" },
    { age: -1, name: "Test name 2", _id: "-1" },
    { age: -1, name: "Test name 3", _id: "-1" },
  ],
  servicesPerBill: [
    { services: "-1", count: -1, _id: "-1" },
    { services: "-1", count: -1, _id: "-1" },
    { services: "-1", count: -1, _id: "-1" },
  ],
};

function Reservation() {
  /* Token for admin action */
  const { token } = useSelector((state) => state.authReducer);

  /* Default status */
  const [status, setStatus] = useState({ id: 2, name: "Đang chờ" });

  /* Handle empty array */
  const homestayList = useSelector((state) => state.homestayReducer);
  const [homestay, setHomestay] = useState(
    homestayList.length ? homestayList[0] : []
  );

  /* Loading State */
  const [isLoading, setIsLoading] = useState(false);

  /* Data for table */
  const [data, setData] = useState([]);
  useEffect(() => {
    if (homestay === undefined) return;
    setIsLoading(true);
    axios
      .get("http://localhost:8000/admins/bills-of-homestay", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          status: status.id,
          id: homestay._id,
        },
      })
      .then((res) => {
        setIsLoading(false);
        setData([...res.data.content, dumbData]);
      })
      .catch((e) => {
        setIsLoading(false);
        toast(e.message, { type: toast.TYPE.ERROR });
      });
  }, [homestay, status]);

  /* Modal state */
  const [isOpen, setIsOpen] = useState(false);

  /* Data for Modal */
  const [modalData, setModalData] = useState({});

  return (
    <>
      <div className="p-8">
        <div className="flex flex-row justify-end">
          <HomestayPicker
            homestayProp={[homestay, setHomestay]}
            homestayList={homestayList}
          />
          <BillStatusPicker statusProp={[status, setStatus]} />
        </div>
        <BillData
          dataProps={[data, setData]}
          editProps={[setIsOpen, setModalData]}
        />
        <div className="flex items-center justify-center">
          {isLoading && data.length === 0 ? (
            <div
              className="w-16 h-16 border-8 border-green-400 rounded-full border-solid animate-spin"
              style={{ borderTop: "8px solid transparent" }}
            />
          ) : null}
        </div>
      </div>
      <UpdateModal
        editProps={[isOpen, setIsOpen]}
        editDataProps={[modalData, setModalData]}
      />
    </>
  );
}

export default Reservation;
