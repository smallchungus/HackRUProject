<template>

  <div class="home-page">
    <h1>Modern Genome App</h1>
    <p>Upload your genomic sequence to visualize it and make new discoveries.</p>
      <div class="input-group">
      <textarea id="protein" name="protein" rows="6" cols="50"> Enter protein chain (400 char max) </textarea>
      <textarea id="peptide" name="peptide" rows="6" cols="50"> Enter peptide chain (100 char max) </textarea>
      <button type="submit" @click="checkInput">Confirm</button>
    </div>

    
  </div>
</template> 

<script>
export default{
methods: {
 checkInput() 
{
    const pro = document.getElementById("Protein"); 
    const pep = document.getElementById("peptide");
    console.log(pro.length);
    for (let i = 0, k=0; i < pro.lenght || k<pep.length; i++) 
    {
    let currentChar1 = pro[i].toUpperCase();
    let currentChar2 = pep[i].toUpperCase();
    // Check if the current character is one of the restricted letters
    if ((currentChar1=="B" || currentChar2 == "B") || (currentChar1=="U" || currentChar2 == "U") || (currentChar1=="X" || currentChar2 == "X") || (currentChar1=="Z" || currentChar2 == "Z")) 
    {   
        console.log("You cannot input the letters B, U, X, or Z.");
        return; // Stop processing if a restricted letter is found
    }
    }
        

      // Continue with the processing if no restricted letter is found
      alert("Input is valid.");
      // You can add your desired code here to process the valid input.
}
}
}
</script>
