// script.js 파일 내용
    function calculateLungCancerRisk(age, smokingYears, dailyCigarettes, race, education, bodymassindex, copd, hxca, fmhca, smoker, yearssincequittingsmoking) {
        // Logodds 수식을 계산
        let Logodds = (0.0778868 * (age - 62)) + race - (0.0812744 * (education - 4)) - (0.0274194 * (bodymassindex - 27)) 
            + copd + hxca + fmhca + smoker - (1.822606 * ((10 / dailyCigarettes) - 0.4021541613)) + (0.0317321 * (smokingYears - 27)) 
            - (0.0308572 * (yearssincequittingsmoking - 10)) - 4.532506;
    
        // Risk 계산 (Logodds를 사용하여)
        let Risk = 100 * (Math.exp(Logodds) / (1 + Math.exp(Logodds)));
        
        return Risk;
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('calculate').addEventListener('click', function() {
            const age = parseInt(document.getElementById('age').value);
            const smokingYears = parseInt(document.getElementById('smokingYears').value);
            const dailyCigarettes = parseInt(document.getElementById('dailyCigarettes').value);
            const race = parseFloat(document.getElementById('race').value); // 인종 점수
            const education = parseFloat(document.getElementById('education').value); // 교육 수준
            const bodymassindex = parseFloat(document.getElementById('bodymassindex').value); // 체질량 지수
            const copd = parseFloat(document.getElementById('copd').value); // COPD 유무
            const hxca = parseFloat(document.getElementById('hxca').value); // 고혈압 유무
            const fmhca = parseFloat(document.getElementById('fmhca').value); // 가족력 유무
            const smoker = parseFloat(document.getElementById('smoker').value); // 현재 흡연 여부
            const yearssincequittingsmoking = parseFloat(document.getElementById('yearssincequittingsmoking').value); // 금연 후 경과 연수
    
            const risk = calculateLungCancerRisk(age, smokingYears, dailyCigarettes, race, education, bodymassindex, copd, hxca, fmhca, smoker, yearssincequittingsmoking);
            document.getElementById('result').innerText = 'Estimated Risk: ' + risk.toFixed(2) + '%';
        });
    });
    
