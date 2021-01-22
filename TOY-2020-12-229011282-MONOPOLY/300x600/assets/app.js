const getTargetAnim = function (anim) {
  const targets = anim.animatables
    .filter(function (el) {
      return el.target;
    })
    .map(function (el) {
      return el.target;
    });

  const target = anim.animatables[0].target;
  if (!target) return console.error("Error get target");
  return targets;
};

window.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  anime
    .timeline({
      easing: "easeInOutCubic",
      duration: 500,
      begin: function () {
        document.getElementById("logo").style.opacity = 1;
        document.getElementById("red-bar").style.opacity = 1;
      }
    })
    .add({
      targets: "#grandfa",
      opacity: [1, 1],
      begin: function (anim) {
        getTargetAnim(anim).forEach(function (el) {
          el.style.visibility = "visible";
        });
      }
    })
    .add(
      {
        targets: "#car",
        opacity: [1, 1],
        scale: [0.9, 0.9],
        top: [73, 73],
        begin: function (anim) {
          getTargetAnim(anim).forEach(function (el) {
            el.style.visibility = "visible";
          });
        }
      },
      "-=500"
    )
    .add({
      targets: "#title, #grandfa, #translation",
      opacity: [1, 0],
      delay: 4000
    })
    .add({
      targets: "#copy1, #cta, #offer, #ml",
      opacity: [0, 1],
      translateX: [-10, 0],
      begin: function (anim) {
        getTargetAnim(anim).forEach(function (el) {
          el.style.visibility = "visible";
        });
      }
    })
    .add(
      {
        targets: "#car",
        scale: 1,
        top: 0,
        translateY: 0
      },
      "-=500"
    )
    .add({
      targets: "#copy1, #offer",
      opacity: [1, 0],
      delay: 4000
    })
    .add({
      targets: "#copy2, #dealer",
      opacity: [0, 1],
      translateX: [-10, 0],
      begin: function (anim) {
        getTargetAnim(anim).forEach(function (el) {
          el.style.visibility = "visible";
        });
      }
    });
});
