<template>
  <div class="container">
    <section class="container">
      <h1>{{title}}</h1>
      <p>{{$store.state.message}}</p>
      <hr>
      <div class="link"
        @click.exact="$store.commit({type:'count', message:'add 1!', add:1})"
        @click.shift.exact="$store.commit({type:'count', message:'add 5!', add:5})"
        @click.ctrl.exact="$store.commit({type:'count', message:'add 10!', add:10})">
          <a @click.stop="$store.commit('reset')">
            cicked: {{$store.state.counter}}
          </a>
      </div>
      <router-link to="/other">Go to Other</router-link>
    </section>
  </div>
</template>3

<script>
export default {
  data: function(){
    return {
      titile: 'Hello',
      message: 'this is message.',
      // now: 'wait...'
    };
  },
  methods: {
    doAction: function(){
      this.$store.state.counter++;
    }
  }
}
</script>

<style>

a {
  font-size: 16pt;
}

.link {
  background-color: #def;
  padding: 10px;
}


.container {
  padding: 5px 10px;
}

h1 {
  font-size: 5px;
  color: #345980;
}

p {
  padding-top:5px;
  font-size: 20pt;
}

pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
}

hr {
  margin: 10px 0px;
}
</style>
