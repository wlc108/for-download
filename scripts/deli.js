// What I need to do now to handle checking radios is like:

// z = document.getElementsByName("breadType");

// then loop through z, look for the one where z[0].checked, then get that value

$("#menu-btn-next").on("click", (e) => {
    console.log(e);
    doit();
});

$("#b3").on("click", (e) => {
    tmp = document.createElement("div");
    tmp.classList.add("blue");
    tmp.innerText = "*INSERTED*";
    // document.getElementById("left-side").append(tmp.cloneNode(true))
    document.getElementById("left-side").append(tmp);
});

function doit() {
    let tmp;
    switch (currentState) {
        case "init":
            console.log("Changing to ask-bread");
            document.getElementById("menu-start").classList.add("d-none");
            document.getElementById("select-bread").classList.remove("d-none");
            currentState = "ask-bread";
            break;
        case "ask-bread":
            console.log("in " + currentState);
            tmp = document.getElementById("bread");            
            tmp.classList.remove("d-none");
            
            let tmpdebug = document.getElementById("breadType");
            console.log(tmpdebug);

            document.getElementById("select-bread").classList.add("d-none");
            document.getElementById("select-meat").classList.remove("d-none");            

            currentState = "ask-meat";
            break;
        case "ask-meat":
            console.log("in " + currentState);
            tmp = document.getElementById("meat");
            tmp.classList.remove("d-none");
            document.getElementById("select-meat").classList.add("d-none");
            document.getElementById("select-cheese").classList.remove("d-none");
            currentState = "ask-cheese";
            break;
        case "ask-cheese":
            tmp = document.getElementById("cheese");
            tmp.classList.remove("d-none");

            document.getElementById("select-cheese").classList.add("d-none");
            document.getElementById("select-veggie").classList.remove("d-none");
            currentState = "ask-veggie";
            break;
        case "ask-veggie":
            tmp = document.getElementById("veggie");
            tmp.classList.remove("d-none");

            document.getElementById("select-veggie").classList.add("d-none");
            document.getElementById("select-condiment").classList.remove("d-none");
            currentState = "ask-condiment";
            break;
        case "ask-condiment":
            tmp = document.getElementById("condiment");
            tmp.classList.remove("d-none");
            document.getElementById("select-condiment").classList.add("d-none");
            document.getElementById("confirm-order").classList.remove("d-none");
            document.getElementById("price-section").classList.remove("d-none");

            currentState = "confirm-sandwich";
            break;

        case "confirm-sandwich":
            
            tmp = document.getElementById("condiment");
            tmp.classList.remove("d-none");            
            document.getElementById("confirm-order").classList.add("d-none");
            document.getElementById("completed-order").classList.remove("d-none");            
            document.getElementById("finalized").classList.remove("d-none");
            currentState = "order-complete";
            break;
            
        case "order-complete":
            console.log("order was already completed...");
            break;
    }
}

let currentState = "init";
console.log("Loaded with current state: " + currentState);

// document.getElementById("bread").classList.remove("d-none");
// document.getElementById("meat").classList.remove("d-none");
// document.getElementById("cheese").classList.remove("d-none");
// document.getElementById("veggie").classList.remove("d-none");
// document.getElementById("condiment").classList.remove("d-none");
// document.getElementById("price-section").classList.remove("d-none");
// document.getElementById("finalized").classList.remove("d-none");
