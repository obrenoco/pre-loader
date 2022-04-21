const ready = () => {
  document.getElementById("loading").classList.add("loaded");
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 1000);
};

window.addEventListener("load", setTimeout(ready, 2000));
