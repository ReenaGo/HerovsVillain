class Person {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapon = null;
    };
    equipWeapon(weapon) {
        this.weapon = weapon;
    };
    attack(person){
        this.health = person.health - this.weapon.damage;
}}
