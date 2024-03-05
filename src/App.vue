<template>
  <div id="app" class="app">
    <task-screen></task-screen>
  </div>
</template>

<script>
  import TaskScreen from './components/TaskScreen.vue';
  export default {
    name: 'App',
    components: {
      TaskScreen,
    }
  }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
    font-weight: 500;
    color: #4a454f;
    -webkit-tap-highlight-color: transparent;
  }
  
  body{
    padding-top: 20px;
    width: 100%;
    height: 100%;
  }

  @media(max-width:1200px){
    body{
      padding-top: 0;
    }
  }
</style>
