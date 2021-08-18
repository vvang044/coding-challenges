/* Number Of Islands
Given an m x n 2D binary grid grid which represents a map of 
'1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting 
adjacent lands horizontally or vertically. You may assume all 
four edges of the grid are all surrounded by water.

Example 1
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/ 

var numIslands = function(grid) {
    
    //lets count the total number of islands
    let countIslands = 0;

    for ( let rows in grid){
        for(let columns in grid[rows]){
            // console.log(grid[rows][columns])
            if(grid[rows][columns] === '1'){
                
                countIslands++
                neighbours(parseInt(rows), parseInt(columns), grid);
            }
        }
    }
   
  
    return countIslands;
};

    let neighbours = function(rowIndex, columnIndex, grid){
        if(grid[rowIndex] === undefined ||
            grid[rowIndex][columnIndex] === undefined ||
                grid[rowIndex][columnIndex] === '0') return
        grid[rowIndex][columnIndex] = '0'

        neighbours(rowIndex+1, columnIndex, grid)
        neighbours(rowIndex-1, columnIndex, grid)
        neighbours(rowIndex, columnIndex+1, grid)
        neighbours(rowIndex, columnIndex-1, grid)

    }

// console.log(numIslands( [
//                             ["1","1","0","0","0"],
//                             ["1","1","0","0","0"], ]  ) ) // 1

console.log(numIslands( [
                                ["1","1","0","0","0"],
                                ["1","1","0","0","0"],
                                ["0","0","1","0","0"],
                                ["0","0","0","1","1"]
                        ] ))