 <?php
$servername = "sql312.epizy.com";
$username = "epiz_23890428";
$password = "quc2bfkcJxGqB";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Create Qualy Table
if($_GET['mode'] == 1)
    $sql = "CREATE TABLE `epiz_23890428_qualy`.`" . $_GET['season'] . "|" . $_GET['track'] . "` (
		`pos` INT( 6 ) NOT NULL ,
		`id` INT( 11 ) NOT NULL ,
		`team` VARCHAR( 40 ) NULL DEFAULT NULL ,
		`time` VARCHAR( 15 ) NOT NULL DEFAULT '-',
		`tyre` VARCHAR( 15 ) NOT NULL ,
		PRIMARY KEY ( `pos` ) ,
		UNIQUE (`id`)
		) ENGINE = MYISAM ;";

//Create Race Table
else if($_GET['mode'] == 2)
    $sql = "CREATE TABLE `epiz_23890428_race`.`" . $_GET['season'] . "|" . $_GET['track'] . "` (
		`pos` INT( 6 ) NOT NULL ,
		`id` INT( 11 ) NOT NULL ,
		`team` VARCHAR( 40 ) NOT NULL ,
		`grid` INT( 6 ) NOT NULL ,
		`stop` INT( 6 ) NOT NULL ,
		`best` VARCHAR( 15 ) NOT NULL DEFAULT '-',
		`time` VARCHAR( 15 ) NOT NULL DEFAULT 'DNF',
		`tyres` VARCHAR( 20 ) NOT NULL DEFAULT '-',
		PRIMARY KEY ( `pos` ) ,
		UNIQUE (`id`)
		) ENGINE = MYISAM ;";

//Create Tables amd Columns for New Season
else if($_GET['mode'] == 3) {
    $sql_flap = "CREATE TABLE `epiz_23890428_fastest_laps`.`" . $_GET['season'] . "` (
		`track` INT( 6 ) NOT NULL ,
		`id` INT( 11 ) NOT NULL ,
		`lap` INT( 11 ) NULL ,
		`time` VARCHAR( 11 ) NULL ,
		`tyre` VARCHAR( 15 ) NULL ,
		PRIMARY KEY ( `track` ) 
		) ENGINE = MYISAM ;";

   $sql_teams = "ALTER TABLE `epiz_23890428_fdb`.`teams` 
		 ADD `" . $_GET['season'] . "` VARCHAR( 40 ) NULL DEFAULT 'None';";

   $sql_seasons = "CREATE TABLE `epiz_23890428_seasons`.`" . $_GET['season'] . "` (
		 `id` INT( 11 ) NOT NULL ,
		 PRIMARY KEY ( `id` ) 
		 ) ENGINE = MYISAM ;";

   $sql = $sql_flap . $sql_teams . $sql_seasons;
}
else
    echo 'Invalid Parameters <br><br>';

$result = $conn->query($sql);
echo $result;
?> 
