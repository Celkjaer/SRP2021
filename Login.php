<!DOCTYPE html>
<html>
<head>
  <title>Aktielearn</title>
  <link rel="stylesheet" href="Login1.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <h1>Aktielearn</h1>
<form action="logged_in.php" method="post">
  <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>
      <br> </br>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
      <br> </br>

      <button type="submit" id="login">Login</button>
      <br> 

      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
      <br> </br>
    </div>
</form>

</body>
</html>
