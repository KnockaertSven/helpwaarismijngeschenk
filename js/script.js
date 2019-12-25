(() => {
  function init(){
    document.querySelector("button").addEventListener("click", (event) => {
      event.target.innerHTML = "In de berging!";
      event.target.className = "twist";
    });
  }
  init();
})();