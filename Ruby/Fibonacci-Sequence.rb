#Fibonacci Sequence coding interview question in Ruby
#by Freya-The-Goddess

def fibonacci(n)
    output = [0, 1, 1]
    for _ in 3..n-1
        output.append(output[-1] + output[-2]) #append sum of last two values
    end
    return output
end

fib_arr = fibonacci(25)
for value in fib_arr #print each value of array
    puts value
end