/*Please add ; after each select statement*/
CREATE PROCEDURE usersByContinent()
BEGIN
	SELECT continent, SUM(users) as users FROM countries GROUP BY continent ORDER BY users DESC;
END