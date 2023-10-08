<template>
  <div class="home-page">
    <h1>PeptideMapper</h1>
    <p>Upload your genomic sequence to visualize it and make new discoveries.</p>

      <div class="input-group">
      <input type = "textarea" v-model="protein" rows="6" cols="50"> Enter protein chain (400 char max) 
      <input v-model="peptide" rows="6" cols="50"> Enter peptide chain (100 char max) 
      <button type="submit" @click="checkInput">Confirm</button>
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
