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

function nil($prop) {
	if(is_null($prop)) return "NULL";
	else return "'" . $prop . "'";
}

function niln($num) {
	if(is_null($num)) return "NULL";
	return $num;
}

//echo "<script> console.log('PHP Script says Hi!'); </script>";
$post_data = file_get_contents('php://input');
$post = json_decode($post_data);

//Create Qualy Table
if($post->mode == 1) {
    $sql_create = "CREATE TABLE `epiz_23890428_qualy`.`" . $post->season . "|" . $post->track . "` (" .
		"`pos` INT( 6 ) NOT NULL ," .
		"`id` INT( 11 ) NOT NULL ," .
		"`team` VARCHAR( 40 ) NULL DEFAULT NULL ," .
		"`time` VARCHAR( 15 ) NOT NULL DEFAULT '-'," .
		"`tyre` VARCHAR( 15 ) NOT NULL ," .
		"PRIMARY KEY ( `pos` ) ," .
		"UNIQUE (`id`)" .
		") ENGINE = MYISAM ; ";

	$total = 0;
	$sql_drivers = "INSERT INTO `epiz_23890428_qualy`.`" . $post->season . "|" . $post->track . "` " .
		"(`pos`, `id`, `team`, `time`, `tyre`) VALUES ";

	foreach ($post->drivers as $driver) {
		if($total) $sql_drivers .= ", ";
		$sql_drivers .= "(" . niln($driver->pos) . ", " . niln($driver->id) . ", " . nil($driver->team) .
			", " . nil($driver->time) . ", " . nil($driver->tyre) . ")";

		$total++;
	}

	$sql = $sql_create . $sql_drivers . ";";
}

//Create Race Table
else if($post->mode == 2) {
    $sql_create = "CREATE TABLE `epiz_23890428_race`.`" . $post->season . "|" . $post->track . "` (" .
		"`pos` INT( 6 ) NOT NULL ," .
		"`id` INT( 11 ) NOT NULL ," .
		"`team` VARCHAR( 40 ) NOT NULL ," .
		"`grid` INT( 6 ) NOT NULL ," .
		"`stop` INT( 6 ) NOT NULL ," .
		"`best` VARCHAR( 15 ) NOT NULL DEFAULT '-'," .
		"`time` VARCHAR( 15 ) NOT NULL DEFAULT 'DNF'," .
		"`tyres` VARCHAR( 20 ) NOT NULL DEFAULT '-'," .
		"PRIMARY KEY ( `pos` ) ," .
		"UNIQUE (`id`)" .
		") ENGINE = MYISAM ; ";

	$total = 0;
	$sql_drivers = "INSERT INTO `epiz_23890428_race`.`" . $post->season . "|" . $post->track . "` " .
		" (`pos`, `id`, `team`, `grid`, `stop`, `best`, `time`) VALUES ";

	foreach ($post->drivers as $driver) {
		if($total) $sql_drivers .= ", ";
		$sql_drivers .= "(" . niln($driver->pos) . ", " . niln($driver->id) . ", " . nil($driver->team) .
			", " . niln($driver->grid) . ", " . niln($driver->stop) . ", " . nil($driver->id) . 
			", " . nil($driver->time) . ")";

		$total++;
	}

	$sql = $sql_create . $sql_drivers . ";";
}

//Create Tables amd Columns for New Season
else if($post->mode == 3) {
    $sql_flap = "CREATE TABLE `epiz_23890428_fastest_laps`.`" . $post->season . "` (" . 
		"`track` INT( 6 ) NOT NULL ," .
		"`id` INT( 11 ) NOT NULL ," .
		"`lap` INT( 11 ) NULL ," .
		"`time` VARCHAR( 11 ) NULL ," .
		"`tyre` VARCHAR( 15 ) NULL ," .
		"PRIMARY KEY ( `track` ) " .
		") ENGINE = MYISAM ; "; 

   $sql_teams = "ALTER TABLE `epiz_23890428_fdb`.`teams` " .
		 "ADD `" . $post->season . "` VARCHAR( 40 ) NULL DEFAULT 'None'; ";

   $sql_seasons = "CREATE TABLE `epiz_23890428_seasons`.`" . $post->season . "` (" .
		 "`id` INT( 11 ) NOT NULL ," .
		 "PRIMARY KEY ( `id` ) " .
		 ") ENGINE = MYISAM ;";

   $sql = $sql_flap . $sql_teams . $sql_seasons;
}
else if($post->mode == 4) {
   $sql_user = "INSERT INTO `epiz_23890428_fdb`.`users` (`username`, `id`, " . 
		"`name`, `discord`, `steam`, `location`, `number`, `active`, " .
		"`role`, `aka`) VALUES (" . nil($post->username) . ", " . $post->id . ", " . nil($post->name) . ", " .
		nil($post->discord) . ", " . nil($post->steam) . ", " . nil($post->location) . ", " .
		niln($post->number) . ", " . nil($post->active) . ", " . nil($post->role) . ", " . nil($post->aka) . "); ";

   $sql_teams = "INSERT INTO `epiz_23890428_fdb`.`teams` (`id`) VALUES (" . $post->id . "); ";

   $sql = $sql_user . $sql_teams;
}
else
    echo 'Invalid Parameters <br><br>';

$result = $conn->multi_query($sql);

if($result)
	http_response_code(201);
else
	http_response_code(400);

echo json_encode(new stdClass);
?> 