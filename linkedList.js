//Linked List is a linear data structure, ordered collection of data
//unlike an array, nodes are not sequential location
//but connected through point
//first node is called Head
//each node has "data" and "next"
//the end has "tail" which has reference to null

//a node
// const n1={
//     data: 100
// }
// //node 2
// const n2={
//     data: 200
// }
// n1.next = n2;
// console.log(n1);
//will console.log {data: 100, next:{data: 200}}
//data property and points next node which is 200

//************** */

class Node{
    //the last property will be set to null, which is the tail
    //constructor takes data and the pointer 
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}
//if we create a new node
// const n1 = new Node(100)
// console.log(n1)
//will log Node { data: 100, next: null }

//lets create another class
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //Insert first node
        insertFirst(data){
            this.head = new Node(data, this.head)
            this.size++
        }
    
    //Insert last node
        insertLast(data){
            let node = new Node(data)
            let current;

            //if empty then make it the head
            if(!this.head){
                this.head = node;

            } else {
                current = this.head;

                while(current.next){
                    current = current.next
                }
                current.next = node;
            }

            this.size++
            
        }

    //Insert at index
        insertAt(data, index){
            //if index is out of range
            if(index > 0 && index > this.size){
                return
            }
            //if first index 
            if(index == 0){
                // this.head = this.insertFirst(data)
                this.head = new Node(data,this.head)
                return;
            }

            const node = new Node(data);
            let current, previous;

            //set current to first
            current = this.head
            let count = 0;

            while(count < index){
                previous = current; //node before index
                count++;
                current = current.next; // node after index
            }

            node.next = current;
            previous.next = node;

            this.size++;

        }

    //Get an index

    //Remove at index

    //Clear list

    //Print list data
    printListData(){
        let current  =  this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}

const linkedlist  = new LinkedList();
linkedlist.insertFirst(100);
linkedlist.insertFirst(200);
linkedlist.insertFirst(300);
linkedlist.insertLast(400);
linkedlist.printListData()
linkedlist.insertAt(500,0);
//console.log(linkelist)
//will log this : LinkedList { head: Node { data: 100, next: null }, size: 0 }