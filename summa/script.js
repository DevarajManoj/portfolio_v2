document.write("hellokai");

///js
function fss() {
  document.getElementById("js").innerHTML = "workin separate js";
  // document.getElementById("js").innerText = "from external js";
}

function scrollLeft() {
  document.getElementById("slider").scrollBy({
    left: -300,
    behavior: "smooth",
  });
}

function scrollRight() {
  document.getElementById("slider").scrollBy({
    left: 300,
    behavior: "smooth",
  });
}
//touch detail open
function showDetails(box) {
  // Hide details in other boxes
  document.querySelectorAll(".image-box").forEach((b) => {
    if (b !== box) b.classList.remove("show");
  });

  // Toggle current box
  box.classList.toggle("show");
}
