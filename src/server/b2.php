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

$post_data = file_get_contents('php://input');
$post = json_decode($post_data);

//Content Mode
//if($_GET['mode'] == 1)
//    $sql = "SELECT * FROM `epiz_23890428_" . $_GET['db'] . "`.`" . $_GET['table'] . "`";

if($post->mode == 1)
    $sql = "SELECT * FROM `epiz_23890428_" . $post->db . "`.`" . $post->table . "`";
else
    echo 'Invalid Parameters <br><br>';
    
$result = $conn->query($sql);

//echo $result->num_rows;
//echo "<script> console.log(". json_encode($result) . "); </script>";
 
$users = array();
if ($result->num_rows > 0) {
    
    // output data of each row
    while($row = $result->fetch_assoc()) {
        //echo "<script> console.log(". json_encode($row) . "); </script>";
        //echo "id: " . $row["id"]. " - Username: " . $row["username"]. "<br>";

	    $users[] = $row;
    }
} 
else {
    echo "0 results";
}

//echo $users;
//echo "<script> console.log(". $users . "); </script>";
echo json_encode($users, JSON_NUMERIC_CHECK);
?> 
