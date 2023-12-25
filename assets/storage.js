const CACHE = "cal_history";
 
function checkStorage() {
  return typeof (Storage) !== "undefined";
}
 
function putHistory(data) {
  if (checkStorage()) {
    let historyData = null;
    if (localStorage.getItem(CACHE) === null) {
      historyData = [];
    } else {
      historyData = JSON.parse(localStorage.getItem(CACHE));
    }
 
    historyData.unshift(data);
 
    if (historyData.length > 10) {
      historyData.pop();
    }
 
    localStorage.setItem(CACHE, JSON.stringify(historyData));
  }
}
 
function showHistory() {
  if (checkStorage()) {
    return JSON.parse(localStorage.getItem(CACHE)) || [];
  } else {
    return [];
  }
}
 
function renderHistory() {
  const historyData = showHistory();
  let historyList = document.querySelector("#historyList");
  historyList.innerHTML = "";
 
  for (let history of historyData) {
    let row = document.createElement("tr");
    row.innerHTML = "<td>" + history.firstNumber + "</td>";
    row.innerHTML += "<td>" + history.operator + "</td>";
    row.innerHTML += "<td>" + history.secondNumber + "</td>";
    row.innerHTML += "<td>" + history.result + "</td>";
 
    historyList.appendChild(row);
  }
}
 
renderHistory();