import ReactDom from "react-dom";
import "./Modal.css";

export default function Modal({ children, handleClose }) {
  return ReactDom.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <br />
        <button onClick={handleClose}>close</button>
      </div>
    </div>,
    document.body
  );
}
