function gradeCalculator(){
    var Hw = document.getElementById("Homework").value;
    var Hwpoints = document.getElementById("HomeworkPoints").value;
    var Cw = document.getElementById("Classwork").value;
    var Cwpoints = document.getElementById("ClassworkPoints").value;
    var Partici = document.getElementById("Participation").value;
    var Participoints = document.getElementById("ParticipationPoints").value;
    var Assess = document.getElementById("Assessments").value;
    var Assesspoints = document.getElementById("AssessmentPoints").value;
console.log(Hw);

    var hwArray = stringToArray(Hwpoints);
    var cwArray = stringToArray(Cwpoints );
    var particiArray = stringToArray(Participoints);
    var AssessArray = stringToArray(Assesspoints);
console.log(hwArray);
    var hwAverage = averagearray(hwArray);
    var cwAverage = averagearray(cwArray);
    var particiAverage = averagearray(particiArray);
    var AssessAverage = averagearray(AssessArray);
console.log(hwAverage);
    var weightedHw = weighted(Hw);
    var weightedCw = weighted(Cw);
    var weightedPartici = weighted(Partici);
    var weightedAssess = weighted(Assess);
console.log(weightedHw);
    var totalHw = hwAverage * weightedHw;
    var totalCw = cwAverage * weightedCw;
    var totalPartici = particiAverage * weightedPartici;
    var totalAssess = AssessAverage * weightedAssess;
console.log(totalHw);
    var addtotal= totalHw+totalCw+totalPartici+totalAssess;
    var addtotalweight =weightedHw+weightedCw+weightedPartici+weightedAssess;

   var currentGrade = addtotal/addtotalweight;
    document.getElementById("getGrade").innerHTML= currentGrade.toString().slice(0,5)+"% is your current grade. ";
    colorCordination(hwAverage, document.getElementById("hwcolor"));
    colorCordination(cwAverage,document.getElementById("cwcolor"));
    colorCordination(particiAverage,document.getElementById("particicolor"));
    colorCordination(AssessAverage,document.getElementById("assesscolor"));
    babyMeme(currentGrade);
    return currentGrade;
}
function getFinalGrade(){
    var currentGrade = gradeCalculator();
    var final = parseInt(document.getElementById("final").value);
    var finalGrade = parseInt(document.getElementById("finalWeight").value);
    var currentweight = 1-(finalGrade/100);
    var newgrade= currentGrade * currentweight;
    var finalGradeNeeded = (final-newgrade)/(finalGrade/100);
    document.getElementById("done").innerHTML= finalGradeNeeded.toString().slice(0,5)+"% is the grade you need.";



}
function stringToArray(input) {
    var array = input.split(",");

    for(var i = 0;i<array.length;i++){
        array[i]=parseInt(array[i]);

    }
    return array;
}

function averagearray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

function weighted(num){
    var weight=num/100;
    return weight;
}

function colorCordination(average,element){
    if(average>= 90){
        element.style.background ="blue";
    }
    if (average>=80 && average<90) {
        element.style.background = "green"
    }

    if (average>=70 && average<80) {
      element.style.background = "yellow"
  }
    if (average >= 60 && average<70) {
       element.style.background = "orange"
   }
    if (average >= 50 && average<60){
        element.style.background = "red"
    }
if(average<50){
    element.style.background ="pink";
}
}
function babyMeme(average){
    if(average>= 90){

        document.getElementById("image").innerHTML= '<img src= "images/babyImageA.jpg" height="50px" width="200px">';
    }
    if(average>=80 && average<90) {
        document.getElementById("image").innerHTML= '<img src= "images/babyimageB.jpg">';
    }
    if(average>=70 && average<80) {
        document.getElementById("image").innerHTML= '<img src= "images/babyimageC.jpg" height="200px",>';
    }
    if(average>=60 && average<70) {
        document.getElementById("image").innerHTML= '<img src= "images/babyimageD.jpg">';
    }
    if(average<60) {
        document.getElementById("image").innerHTML = '<img src= "images/babyimageF.jpg">';
    }
}