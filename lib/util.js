(function () {
  if (typeof ZombieSlayer === "undefined") {
    window.ZombieSlayer = {};
  }

  var Util = ZombieSlayer.Util = {};

  Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {
      this.constructor = ChildClass;
    }

    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Util.loadImage = function (img_path) {
    var img = new Image();
    img.src = img_path;

    return img;
  };
})();
