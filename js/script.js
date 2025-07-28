if (window.screen.width <= 1130) {
  function removeall() {
    $(".cir_border").css("border", "none");
  }
  $("#sec").on("click", function () {
    removeall();
    $("#sec").css("border", "2px solid whitesmoke");
    $("#sec").css("border-radius", "20px");
  });
  $("#pri").on("click", function () {
    removeall();
    $("#pri").css("border", "2px solid whitesmoke");
    $("#pri").css("border-radius", "20px");
  });
  $("#tri").on("click", function () {
    removeall();
    $("#tri").css("border", "2px solid whitesmoke");
    $("#tri").css("border-radius", "20px");
  });
  $("#quad").on("click", function () {
    removeall();
    $("#quad").css("border", "2px solid whitesmoke");
    $("#quad").css("border-radius", "20px");
  });
  $("#quint").on("click", function () {
    removeall();
    $("#quint").css("border", "2px solid whitesmoke");
    $("#quint").css("border-radius", "20px");
  });
  $("#hex").on("click", function () {
    removeall();
    $("#hex").css("border", "2px solid whitesmoke");
    $("#hex").css("border-radius", "20px");
  });
  $("#hept").on("click", function () {
    removeall();
    $("#hept").css("border", "2px solid whitesmoke");
    $("#hept").css("border-radius", "20px");
  });
}

$("#about").on("mouseover", function () {
  introAboutLogoTransition();
});

// Light/Dark toggle
// const checkbox = document.getElementById("checkbox"); // commented as requested

function introAboutLogoTransition() {
  $("#about-quad").css("top", "70%");
  $("#about-quad").css("opacity", "1");
}

function checkDarkMode() {
  if (
    localStorage.getItem("theme") !== null &&
    localStorage.getItem("theme") === "dark"
  ) {
    document.body.classList.add("dark-mode");
    if (checkbox) checkbox.checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    if (checkbox) checkbox.checked = false;
  }
}
checkDarkMode();

if (checkbox) {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
}

// scroll button

let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Update Navbar While Scrolling
function updateNav() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links li a");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    if (window.screen.width <= 425) {
      if (rect.top <= 1300) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
        });
        navLinks[index].classList.add("active");
      }
    } else if (425 <= window.screen.width <= 768) {
      if (rect.top <= 1250) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
        });
        navLinks[index].classList.add("active");
      }
    } else {
      if (rect.top <= 1000) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
        });
        navLinks[index].classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", updateNav);
window.addEventListener("scroll", updateNav);
