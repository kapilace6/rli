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
   $username_prefix = $username_suffix = "";
   $name_prefix = $name_suffix = "";
   $discord_prefix = $discord_suffix = "";
   $steam_prefix = $steam_suffix = "";
   $location_prefix = $location_suffix = "";
   $number_prefix = $number_suffix = "";
   $role_prefix = $role_suffix = "";
   $aka_prefix = $aka_suffix = "";

   if(!is_null($post->username)) { $username_prefix = "`username`,"; $username_suffix = "'" . $post->username . "', "; }
   if(!is_null($post->name)) { $name_prefix = ", `name`"; $name_suffix = ", '" . $post->name . "'"; }
   if(!is_null($post->discord)) { $discord_prefix = ", `location`"; $discord_suffix = ", '" . $post->discord . "'"; }
   if(!is_null($post->steam)) { $steam_prefix = ", `steam`"; $steam_suffix = ", '" . $post->steam . "'"; }
   if(!is_null($post->location)) { $location_prefix = ", `location`"; $location_suffix = ", '" . $post->location . "'"; }
   if(!is_null($post->number)) { $number_prefix = ", `number`"; $number_suffix = ", " . $post->number; }
   if(!is_null($post->role)) { $role_prefix = ", `role`"; $role_suffix = ", '" . $post->role . "'"; }
   if(!is_null($post->aka)) { $aka_prefix = ", `aka`"; $aka_suffix = ", '" . $post->aka . "'"; }

   $sql_user = "INSERT INTO `epiz_23890428_fdb`.`users` (" . $username_prefix . " `id` " . 
		$name_prefix . $discord_prefix . $steam_prefix . $location_prefix . $number_prefix . 
		$role_prefix . $aka_prefix . ") VALUES (" . $username_suffix . $post->id . $discord_suffix . 
		$steam_suffix . $location_suffix . $number_suffix . $role_suffix . $aka_suffix . "); ";

   $sql_teams = "INSERT INTO `epiz_23890428_fdb`.`teams` (`id`) VALUES (" . $post->id . "); ";

   $sql = $sql_user . $sql_teams;
}
else
    echo 'Invalid Parameters <br><br>';

echo $sql;
$result = $conn->multi_query($sql);

if($result)
	http_response_code(201);
else
	http_response_code(400);

echo json_encode(new stdClass);
?> 