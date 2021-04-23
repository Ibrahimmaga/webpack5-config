const elvenShieldRecipe = {
    leatherStrip: 2,
    ironIngot: 1,
    refinemoonstone: 4
};

const elvenGauntRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinemoonstone: 4
};

console.log(elvenShieldRecipe);
console.log(elvenGauntRecipe);