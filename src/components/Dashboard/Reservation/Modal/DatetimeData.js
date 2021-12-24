import { useState } from "react";

const DatetimeData = (props) => {
  const [modalData, setModalData] = props.timedateProps;

  return (
    <div className="mt-4 border-b">
      <h1 className="text-xl font-medium">Thông tin đăng ký</h1>
      <div className="px-16 py-4">
        <div className="flex justify-between">
          <label htmlFor="checkin">Ngày check in:</label>
          <input
            id="checkin"
            type="text"
            name="checkin"
            value={modalData.checkinDate}
            onChange={(e) =>
              setModalData({ ...modalData, checkinDate: e.target.value })
            }
            className="focus:outline-none border p-2 ml-2 rounded-md"
          />
        </div>
        <div className="flex justify-between mt-2">
          <label htmlFor="checkout">Ngày check out:</label>
          <input
            id="checkout"
            type="text"
            name="checkout"
            value={modalData.checkoutDate}
            onChange={(e) =>
              setModalData({ ...modalData, checkoutDate: e.target.value })
            }
            className="focus:outline-none border p-2 ml-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DatetimeData;
