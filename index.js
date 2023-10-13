let rnd = Math.floor(Math.random() * (10 - 1 + 1) + 1);
		
		let divGuess = document.createElement('div');
		let divError = document.createElement('div');
		let divSuccess = document.createElement('div');

		function checktheMath()
		{	
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
			document.body.appendChild(divGuess);			
									
			if(guess != rnd)
			{						
				divError.classList.add('bubble', 'right');

				if(guess < rnd)				
					divError.innerHTML = "Leider zu Niedrig! Bitte die Zahl noch einmal Raten!";
				else
					divError.innerHTML = 'Leider zu Hoch! Bitte die Zahl noch einmal Raten!';

				document.body.appendChild(divError);
			}
			else
			{				
				divSuccess.classList.add('bubble', 'right');
				divSuccess.innerHTML = 'Richtig geraten! +  Die Zahl war: ' + guess + '<br>';				
				document.body.appendChild(divSuccess);
			}						
		}

		function clickPress(event) {
   			if (event.keyCode == 13) {
				checktheMath();
    		}
		}	