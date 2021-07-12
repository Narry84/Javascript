function function1() {
    var x, i;
    x = document.querySelectorAll(".booked")
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
    }
}