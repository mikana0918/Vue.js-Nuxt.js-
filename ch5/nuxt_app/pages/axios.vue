<template>
    <section class="container">
        <h1>{{title}}</h1>
        <p>{{message}}</p>
        <table>
            <tr>
                <th>Email</th>
                <td><input v-model="email"></td>
            </tr>
            <tr>
                <th>Name</th>
                <td><input v-model="username"></td>
            </tr>
            <tr>
                <th>Age</th>
                <td><input type="number" v-model="age"></td>
            </tr>
            <tr>
                <th>Tel</th>
                <td><input v-model="tel"></td>
            </tr>
            <tr><th></th><td>
                <button @click="addData">Click</button>
            </td></tr>
        </table>
        <hr>
        <ul v-for="(data, key) in json_data" v-bind:key="data.id">
            <li><strong>{{key}}</strong><br>{{data}}</li>
        </ul>
    </section>
</template>

<script>
const axios = require('axios');

let url = "https://my-new-nuxt-app.firebaseio.com/person";

export default {
    data: function() {
        return {
            title:'Axios',
            message: 'Axios sample.',
            json_data: {},
            username: '',
            tel: '',
            age:0,
            email: ''
        };
    },
    methods: {
        //inputから受け取ったデータをFirebaseへ反映させる
        addData: function() {
            let add_url = url + '/' + this.email + '.json';
            let data = {
                'name' : this.username,
                'age' : this.age,
                'tel' : this.tel
            };
            axios.put(add_url, data).then((re) => {
                this.email = '';
                this.username = '';
                this.age = 0;
                this.tel = '';
                this.getData();
            });
        },
        getData: function() {
            axios.get(url + '.json').then((res) => {
                this.message = 'get all data.';
                this.json_data = res.data;
            }).catch((error) => {
                this.message = 'ERROR!';
                this.json_data = {};
            });
        },
        created: function() {
            this.getData();
        }
    },
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