const avatar = document.querySelector("aside#profile .avatar");
const userInfo = document.querySelector("aside#profile .user-info");
const historyQuantity = document.getElementById("quantity");
const historyList = document.querySelector("ul.history-list");
const userId = document.getElementById("user-id");
const fidelityCardContentItem = document.querySelectorAll(
  "main section .fidelity-card-content .content-item"
);
const progress = document.querySelector("footer.prize .progress");

export function showUserData({ userData }) {
  const {
    id,
    name,
    profilePicture,
    clientSince,
    appointmentHistory,
    loyaltyCard,
  } = userData;
  const { totalCuts, cutsNeeded, cutsRemaining } = loyaltyCard;
  resetData();

  // Set user image
  const userImage = document.createElement("img");
  userImage.src = profilePicture;
  userImage.alt = `${name} Profile Picture`;

  avatar.appendChild(userImage);

  // Set user name and signup date
  const userName = document.createElement("h2");
  userName.textContent = name;
  const signupDate = document.createElement("p");
  signupDate.textContent = `Cliente desde ${clientSince}`;

  userInfo.append(userName, signupDate);

  // Set user history
  historyQuantity.textContent = `${totalCuts} cortes`;

  appointmentHistory.forEach(({ date, time }) => {
    const listItem = document.createElement("li");
    listItem.classList.add("history-item");

    const dateTimeInfo = document.createElement("div");
    dateTimeInfo.classList.add("date-time-info");
    const dateText = document.createElement("h4");
    dateText.textContent = date;
    const timeText = document.createElement("p");
    timeText.textContent = time;
    dateTimeInfo.append(dateText, timeText);

    const badgeIcon = document.createElement("span");
    badgeIcon.classList.add("badge-icon");

    listItem.append(dateTimeInfo, badgeIcon);

    historyList.appendChild(listItem);
  });

  // Set user ID
  userId.textContent = id;

  // Set user loyalty card information
  Array(totalCuts)
    .fill(null)
    .forEach((_, index) => {
      const contentItem = fidelityCardContentItem[index];
      contentItem.classList.add("marked");
    });

  // Set remaining cuts
  const remaining = document.createElement("h1");
  const remainingText = document.createElement("span");
  remainingText.textContent = ` cortes restantes`;
  remaining.append(cutsRemaining, remainingText);

  const progressBarContainer = document.createElement("div");
  progressBarContainer.classList.add("progress-bar-container");
  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  const progressBarFill = document.createElement("div");
  progressBarFill.classList.add("progress-bar-fill");
  progressBarFill.style.width = `${totalCuts * 10}%`;
  const progressBarText = document.createElement("p");
  progressBarText.classList.add("progress-bar-text");
  progressBarText.textContent = `${totalCuts} de ${cutsNeeded}`;

  progressBar.appendChild(progressBarFill);
  progressBarContainer.append(progressBar, progressBarText);

  progress.append(remaining, progressBarContainer);

  // Check if already has total cuts
  if (totalCuts === cutsNeeded) {
    setTimeout(() => {
      alert("Parabéns! Seu próximo corte é gratuito!");
    }, 100);
  }
}

function resetData() {
  avatar.innerHTML = "";
  userInfo.innerHTML = "";
  historyQuantity.innerHTML = "";
  historyList.innerHTML = "";
  fidelityCardContentItem.forEach((item) => item.classList.remove("marked"));
  progress.innerHTML = "";
}
