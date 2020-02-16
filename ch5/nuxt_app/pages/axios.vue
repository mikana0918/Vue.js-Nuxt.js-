<template>
    <section class="container">
        <h1>{{title}}</h1>
        <p>{{message}}</p>
        <pre>{{html_data}}</pre>
    </section>
</template>

<script>
const axios = require('axios');

let url = "/README.md";

export default {
    data: function(){
        return {
            title:'Axios',
            message: 'Axios sample.'
        };
    },
    //asyncDataに非同期通信によるDataをストックする
    //html_dataはそのまま、dataへマージされる
    asyncData: async function () {
        let result = await axios.get(url);
        return {html_data: result.data};
    }
}
</script>

<style>
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