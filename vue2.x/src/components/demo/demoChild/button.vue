<template>
    <a 
    href="javascript:;"
    @click="sonFun">clicked {{counter}} lần</a>
</template>
<script>
    export default{
        data(){
            return{
                counter:0
            }
        },
        methods:{
            sonFun(){
                this.$emit('sonFun');
                return (this.counter)++;
            }
        }
    }
</script>