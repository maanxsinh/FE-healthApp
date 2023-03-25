import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const AdminMenu = () => {
  const [open, setOpen] = useState(false);
  const handleManage = () => {};
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className="book" onClick={() => handleManage()}>
            Quản lý người dùng
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminMenu;

const style = {
  position: "absolute",
  // top: "80px",
  // left: "232px",
  // transform: "translateX(-50%)",
  width: 200,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  // animation: "show_slide ease 1s forwards",
  // transform: "translateX(0%)",
};
