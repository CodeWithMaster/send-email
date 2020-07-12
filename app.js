const sendBtn = document
  .querySelector(".send-email")
  .addEventListener("click", function () {
    this.classList.add("loading");
    setTimeout(() => {
      this.classList.remove("loading");
      this.classList.add("send-compeleted");
      document.querySelector("input").value = "";
      setTimeout(() => {
        this.classList.remove("send-compeleted");
      }, 2000);
    }, 3000);
  });

// Code With Master 💑
