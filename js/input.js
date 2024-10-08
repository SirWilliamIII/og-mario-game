(function () {
  var pressedKeys = {};

  function setKey(event, status) {
    var code = event.keyCode;
    console.log(code);
    var key;

    switch (code) {
      case 37:
        key = "LEFT";
        break;
      case 39:
        key = "RIGHT";
        break;
      case 40:
        key = "DOWN";
        break;
      case 38:
        key = "JUMP";
        break;
      case 32:
        key = "RUN";
        break;
      default:
        key = String.fromCharCode(code);
    }

    pressedKeys[key] = status;
  }

  document.addEventListener("keydown", function (e) {
    setKey(e, true);
  });

  document.addEventListener("keyup", function (e) {
    setKey(e, false);
  });

  window.addEventListener("blur", function () {
    pressedKeys = {};
  });

  window.input = {
    isDown: function (key) {
      return pressedKeys[key.toUpperCase()];
    },
    reset: function () {
      pressedKeys["RUN"] = false;
      pressedKeys["LEFT"] = false;
      pressedKeys["RIGHT"] = false;
      pressedKeys["DOWN"] = false;
      pressedKeys["JUMP"] = false;
    },
  };
})();
