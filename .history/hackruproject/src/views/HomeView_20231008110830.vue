<template>
  <div class="home-page">
    <h1>PeptideMapper</h1>
    <p>Upload your genomic sequence to visualize it and make new discoveries.</p>

      <div class="input-group">
      <input id = peptidetext v-model="protein" type = "text" autofocus placeholder="Input Your Protein Here" maxlength=400  rows="6" cols="50" width="400px">
      <input id = proteintext v-model="peptide" type = "text" autofocus placeholder="Input Your Peptide Here" maxlength=100 rows="6" cols="50" width = "1000px">
      <button type="submit" @click="checkInput">Get My Results</button>
      </div>
    
  </div>
</template> 

<script>
export default
{
  data()
  {
    return{ 
      protein: "",
      peptide: "",
    }
  },
methods: 
{
 checkInput() 
  {
    let proLength = this.protein.length;
    let pepLength= this.peptide.length;
    console.log(proLength);
    let proteinU = this.protein.toUpperCase();
    let peptideU = this.peptide.toUpperCase();
    for (let i = 0; i < proLength; i++) 
    {
      let currentChar1 = proteinU[i];
      
      // Check if the current character is one of the restricted letters
      if (currentChar1 === 'B' || currentChar1 === 'U' || currentChar1 === 'X' || currentChar1 === 'Z' )
      {
        alert("You cannot input the letters B, U, X, or Z.");
        return; // Stop processing if a restricted letter is found
      }
    }
    for (let i = 0; i < pepLength; i++)
    {  
      let currentChar2 = peptideU[i];
      if (currentChar2 === 'B' || currentChar2 === 'U' || currentChar2 === 'X' || currentChar2 === 'Z' )
      {
        alert("You cannot input the letters B, U, X, or Z.");
        return; // Stop processing if a restricted letter is found
      }
    }
    alert("Valid Input")
    }
  }
}

</script>
