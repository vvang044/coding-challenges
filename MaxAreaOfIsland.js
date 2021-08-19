/*Max Area of Island

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

Example 1
Input: grid = [
                [0,0,1,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0],
                [0,1,1,0,1,0,0,0,0,0,0,0,0],
                [0,1,0,0,1,1,0,0,1,0,1,0,0],
                [0,1,0,0,1,1,0,0,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,1,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0] ]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2
Input grid = [[0,0,0,0,0,0,0,0]]

*/

var maxAreaOfIsland = function(grid){
    let result = 0;

    for( let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] === 1){
                result = Math.max(result, neighbours(grid,i,j))
            }
        }
    }

    return result;
}
    let neighbours = function(grid,i,j){
        if( i < 0 || i>=grid.length ||
            j < 0 || j>=grid[i].length || 
            grid[i][j] === 0 ) {
                return 0
            }
                grid[i][j] = 0;

                let count = 1;

                count += neighbours(grid, i+1, j)
                count += neighbours(grid, i-1, j)
                count += neighbours(grid, i, j+1)
                count += neighbours(grid, i, j-1)
                return count

    }

        

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
                             [0,0,0,0,0,0,0,1,1,1,0,0,0],
                             [0,1,1,0,1,0,0,0,0,0,0,0,0],
                             [0,1,0,0,1,1,0,0,1,0,1,0,0],
                             [0,1,0,0,1,1,0,0,1,1,1,0,0],
                             [0,0,0,0,0,0,0,0,0,0,1,0,0],
                             [0,0,0,0,0,0,0,1,1,1,0,0,0],
                             [0,0,0,0,0,0,0,1,1,0,0,0,0]]))

/*
Explanation
our max area will be the resul which is currently set to 0
first traverse through the rows given
second traverse through the columns
if we do find an island which is grid[i][j] == 1, we are not going to increment
instead we will find all the neighbouring islands and we will update the max result
which will be result equal to math.max() which takes current result which is set to 0
and takes a function with parameters grid, i, and j
these are going to be your neighbouring islands
passing grid because we want to change the coordinates and passing rows and columns

we will create neighbours function 
takes grid, i, j
now check if we are inbound or outbound
i < 0 did we go above the grid
i >= grid.length did we go below the grid
j < 0 did we go to the left of the grid
j >= grid[i].length did we go to the right of the grid
or is the is it zero , which is grid[i][j] === 0
then we are definitely in the matrix

we don't want to double count this so we are going to set the grid to zero
grid[i][j] = 0

since we know the grid we are on is 1, so set the count to 1
now we are going to check, up right bottom left and increasement as we go
count += neighbours(grid, i+1, j)
count += neighbours(grid, i-1, j)
count += neighbours(grid, i, j+1)
count += neighbours(grid, i, j-1)
once we are done with these recursive calls we all the final result

*/