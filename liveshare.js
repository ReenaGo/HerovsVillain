const heroName = prompt('Enter a Hero Name', 'Thor');
const villainName = prompt('Enter a villain Name', 'Thanos');

const player = new Hero(heroName);
const computer = new Villain(villainName);

const heroContainer = document.getElementById('hero');
const villainContainer = document.getElementById('villain');

heroContainer.innerHTML = player.render();
villainContainer.innerHTML = computer.render();

player.equipWeapon(new Weapon('Mjolnir'));
computer.equipWeapon(new Weapon('Infinity Gauntlet'));

document.getElementById('heroAttack').addEventListener('click', function(){
    player.attack(computer);
    if (computer.health <= 0) {
        alert('Victory!');
    }
    villainContainer.innerHTML = computer.render();
});

document.getElementById('villainAttack').addEventListener('click', function(){
    computer.attack(player);
    if (player.health <= 0) {
        alert('Game Over!');
    }
    heroContainer.innerHTML = player.render();
});
