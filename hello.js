
function logicFunction(A, B, C) {
    const notA = !A;
    const notB = !B;
    return (A && notB) || (!A && B && C);
}


function synthesizeAndAnalyze() {
    const combinations = [
        [0, 0, 0],
        [0, 0, 1],
        [0, 1, 0],
        [0, 1, 1],
        [1, 0, 0],
        [1, 0, 1],
        [1, 1, 0],
        [1, 1, 1]
    ];

    const results = [];

    console.log('Таблиця істинності:');
    console.log('| A | B | C | f |');
    console.log('-----------------');

    combinations.forEach(combination => {
        const [A, B, C] = combination;
        const f = logicFunction(A, B, C);
        results.push(f);
        console.log(`| ${A} | ${B} | ${C} | ${f} |`);
    });

    console.log('\nБулева функція: f = A * not(B) + not(A) * B * C');

    const numInverters = 2;
    const numAndGates = 2;
    const numOrGates = 1;

    const totalGates = numInverters + numAndGates + numOrGates;
    const delay = 1 + 1 + 1;

    console.log(`\nСкладність схеми (кількість логічних елементів): ${totalGates}`);
    console.log(`Затримка схеми (одиниці часу): ${delay}`);
}


synthesizeAndAnalyze();