document.body.onload = popUp;

const popupStyle = `
    background-color: #fff;
    position: fixed;
    z-index: 10000000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 30px;
    border-radius: 8px;
`;

const inputStyle = `
    height: 24px;
    font-size: 16px;
`;

const confirmBtnStyle = `
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
    cursor: pointer;
`;

function popUp() {
  let inputValue = "";
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.id = "test";
  popup.style = popupStyle;

  const comfirm = document.createElement("div");
  comfirm.className = "comfirm";
  comfirm.innerHTML = "Comfirm";
  comfirm.style = confirmBtnStyle;
  comfirm.onclick = function(e) {
    if (!inputValue) {
      return;
    }
    popup.parentNode.removeChild(popup);
  };

  const inputField = document.createElement("input");
  inputField.onchange = function(e) {
    inputValue = e.target.value;
  };
  inputField.placeholder = "I will watch...";
  inputField.style = inputStyle;

  popup.appendChild(inputField);
  popup.appendChild(comfirm);
  document.body.appendChild(popup);
}
