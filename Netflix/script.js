let scrollContainers = document.querySelectorAll(".slideInner");
let backBtns = document.querySelectorAll(".back");
let nextBtns = document.querySelectorAll(".next");

backBtns.forEach((backBtn, index) => {
    backBtn.addEventListener("click", () => {
      scrollContainers[index].style.scrollBehavior = 'smooth';
      scrollContainers[index].scrollLeft -= 270;
    });
  });
  
  nextBtns.forEach((nextBtn, index) => {
    nextBtn.addEventListener("click", () => {
      scrollContainers[index].style.scrollBehavior = 'smooth';
      scrollContainers[index].scrollLeft += 270;
    });
  });
  
