// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).


nums = [0,1,2,2,3,0,4,2], val = 2
var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(element === val){
            nums.splice(i,1);
            i -= 1;
        }
        else{
            k += 1;
        }
       
    }
    return k;
};

removeElement(nums,val);