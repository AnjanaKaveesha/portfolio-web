
// <--------------play video on hover-------------->
function playVideo(element) {
  const video = element.querySelector(".hoverVideo");
  video.currentTime = 0;
  video.play();
}
function pauseVideo(element) {
  const video = element.querySelector(".hoverVideo");
  video.pause();
  video.currentTime = 0;
}


// <---------------video scaling and move with cursor --------------->
document.querySelectorAll(".video_div").forEach((container) => {
  const video = container.querySelector("video");

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    video.style.transform = `scale(1.3) translate(${x / 30}px, ${y / 20}px)`;
  });

  container.addEventListener("mouseleave", () => {
    video.style.transform = "scale(1) translate(0, 0)";
  });
});

// <-----------------nav bar links------------------->

