let ele;

/*
A simple function which is used to wait for a particular time (in miliseconds)
*/
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/*
TODO:
This function should return a list of all the distinct characters in UPPERCASE that have been typed in the textbox with the id "message"
*/
function getCharacters() {
  let msg = document.getElementById("message").value;
  let str = [];
  for (let i = 0; i < msg.length; i++) {
    if (!str.includes(msg[i])) {
      str.push(msg[i].toUpperCase());
    }
  }

  return str.filter((elmt) => elmt != " ");
}

/* 
Sets the CSS properties of the DOM elements to create a nice visual effect
TODO: Play with the colour codes provided to create a theme which has more resemblance to Netflix's Stranger Things
*/
async function setCSS(character) {
  let index = character.charCodeAt(0) - 65;
  let colorValue = "";

  if (index >= 0 && index <= 7) {
    ele = document.getElementById("setOne").getElementsByTagName("li");
  } else if (index >= 8 && index <= 16) {
    ele = document.getElementById("setTwo").getElementsByTagName("li");
    index = index - 8;
  } else if (index >= 17 && index <= 25) {
    ele = document.getElementById("setThree").getElementsByTagName("li");
    index = index - 17;
  }

  if (index % 2 != 0) {
    //PINK
    ele[index].style.backgroundColor = "#fc8eac";
    colorValue = "rgba(255,105,180,0.9)";
    ele[index].style.boxShadow = "0px 2px 20px 4px #ffff00";
  } else {
    //BLUE
    ele[index].style.backgroundColor = "#89CFF0";
    colorValue = "rgba(0,153,255,0.8)";
    ele[index].style.boxShadow = "0px 2px 20px 4px  #ffff00";
  }

  await sleep(1000);

  ele[index].style.backgroundColor = colorValue;
  ele[index].style.boxShadow = "0px 2px 20px 4px  " + colorValue;

  await sleep(500);
}

async function illuminateLight(index) {
  const message = getCharacters();
  for (let i = 0; i < message.length; i++) {
    await setCSS(message[i]);
  }
  /*
    TODO: Call the setCSS function asynchronously for each character present in the message array
    */
}
