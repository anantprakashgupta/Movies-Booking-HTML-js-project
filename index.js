const leftRow = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
const rightRow = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

for(let i=0;i<leftRow.length;i++){
    for(let j=0;j<leftRow[i].length;j++){
        console.log(leftRow[i][j]);
    }
}
const left = document.querySelector(".leftRow");
const right = document.querySelector(".rightRow");

leftRow.map((element, i) => {
  element.map((el, ind) => {
    let div = document.createElement("div");
    div.innerText = "R" + (ind + 6 * i + 1);
    div.addEventListener("click", () => {
      //logic you want to run on this event
      // console.log("Clicked");
      div.id = "red";
      leftRow[i][ind] = 1;
    });
    left.append(div);
  });
});

rightRow.map((element, i) => {
  element.map((el, ind) => {
    let div = document.createElement("div");
    div.innerText = "R" + (ind + 6 * i + 1);
    div.addEventListener("click", () => {
      //logic you want to run on this event
      // console.log("Clicked");
      div.id = "red";
      rightRow[i][ind] = 1;
    });
    right.append(div);
  });
});


//Prakash
