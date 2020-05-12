/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

var checkCoordinates = (image, sr,sc) => {
    var rows = image.length
    var cols = image[0].length ;
    if((sr >=0 && sr < rows) && (sc >=0 && sc < cols)){
        return true;
    }
    return false;
}

var checkUp = (image, sr, sc, newColor, value) => {
    if(checkCoordinates(image, sr, sc)){
        var prev = image[sr][sc]; 
        if(image[sr][sc] == value){
            image[sr][sc] = newColor;
            checkDirection(image, sr, sc, newColor, prev);
        }
        else{
            return;
        }        
    }
    else{
        return;
    }
}
var checkDown = (image, sr, sc, newColor, value) => {
    if(checkCoordinates(image, sr, sc)){
        var prev = image[sr][sc]; 
        if(image[sr][sc] == value){
            image[sr][sc] = newColor;
            checkDirection(image, sr, sc, newColor, prev);
        }
        else{
            return;
        }        
    }
    else{
        return;
    }
}
var checkRight = (image, sr, sc, newColor, value) => {
    if(checkCoordinates(image, sr, sc)){
        var prev = image[sr][sc]; 
        if(image[sr][sc] == value){
            image[sr][sc] = newColor;
            checkDirection(image, sr, sc, newColor, prev);
        }
        else{
            return;
        }        
    }
    else{
        return;
    }
}
var checkLeft = (image, sr, sc, newColor, value) => {
    if(checkCoordinates(image, sr, sc)){
        var prev = image[sr][sc]; 
        if(image[sr][sc] == value){
            image[sr][sc] = newColor;
            checkDirection(image, sr, sc, newColor, prev);
        }
        else{
            return;
        }        
    }
    else{
        return;
    }
}

var checkDirection = (image, sr, sc, newColor, value) => {
    var rows = image.length
    var cols = image[0].length ;
    if(traversedImage[sr][sc] == -1){
        traversedImage[sr][sc] = 0;
        if(sr-1 >= 0){
            checkUp(image, sr-1, sc, newColor, value);
        }
        if(sr+1 < rows){
            checkDown(image, sr+1, sc, newColor, value);    
        }
        if(sc < cols){
            checkRight(image, sr, sc+1, newColor, value);
        }
        if(sc >= 0){
            checkLeft(image, sr, sc-1, newColor, value);
        }       
    }
}

var traversedImage = [];

var floodFill = function(image, sr, sc, newColor) {
    traversedImage = _.range(image.length).map(function () {
        // Create one row
        return _.range(image[0].length).map(function () {
            return '-1';
        });
    });
    const value = image[sr][sc];    
    image[sr][sc] = newColor;
    checkDirection(image, sr, sc, newColor, value);
    console.log(image);
    return image;
};