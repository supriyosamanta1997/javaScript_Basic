class Stack {
    constructor()
    {
        this.length=0;
        this.stack=[];
    }

    // PUSH
    push(elem)
    {
        this.stack[this.length]=elem;
        this.length++;
    }


    pop()
    {
        this.stack.pop();
        this.length--;
    }
    // length
    size()
    {
       return  this.length
    }
    //top
    top()
    {
        return (this.length)-1
    }
    print()
    {
        var str = "";
        for (var i = 0; i < this.stack.length; i++)
            str += this.stack[i] + " ";
        return str;
    }
    printReverse()
    {
        var str = "";
        for (var i = this.length-1; i >=0; i--)
            str += this.stack[i] + " ";
        return str;
    }
}
let s1=new Stack()
s1.push(1);
s1.push(5);
s1.push(7);
s1.push(4);
s1.push(6);
console.log(s1)
s1.pop()

console.log("pop:",s1)
let len=s1.size()
console.log(len)

 last_index=s1.top()
console.log(last_index)

let pr=s1.print()
console.log(pr)

let prR=s1.printReverse()
console.log(prR);