let goal;

let index = 0;

function goalSet() {

    goal = 0;

    index = 0;

    goal = prompt("please tell your goal?");

    parseInt(goal);

    document.getElementById("badboy").innerHTML = goal;
}



function drinking() {

    if (index < goal) {

        index++;

        document.getElementById("goodboy").innerHTML = index + " glasses!";

    } else if (index == 0) {

        alert("error! may be you have not set your goal...")

    } else {

        alert('you completed the goal!');

        goal = 0;

        index = 0;

        document.getElementById("goodboy").innerHTML = "";
        document.getElementById("badboy").innerHTML = "";

    }



}

