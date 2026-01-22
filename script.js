const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const val = btn.textContent;

    if(val === "="){
      try{
        expression = expression
          .replace(/×/g,"*")
          .replace(/÷/g,"/")
          .replace(/−/g,"-")
          .replace(/\^/g,"**")
          .replace(/%/g,"/100");

        expression = eval(expression).toString();
        display.textContent = expression;
      }catch{
        display.textContent = "Error";
        expression = "";
      }
      return;
    }

    if(val === "⌫"){
      expression = expression.slice(0,-1);
      display.textContent = expression;
      return;
    }

    expression += val;
    display.textContent = expression;
  });
});
