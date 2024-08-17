// script.js 파일 내용
function calculateLungCancerRisk(age, smokingYears, dailyCigarettes) {
    let risk = Logodds = (0.0778868 * (age - 62)) + race - (0.0812744 * (education - 4)) - (0.0274194 * (bodymassindex - 27)) 
    + copd + hxca + fmhca + smoker - (1.822606 * ((10 / dailycigarettes) - 0.4021541613)) + (0.0317321 * (smokingyears - 27)) - 
    (0.0308572 * (yearssincequittingsmoking - 10)) - 4.532506
    Risk = 100 * (e(Logodds) / (1 + e(Logodds)));
    return Risk;
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
