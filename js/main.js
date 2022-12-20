// Make semi-active function
const makeSemiActive = (arr) => {
  arr.forEach((ele) => {
    if (ele.classList.contains("active")) {
      ele.classList.remove("active");
      ele.classList.add("semi-active");
    }
  });
};

// Save active function
const saveActive = (arr) => {
  arr.forEach((ele) => {
    if (ele.classList.contains("semi-active")) {
      ele.classList.remove("semi-active");
      ele.classList.add("active");
    }
  });
};

// Remove active function
const removeActiveFromAll = (arr) => {
  arr.forEach((ele) => {
    ele.classList.remove("semi-active");
    ele.classList.remove("active");
  });
};

// Add active function
const addActiveToEle = (ele) => {
  ele.classList.add("active");
};

// Manage app function
const manageApp = () => {
  // Select elements from document
  const ratingNums = document.querySelectorAll("label");
  const sumbit = document.querySelector("input[type='submit']");

  // Rating number variable
  let rating = 0;

  // Add events to every rating number
  ratingNums.forEach((ele) => {
    ele.addEventListener("mouseenter", () => {
      makeSemiActive(ratingNums);
    });

    ele.addEventListener("mouseleave", () => {
      saveActive(ratingNums);
    });

    ele.addEventListener("click", (e) => {
      removeActiveFromAll(ratingNums);
      addActiveToEle(e.target);
      rating = e.target.dataset.num;
    });
  });

  // Add click event to sumbit input
  sumbit.addEventListener("click", (e) => {
    const firstContent = document.querySelector(".first-content");
    const secondContent = document.querySelector(".second-content");
    const ratingNum = document.getElementById("rating-num");

    if (rating) {
      firstContent.classList.add("rated");
      secondContent.classList.add("appear");
      ratingNum.innerHTML = rating;
    }
    e.preventDefault();
  });
};

// Start app
manageApp();
