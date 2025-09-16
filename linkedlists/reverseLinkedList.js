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

    reverse(){
        // I want the head to be pointed to its next value until there are no values left

        let curr = this.head 
        let prev = null 
        let next = curr.next
        while (curr) {
            next = curr.next 
            curr.next = prev 
            prev = curr
            curr = next
           // we are turning this baby around
           // that means that we will pop off the current node
           // then it will just be a floating head
           // when its the head, we point it to null
           // then we point the next of the next node to the prev node
        }
        this.head = prev 
    }

   reverseRecursively(head) {
    // when we get to the final call, the call stack will start popping calls off the top, starting with the last call if it was returned
    // if we no longer can continue, we need to break out of the loop
    // in other words, if we cannot pass the value into the recursive call because it is null, then we need to pop the next call off the stack because the current call is complete
    // we need to set the head to the last item, which is the value of the parameter in the first method that needs has been popped off the stack
    if (!head.next) {
        this.head = head
        return
    }
    // we need to know what the current head is pointing to in order to point it to the previous head that has been orphaned
    const temp = head.next // head is not 1 in this call, this.head is 1 and head is 3, therefore the temp should store 2
    temp.next = head // the current head will fill the space of the last item in the list
    head.next = null // since its the last item, it needs to point to nothing
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
list.reverse()
console.log("THE REVERSED LIST")
list.pretty()
list.reverseRecursively(list.head)
console.log("THE RECURSIVELY REVERSED LIST")
list.pretty()
console.log("DELETED", list.delete(1))
console.log("DELETED", list.delete(2))
console.log("DELETED", list.delete(3))
console.log("THE EMPTY LIST")
list.pretty()
