#Fibonacci Sequence coding interview question in Python3
#by Freya-The-Goddess

def fibonacci(n):
    output = [0, 1, 1]
    for _ in range(3,n):
        output.append(output[-1] + output[-2]) #append sum of last two values
    return output

fib_arr = fibonacci(25)
for value in fib_arr: #print each value of array
    print(value)
