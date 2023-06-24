var targetPath = "https://expert.chegg.com/qna/authoring/answer";
var skipClassName = "sc-1eq90u-7";

var i = 1;

setTimeout(function () {
  if (document.getElementsByClassName(skipClassName)[0] == null) {
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      if (window.location.href == targetPath)
        window.open("https://expert.chegg.com/expertqna", "_self");
    }
  } else if (i == 1) {
    i = 0;
    var sound = new Audio();
    sound.src =
      "https://assets.mixkit.co/sfx/download/mixkit-arcade-retro-game-over-213.wav";
    sound.play();
  }
  console.log(i);
}, 6000);
