const medias = {
  audio: false,
  video: true
};
const video = document.getElementById("video");
const canvas = document.getElementById("cv1");
const ctx = canvas.getContext("2d");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
       .catch(errorCallback);

function successCallback(stream) {
  video.srcObject = stream;
  requestAnimationFrame(draw);
}

function errorCallback(err) {
  console.log(err);
  alert(err);
}

function draw() {
  ctx.drawImage(video, 0, 0);

  requestAnimationFrame(draw);
}

function chgImg(){
  var png = canvas.toDataURL();
  document.getElementById("newImg").src = png;
}