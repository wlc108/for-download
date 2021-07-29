$("#b1").click(function () {
    alert("Clicked");

  });


  $("#b2").on('click', (e) => {
    tmp = document.createElement("div")
    tmp.classList.add("blue")
    tmp.innerText = "*INSERTED*"
    // document.getElementById("left-side").append(tmp.cloneNode(true))
    document.getElementById("left-side").append(tmp)

});

$("#b3").on('click', (e) => {
    tmp = document.createElement("div")
    tmp.classList.add("yellow")
    tmp.innerText = "*INSERTED*"
    // document.getElementById("left-side").append(tmp.cloneNode(true))
    document.getElementById("left-side").append(tmp)
});


$("#b4").on('click', (e) => {
    tmp = document.createElement("div")
    tmp.classList.add("blue")
    tmp.innerText = "*INSERTED*"
    // document.getElementById("left-side").append(tmp.cloneNode(true))
    document.getElementById("right-side").append(tmp)

});

$("#b5").on('click', (e) => {
    tmp = document.createElement("div")
    tmp.classList.add("yellow")
    tmp.innerText = "*INSERTED*"
    // document.getElementById("left-side").append(tmp.cloneNode(true))
    document.getElementById("right-side").append(tmp)
});