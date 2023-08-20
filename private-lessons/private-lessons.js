const productContainers = [...document.querySelectorAll('#big-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
      item.style.scrollBehavior = 'smooth';
      item.style.webkitOverflowScrolling = 'smooth';
  });

  preBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
      item.style.scrollBehavior = 'smooth';
      item.style.webkitOverflowScrolling = 'smooth';
  });
});

productContainers.forEach((item,i) => {
  document.addEventListener("scroll", () => {
    if(nxtBtn[i].style.display === "none" && preBtn[i].style.display === "none") {
      item.scrollLeft = 0;
      nxtBtn[i].style.display = "block";
    }
  document.addEventListener("click", () => {
    if(nxtBtn[i].style.display === "none" && preBtn[i].style.display === "none") {
      item.scrollLeft = 0;
      nxtBtn[i].style.display = "block";
    }
  })
  })
})

const containerFirst1 = document.getElementById("first1");
const btnPrev1 = document.getElementById("preBtn1");
  
// Function to check if the target div is visible within the viewport
function isTargetDivVisible1() {
    var rect = containerFirst1.getBoundingClientRect();
    return (
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

const containerLast1 = document.getElementById("last1");
const btnNext1 = document.getElementById("nxtBtn1");

   
  // Function to check if the target div is visible within the viewport
    function isTargetDivVisible2() {
      var rect = containerLast1.getBoundingClientRect();
      return (
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
const containerFirst2 = document.getElementById("first2");
const btnPrev2 = document.getElementById("preBtn2");
  
// Function to check if the target div is visible within the viewport
function isTargetDivVisible3() {
    var rect = containerFirst2.getBoundingClientRect();
    return (
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }



  const containerLast2 = document.getElementById("last2");
  const btnNext2 = document.getElementById("nxtBtn2");

   
  // Function to check if the target div is visible within the viewport
    function isTargetDivVisible4() {
      var rect = containerLast2.getBoundingClientRect();
      return (
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    btnNext1.addEventListener("click", () => {
      if(isTargetDivVisible1())
        btnPrev1.style.display = "block";
      if(!isTargetDivVisible1() && !isTargetDivVisible2())
        btnNext1.style.display = "none";
    })
    
    btnPrev1.addEventListener("click", () => {
      if(isTargetDivVisible2())
        btnNext1.style.display = "block";
      if(!isTargetDivVisible1() && !isTargetDivVisible2())
        btnPrev1.style.display = "none";
      })

    btnNext2.addEventListener("click", () => {
      if(isTargetDivVisible3())
        btnPrev2.style.display = "block";
      if(!isTargetDivVisible3() && !isTargetDivVisible4())
        btnNext2.style.display = "none";
    })
    
    btnPrev2.addEventListener("click", () => {
      if(isTargetDivVisible4())
        btnNext2.style.display = "block";
      if(!isTargetDivVisible3() && !isTargetDivVisible4())
        btnPrev2.style.display = "none";
      })
      const telButton = document.getElementById("tel-button");
  const whatsappButton = document.getElementById("whatsapp-button");

  let currentSize = 9; // Starting size in rem
  let isIncreasing = true; // Track whether the size is increasing or decreasing

  function updateButtonSize() {
    if (isIncreasing) {
      currentSize += 0.025; // Change the size smoothly
      if (currentSize >= 9.75) {
        isIncreasing = false;
      }
    } else {
      currentSize -= 0.025; // Change the size smoothly
      if (currentSize <= 9) {
        isIncreasing = true;
      }
    }

  telButton.style.width = `${currentSize}rem`;
  telButton.style.height = `${currentSize}rem`;
  whatsappButton.style.width = `${currentSize}rem`;
  whatsappButton.style.height = `${currentSize}rem`;

  requestAnimationFrame(updateButtonSize);
  }

  // Start the smooth animation loop
  updateButtonSize();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
