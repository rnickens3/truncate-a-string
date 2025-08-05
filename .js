//This will take two arguments: one the string length, the second the desired number of characters. 
//This function will truncate the string to that number
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";   
    } else {
        return str;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); 
