// the LL class holds a head and a tail
class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    append(value) {
        if (!this.tail) {
            this.tail = this.head = new Node(value)
        } else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }

    prepend(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value)
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this.head 
            this.head.next = oldHead
        }
    }

    deleteHead() {
        if (!this.head) {
            return null
        } else {
            const removedHead = this.head 

            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                this.head = this.head.next 
                this.head.prev = null 
            }
            return removedHead.value
        }
    }

    deleteTail() {
        if (!this.tail) {
            return null
        } else {
            const removedTail = this.tail 

            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                this.tail = this.tail.prev 
                this.tail.next = null 
            }
            return removedTail.value
        }

    }

    search(value) {
        let currentNode = this.head 

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode.value
            }
            currentNode = currentNode.next
        }

        return null
    }
}

// the Node class holds a prev, next and a value
class Node {
    constructor(value) {
        this.prev = this.prev || null
        this.value = value 
        this.next = this.next || null
    }
}

let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)

console.log("THE FIRST LIST", list)
list.prepend(0)
list.prepend(-1)

console.log("THE SECOND LIST", list)
console.log("SEARCH", list.search(1))
console.log("SEARCH", list.search(3))
console.log("SEARCH", list.search(999))
console.log(list.deleteHead())
console.log(list.deleteTail())
console.log(list.deleteTail())
console.log(list.deleteTail())
console.log(list.deleteTail())
console.log("THE EMPTY LIST", list)