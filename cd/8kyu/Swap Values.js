

Swap Values

I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?

BUGSARRAYSFUNDAMENTALS


    
def swap_values(args): 
    args[:]=args[::-1]



# function swapValues(arr){
#     let temp=a[0]
#     let arr[0] = arr[1]
#     let arr[1] = temp
#     return arr
# }

# without a temp variable
#function swapValues(a,b){
#     a=a+b
#     b=a-b
#     a=a-b
# }

# function swapValues(arr) {
#     return arr.reverse()
# }

# def swap_values(args):
#     args[0],args[1] =args[1],args[0]
