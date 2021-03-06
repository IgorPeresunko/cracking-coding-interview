CREATE TABLE IF NOT EXISTS leagues (
	id INT NOT NULL PRIMARY KEY,
	tier VARCHAR(20),
	league_name VARCHAR(300) 
);

CREATE TABLE IF NOT EXISTS teams (
	id INT NOT NULL PRIMARY KEY,
	rating FLOAT,
	wins INT,
	losses INT,
	team_name VARCHAR(100),
	logo_url VARCHAR(300)
);

CREATE TABLE IF NOT EXISTS heroes (
	id INT NOT NULL PRIMARY KEY,
	hero_name VARCHAR(80),
	primary_attr VARCHAR(10),
  	attack_type VARCHAR(10),
	roles VARCHAR(150),
	img VARCHAR(300),
	legs INT
);

CREATE TABLE IF NOT EXISTS players (
	id INT NOT NULL PRIMARY KEY,
	steam_id VARCHAR(17),
	avatar VARCHAR(300),
	nickname VARCHAR(100),
	team_id INT NOT NULL,
	country_code VARCHAR(5),
	FOREIGN KEY (`team_id`) REFERENCES teams(`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS matches (
	id VARCHAR(12) NOT NULL PRIMARY KEY,
	duration INT,
	radiant_team_id INT,
	dire_team_id INT,
	league_id INT,
	radiant_score INT,
	dire_score INT,
	radiant_win BOOLEAN,
	FOREIGN KEY (`league_id`) REFERENCES leagues(`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS match_team (
	team_id INT NOT NULL,
	match_id VARCHAR(12) NOT NULL,
	FOREIGN KEY (team_id) REFERENCES teams (id),
	FOREIGN KEY (match_id) REFERENCES matches (id),
	PRIMARY KEY (team_id, match_id)
);

DELIMITER |

CREATE TRIGGER matches_after_insert 
AFTER INSERT
	ON matches FOR EACH ROW
BEGIN
	INSERT INTO match_team VALUES (NEW.radiant_team_id, NEW.id);
	INSERT INTO match_team VALUES (NEW.dire_team_id, NEW.id);
END;
|

CREATE TRIGGER matches_before_delete
BEFORE DELETE
	ON matches FOR EACH ROW
BEGIN
    DELETE FROM match_team WHERE match_id = OLD.id;
END;
|

DELIMITER //

CREATE PROCEDURE getTeamPlayers(IN team_id INT)
BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN
		ROLLBACK;
	END;

	START TRANSACTION;
    	SELECT
			players.id,
			players.nickname,
			players.avatar
		FROM teams
		JOIN players ON players.team_id = teams.id
		WHERE teams.id = team_id;
	COMMIT;

END //

DELIMITER ;