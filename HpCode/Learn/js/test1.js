
function validateForm() {
    var x = document.forms["myForm"]["fname"].value; //Targets the Form name First | then the textfield that it wants to hit next
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}