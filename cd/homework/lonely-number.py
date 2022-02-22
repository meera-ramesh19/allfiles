# This is my solution for AlgoDaily problem Single Lonely Number
# Located at https://algodaily.com/challenges/lonely-number

def lonely_number(numbers):
    # fill in
    num=numbers[0]
    for i in range( len(numbers)):
        num=num^numbers[i]
    return num

print(lonely_number([1,2,1]))
