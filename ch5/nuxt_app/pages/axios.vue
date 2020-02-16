<template>
    <section class="container">
        <h1>{{title}}</h1>
        <p>{{message}}</p>
        <ul v-for="(data, key) in json_data">
            <li>{{data.name}} ({{data.age}}) [{{key}}]</li>
        </ul>
    </section>
</template>

<script>
const axios = require('axios');

let url = "https://my-new-nuxt-app.firebaseio.com/person.json";

export default {
    data: function(){
        return {
            title:'Axios',
            message: 'Axios sample.',
        };
    },
    asyncData: async function() {
        let result = await axios.get(url);
        return {json_data: result.data};
    }
}
</script>

<style>
ul {
    margin: 0px 10px;
    background-color: aliceblue;
}
li {
    padding: 10px;
    font-size: 16px;
}
input, button {
    font-size:14px;
}

tr th {
    width: 150px;
    background-color: darkblue;
    color:white;
    font-size: 16pt;
}
tr td {
    padding: 5px 10px;
    background-color: #eef;
    font-size: 14px;
}
.container {
    padding: 5px 10px;
}

h1 {
    font-size: 60pt;
}

p {
    padding-top: 5px;
    font-size: 20pt;
}

div {
    font-size: 14pt;
}

pre {
    padding: 10px;
    font-size: 18pt;
    background-color: #efefef;
    white-space: pre-wrap;
}

hr {
    margin: 10px 0px;
}
</style>