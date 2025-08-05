# truncate-a-string

## Summary
Truncates a string depending on two arguments: string length and the desired number. If the length is already the desired length, it will return the original string. It will then return this new string.

## Function
```javascript
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";   
    } else {
        return str;
    }
}
