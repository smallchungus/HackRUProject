<template>
  <div class="home">
    <img alt="" src="">
    <HelloWorld msg="Protein/Peptide Input"/>
  </div>

<div class ="Protein">
  <div class="multiline">
    <span>Protein:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <input type="text" class="form__input" autofocus placeholder="Input Your Protein Here" :maxlength=400 width="400px">
  </div>
  <button class="form__button" type="submit">Get My Results</button>
            <p class="form__text">
            </p>
</div>


<div class ="Peptide">
  <div class="multiline">
    <span>Peptide:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <input type="text" class="form__input" autofocus placeholder="Input Your Peptide Here" :maxlength=100 width="400px">
  </div>
  <button class="form__button" type="submit">Get My Results</button>
            <p class="form__text">
            </p>
</div>

</template>



<script>


// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
