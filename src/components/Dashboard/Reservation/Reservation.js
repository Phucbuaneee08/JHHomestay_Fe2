import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import HomestayPicker from "./HomestayPicker";
import BillStatusPicker from "./BillStatusPicker";
import BillData from "./BillData";
import { toast } from "react-toastify";
import UpdateModal from "./UpdateModal";

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
  
  /* Edit State - Use for reload data after edit */
  const [isEdited, setIsEdited] = useState(false);

  /* Data for table */
  const [data, setData] = useState([]);
  useEffect(() => {
    if (homestay === undefined) return;
    setIsLoading(true);
    setIsEdited(false);

    /* Call Data from back-end */
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
        setData(res.data.content);
      })
      .catch((e) => {
        setIsLoading(false);
        toast(e.message, { type: toast.TYPE.ERROR });
      });
  }, [homestay, status, isEdited]);

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
        {isLoading ? (
          <div className="flex justify-center mt-6">
            <div
              className="w-16 h-16 border-8 border-green-400 rounded-full border-solid animate-spin"
              style={{ borderTop: "8px solid transparent" }}
            />
          </div>
        ) : (
          <BillData
            dataProps={[data, setData]}
            editProps={[setIsOpen, setModalData]}
            status={status}
          />
        )}
      </div>
      <UpdateModal
        editProps={[isOpen, setIsOpen]}
        editDataProps={[modalData, setModalData]}
        status={status}
        token={token}
        setIsEdited={setIsEdited}
      />
    </>
  );
}

export default Reservation;
