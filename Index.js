function check() {
    let Weight = +document.getElementById('weight').value;
    let Height = +document.getElementById('height').value;
    //công thức tính chỉ số dinh dưỡng
    let bmi = Weight / ( Math.pow(Height, 2) );

    let result = "";
    if (bmi < 18)
        result = "Underweight"
    else if (bmi < 25.0)
        result = "Normal"
    else if (bmi < 30.0)
        result = "Overweight"
    else
        result ="Obese"
    document.getElementById("result").innerHTML = " BMI: " + bmi + ". You " + "<b>"+ result + "</b>";
    }




