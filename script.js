// Sara Lowenthal 2/24/25

function getCompoundInterest() { 
    let initialInvestment = parseFloat(document.getElementById('initialInvestment').value); 
    let annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value); 
    let retirementYear = parseInt(document.getElementById('retirementYear').value); 

    // add logic for calculating compound interest 
    let currentYear = new Date().getFullYear();
    if (retirementYear <= currentYear) {
        alert("Please enter a valid retirement year in the future.");
    }
    let yearsInvested = retirementYear - currentYear;

    let futureInvestmentValue = Math.round(initialInvestment * Math.pow((1 + annualInterestRate / 100),yearsInvested));
 
    futureInvestmentValue = futureInvestmentValue.toLocaleString();
    
    let resultText = document.getElementById('resultText');
    resultText.textContent = `Your investment will be worth $${futureInvestmentValue} by the time you retire in ${retirementYear}.`;
    resultText.hidden = false;  // Makes the result visible


    // Stops the form from submitting and refreshing 
    return false; 
} 