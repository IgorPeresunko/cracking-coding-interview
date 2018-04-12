/*
Here's the task: Given a list of countries, your friend should calculate the average population and total population of all the countries in the list. To help her, you have decided to write a function that will calculate the required values for any number of countries. The countries table in which the countries are stored has the following structure:

name: the name of the country;
continent: the continent on which the country is situated;
population: the population of the country.
Your task is to return a new table that contains the number of countries in the given list, along with their average and total population, in columns titled number, average and total.
*/
/*Please add ; after each select statement*/
CREATE PROCEDURE countriesInfo()
BEGIN
	SELECT COUNT(name) as number, AVG(population) as average, SUM(population) as total
    FROM countries;
END