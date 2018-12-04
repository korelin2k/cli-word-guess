# cli-word-guess

In this assignment, I broke it up into three different constructors:
1. Letter
2. Word
3. Game

Index -> Game -> Word -> Letter

In this case, index calls Game to create everything.

### How to start
> npm start  

### Example
> ? Guess a letter! a  
>  Correct!  
>   
>  a _ _ _ _ _ _ _  
> ? Guess a letter! e  
>  Correct!  
>   
>  a _ e _ _ _ _ _  
> ? Guess a letter! r  
>  Correct!  
>   
>  a _ e r _ _ _ _  
> ? Guess a letter! p  
>  Incorrect - you have 9 guesses remaining  
>   
>  a _ e r _ _ _ _  
> ? Guess a letter! l  
>  Incorrect - you have 8 guesses remaining  
>   
>  a _ e r _ _ _ _  
> ? Guess a letter! s  
>  Correct!  
>   
>  a _ e r s _ _ _  
> ? Guess a letter! o  
>  Correct!  
>   
>  a _ e r s _ o _  
> ? Guess a letter! p  
>  Incorrect - you have 7 guesses remaining  
>   
>  a _ e r s _ o _  
> ? Guess a letter! t  
>  Incorrect - you have 6 guesses remaining  
>   
>  a _ e r s _ o _  
> ? Guess a letter! v  
>  Correct!  
>   
>  a v e r s _ o _  
> ? Guess a letter! i  
>  Correct!  
>   
>  a v e r s i o _  
> ? Guess a letter! n  
>  Correct!  
>   
>  a v e r s i o n  
> Congrats - you won!  

### Things I Tried:
1. Leveraged TypeScript again - love it. This time I took it a step further and leveraged classes w/constructor built in and "strict" enforced, which basically denied the use of "any" type... which really defeats the purpose of TypeScript. 
2. Added mocha & chai unit testing for TDD (yes, actually did my test cases first). Not an overly complex assignment, so there wasn't a lot of tests.

>   Game Functionality  
>     ✓ should return the number of guesses left  
>     ✓ should increment the guesses  
>     ✓ should return a random word  
>   
>   Letter Functionality  
>     ✓ should return blank space  
>     ✓ should check letter and return false if not correct  
>     ✓ should check letter and return true if correct  
>     ✓ should return letter  
>   
>   Word Functionality  
>     ✓ should return all underlines for each character  
>     ✓ should return the word after s was guessed  
>     ✓ should return the full word  
>   
>   
>   10 passing (9ms)  

