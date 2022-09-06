const btns = document.querySelectorAll(".btn");

var out_put_input =  document.querySelector("#result-area");

btns.forEach(btn =>{
    btn.addEventListener("click", (event) =>{
        out_put_input.textContent = ""
        var btn_value = event.target.value;
        out_put_input.value += btn_value
    })
})

const qual = document.querySelector(".quel-button");

qual.addEventListener("click", () =>{
  out_put_input.value = eval(out_put_input.value)
})