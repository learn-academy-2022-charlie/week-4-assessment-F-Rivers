# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# the code should be dynamic enought to work with any number input 
# use a conditional statement, along with modulo, to get the even numbers 
# use string interpolation to enter the numbers into a string saying whether the number is even or odd

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_or_odd(number)
    if number % 2 === 0 
        "#{number} is even"
    else 
        "#{number} is odd"
    end 
end 

p even_or_odd(num1)
p even_or_odd(num2)
p even_or_odd(num3)
p even_or_odd(3405)

# output ---> 
# "7 is odd"
# "42 is even"
# "221 is odd"
# "3405 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# should be dynamic enough to work with any word or phrase input 
# use the .delete() method to delete the vowels from the word in the string

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels (words) 
    "#{words}".delete "aeiouAEIOU"
end

p no_vowels(album1)
p no_vowels(album2)
p no_vowels(album3)
p no_vowels("Frank The Tank")

# output ---> 
# "Rbbr Sl"
# "Sgt Pppr"
# "Abby Rd"
# "Frnk Th Tnk"


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# should be dynamic enough to work with any word input 
# use the .reverse() method to reverse the word in the string 
# use a conditional statement to see if the word is stricly equal to itself in reverse 
# use the .downcase() method to get all the words to the same case 
# use the .capitazlize() method to capitalize the words again 

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def pali_word(word)
    if word.downcase == word.downcase.reverse
        "#{word} is a palindrome"
    else 
        "#{word} is a not a palindrome"
    end
end 

p pali_word(palindrome_tester1)
p pali_word(palindrome_tester2)
p pali_word(palindrome_tester3)
p pali_word("step on no pets")

# output ---> 
# "Racecar is a palindrome"
# "Learn is a not a palindrome"
# "Rotator is a palindrome"
# "Step on no pets is a palindrome"
