/*Please add ; after each select statement*/
CREATE PROCEDURE movieDirectors()
BEGIN
	SELECT DISTINCT t.director FROM (
        SELECT SUM(oscars) as oscars, director
        FROM moviesInfo
        WHERE year > 2000
        GROUP BY director
    ) t WHERE oscars > 2;
END