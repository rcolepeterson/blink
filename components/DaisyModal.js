import React from "react";
const Modal = ({ children }) => {
  const [modalOpen, setModalOpen] = React.useState(true);

  return (
    <div
      className={modalOpen ? "modal-open modal" : "modal"}
      onClick={() => setModalOpen(false)}
    >
      <div className="modal-box">
        <button
          onClick={() => setModalOpen(false)}
          className="btn btn-circle btn-xl absolute -top-5 -right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
