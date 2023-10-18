

		function checkTheMath()
		{	

			let rnd = Math.floor(Math.random() * (10 - 1 + 1) + 1);		
			let divGuess = document.createElement('div');
			let divError = document.createElement('div');
			let divSuccess = document.createElement('div');		

			divError.remove();
			divGuess.remove();
			divSuccess.remove();

			let guess = document.getElementById('guessInput').value	
			let guessInt = parseInt(guess);
			divGuess = document.createElement('div');			
			divGuess.classList.add('bubble', 'left');

			if(guessInt < 10)
			{
				divGuess.innerHTML =  '0' + guessInt;
			}
			else
			{
				divGuess.innerHTML =  guessInt;
			}
			document.getElementById('divGuessGame').appendChild(divGuess);						
									
			if(guess != rnd)
			{						
				divError.classList.add('bubble', 'right');

				if(guess < rnd)				
					divError.innerHTML = "Leider zu Niedrig! Bitte die Zahl noch einmal Raten!";
				else
					divError.innerHTML = 'Leider zu Hoch! Bitte die Zahl noch einmal Raten!';

				document.getElementById('divGuessGame').appendChild(divError);				
			}
			else
			{				
				divSuccess.classList.add('bubble', 'right');
				divSuccess.innerHTML = 'Richtig geraten! +  Die Zahl war: ' + guess + '<br>';
								
				document.getElementById('divGuessGame').appendChild(divSuccess);				
			}						
		}

		function enterCheckTheMath(event) {
   			if (event.keyCode == 13) {
				checkTheMath();
    		}
		}	

		function countdown()
		{
			let jetzt = new Date();
			let dann = new Date(2023,10,2,8,0,0);
			let diff = dann - jetzt;
			let diffsek = Math.floor(diff/1000);
			let diffmin = Math.floor(diffsek/60);
			let diffstd = Math.floor(diffmin/60);
			let difftag = Math.floor(diffstd/24);
			let reststd = diffstd%24;
			let restmin = diffmin%60;
			let restsek = diffsek%60;
			
			let ausgabe = difftag+" Tage, "+reststd+" Stunden, "+restmin+" Minuten, "+restsek+" Sekunden bis zur Klausur";
			
			document.getElementById("anzeige").innerHTML = ausgabe;
		}

		function auslesen()
		{
			document.querySelector("#ausgabeTshirt").innerHTML = document.f.tshirtTextInput.value;
			document.querySelector("#ausgabeTshirt").style.color = document.f.farbe.value;
			document.querySelector("#ausgabeTshirt").style.fontFamily = document.f.farbe.value;
			document.querySelector("#ausgabeTshirt").style.textAlign = document.f.ausrichtung.value;
			document.querySelector("#ausgabeTshirt").style.fontSize = document.f.groesse.value + "px";
		}