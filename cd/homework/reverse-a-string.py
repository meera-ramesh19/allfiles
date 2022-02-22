# This is my solution for AlgoDaily problem Reverse a String
# Located at https://algodaily.com/challenges/reverse-a-string

def reverse_string(str1):
    # fill this in
   strings=""
   for ch in str1:
      strings = ch + strings
   return strings
reverse=reverse_string("ABCDEF")
print(f"{reverse}")