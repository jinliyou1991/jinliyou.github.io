function showDivs(index, slides) {
  for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}

function getIndex(index, slides) {
  if (index > slides.length) {
    return 1;
  }

  if (index < 1) {
    return slides.length;
  }

  return index;
}
/*
(function initSlide() {
  let peopleIndex = 1;
  let alumniIndex = 1;

  let peopleSlides = document.getElementsByClassName("people-slide");
  let alumniSlides = document.getElementsByClassName("alumni-slide");

  let peopleLeftButton = document.getElementById("people-left-btn");
  let peopleRightButton = document.getElementById("people-right-btn");
  let alumniLeftButton = document.getElementById("alumni-left-btn");
  let alumniRightButton = document.getElementById("alumni-right-btn");

  showDivs(peopleIndex, peopleSlides);
  showDivs(alumniIndex, alumniSlides);

  peopleLeftButton.addEventListener("click", function() {
    peopleIndex = getIndex(--peopleIndex, peopleSlides);
    showDivs(peopleIndex, peopleSlides);
  });
  peopleRightButton.addEventListener("click", function() {
    peopleIndex = getIndex(++peopleIndex, peopleSlides);
    showDivs(peopleIndex, peopleSlides);
  });
  alumniLeftButton.addEventListener("click", function() {
    alumniIndex = getIndex(--alumniIndex, alumniSlides);
    showDivs(alumniIndex, alumniSlides);
  });
  alumniRightButton.addEventListener("click", function() {
    alumniIndex = getIndex(++alumniIndex, alumniSlides);
    showDivs(alumniIndex, alumniSlides);
  });
}) ();
*/
