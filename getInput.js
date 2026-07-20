const submitBtn = document.querySelectorAll('.submit-btn');
//ERROR: submitBtn.innerHTML = "submit";
submitBtn.forEach(btn =>{
    btn.textContent = "Submit"
})

//===[Functions]===\\

// Get Name
function getName(){
    let getInput = document.getElementById("inName").value.trim();
    let output = document.getElementById("outName");
    output.innerHTML = getInput;
    document.getElementById("inName").value = "";
    
// Get Major
}function getMajor(){
    let getInput = document.getElementById("inMajor").value.trim();
    let output = document.getElementById("outMajor");
    output.innerHTML = getInput;
    document.getElementById("inMajor").value = "";

// Get D.o.I
}function getDOI(){
    let getInput = document.getElementById("inDOI").value.trim();
    let output = document.getElementById("outDOI");
    output.innerHTML = getInput;
    document.getElementById("inDOI").value = "";

// Get D.o.G
}function getDOG(){
    let getInput = document.getElementById("inDOG").value.trim();
    let output = document.getElementById("outDOG");
    output.innerHTML = getInput;
    document.getElementById("inDOG").value = "";

// Get Email
}function getEmail(){
    let getInput = document.getElementById("inEmail").value.trim();
    let output = document.getElementById("outEmail");
    output.innerHTML = getInput;
    document.getElementById("inEmail").value = "";

// Open UAT
}function confirmOpen(event, url) {
    event.preventDefault(); // Stop the default link action
    alert("This is a link to an external site");
    // Open the link after alert
    window.location.href = url;
}