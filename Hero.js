class Hero extends Person {
    constructor(name) {
        super(name);
    }
    renderHero(){
        const heroImg = 'http://www.bang2write.com/wp-content/uploads/2013/12/Hugh-Jackman-Wallpaper-wolverine-x-man-hugh-jackman-wolverine-a-mutant-hero-man-actor.jpg'
        return `<div><h1>${this.name}<h1></div>
        <div><img src="${heroImg}"></img></div>
        <div><h3 id="">${this.health}<h3></div>`    }
}