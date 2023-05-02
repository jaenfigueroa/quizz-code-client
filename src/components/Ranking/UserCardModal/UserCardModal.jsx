import React, { useEffect } from "react";
import "./UserCardModal.css";

function UserCardModal({ user, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  useEffect(() => {
    setTimeout(() => {
      const element = document.querySelector(".modal-overlay");
      if (element) {
        element.className = "modal-overlay-open"
      }
    }, 50)
  }, [])
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <article className="modal-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <div className="ranking-modal__user-image">
            <img width="100px" src={user.avatar} alt="User avatar" />
          </div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Points: {user.points}</p>
          <p>Challenges: {user.challenges}</p>
          <p>Bio: {user.description}</p>
        </article>
      </div>
    </div>
  );
}

export default UserCardModal;
