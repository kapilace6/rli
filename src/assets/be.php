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

//echo "Connected successfully";
//echo "<br>Welcome to RLI!";

$sql = "SELECT * FROM `epiz_23890428_fdb`.`" . $_GET['table'] . "`";
//echo "<br> ". $sql. "<br> <br> ";
$result = $conn->query($sql);

$re = "Hi There";
//echo $result->num_rows;
//echo "<script> console.log(". json_encode($result) . "); </script>";

$users = array();
if ($result->num_rows > 0) {
    //echo "<br> Got some result". $result->num_rows;
    // output data of each row
    while($row = $result->fetch_assoc()) {
        //echo "<script> console.log(". $row . "); </script>";
        //echo "<script> console.log(". json_encode($row) . "); </script>";
        //echo "id: " . $row["id"]. " - Username: " . $row["username"]. "<br>";

        $users[] = $row;
    }
} else {
    echo "0 results";
}

//echo $users;
//echo "<script> console.log(". $users . "); </script>";
echo json_encode($users);
?> 