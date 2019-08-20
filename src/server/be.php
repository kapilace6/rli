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

$sort = "";
if($post->sort != "")
    $sort = "ORDER BY `" . $post->sort . "`";

//Content Mode
if($post->mode == 1)
    $sql = "SELECT * FROM `epiz_23890428_" . $post->db . "`.`" . $post->table . "`" . $sort;

//Column Mode
else if($post->mode == 2)
    $sql = "SHOW COLUMNS FROM `epiz_23890428_" . $post->db . "`.`" . $post->table . "`" . $sort;

//Table Mode
else if($post->mode == 3)
    $sql = "SHOW TABLES FROM `epiz_23890428_" . $post->db . "`";

else
    echo 'Invalid Parameters <br><br>';
    
$result = $conn->query($sql);

//echo $result->num_rows;
//echo "<script> console.log(". json_encode($result) . "); </script>";

if($post->mode == 2)
	$field = 'Field';
else if($post->mode == 3)
	$field = 'Tables_in_epiz_23890428_' . $post->db;
 
$users = array();
if ($result->num_rows > 0) {
    
    // output data of each row
    while($row = $result->fetch_assoc()) {
        //echo "<script> console.log(". json_encode($row) . "); </script>";
        //echo "id: " . $row["id"]. " - Username: " . $row["username"]. "<br>";

	if($post->mode == 1)
		$users[] = $row;
	else
		$users[] = $row[$field];
    }
} 
else {
    echo "0 results";
}

//echo $users;
//echo "<script> console.log(". $users . "); </script>";
echo json_encode($users, JSON_NUMERIC_CHECK);
?> 
