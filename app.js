

// document.getElementById("nameButton").onclick = function(){
//     const input = document.getElementById("input").value;
//     const inputResult = document.getElementById("inputResult");
//     inputResult.textContent = input
//     console.log(input)
// }

document.getElementById("nameButton").addEventListener("click", function(){
    const input = document.getElementById("input").value;
    const inputResult = document.getElementById("inputResult");
    inputResult.textContent = input;
    console.log(input)
})