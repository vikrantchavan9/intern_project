const button = document.getElementById('colorButton').onclick = changeColor;
function changeColor() {
     const colors = ['#2F3C7E', '#2cc64f', '#201018', '#e319a7', 'f8555b', '#f6d956', '#990011', '#ff5e43', '#1978e3', '#000000'];
     const currentColor = colorButton.style.backgroundColor;
     let newColor = colors[Math.floor(Math.random()* colors.length)];
     colorButton.style.backgroundColor = newColor;
     console.log(currentColor);
     while (nextColor === currentColor);
     nextColor = colors[math.floor(math.random()* colors.length)];
}


function showAlert() {
     const currentTime = new Date();
     const time = currentTime.getHours() + ":" + currentTime.getMinutes()
     console.log(time);
     alert("Hello User, Current time is" + " " + time);
}

const giveAlert = document.getElementById('alertButton').onclick = showAlert;  