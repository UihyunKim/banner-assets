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
      targets: "#date",
      opacity: [0, 1],
      left: [-50, 0],
    })
    .add({
      targets: "#date",
      delay: 2000,
      opacity: [1, 0],
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
    .add({
      targets: "#cta, #title",
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
    })
    .add(
      {
        targets: "#car",
        begin: function (anim) {
          getTargetAnim(anim).forEach(function (el) {
            el.style.visibility = "visible";
          });
        },
      },
      "-=500"
    );
});
