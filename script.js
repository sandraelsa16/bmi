const value = document.querySelector("#calculatebmi");
const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const male = document.getElementById("male");
const female = document.getElementById("female");
const output = document.getElementById("rslt");
value.addEventListener("click", function () {
  if (
    (!male.checked && !female.checked)||
    age.value == "" ||
    height.value == "" ||
    weight.value==""
   
  ) {
    alert("Please fill the missing details");
  } else {
    calculate();
    // console.log("else worked");
  }
});

function calculate() {
    var p = [age.value, height.value, weight.value];
    if (male.checked) {
      p.push("male");
    } else if (female.checked) {
      p.push("female");
    }

    const heightInMeters = Number(p[1]) / 100;
    // Calculate BMI
    const bmi = (Number(p[2]) / (heightInMeters * heightInMeters)).toFixed(2);
//   console.log("clicked");
    var result = "";
    if (bmi < 18.5) {
      result = "Underweight";
      output.innerHTML = `Your BMI is <span style="color:red; font-weight: bold;">${bmi}</span>  <br> You are <span style="color:red; font-weight: bold;">Underweight!</span>`;
    } else if (18.5 <= bmi && bmi <= 24.9) {
      result = "Healthy";
      output.innerHTML = `Your BMI is <span style="color:green; font-weight: bold;">${bmi}</span> <br> You are <span style="color:green; font-weight: bold;">Healthy!!</span>`;
    } else if (25 <= bmi && bmi <= 29.9) {
      result = "Overweight";
      output.innerHTML = `Your BMI is <span style="color:orange; font-weight: bold;">${bmi}</span> You are <span style="color:orange; font-weight: bold;">Overweight!</span>`;
    } else if (30 <= bmi && bmi <= 34.9) {
      result = "Obese";
      output.innerHTML = `Your BMI is <span style="color:yellow; font-weight: bold;">${bmi}</span> You are <span style="color:yellow; font-weight: bold;">Obese!</span>`;
    } else if (35 <= bmi) {
      result = "Extremely obese";
      output.innerHTML = `Your BMI is <span style="color:red; font-weight: bold;">${bmi}</span> You are <span style="color:red; font-weight: bold;">Extremely obese!</span>`;
    }
          
          var utterance = new SpeechSynthesisUtterance(output.innerHTML)
          utterance.lang = 'en-US'
          utterance.volume = 2
          utterance.rate = 1
          utterance.pitch = 1

          window.speechSynthesis.speak(utterance)

    // console.log(`bmi:${bmi},result:${result}`);
}
