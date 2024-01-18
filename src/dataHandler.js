import { EnergyDrinks } from "./data";


export function getAllEnergyDrinks() {
    return EnergyDrinks;
}

export function getEnergyDrinkByType(type) {
    return EnergyDrinks.filter((drink) => drink.type.toLowerCase() === type.toLowerCase());
}

export function getEnergyDrinkByGibbin(bool) {
    return EnergyDrinks.filter((drink) => drink.gibbin === bool);
}

export function getEnergyDrinkById(id) {
    return EnergyDrinks.find((drink) => drink.id === id);
}

export function getNumberOfDrinks(){
    return EnergyDrinks.length;
}

export function getEnergyDrinkByIdWithBlacklist(id, blacklist) {
    return EnergyDrinks.find((drink) => drink.id === id && !blacklist.includes(drink.id));
}