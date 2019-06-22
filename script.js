
var hero=prompt("Please enter the Hero's Name", "Wolverine");
var villain=prompt("Please enter the Villain's Name","Magneto");

let wolverine = new Hero(hero);
let evilPerson = new Villain(villain);

const herocontainer = document.getElementById('hero')
const villaincontainer = document.getElementById('villain')


herocontainer.innerHTML = wolverine.renderHero();
villaincontainer.innerHTML = evilPerson.rendervillain();


let heroWeapon = new Weapon('Obliterator');
let evilPersonWeapon = new Weapon('Destroyer');
wolverine.equipWeapon(heroWeapon)
evilPerson.equipWeapon(evilPersonWeapon)


document.getElementById('heroattack').addEventListener('click',()=>{
    wolverine.attack(evilPerson);
    if (evilPerson.health<=0){
        alert('victory!')
    }
    villaincontainer.innerHTML = evilPerson.rendervillain();

})

document.getElementById('villainattack').addEventListener('click',()=>{
    evilPerson.attack(wolverine);
    if (wolverine.health<=0){
        alert('Game Over!')
    }
    herocontainer.innerHTML = wolverine.renderHero();

})