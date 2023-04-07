let dateInput = document.querySelector(".dateInput");
let monthInput = document.querySelector("#monthInput");
let yearInput = document.querySelector(".yearInput");
let submitButton = document.querySelector("button");
let errorParagraph = document.querySelector(".error");
let ageResult = document.querySelector(".age-result");



submitButton.addEventListener("click", ()=>{
    let dateValue = dateInput.value;
    let monthValue = monthInput.value;
    let yearValue = yearInput.value;   

    validateInput(dateValue, monthValue, yearValue);     
    calculateAge(`${yearValue}-${monthValue}-${dateValue}`);
})

function validateInput(dateValue, monthValue, yearValue){

    if(dateValue === "" || dateValue > 31){
        dateInput.style.border = "1px solid red";
        errorParagraph.textContent = "Please Enter a Valid Day and Ensure Day Field is not empty";
        errorParagraph.style.color = "red";
        return;
    }

    if(monthValue === ""){
        monthInput.style.border = "1px solid red";
        errorParagraph.textContent = "Please Select a Valid Month";
        return;
    }

    if(yearValue === "" || yearValue.length > 4){
        yearInput.style.border = "1px solid red";
        errorParagraph.textContent = "Please Enter a Valid Year and Ensure Year Field is not empty";
        errorParagraph.style.color = "red";
        return;
    }

}


function calculateAge(birthdate) {
    // Parse birthdate string into a Date object
    let birthdateObj = new Date(birthdate);
    
    // Calculate difference between birthdate and current date
    let ageInMs = Date.now() - birthdateObj.getTime();
    
    // Convert age in milliseconds to age in years, months, and days
    let ageInYears = Math.floor(ageInMs / 31536000000);
    let ageInMonths = Math.floor((ageInMs % 31536000000) / 2628000000);
    let ageInDays = Math.floor(((ageInMs % 31536000000) % 2628000000) / 86400000);

    ageResult.textContent = `Your Age is ${ageInYears} Years ${ageInMonths} Months ${ageInDays} Days`;
  
    
  }
  
//   // Example usage
//   var birthdate = "1990-01-01"; // YYYY-MM-DD format
//   var age = calculateAge(birthdate);
//   console.log(age); // Output: { years: 33, months: 2, days: 27 }
//   This program takes a birthdate string in the format "YYYY-MM-DD" as input, converts it to a Date object, calculates the difference between the birthdate and the current date in milliseconds, and then converts that age in milliseconds to an age in years, months, and days. Finally, it returns an object with properties for years, months, and days. You can modify the birthdate variable to test the program with different birthdates.
  
  
  
  
  
