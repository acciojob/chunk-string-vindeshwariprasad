function stringChop(str, size) {
	if (!str || str.length === 0) {
        return [];
    }
	size = parseInt(size);
    
    // Initialize an empty array to store the chunks
    const chunks = [];
    
    // Iterate over the input string and slice it into chunks
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }
    
    // Return the array of chunks
    return chunks;
  // your code here
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));