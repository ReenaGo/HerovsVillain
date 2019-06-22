class Villain extends Person {
    constructor (name){
        super(name);
    }
    rendervillain(){
        return `<div><h1>${this.name}<h1></div>
        <div><img src="https://www.freepngimg.com/thumb/magneto/5-2-magneto-png-clipart.png"></img></div>
        <div><h3 id="">${this.health}<h3></div>`  
    }}