class User {
    constructor(public name: string) {
    }
    public hello(): void {
        console.log(this.name);
    }
}

const user1: User = new User('John');
user1.hello()

const user2: User = new User('Mike');
const hello = user1.hello
hello.bind(user2)()
hello.apply({ name: 'aa' });