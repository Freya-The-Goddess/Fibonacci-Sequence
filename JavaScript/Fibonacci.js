//Fibonacci Sequence coding interview question in JavaScript
//by Freya-The-Goddess

function fibonacci(n) {
    var output = [0, 1, 1]
	for (var i = 3; i < n; i++) {
        var lastIndex = output.length-1
        output.push(output[lastIndex] + output[lastIndex-1]) //append sum of last two values
    }
    return output
}

function main() {
    fibArray = fibonacci(25)
	
	//create output string from array
	output = ""
	fibArray.forEach(function(value) {
		output += value.toString() + "\r\n"
	})
    document.getElementById("result").textContent = output;
}

