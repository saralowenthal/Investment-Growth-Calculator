// Sara Lowenthal 2/24/25

function getCompoundInterest() { 
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value); 
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value); 
    const retirementYear = parseInt(document.getElementById('retirementYear').value); 

    // add logic for calculating compound interest 
    const currentYear = new Date().getFullYear();
    if (retirementYear <= currentYear) {
        alert("Please enter a valid retirement year in the future.");
    }
    const yearsInvested = retirementYear - currentYear;

    let futureInvestmentValue = Math.round(initialInvestment * Math.pow((1 + annualInterestRate / 100),yearsInvested));
 
    futureInvestmentValue = futureInvestmentValue.toLocaleString();
    
    const resultText = document.getElementById('resultText');
    resultText.textContent = `Your investment will be worth $${futureInvestmentValue} by the time you retire in ${retirementYear}.`;
    resultText.hidden = false;  // Makes the result visible


    // Stops the form from submitting and refreshing 
    return false; 
} 