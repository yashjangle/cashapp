const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector(".check-btn");
const numOfNotes = document.querySelectorAll(".no-of-notes");
const message = document.querySelector(".message");
const nextButton = document.querySelector(".next-btn");
const cashBody = document.querySelector(".cash-amt-body");
const billErrorMsg = document.querySelector(".bill-error-msg");
const displayChange = document.querySelector(".display-change");
const notesvAvailable = [2000, 500, 100, 20, 10, 5, 1];

hideCashBody();
nextButton.addEventListener("click", function () {
  const inputBillAmt = Number(billAmount.value);

  if (billAmount.value !== "") {
    if (isNaN(inputBillAmt) === false) {
      if (inputBillAmt < 0) {
        billErrorShowMsg(`Please enter a positive bill amount!`);
      } else {
        billErrorHideMsg();
        showCashBody();
        changeDisplayHide();
      }
    } else {
      billErrorShowMsg("Please enter a valid bill amount!");
    }
  } else {
    billErrorShowMsg(`Please enter the bill amount!`);
  }
});

checkButton.addEventListener("click", function () {
  hideMessage();
  const inputCashGiven = Number(cashGiven.value);
  if (cashGiven.value !== "") {
    if (isNaN(inputCashGiven) === false) {
      if (inputCashGiven > 0) {
        if (inputCashGiven >= Number(billAmount.value)) {
          changeDisplayShow();
          const amountTobeReturned = inputCashGiven - billAmount.value;
          calcNotesTobeReturned(amountTobeReturned);
        } else {
          showMessage(`Cash is less than the bill amount!`);
          changeDisplayHide();
        }
      } else {
        showMessage(`Please enter a positive cash amount!`);
        changeDisplayHide();
      }
    } else {
      showMessage(`Please enter a valid cash amount given!`);
      changeDisplayHide();
    }
    // showMessage(`Please enter the cash amount!`);
  } else {
    showMessage(`Please enter the cash given amount!`);
    changeDisplayHide();
    //
  }
});

function calcNotesTobeReturned(amountTobeReturned) {
  for (let i = 0; i < notesvAvailable.length; i++) {
    const notesCount = Math.trunc(amountTobeReturned / notesvAvailable[i]);

    amountTobeReturned = amountTobeReturned % notesvAvailable[i];
    numOfNotes[i].innerText = notesCount;
  }
}

function hideMessage() {
  message.style.display = "none";
}
function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function hideCashBody() {
  cashBody.style.visibility = "hidden";
}

function showCashBody() {
  cashBody.style.visibility = "visible";
  nextButton.style.display = "none";
}

function billErrorShowMsg(msg) {
  billErrorMsg.style.display = "block";
  billErrorMsg.innerText = msg;
}

function billErrorHideMsg() {
  billErrorMsg.style.display = "none";
}

function changeDisplayHide() {
  displayChange.style.display = "none";
}

function changeDisplayShow() {
  displayChange.style.display = "block";
}