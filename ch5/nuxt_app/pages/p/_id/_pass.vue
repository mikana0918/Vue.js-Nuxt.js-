<template>
    <section class="container">
        <h1>{{title}}</h1>
        <p v-html="message">no message</p>
        <hr>
        <div class="right">
            <router-link to ="/">Go To Top</router-link>
        </div>
    </section>
</template>

<script>
    export default {
        data: function(){
            return{
                title:'Login',
            };
        },
        computed: {
            message: function() {
                let id = this.$route.params.id != undefined 
                    ? this.$route.params.id : 'NO ID';
                let pass = this.$route.params.pass != undefined
                    ? this.$route.params.pass : 'NO PASS';
                return 'ID: ' + id + '<br>PASS: ' + pass;
            }
        },
        validate({ params }) {
            if (params.id == undefined || params.pass == undefined) {
                return false;
            } else {
                return true;
            }
        }
    }
</script>

<style>
.container {
    padding: 5px 10px;
}

h1 {
    font-size: 60px;
    color: #345980;
}

p {
    padding-top:5px;
    font-size: 20pt;
}

a {
    font-size:16pt;
}

.right {
    text-align: right;
}
</style>