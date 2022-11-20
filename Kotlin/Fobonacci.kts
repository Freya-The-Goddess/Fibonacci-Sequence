//Fibonacci Sequence coding interview question in Kotlin Script
//by Freya-The-Goddess

fun fibonacci(n: Int): MutableList<Int> {
    val output = mutableListOf(0, 1, 1)
    (3 until n).forEach { _ ->
        val lastIndex = output.lastIndex
        output.add(output[lastIndex] + output[lastIndex-1]) //append sum of last two values
    }
    return output
}

val fibList = fibonacci(25)
fibList.forEach { value -> //print each value of array
    println(value)
}

