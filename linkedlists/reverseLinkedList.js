class LinkedList {
    constructor() {
        this.head = null
    }

    append(value){
        if (!this.head) {
            this.head = new Node(value)
            return
        } 

        let curr = this.head 
        while (curr.next) {
            curr = curr.next
        }

        curr.next = new Node(value)
    }

    pretty() {
        let currentNode = this.head
        const appended = []
        while (currentNode) {
            appended.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(appended)
    }

    // given the value of the node, delete the node
    // [1,2,3], 2

    delete(value){
        if (!this.head) {
            return null
        }

        // when deleting from a SLL, we need to find where the current node is
        // when we find the currentNode, we need to set the previous's
        // node next to the current Node's next to delete the current node
        // if head is deleted, we need to reset head....
        let currentNode = this.head 
        while (currentNode.next) { 
            if (currentNode.value === value) { 
                if (currentNode === this.head) {
                    this.head = currentNode.next
                }
                const deleted = currentNode
                currentNode.next = currentNode.next.next
                return deleted.value
            } else {
                currentNode = currentNode.next
            }
        }
        const deleted = this.head
        this.head = currentNode.next
        return deleted.value
    }

    search(value){
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

class Node {
    constructor(value) {
        this.value = value
        this.next = this.next || null
    }
}

let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)

list.pretty()
console.log("SEARCH", list.search(1))
console.log("SEARCH", list.search(3))
console.log("SEARCH", list.search(999))

list.pretty()
console.log("DELETED", list.delete(1))
console.log("DELETED", list.delete(2))
console.log("DELETED", list.delete(3))
console.log("THE EMPTY LIST")
list.pretty()
