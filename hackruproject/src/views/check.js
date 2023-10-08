<body>
  <script>
    function checkInput() 
    {
      pro = document.getElementById("Protein");
      pep = document.getElementById("peptide");
      const userInput = inputElement.value;
      for (let i = 0; i < pro.length; i++) 
      {
        currentChar = userInput[i].toUpperCase();
        // Check if the current character is one of the restricted letters
        if (currentChar === "B" || currentChar === "U" || currentChar === "X" || currentChar === "Z") 
        {
          alert("You cannot input the letters B, U, X, or Z.");
          return; // Stop processing if a restricted letter is found
        }
      }
        

      // Continue with the processing if no restricted letter is found
      alert("Input is valid.");
      // You can add your desired code here to process the valid input.
    }
  </script>
</body>