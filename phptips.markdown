# PHP Tips

# Creating strings
<?php
    echo "xxx" . "yyy";
?>
//Outputs xxxyyy

    echo 17 * 123;
//outputs 2091

//Create a variable with a $
    $myvariable = “string”;
    $number = 99;
//numbers dont need quotation marks

    echo $myvariable;
    echo $number;
//Outputs string 99


# Maths

//Compare and contrast numbers as you normally would
    echo 2 == 2;
    echo 2 > 1;


# if/else statements   
$items =  10;   
// Set this to a number greater than 5!
          <?php
        $items = 3;
        
        if($items > 5) {
          echo "You get a 10% discount!";
        }
        else {
            echo "You get a 5% discount!";
        }
// Outputs You get a 10% discount!

//another example
        $fuck = 7;
        if ($fuck > 8) {
            echo "The condition is true";
        }
        else {
            echo "The condition is false";
        }
//outputs This condition is false


# elseif
        $fuck = 3;
        if ($fuck = 3) {
            echo "True!";
        }
        elseif ($fuck > 3) {
            echo "Why?";   
        }
        else {
            echo "Nah!";
        }
//outputs True!
//simple math stuff no biggie

# control switch
    switch (2) {
        case 0:
            echo 'The value is 0';
            break;
        case 1:
            echo 'The value is 1';
            break;
        case 2:
            echo 'The value is 2';
            break;
        default:
            echo "The value isn't 0, 1 or 2";
    }
//You can also switch syntax by using a variable like-
    $num = "2";
        switch ($num) {...}

# Multiple Cases

    $i = 5;
    switch ($i) {
        case 0:
            echo '$i is 0.';
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            echo '$i is somewhere between 1 and 5.';
            break;
        case 6:
        case 7:
            echo '$i is either 6 or 7.';
            break;
        default:
            echo "I don't know how much \$i is.";
    }
//outputs $i is somewhere between 1 and 5.
//always have the default so theres no error if something happens



# Arrays

//Simple array
      $array = array("Egg", "Tomato", "Beans");
//(echo $array[1]) or (echo $array{1};) to pick and choose from the array

//Change parts of the string
        $languages = array("HTML/CSS",
        "JavaScript", "PHP", "Python", "Ruby");
        
        $languages[1] = "GoLang";
        echo $languages[1];
//outputs GoLang

//Delete the whole array with unset($array);

//Delete part of the array with unset($array[2]);


# Change Variable
        foreach($languages as $lang) {
          print "<p>$lang</p>";
        }
//Changes variable name to something easier later in the script


# Loops

//Here's a for loop that echoes out all the years that have leap years
      for ($leap = 2004; $leap < 2050; $leap = $leap + 4) {
        echo "<p>$leap</p>";
      }
//Another Example from 10-100
      for ($tens = 10; $leap <= 100; $leap = $leap + 10) {
        echo "<p>$tens</p>";
      }  

# ForEach
//An example ForEach loop
//Loops + Arrays = ForEach
          $langs = array("JavaScript",
          "HTML/CSS", "PHP",
          "Python", "Ruby");
        
          foreach ($langs as $lang) {
              echo "<li>$lang</li>";
          }
        
          unset($lang);
//Another Example
        $sentence = array("I'm ", "learning ", "PHP!");
        
        foreach ($sentence as $word) {
          echo $word;
        }

//An example that puts it into use
        $yardlines = array("The 50... ", "the 40... ",
        "the 30... ", "the 20... ", "the 10... ");
        
        foreach ($yardlines as $yard) {
        echo $yard;
        }
        echo "touchdown!";
//Outputs The 50... the 40... the 30... the 20... the 10... touchdown!


# While Loops
//A while loop will execute as long as a certain condition is true.
//An example page

<!DOCTYPE html>
<html>
    <head>
    	<link type='text/css' rel='stylesheet' href='style.css'/>
		<title>Coin Flips</title>
	</head>
	<body>
	<p>We are going to flip a coin until we get three heads in a row!</p>
	<?php
	$headCount = 0;
	$flipCount = 0;
	while ($headCount < 3) {
		$flip = rand(0,1);
		$flipCount ++;
		if ($flip){
			$headCount ++;
			echo "<div class=\"coin\">H</div>";
		}
		else {
			$headCount = 0;
			echo "<div class=\"coin\">T</div>";
		}
	}
	echo "<p>It took {$flipCount} flips!</p>";
	?>
    </body>
</html>

//Outputs It took 8 flips!








































