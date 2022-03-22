import React from "react";

function MyModal({ children, visible, setVisible }) {
  const modal = ["modal"];

  if (visible) {
    modal.push("open");
  }

  return (
    <div onClick={() => setVisible(false)} className={modal.join(" ")}>
      <div onClick={(e) => e.stopPropagation()} className="modal-inner">
        {children}
      </div>
    </div>
  );
}

export default MyModal;
