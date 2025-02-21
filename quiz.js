function computeGrades(grades) {
    function getGrade(score) {
        if (score >= 90) return 'A';
        if (score >= 80) return 'B';
        if (score >= 70) return 'C';
        if (score >= 60) return 'D';
        return 'F';
    }
    const parsed = grades.map(getGrade);
    const passed = parsed.filter(grade => grade !== 'F').length;
    const lose = parsed.length - passed;
    
    return { parsed, passed, lose };
}
const estudianteGrades = [100, 50, 65, 70, 85, 96, 45];
const result = computeGrades(estudianteGrades);
console.log(result);
