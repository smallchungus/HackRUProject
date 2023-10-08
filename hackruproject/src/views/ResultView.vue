<template>
    <div>
      <div class="viewer-wrapper">
        <div ref="viewerContainer1" class="viewer"></div>
        <div ref="viewerContainer2" class="viewer"></div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .viewer-wrapper {
    display: flex;
    justify-content: space-between;
  }
  
  .viewer {
    width: 49%; 
    height: 400px;
    border: 1px solid #ccc;
  }
  </style>
  
  <script>
  import * as NGL from 'ngl';
  

  export default {
    name: 'NGLViewer',
    data() {
      return {
        stage1: Object.freeze(new NGL.Stage(this.$refs.viewerContainer1)),
        stage2: Object.freeze(new NGL.Stage(this.$refs.viewerContainer2)),
      };
    },
    mounted() {
        
        this.initViewer();
        
        const stage1Files = [
            'wild/wild.pdb', 
            'wild/model_1.pdb',
            'wild/model_2.pdb',
            'wild/model_3.pdb',
            'wild/model_4.pdb',
            'wild/model_5.pdb',
            'wild/model_6.pdb',
            'wild/model_7.pdb',
            'wild/model_8.pdb',
            'wild/model_9.pdb',
            'wild/model_10.pdb',  
        ];

        const stage2Files = [
            'mutant/mutant.pdb',
            'mutant/model_1.pdb',
            'mutant/model_2.pdb', 
            'mutant/model_3.pdb', 
            'mutant/model_4.pdb', 
            'mutant/model_5.pdb', 
            'mutant/model_6.pdb', 
            'mutant/model_7.pdb', 
            'mutant/model_8.pdb', 
            'mutant/model_9.pdb', 
            'mutant/model_10.pdb', 
        ];

  stage1Files.forEach(file => {
    this.stage1.loadFile(file, { defaultRepresentation: true });
  });

  stage2Files.forEach(file => {
    this.stage2.loadFile(file, { defaultRepresentation: true });
  });
    },
    methods: {
      initViewer() {
        this.stage1 = new NGL.Stage(this.$refs.viewerContainer1);
        this.stage2 = new NGL.Stage(this.$refs.viewerContainer2);
        this.stage1.setParameters({ backgroundColor: 'lightgrey' });
        this.stage2.setParameters({ backgroundColor: 'lightgrey' });
      },
      loadFile(event, stage) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            stage.loadFile(e.target.result, {defaultRepresentation: true });
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };
  </script>
  