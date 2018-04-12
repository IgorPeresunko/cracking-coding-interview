/*
Information about these expressions is stored in the table expressions, which has the structure:

id: the unique operation id;
a: an integer;
b: an integer;
operation: one of the operations given above ("+", "-", "*", or "/");
c: an integer.
The homework you're going to give is simple: For each expression, the student needs to determine whether it's correct or not, i.e. whether it's true that the expression to the left of the = sign equals c.

Since you have many students and checking all their answers manually is a lot of work, you want to streamline the process by automatically identifying all the expressions that are correct. Given the table expressions, build the resulting table as follows: The table should have the same columns as the initial table does, but it should only contain those rows that represent correct expressions. The rows should be ordered by id.
*/

/*Please add ; after each select statement*/
CREATE PROCEDURE expressionsVerification()
BEGIN
	SELECT t.id, t.a, t.b, t.operation, t.c
    FROM (
        SELECT id, a, b, operation, c, CASE
            WHEN operation = '+' THEN a + b
            WHEN operation = '*' THEN a * b
            WHEN operation = '-' THEN a - b
            WHEN operation = '/' THEN a / b
            END as res
        FROM expressions
    ) t
    WHERE t.c = t.res;
END