function loadData() {
    // Data Value
    let fname = "Gina";
    let lname = "Santos";
    let DoB = "March 20, 2019";
    let age = 6;
    let address = "Muntinlupa City";
    let favorite = "Yellow and Red";
    // Load Data Input
    document.getElementById("txtFname").value = fname;
    document.getElementById("txtLname").value = lname;
    document.getElementById("txtDoB").value = DoB;
    document.getElementById("txtAge").value = age;
    document.getElementById("txtAddress").value = address;
    document.getElementById("txtFavColor").value = favorite;
}
// Clear Data Input
function clearData() {
    document.getElementById("txtFname").value = "";
    document.getElementById("txtLname").value = "";
    document.getElementById("txtDoB").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtFavColor").value = "";
}