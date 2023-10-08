<template>
    <div class="header">
      <img src="/path/to/company/logo.png" alt="Company Logo">
      <h1>Company Name</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  <style>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #fff;
  }
  
  .header img {
    width: 50px;
    height: 50px;
  }
  
  .header h1 {
    font-size: 20px;
    margin: 0;
  }
  </style>