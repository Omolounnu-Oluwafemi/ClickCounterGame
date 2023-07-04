function clickCounter() {
  let count = 0;

  const clickContainer = document.getElementById("div1");
  clickContainer.style.backgroundColor = "#ffffff";
  clickContainer.style.width = "70%";
  clickContainer.style.marginTop = "10px";
  clickContainer.style.marginBottom = "40px";
  clickContainer.style.display = "flex";
  clickContainer.style.flexDirection = "column";
  clickContainer.style.justifyContent = "center";
  clickContainer.style.alignItems = "center";
  clickContainer.style.borderRadius = "10px";

  const theButton = document.getElementById("button1");
  theButton.style.backgroundColor = "#0fc8dbff";
  theButton.style.width = "20%";
  theButton.style.height = "50px";
  theButton.style.marginTop = "20px";
  theButton.style.marginBottom = "30px";
  theButton.style.borderRadius = "10px";
  theButton.style.borderColor = "white";
  theButton.style.border = "1px";

  let timer;

  function handleTimeout() {
    count = 0;
    clickContainer.innerHTML = `GAME OVER ☹️ <br> Click the Button to Start Game Again`;
    clickContainer.style.color = "red";
    clickContainer.style.textAlign = "center";
    clickContainer.style.minHeight = "70px";
    clickContainer.style.marginTop = "50px";
    clickContainer.style.fontWeight = "Bold";

    setTimeout(() => {
      clickContainer.textContent = "";
      clickContainer.style.minHeight = "0";
      clickContainer.style.backgroundColor = "white";
      clickContainer.style.marginTop = "10px";
    }, 1500);

    clearInterval(timer);
  }

  function startTimer() {
    timer = setInterval(handleTimeout, 2000);
  }

  function handleClick() {
    count++;
    const textArea = document.createElement("h4");
    clickContainer.appendChild(textArea);
    textArea.style.color = "black";
    textArea.style.display = "flex";
    textArea.style.justifyContent = "center";
    textArea.style.marginBottom = "10px";

    clearInterval(timer);
    startTimer();
    textArea.textContent = `✅ CLICK: ${count}`;
  }

  theButton.addEventListener("click", handleClick);
}

clickCounter();
