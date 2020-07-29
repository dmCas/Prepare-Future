// Class继承

class Parent{
    constructor(value) {
        this.val = value
    }
    getValue() {
        console.log(this.val)
    }
}


class Child extends Parent{
    constructor(value) {
        super(value)
        this.val = value
    }
}


let child = new Child(2)
child.getValue()
console.log(child instanceof Parent)