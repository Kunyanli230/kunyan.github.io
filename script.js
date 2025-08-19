document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn");
  const message = document.getElementById("message");

  button.addEventListener("click", () => {
    const colors = ["#ff6f61", "#6a5acd", "#20b2aa", "#ffb347", "#77dd77"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.style.backgroundColor = randomColor;
    message.textContent = "🎉 You clicked the button! Background changed!";
  });
});
