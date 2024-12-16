
// function sum(eng, math, hin, social, science, san, gk) {

//     // var s = (eng + math + hin + social + science + san + gk)

//     var s=(totalNumbers)
    
//     return s;
    
// }
// function percentage(total)
// {
//     var per = total/700*100;
//     document.write(per);
   
// }

// // var p = sum(76, 65, 76, 98, 90, 89, 97);
// var p = (545)



// percentage(p);


function sum(eng, math, hin, social, science, san, gk) {
    var total = eng + math + hin + social + science + san + gk;
    return total;
}

function percentage(total) {
    var per = (total / 700) * 100;
    document.write('Percentage: ' + per.toFixed(2) + '%');
}

// Prompt user for input
var eng = parseInt(prompt("Enter marks for English: "));
var math = parseInt(prompt("Enter marks for Math: "));
var hin = parseInt(prompt("Enter marks for Hindi: "));
var social = parseInt(prompt("Enter marks for Social Studies: "));
var science = parseInt(prompt("Enter marks for Science: "));
var san = parseInt(prompt("Enter marks for Sanskrit: "));
var gk = parseInt(prompt("Enter marks for General Knowledge: "));

var totalMarks = sum(eng, math, hin, social, science, san, gk);
percentage(totalMarks);

