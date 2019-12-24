(() => {
  function init(){
    document.querySelector("button").addEventListener("click", (event) => {
      event.target.innerHTML = "Onder de hometrainer!";
      event.target.className = "twist";
    });
  }
  init();
})();