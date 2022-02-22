Surface Area and Volume of a Box

Write a function that returns the total surface area and volume of a box as an array: [area, volume]

FUNDAMENTALSGEOMETRYALGEBRAMATHEMATICSALGORITHMS


function getSize(width, height, depth){
 const vol=width*height*depth
 const area=2*(height*width+height*depth+depth*width)
 return [area,vol]
}
