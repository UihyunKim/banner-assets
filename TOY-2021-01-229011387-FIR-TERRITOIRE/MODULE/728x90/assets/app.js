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
        document.getElementById("title").style.opacity = 1;
      },
    })
    .add({
      targets: "#car",
      opacity: [0, 1],
      left: [100, 0],
      delay: 2000,
      begin: function (anim) {
        getTargetAnim(anim).forEach(function (el) {
          el.style.visibility = "visible";
        });
      },
    })
    .add({
      targets: "#car-1",
      opacity: [0, 1],
      left: [-50, 0],
      begin: function (anim) {
        getTargetAnim(anim).forEach(function (el) {
          el.style.visibility = "visible";
        });
      },
    })
    .add({
      targets: "#car-1",
      opacity: [1, 0],
      delay: 1000,
      left: [0, 50],
      begin: function (anim) {
        getTargetAnim(anim).forEach(function (el) {
          el.style.visibility = "visible";
        });
      },
    })
    .add({
      targets: "#car-2",
      opacity: [0, 1],
      left: [-50, 0],
      begin: function (anim) {
        getTargetAnim(anim).forEach(function (el) {
          el.style.visibility = "visible";
        });
      },
    })
    .add({
      targets: "#car-2",
      opacity: [1, 0],
      delay: 1000,
      left: [0, 50],
      begin: function (anim) {
        getTargetAnim(anim).forEach(function (el) {
          el.style.visibility = "visible";
        });
      },
    })
    .add({
      targets: "#car-3",
      opacity: [0, 1],
      left: [-50, 0],
      begin: function (anim) {
        getTargetAnim(anim).forEach(function (el) {
          el.style.visibility = "visible";
        });
      },
    })
    .add({
      targets: "#title",
      opacity: [1, 0],
    })
    .add({
      targets: "#offer, #ml",
      opacity: [0, 1],
      translateX: [-10, 0],
      begin: function (anim) {
        getTargetAnim(anim).forEach(function (el) {
          el.style.visibility = "visible";
        });
      },
    })
    .add({
      targets: "#cta",
      opacity: [0, 1],
      translateX: [-10, 0],
      begin: function (anim) {
        getTargetAnim(anim).forEach(function (el) {
          el.style.visibility = "visible";
        });
      },
    })
    .add(
      {
        targets: "#offer",
        translateY: -10,
        begin: function (anim) {
          getTargetAnim(anim).forEach(function (el) {
            el.style.visibility = "visible";
          });
        },
      },
      "-=500"
    )
    .add({
      targets: "#car-3, #offer, #cta, #ml",
      opacity: [1, 0],
      delay: 4000,
    })
    .add({
      targets: "#dealer, #cta2",
      opacity: [0, 1],
      translateX: [-10, 0],
      begin: function (anim) {
        getTargetAnim(anim).forEach(function (el) {
          el.style.visibility = "visible";
        });
      },
    });
});
