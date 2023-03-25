import React from "react";
import "./Media.scss";

const Media = () => {
  return (
    <div className="Media">
      <div>
        <div className="titles">Truyền thông nói gì về HealthGlobal</div>
        <iframe
          width="470"
          height="264"
          src="https://www.youtube.com/embed/pf52Zg9N1_4"
          title="Ứng Dụng Thăm Khám Sức Khoẻ Trực Tuyến"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>

      <div className="img">
        <img
          alt="anh"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Antv_2006.svg/2560px-Antv_2006.svg.png"
        />
      </div>
    </div>
  );
};

export default Media;
