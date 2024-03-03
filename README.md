## Battleship project developed with TDD

This is the final project of a JS course in The Odin Project. I remember long ago seeing _battleship_ mentioned in the community, and I thought to myself, "Well, that gotta be the project after which I will be confident enough with my JS". Many months forward, and I can say it is definitely not the case. There have been enough moments where I was hesitant with my design/logic decisions. On the other hand, I am sure I have improved regardless of all the imperfections.

More importantly, I started thinking and planning more during my projects. Programming, as they say, is not syntax and fancy shortcuts. Programming is careful consideration about the nature of the problem and ways how to solve it. And that's my **main takeaway** of the JS course.

***

### Things I like in my implementation:

- Tests (I tried to test only public interfaces of my modules. And I did my best to keep them meaningful)
- Separate modules (Following the assignment, I kept in mind that modules should execute clear tasks to put things exactly where they belong to the most)
- Occurence of the rest & spread operators (...) and destructing assignment (Some of these I have used for the first time. They might not be the most appropriate choices in some cases but they came to my mind, so I eventually went with them)
- The minimum gap of one square between ships during placement and attacks (Here I reused a technique I learned in knights travails. It comes down to creating two arrays holding all possible combinations of moves and looping over them to ensure all directions were checked)
- Properties inside my square objects (There are 4 main properties):

  1. `containsShip`
  1. `isAdjacentToSomeShip`
  1. `isAdjacentToSomeSunkShip`
  1. `hasBeenTargetted`

  These are the main forces behind the board's changes. Also, whenever I needed them outside the module/class, I would return them inside a method to prevent accidental modifying if I accessed them directly.

- Storing all ships of the board inside an array that holds the ship instance and all its coordinate pairs (It was important to ensure if any coordinates of a multiple-square ship were hit, then the right ship was hit)
- `Player` class (It creates a Human player and allows it to hit Computer's board because both players save their enemy's board references on object creation. But a Computer player uses a bit extended `attackOpponent()` than Human. Computer has an array of all 100 possible moves, where any of them would be used)
- Randomize ships locations (`placeShip()` takes into account all possible cases so it will always place ships where it is legal i.e. not breaking any game's logic)
- Computer's intelligence (If computer hits a ship and the ship is not sunk, computer will save the ship's coordinates and attack them over the next few moves until it finally sinks that ship. It is possible to do so because of the allShips array in `Gameboard` class. So computer loops over all coordinates and finds the one where the previously hit coordinates are stored. And then inside `GameLoop` that ship instance is stored, or rather its coordinates without the coordinates by which the rest was found)
- Revealing the survived ships on Computer's board if Human loses

*** 

### Things I do not like in my implemention:

- Naming (Some of my functions and other elements' names look slightly awkward. Overall, naming was a huge struggle during this project)
- Inconsistent code formatting (Whenever my functions/methods got lengthier, I stopped identating consistently and that's why their bodies look strange visually)
- Potentially violating the SRP with functions such as `placeShip()` or `receiveAttack()` (Even though they mostly call other functions, they could have been shortened)
- Abusing the `filter()` array method (Every time I needed to remove a used element out of an array to keep only the relevant elements, I filtered out the used value and assigned a new array without it to the original array. But I think it was not necessary to do so all the time. Sometimes, I could use the `pop()` or `shift()` method and it would suffice too)
- Connecting board objects' properties and grid divs by adding the respective properties as classes to square divs (By doing so, there might be an opportunity for Player to open devtools in the browser and inspect Computer's squares. The ones where Computer has its ships placed inside have the `contains-ship-hidden` class. In addition, `makeMove()` reflects attacks on boards in that same way)
- The concept of GameController (I think importing just one `initializeGrids()` method inside index.js from which Webpack takes input is not the most optimal way)
- No 2-mode Player (I realized that it would require more UI than I wanted to do for this project and some parts of my code were not easily extensible, which means my code is somewhat tightly-coupled)
- No drag&drop functionality for placing ships nor allowing Player to do it manually (I implemented only randomize functionality to somewhat compensate it but it is still not the same)
- visualPart.js module (It could be structured more smartly by moving event listeners to index.js. Perhaps, some helper functions could be also created to reduce the amount of repeated code. `registerClicksOnBoards()` and `computerMakesImmediateMove()` are kinda ugly) 