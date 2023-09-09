const api = "https://api.shrtco.de/v2/shorten?url=";
const linkBox = document.querySelector("#links-container");
const link = document.querySelector("input");
const form = document.querySelector("form");
let links = [];

document.forms[0].onsubmit = function (e) {
  e.preventDefault();
  shortLink();
};

document.forms[0].oninput = function () {
  rmError();
};
async function shortLink() {
  try {
    const response = await fetch(`${api}${link.value}`);
    const data = await response.json();

    let { full_short_link2 } = data.result;
    addlink(link.value, full_short_link2);
    empityValue();
    readData();
  } catch (error) {
    errorMsg();
    throw new Error(error);
  }
}

function addlink(full, short) {
  links.push({
    fullLink: full,
    shortLink: short,
  });
}

function readData() {
  linkBox.innerHTML = "";
  links.forEach((link) => {
    linkBox.innerHTML += `
    <div
    class="link  bg-white rounded p-3 p-md-4 d-flex flex-column align-items-start flex-lg-row justify-content-between align-items-lg-center"
  >
    <h5 class="long-link overflow-hidden mb-0">${link.fullLink}</h5>
    <hr class="d-block d-lg-none w-100" />
    <div
      class="short-link d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-lg-end gap-3"
    >
      <a href="${link.fullLink}" target="_blank">${link.shortLink}</a>
      <button onclick='copyLink(${JSON.stringify(link.shortLink)})'
        class="btn copy-btn main-btn p-2 text-white rounded">
        Copy
      </button>
    </div>
  </div>
    `;
  });
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.style.cssText = `
      background-color:var(--Very-Dark-Blue) !important
     `;
      this.textContent = "Copied!";
    });
  });
}

function copyLink(link) {
  navigator.clipboard.writeText(link);
}

function empityValue() {
  link.value = "";
}

function errorMsg() {
  form.classList.add("error");
}

function rmError() {
  form.classList.remove("error");
}

ScrollReveal().reveal("header", {
  durition: 2000,
  origin: "top",
  distance: "100px",
  opacity: 0.7,
});

ScrollReveal().reveal("#intro-text", {
  delay: 500,
  origin: "left",
  distance: "100px",
  durition: 2000,
});

ScrollReveal().reveal("#intro-img", {
  delay: 700,
  origin: "right",
  distance: "100px",
  durition: 2000,
});

ScrollReveal().reveal("#short-content", {
  durition: 2000,
});

ScrollReveal().reveal(".card", {
  durition: 1000,
  interval: 500,
  distance: "200px",
  origin: "top",
});

ScrollReveal().reveal("#attraction-content", {
  durition: 1000,
});

ScrollReveal().reveal("#footer-content", {
  durition: 2000,
});
