import React from "react";
import "../css/AnniversaryModal.css";
import "./../css/Responsive.css";

function AnniversaryModal({
  selectedYear,
  onClose,
  anniversaryMessages,
}) {

  if (!selectedYear) {
    return null;
  }


  const message =
    anniversaryMessages[selectedYear];


  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="message-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <button
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>


        <div className="modal-heart">
          {message.icon}
        </div>


        <small>
          OUR CHAPTER
        </small>


        <h2>
          {message.title}
        </h2>


        <p>
          {message.text}
        </p>


        <div className="modal-signature">
          Always us. ♡
        </div>

      </div>

    </div>
  );
}


export default AnniversaryModal;