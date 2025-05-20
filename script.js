document.addEventListener("DOMContentLoaded", () => {
  const statusPara = document.getElementById("status");
  const enterBtn = document.getElementById("enterBtn");

  enterBtn.addEventListener("click", () => {
    statusPara.innerHTML = "<h1>Entered Metaverse</h1>";
  });
});
