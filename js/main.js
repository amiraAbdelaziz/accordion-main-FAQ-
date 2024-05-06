let plus = document.querySelectorAll("#id")
let p = document.querySelectorAll("p")

function display() {
  plus.forEach(function(e) {
    e.addEventListener('click', function() {
      let span = e.parentElement.parentElement.lastElementChild
      if (this.src.includes("icon-plus.svg")) {
        this.src = this.src.replace("icon-plus.svg", "icon-minus.svg");
        span.style.display = "block"
      } else if (this.src.includes("icon-minus.svg")) {
        this.src = this.src.replace("icon-minus.svg", "icon-plus.svg");
        span.style.display = "none"
      }
    });
  })
}

display()
