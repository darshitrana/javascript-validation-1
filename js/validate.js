function validate {
    var name = document.getElementById("name").value;
    if (name == "") {
        alert("fill out the name");
        return false;
    }
    else {
        return true;
    }
}
