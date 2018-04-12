/*Please add ; after each select statement*/
CREATE PROCEDURE soccerPlayers()
BEGIN
	SELECT GROUP_CONCAT(CONCAT(first_name, ' ', surname, ' #', player_number) ORDER BY player_number ASC SEPARATOR '; ') as players FROM soccer_team;
END