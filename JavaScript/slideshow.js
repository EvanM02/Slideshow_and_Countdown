var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Countdown program
function countdown() {
  var seconds = document.getElementById("seconds").value;
  var timer = document.getElementById("timer");

  if (seconds <= 0) {
    // Add animation to the error message
    var removedTask = document.querySelector("li:nth-child(" + +1 + ")");

    // Add animation to the removed task
    removedTask.classList.add("animation", "remove-animation");

    // Show a message to the user that the number needs to be positive
    var message = document.createElement("div");
    message.textContent = " Please enter a positive value ";
    message.classList.add("message");
    document.body.appendChild(message);

    // Remove the message after 2 seconds
    setTimeout(function () {
      message.parentNode.removeChild(message);
    }, 2000);

    return;
  }

  function tick() {
    seconds = seconds - 1;
    timer.innerHTML = seconds;

    if (seconds === -1) {
      // Show a message to the user that the time is up
      var message = document.createElement("div");
      message.textContent = "Time's up!";
      message.classList.add("message");
      document.body.appendChild(message);

      // Remove the message after 2 seconds
      setTimeout(function () {
        message.parentNode.removeChild(message);
      }, 2000);

      // Add a restart button
      var restartBtn = document.createElement("button");
      restartBtn.textContent = "Restart";
      restartBtn.classList.add("restart-btn");
      document.body.appendChild(restartBtn);

      // Reload the page when the restart button is clicked
      restartBtn.addEventListener("click", function () {
        window.location.reload();
      });
      timer.style.opacity = 0;

      return;
    }

    setTimeout(tick, 1000);
  }

  tick();
}
