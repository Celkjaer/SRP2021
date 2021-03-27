<?php
session_start();

$servername = "localhost";
$username = "ceci085b";
$password = "EWpU1QSw";
$dbname = "ceci085b_srp";
  
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if($_SERVER["REQUEST_METHOD"] == "POST") {
  
      // username and password sent from form 
      //$myusername = mysqli_real_escape_string($db,$_POST['uname']);
      //$mypassword = mysqli_real_escape_string($db,$_POST['psw']); 
      
  	  $myusername = $_POST['uname'];
      $mypassword = $_POST['psw'];
        
      $sql = "SELECT uname, psw FROM bruger WHERE uname = '" . $myusername . "' and psw ='" . $mypassword . "'";
      $result = $conn->query($sql);

      //$result = mysqli_query($db,$sql);
      //$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      //$active = $row['active'];
      //$count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($result->num_rows == 1) {
         while ($row = $result->fetch_assoc()) {
            $_SESSION["id"] = $row["bid"];
            $_SESSION["fornavn"] = $row["fn"];
            $_SESSION["efternavn"] = $row["ln"];
           
           /*
            *   session_start();
            *
            *	if (isset($_SESSION["id"])) {
   			*	   ...
            *   } else { echo "ikke logget ind"; }
            */
         }
         
          echo "Logget ind";
          header("location: startside.php");
      } else {
          echo "Kan ikke logge ind";
         //$error = "Your Login Name or Password is invalid";
      }
   }

?>
