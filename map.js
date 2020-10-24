function cleanNames(arr) {
    return arr.map(function(x) {
     return x.trim();   
    })
}

console.log(cleanNames(['JS  ', 'so   ', '  fun  ']));