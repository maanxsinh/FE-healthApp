import React from "react";
import "./DatLich.scss";
import HomeHeader from "../HomeHeader";
import { Input } from "antd";
import { DatePicker, Space } from "antd";
// import type { DatePickerProps } from "antd";
import { Button } from "antd";
const { TextArea } = Input;
// const onChange: DatePickerProps["onChange"] = (date, dateString) => {
//   console.log(date, dateString);
// };

const DatLich = () => {
  return (
    <div className="datLich">
      {/* <HomeHeader /> */}
      <div className="doctor">
        <div>ĐẶT LỊCH KHÁM</div>
        <img src="https://cdn.bookingcare.vn/fr/w100/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg" />
        <div>Bác sĩ chuyên khoa II Trần Minh Khuyên</div>
        <div>14:30-15:00</div>
        <div>
          GIÁ KHÁM <br />
          250.000đ
        </div>
      </div>
      <div className="inf-client">
        <div className="hoVaTen">
          <Input
            placeholder="Họ và tên bệnh nhân"
            // style={{ width: "500px" }}
          />
        </div>
        <div className="gioiTinh">
          <label>
            <input
              name="gender"
              type="radio"
              value="1"
              style={{ width: "15px" }}
            />
            Nam
          </label>
          <label>
            <input
              name="gender"
              type="radio"
              value="0"
              style={{ width: "15px" }}
            />
            Nữ
          </label>
        </div>
        <div className="sdt">
          <Input
            placeholder="Số điện thoại liên hệ"
            // style={{ width: "500px" }}
          />
        </div>
        <div className="sinhNhat">
          <DatePicker
            // onChange={onChange}
            style={{ width: "359px", marginRight: "10px" }}
          />
          <span>Ngày sinh của bạn</span>
        </div>
        <div className="diaChi">
          <Input
            placeholder="Nhập địa chỉ của bạn"
            // style={{ width: "500px" }}
          />
        </div>
        <div className="lyDoKham">
          <TextArea
            rows={4}
            placeholder="Lý do khám"
            maxLength={6}
            // style={{ width: "500px" }}
          />
        </div>
      </div>
      <div className="Notes">
        <div className="price">
          <div className="giaKham">
            <div>Giá khám</div>
            <div>250.000đ</div>
          </div>
          <div className="phiDatLich">
            <div>Phí đặt lịch</div>
            <div>Miễn phí</div>
          </div>
          <div className="Tong">
            <div>Tổng cộng</div>
            <div className="giaTong">250.000đ</div>
          </div>
        </div>
        <div className="luuY">
          <div className="title">LƯU Ý</div> <br /> 1. Thông tin anh/chị cung
          cấp sẽ được sử dụng làm hồ sơ khám bệnh, khi điền thông tin anh/chị
          vui lòng:
          <br /> • Ghi rõ họ và tên, viết hoa những chữ cái đầu tiên, ví dụ:
          Trần Văn Phú <br /> • Điền đầy đủ, đúng và vui lòng kiểm tra lại thông
          tin trước khi ấn "Xác nhận" <br /> 2. Anh/chị vui lòng tuân thủ quy
          định phòng chống dịch (đeo khẩu trang, khử khuẩn, khai báo dịch tễ)
          khi đến khám.
        </div>
      </div>
      <div className="confirmed">
        <Button className="button" type="primary" block>
          Xác nhận đặt khám
        </Button>
      </div>
    </div>
  );
};

export default DatLich;
