<template>
    <div class="container">
        <section class="container">
            <h1>{{title}}</h1>
            <p>{{message}}</p>
            <hr>
            <router-link to="/">Go to Top</router-link>
        </section>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            titile: 'Hello',
            message: 'これは、別のページです'};
    },
    created: function(){
        setInterval(()=>{
        var d = new Date();
        this.now = d.getHours()
            + ':' + d.getMinutes()
            * ':' + d.getSeconds();
        }, 1000);
    }
}
</script>

<style>
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
