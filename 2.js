There are several operators in JS.

1-Arithmatic operators-

   These operators perform basic arithmatic operations like addition , Substraction, multiplication etc .

   sum= 5+3
   cal=12*4

2- Assignment Operators-

   They are used for assignment of values to variables. 

   Assignment (=): let x = 10;
   Addition assignment (+=): x += 5; // equivalent to x = x + 5;
   Subtraction assignment (-=): x -= 3; // equivalent to x = x - 3;
   Multiplication assignment (*=): x *= 2; // equivalent to x = x * 2;


3- Comparison Operator-   

   Compare values and return a Boolean result.

   Equal to (== or ===): 5 == "5" evaluates to true, but 5 === "5" evaluates to false.
   Not equal to (!= or !==): 10 !== "10" evaluates to true.
   Greater than (>): 7 > 4 evaluates to true.
   Less than (<): 3 < 9 evaluates to true.   

4-Logical Operators-
   

   Perform logical operations on Boolean values.

   Logical AND (&&): if (a > 0 && b < 10) { /* do something */ }
   Logical OR (||): if (x === 5 || y === 10) { /* do something */ }
   Logical NOT (!): if (!isLoggedin) { /* do something */ }

5-Unary Operators:

    Operate on a single operand.

    Increment (++): let count = 3; count++; // count is now 4
    Decrement (--): let value = 8; value--; // value is now 7
    Negation (-): let positive = 5; let negative = -positive;


6-Ternary Operator (Conditional Operator):

    A shorthand for the if-else statement.

    condition ? expression_if_true : expression_if_false;
    Example: let result = (x > 0) ? "positive" : "non-positive";   