/*
An image is represented by an m x n integer grid image where image[i][j] 
represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a 
flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels 
connected 4-directionally to the starting pixel of the same color as the 
starting pixel, plus any pixels connected 4-directionally to those pixels 
(also with the same color), and so on. Replace the color of all of the
 aforementioned pixels with newColor.

Return the modified image after performing the flood fill.
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with 
position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected 
by a path of the same color as the starting pixel (i.e., the blue pixels)
 are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally
 connected to the starting pixel.

 Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
Output: [[2,2,2],[2,2,2]]

*/

var floodFill = function(image, sr, sc, newColor) {

    if(image == null || image.length < 1 || image[sr][sc] == newColor){
        return image;
    }

    const oldColor = image[sr][sc];
    const fill = (image, row, column,newColor,oldColor) => {
        if( row < 0 || row >= image.length ||
            column < 0 || column >= image[0].length ||
            oldColor !== image[row][column]){
                return;
            }

            
            image[row][column] = newColor;
            fill(image,row-1,column,newColor,oldColor)
            fill(image,row+1,column,newColor,oldColor)
            fill(image,row,column-1,newColor,oldColor)
            fill(image,row,column+1,newColor,oldColor)

    }
    
    fill(image,sr,sc,newColor,oldColor)
    return image;
    
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2))

/*
Edge case if the image is null,
store the initial color by oldColor = image[sr][sc]
index is not out of bounce, didn't exceed rows and columns in matrix
write if statement for the above condidtion, if that's the case just return

make sure the selected color is not the same as starting color 
oldcolor !== current and row and column we are traversing image[row][column]
this is your base case

we have found a number to color we are going to change the number value to new color
image[row][column] = newColor

then create a fill method that goes through all the indexes
takes the same parameter which goes in all four directions

then call that fill method at the end
then return the image.
*/