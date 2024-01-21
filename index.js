function binarySearch(arr, x)
{ 

//initializing of l and r which are going to be the ends of the search interval
	let l = 0;
	let r = arr.length - 1;
//declaring mid which is going to be the middle index of the search interval
	let mid;
// creating a while loop that will run as long as the search interval has at least one element 
	while (r>= l) {
		mid = l + Math.floor((r - l) / 2);

//If the element is present at the middle index we are going to return the middle index
		
		if (arr[mid] == x){
			return mid; }//target found

	// If element is smaller than mid, then it can only be present in left sub-array
		else if (arr[mid] > x){
			
      r = mid - 1;}
			
		// Else the element can only be present in the right sub-array
		else{
			l = mid + 1;
      }}
   
	// We reach here when element is not present in array
	return -1;
}
console.log(binarySearch([1,3,5,7,9,11,13,15,17,19],3)); // an array of ascending order elements
console.log(binarySearch([2,4,5,18,21,32,24,27,30,33,36,39,42,45,48,51,54,57,366],12)); // An array of unsorted positive and negative elements


console.log(binarySearch([],3)); // an empty array
console.log(binarySearch([1],1)); // an array of one element







