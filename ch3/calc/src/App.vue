<template>
  <div id="app">
    <Calc v-bind:title="message" 
      v-on:result-event="appAction" />
  </div>
</template>

<script>
import Calc from './components/Calc.vue'

export default {
  name: 'App',
  components: {
    Calc
  },
  data: function(){
    return {
      message: 'CALC',
      result: [],
    };
  },
  computend:{
    log:function() {
      var table = '<tr><th class="head">Expression</th></tr>';
      for(var i in this.result){
        table += '<th><td>' + this.result[i][0] + '</td></th>'
          + this.result[i][1] + '</th></tr>';
      }
      return table;
    }
  },
  created: function() {
    var items = localStorage.getItem('log');
    var logs = JSON.parse(items);
    if (logs != null) { this.result = logs; }
  },
  methods: {
    appAction: function(exp, res) {
      this.result.unshift([exp, res]);
      if (this.result.length > 10){
        this.result.pop();
      }
      var log = JSON.stringify(this.result);
      localStorage.setItem('log', log);
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 5px;
}
tr td {
  padding:5px;
  border:1px solid gray;
}
tr th {
  padding:5px;
  border: 1px solid gray;
}
tr th.head {
  background-color: black;
  color: white;
}
</style>
