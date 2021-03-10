## Intro to Stacks 
* A **LIFO** Data structure
> **_LIFO:_**  The Last element added to the stack will be the first element to
be removed from the stack
* Its just a concept/rules
* There is more then one way of implementing a stack

## Where Stacks are used
* Managing function invocations
* Undo/Redo
* Routing(the history object) is treated like a stack!

## Pushing Pseudocode
* the function should accept a value
* create a new node with that value
* if there are no nodes in the stack, set the first and last property to be the
  newly created node
* if there is at least one node, create a variable that stores the current
  first property on the stack
* Reset the first property to be the newly created node
* set the next property on the node to be the previously created variable
* increment the size  of the stack by 1

