import React from "react";
import ReactMarkdown from "react-markdown";
import "../css/AnniversaryModal.css";
import "./../css/Responsive.css";

function AnniversaryModal({
  data,
  onClose,
  isFavorite,
  isSaved,
  onToggleFavorite,
  onToggleSave,
}) {
  if (!data) return null;

  return (
    <div
      className="anniversary-modal-overlay"
      onClick={onClose}
    >
      <div
        className="anniversary-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* =================================================
            TOP ACTIONS
            FAVORITE + SAVE
        ================================================= */}

        <div className="modal-actions">

          {/* FAVORITE */}

          <button
            type="button"
            className={`modal-action-button ${
              isFavorite ? "modal-action-active" : ""
            }`}
            onClick={onToggleFavorite}
            aria-label={
              isFavorite
                ? "Remove from favorites"
                : "Add to favorites"
            }
          >
            {isFavorite ? (

              /* FILLED FAVORITE */

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="24"
                height="24"
                fill="#8C1A10"
                aria-hidden="true"
              >
                <path d="M40-120v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-160q-43 0-84-13.5T320-212v92H40Zm120-280q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-520q0 50-34.5 85T160-400Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-520q0 50-34.5 85T800-400Zm-320-80q-68-62-111-104.5T302-658q-24-31-33-54.5t-9-47.5q0-50 35-85t86-35q28 0 54 12.5t45 33.5q19-21 45-33.5t54-12.5q51 0 86 35t35 85q0 24-9 47.5T658-658q-24 31-67 73.5T480-480Zm0-108q72-66 106-107.5t34-64.5q0-17-12-28.5T579-800q-12 0-23.5 7T532-772l-51 59-51-57q-14-16-25.5-23t-23.5-7q-17 0-29 11.5T340-760q0 23 34 64.5T480-588Z" />
              </svg>

            ) : (

              /* EMPTY FAVORITE */

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="24"
                height="24"
                fill="#8C1A10"
                aria-hidden="true"
              >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Z" />
              </svg>

            )}
          </button>


          {/* SAVE */}

          <button
            type="button"
            className={`modal-action-button ${
              isSaved ? "modal-action-active" : ""
            }`}
            onClick={onToggleSave}
            aria-label={
              isSaved
                ? "Remove saved memory"
                : "Save memory"
            }
          >
            {isSaved ? (

              /* FILLED SAVE */

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="24"
                height="24"
                fill="#8C1A10"
                aria-hidden="true"
              >
                <path d="M480-388q51-47 82.5-77.5T611-518q17-22 23-38.5t6-35.5q0-36-26-62t-62-26q-21 0-40.5 8.5T480-648q-12-15-31-23.5t-41-8.5q-36 0-62 26t-26 62q0 19 5.5 35t22.5 38q17 22 48 52.5t84 78.5ZM200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Z" />
              </svg>

            ) : (

              /* EMPTY SAVE */

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="24"
                height="24"
                fill="#8C1A10"
                aria-hidden="true"
              >
                <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Z" />
              </svg>

            )}
          </button>

        </div>


        {/* =================================================
            CLOSE BUTTON
        ================================================= */}

        <button
          type="button"
          className="anniversary-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>


        {/* =================================================
            CHAPTER
        ================================================= */}

        <div className="modal-chapter">
          Chapter {String(data.year).padStart(2, "0")}
        </div>


        {/* =================================================
            PHOTO
        ================================================= */}

        <div className="modal-photo">
          <img
            src={data.icon}
            alt={data.title}
          />
        </div>


        {/* =================================================
            TITLE
        ================================================= */}

        <h2 className="modal-title">
          {data.title}
        </h2>


        {/* =================================================
            DATE
        ================================================= */}

        <p className="modal-date">
          {data.date}
        </p>


{/* =================================================
    MESSAGE
================================================= */}

<div className="modal-message">

  {data.message.map((paragraph, index) => {

    const parts = paragraph.split(/(==.*?==)/g);

    return (
      <p key={index}>

        {parts.map((part, partIndex) => {

          if (
            part.startsWith("==") &&
            part.endsWith("==")
          ) {
            return (
              <mark key={partIndex}>
                {part.slice(2, -2)}
              </mark>
            );
          }

          return (
            <ReactMarkdown
              key={partIndex}
              components={{
                p: ({ children }) => <>{children}</>
              }}
            >
              {part}
            </ReactMarkdown>
          );

        })}

      </p>
    );

  })}

</div>


        {/* =================================================
            QUOTE
        ================================================= */}

        {data.quote && (
          <div className="modal-quote">
            “{data.quote}”
          </div>
        )}

      </div>
    </div>
  );
}

export default AnniversaryModal;