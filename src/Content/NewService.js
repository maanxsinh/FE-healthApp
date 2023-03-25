import React from "react";
import "./NewService.scss";

const NewService = () => {
  return (
    <div className="service">
      <div className="select">
        <img
          alt="anh"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDsdg82gniREc5TeTLMFE_PRjl7JKKf5X_A&usqp=CAU"
        />
        <div className="tieu-de">
          Ưu đãi tới 25% gói khám tổng quát tại Bệnh viện Quốc tế City
        </div>
        <div className="content">
          Từ 1/3 đến 31/3/2023, Bệnh viện triển khai chương trình ưu đãi giảm
          đến 25% gói khám tổng quát cá nhân.
        </div>
        <div className="details">XEM CHI TIẾT &gt;</div>
      </div>
      <div className="select">
        <img
          alt="anh"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaI96bfJoa3_0S5li-lw9867NkwJWLbLaRN9EgPZ0hLXDTegJx161_1GEQSELvkwbhAI&usqp=CAU"
        />
        <div className="tieu-de">
          Trải nghiệm trị liệu Cơ xương khớp 199k tại Phòng khám Đông y Phúc Lâm
          An
        </div>
        <div className="content">
          Từ nay đến 22/05/2023, Phòng khám áp dụng ưu đãi Gói trải nghiệm trị
          liệu chỉ với 199k
        </div>
        <div className="details">XEM CHI TIẾT &gt;</div>
      </div>
      <div className="select">
        <img
          alt="anh"
          src="https://suckhoehangngay.mediacdn.vn/zoom/680_425/154880486097817600/2021/1/20/cham-soc-mat-can-thi-dung-cach-de-khong-tang-do-02-1611116897159381074956-0-52-576-974-crop-16111171583671969256078.jpg"
        />
        <div className="tieu-de">
          Khám mắt miễn phí tại Bệnh viện Mắt kỹ thuật cao Hitec
        </div>
        <div className="content">
          Áp dụng với: Nhược thị và khúc xạ học đường; Rối loạn điều tiết, khô
          mắt, mỏi mắt; Viêm bờ mi
        </div>
        <div className="details">XEM CHI TIẾT &gt;</div>
      </div>
      <div className="select">
        <img
          alt="anh"
          src="https://www.vietskin.vn/wp-content/uploads/2019/01/bi-mun-co-nen-di-kham-da-lieu-1.jpg"
        />
        <div className="tieu-de">
          Trị mụn chuẩn y khoa giá ưu đãi tại Phòng khám Da liễu Hà Nội
        </div>
        <div className="content">
          Phòng khám Da liễu Hà Nội dành tặng ưu đãi giá tiết kiệm cho khách
          hàng đăng ký trị mụn tháng 03/2023.
        </div>
        <div className="details">XEM CHI TIẾT &gt;</div>
      </div>
    </div>
  );
};

export default NewService;
