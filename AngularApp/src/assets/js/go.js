function handleBmrCalculatorSubmit() {

    let bmr;
    let calorieUseActivity;

    const activityLevel = new Map([
        ['none', 0],
        ['sedentary', 1.2],
        ['light', 1.375],
        ['moderate', 1.55],
        ['very active', 1.725],
        ['extremely active', 1.9]
    ]);

    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    const sex = document.getElementById('sex').value;

    const activityValue = activityLevel.get(document.getElementById('activity').value);

    // Men	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
    const maleBmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    // Women	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
    const womanBmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;

    if(sex === 'f') {
        bmr = womanBmr;

    } else {
        bmr = maleBmr;
    }

    if(activityValue !== 0) {
        calorieUseActivity = bmr * activityValue;
        document.getElementById('activityLevel').innerText = Math.round(calorieUseActivity) + ' kcal';
    }
    document.getElementById('bmr').innerText = Math.round(bmr) + ' kcal';
}