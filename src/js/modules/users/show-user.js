const avatar = document.querySelector("aside#profile .avatar");
const userInfo = document.querySelector("aside#profile .user-info");
const historyQuantity = document.getElementById("quantity");
const historyList = document.querySelector("ul.history-list");

export function showUserData({ userData }) {
  const { name, profilePicture, clientSince, appointmentHistory } = userData;
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
  historyQuantity.textContent = `${appointmentHistory.length} cortes`;

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
}

function resetData() {
  avatar.innerHTML = "";
  userInfo.innerHTML = "";
  historyQuantity.innerHTML = "";
}
