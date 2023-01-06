function countUnpaired(array) {
    const arrayLength = array.length
    const pairMap = new Map()

    for ( let i = 0; i < arrayLength; i++){
        let count = 0
        let  number = array[i]
        for ( let j = 0; j < arrayLength; j++ ) {
            if ( number === array[j]){
               count = count + 1
            }
        }
        pairMap.set(number, count)
    }

    const iterator = pairMap.values();

    let nonPaired = 0
    for (const element of iterator ) {
        if (element % 2 != 0 ){
            nonPaired = nonPaired + 1
        }
    }
    return nonPaired 
  }

  console.log(countUnpaired([1,1,2,2,3,3,4,4,4]) === 1)
  console.log(countUnpaired([1,2,3,4]) === 4)
  console.log(countUnpaired([1,1,2,2,3,3,4,4]) === 0)
  console.log(countUnpaired([1,2,2,3,3,3,4,4,4,4]) === 2)
  console.log(countUnpaired([4,3,2,1,3,2,1,2,1,1]) === 2)
