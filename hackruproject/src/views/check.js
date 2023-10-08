function checkInput () 
{
    const pro = document.getElementById("Protein");
    const pep = document.getElementById("peptide");

    for (let i = 0; i < pro.length; i++) 
    {
    currentChar1 = pro[i].toUpperCase();
    currentChar2 = pep[i].toUpperCase();
    // Check if the current character is one of the restricted letters
    if ((currentChar1=="B" || currentChar2 == "B") || (currentChar1=="U" || currentChar2 == "U") || (currentChar1=="X" || currentChar2 == "X") || (currentChar1=="Z" || currentChar2 == "Z")) 
    {   
        alert("You cannot input the letters B, U, X, or Z.");
        return; // Stop processing if a restricted letter is found
    }
    }
        

      // Continue with the processing if no restricted letter is found
      alert("Input is valid.");
      // You can add your desired code here to process the valid input.
}
