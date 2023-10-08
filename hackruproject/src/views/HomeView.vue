<template>
  <div class="home-page">
    <h1>Modern Genome App</h1>
    <p>Upload your genomic sequence to visualize it and make new discoveries.</p>
    <form action="check.js">
      <div class="input-group">
      <textarea id="protein" name="protein" rows="6" cols="50"> Enter protein chain (400 char max) </textarea>
      <textarea id="peptide" name="peptide" rows="6" cols="50"> Enter peptide chain (100 char max) </textarea>
      <button type="submit">Confirm</button>
    </div>
    </form>
    
  </div>
</template>