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

//echo "<script> console.log('PHP Script says Hi!'); </script>";
$post_data = file_get_contents('php://input');
$post = json_decode($post_data);

//Create Qualy Table
if($post->mode == 1)
    $sql = "CREATE TABLE `epiz_23890428_qualy`.`" . $post->season . "|" . $post->track . "` (" .
		"`pos` INT( 6 ) NOT NULL ," .
		"`id` INT( 11 ) NOT NULL ," .
		"`team` VARCHAR( 40 ) NULL DEFAULT NULL ," .
		"`time` VARCHAR( 15 ) NOT NULL DEFAULT '-'," .
		"`tyre` VARCHAR( 15 ) NOT NULL ," .
		"PRIMARY KEY ( `pos` ) ," .
		"UNIQUE (`id`)" .
		") ENGINE = MYISAM ;";

//Create Race Table
else if($post->mode == 2)
    $sql = "CREATE TABLE `epiz_23890428_race`.`" . $post->season . "|" . $post->track . "` (" .
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
		"`role`, `aka`) VALUES (" . $post->username . ", " . $post->id . ", " . $post->name . ", " .
		$post->discord . ", " . $post->steam . ", " . $post->location . ", " .
		$post->number . ", " . $post->active . ", " . $post->role . ", " . $post->aka . "); ";

   $sql_seasons = "CREATE TABLE `epiz_23890428_seasons`.`" . $post->season . "` (" .
		 "`id` INT( 11 ) NOT NULL ," .
		 "PRIMARY KEY ( `id` ) " .
		 ") ENGINE = MYISAM ;";

   $sql = $sql_flap . $sql_teams . $sql_seasons;
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