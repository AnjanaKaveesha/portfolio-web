// const videoContainer = document.querySelector(".video-container");
// const video = document.querySelector(".video");

// if ("ontouchstart" in window || navigator.maxTouchPoints) {
//   videoContainer.addEventListener("touchstart", function () {
//     if (video.paused) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   });
// } else {
//   videoContainer.addEventListener("mouseenter", function () {
//     video.play();
//   });

//   videoContainer.addEventListener("mouseleave", function () {
//     video.pause();
//     video.currentTime = 0;
//   });
// }
            window.onload = function(){
              document.getElementById("autoplay").play()
            }
       