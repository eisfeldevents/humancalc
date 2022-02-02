

let n1,n2,n3,n4,n5;

let sum = 0;
let result;
let numbernotes = 0;

function output() {
    sum = 0;
    result = 0;
    numbernotes = 0;


    n1 = parseInt(document.getElementById("tfnote1").value )
    n2 = parseInt(document.getElementById("tfnote2").value )
    n3 = parseInt(document.getElementById("tfnote3").value )
    n4 = parseInt(document.getElementById("tfnote4").value )
    n5 = parseInt(document.getElementById("tfnote5").value )

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" + n5)

    testoutput(n1);
    testoutput(n2);
    testoutput(n3);
    testoutput(n4);
    testoutput(n5);
result = sum/numbernotes;

    document.getElementById("print").innerHTML = "Ø "+ result;

testifheisscheisse()

}

function testoutput(points) {
    if (isNaN(points)){
        document.getElementById("print").innerHTML = "Ø " + result;

    } else {
        numbernotes = numbernotes + 1;
        sum = sum + points;
    }
}

function testifheisscheisse() {
    if (result < 5) {
        document.getElementById("print").style.color = "red";
    }
      else {
          if (result < 7) {
            document.getElementById("print").style.color = "yellow";}

        else
            {

                document.getElementById("print").style.color = "green";
            }
        }

    }











