import styled from "@emotion/styled";

const ModalPopup = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;

  .modalWrap {
    position: relative;
    max-width: 360px;
    min-width: 320px;
    padding: 25px;
    border-radius: 10px;
    background-color: #fff;
  }
  .modalWrap h2 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
  }
  .modalWrap .guideText {
    color: #666;
    font-size: 14px;
  }
  .inputBox {
    padding-bottom: 20px;
  }
  .inputBox label {
    display: block;
    margin-bottom: 5px;
  }
  .inputBox input {
    width: 100%;
  }
  .inputBox textarea {
    width: 100%;
    height: 150px;
  }
  .buttonWrap {
    display: flex;
    gap: 10px;
  }
  .buttonWrap button {
    width: 50%;
  }
`;

const PopupLayout = ({ isVisible, onClose, title, children }) => {
  if (!isVisible) return null;

  return (
    <ModalPopup onClick={onClose}>
      <div className="modalWrap" onClick={e => e.stopPropagation()}>
        {title ? <h2>{title}</h2> : ""}
        {children}
      </div>
    </ModalPopup>
  );
};

export default PopupLayout;
