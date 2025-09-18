class LinkedList {
    constructor() {
        this.head = null
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value)
        } else {
            let curr = this.head
            while(curr.next) {
                curr = curr.next
            }
            curr.next = new Node(value)
        }
    }

    isPalindrome(){
        const list = this.pretty()
        this.reverseRecursively(this.head)
        const reverseList = this.pretty()
        return list === reverseList
    }

    reverseRecursively(node) {
        if (!node.next) {
            this.head = node
            return
        }
        this.reverseRecursively(node.next)
        const temp = node.next
        temp.next = node 
        node.next = null
    }


    pretty() {
        const list = []
        let curr = this.head

        while (curr) {
            list.push(curr.value)
            curr = curr.next
        }
        return list.toString()
    }
}

class Node {
    constructor(value) {
        this.next = null 
        this.value = value
    }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(1)

console.log(list.pretty())
list.reverseRecursively(list.head)
console.log("THE RECURSIVELY REVERSED LIST")
console.log(list.pretty())
console.log("isPalindrome?", list.isPalindrome())
