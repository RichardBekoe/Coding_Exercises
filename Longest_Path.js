function furthestRoom(array){
    let nextTargetValue = 0
    let pathCount = 0
    for (const internalArray of array) {
        if (internalArray.includes(nextTargetValue)){
            nextTargetValue = internalArray[1]
            pathCount = pathCount + 1
        };  
      }
      return pathCount
}

console.log(furthestRoom([[0,1], [1,2], [1,3], [2,4], [4,5], [3,4]]) === 4)
console.log(furthestRoom([[0,1], [1,2], [1,3], [3,4], [2,5], [3,5], [5,6]]) === 5)
console.log(furthestRoom([[0,1], [1,3], [1,7], [3,4], [4,5], [5,6]]) === 5)
console.log(furthestRoom([[0,1], [1,2], [2,4], [2,3]]) === 3)
console.log(furthestRoom([[0,1], [1,2], [1,4], [2,4], [4,5], [3,4]]) === 4)
console.log(furthestRoom([[0,1], [1,2], [1,3], [3,4], [2,4], [4,7],[7,8]]) === 5)
