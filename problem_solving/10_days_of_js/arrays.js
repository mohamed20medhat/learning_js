//get the second largest number 


// function getSecondLargest(nums) {
//     // Complete the function
//     let maxNum = -10000000000
//     let secondMaxNum = -10000000000
    
//     //loop to get the highest number
//     for (let i = 0; i < nums.length; i++){
//         if ( nums[i] > nums [i+1] ){
//             maxNum = nums[i]
//         }else {
//             maxNum = nums[i+1]
//         }
//     }
    
//     //loop to get the second highest number
//     for (let y=0 ; y < nums.length ; y++){
//         if ( nums[y] > nums[y+1] && nums[y]< maxNum ){
//             secondMaxNum = nums[y]
//         }else if (  nums[y] < nums[y+1] && nums[y] < maxNum ){
//             secondMaxNum = nums[y+1]
//         }else {
//             secondMaxNum = nums[i]
//         }
//     }
    
//     return secondMaxNum
// }

//================================================================ 
//came from MARZ
function getSecondLargest (nums){
    nums = new Set(nums)
    nums = Array.from(nums)
    nums = nums.sort(comperator)
    return nums[nums.length -2]
}

function comperator (a,b){
    return a - b
}

console.log(getSecondLargest([3,4,5,6,4,9]))

//====================================================================

// function getSecondLargest(nums) {
//     // Complete the function
//     let maxNum = -10000000000
//     let secondMaxNum = -10000000000
    
//     //loop to get the highest number
//     //it can return undefined when i get out of the array borders 
//     for (let i = 0; i < nums.length; i++){
//         if (maxNum <= nums[i] ){
//             maxNum = nums[i]
//         }        
//     }

//     console.log(maxNum)
//     console.log(typeof maxNum)
    
//     //loop to get the second highest number
//     for (let y = 0 ; y < nums.length ; y++){
//         if (secondMaxNum < nums[y] && secondMaxNum < maxNum){
//             secondMaxNum = nums[y]
//         }  
//     }
    
//     return secondMaxNum
// }

// console.log(getSecondLargest([8,7,2,3,1,4]))

//================================================================  
//my solution 
function getSecondLargest(nums) {
    // Complete the function
    let maxNum = -10000000000
    let secondMaxNum = -10000000000
    
    //loop to get the highest number
    //it can return undefined when i get out of the array borders 
    for (let i = 0; i < nums.length; i++){
        if (maxNum <= nums[i] ){
            maxNum = nums[i]
        }        
    }
    
    //loop to get the second highest number
    for (let y = 0 ; y < nums.length ; y++){
        if (secondMaxNum < nums[y] && nums[y] < maxNum){
            secondMaxNum = nums[y]
        }  
    }
    
    return secondMaxNum
}
//================================================================  
//another good one
function getSecondLargest(nums){
    let first = nums[0]
    let second = -1

    for (let i=0 ; i < nums.length ; i++){
        if (nums[i]> first){
            second = first 
            first = nums[i]
        }

        if ( nums[i] > second && nums[i] < first ){
            second = nums[i]
        }
    }

    return second
}










