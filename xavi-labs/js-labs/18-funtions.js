const functionExerciceOne = (name, age, livesIn) => {
    if (livesIn.liveInCity)
        return `${name} tiene ${age} y vive en la ciudad.`;
        else return `${name} tiene ${age} y vive en un pueblo.`; 
};

"Martina"
42
{ livesInCity: false, livesInTown: true }

console.log(
    functionExerciceOne("Martina", 42, {livesInCity: false, livesInTown: true})
);




