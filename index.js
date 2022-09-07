let timeSpent = document.getElementsByClassName("TimeSpent")[0];

let counter = 0;

setInterval(() => {
  counter++;
  timeSpent.innerHTML = `Time Spent on Website: ${counter} seconds`;
}, 1000);

let colorList = ["#90ee90", "#BFC8D7", "E2D2D2", 
                "E3E2B4", "A2B59F", "#E0BBE4", 
                "#957DAD", "#FEC8D8", "#FFDFD3"];

let changingColor = document.getElementById("ChangeBgColor");

changingColor.addEventListener("click", function () {
    let colorIndex=Math.floor(Math.random()*colorList.length)
    document.querySelector("body").style.background=colorList[colorIndex]
    } 
  
);
