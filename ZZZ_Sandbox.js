class Trial {
    root = 5

    changeRoot() {
        this.root = 10
    }
}

const trial1 = new Trial();

console.log(trial1.root);
trial1.changeRoot();
console.log(trial1.root);