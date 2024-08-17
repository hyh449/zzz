// script.js 파일 내용
function calculateLungCancerRisk(age, smokingYears, dailyCigarettes) {
    let risk = (age * 0.1) + (smokingYears * 0.2) + (dailyCigarettes * 0.3);
    return risk;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate').addEventListener('click', function() {
        const age = parseInt(document.getElementById('age').value);
        const smokingYears = parseInt(document.getElementById('smokingYears').value);
        const dailyCigarettes = parseInt(document.getElementById('dailyCigarettes').value);
        
        const risk = calculateLungCancerRisk(age, smokingYears, dailyCigarettes);
        document.getElementById('result').innerText = 'Estimated Risk: ' + risk + '%';
    });
});
