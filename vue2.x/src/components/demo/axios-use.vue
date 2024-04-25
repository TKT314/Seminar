<template>
    <div class="axios-demo">
        <div class="page__hd">
            <h1 class="page__title">Một thử nghiệm vui</h1>
            <p class="page__desc">Chúng tôi sử dụng <a href="http://ziptasticapi.com/">ziptasticapi </a>để trả về Quốc gia, Bang, Thành phố của mã zip bạn cung cấp.</p>
        </div>
        <div class="page__bd">
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input 
                        type="text" 
                        class="weui-input" 
                        placeholder="Vui lòng nhập một số có năm chữ số"
                        v-model="zipCode">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">{{zipCity}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.page__desc>a{
    color: #1AAD19;
}
.page__desc>a:hover{
    text-decoration: underline;
}
</style>
<script>
import axios from 'axios';
import _ from 'lodash';

export default{
    data(){
        return {
            zipCode:'',
            zipCity:'please input 5 number to search!'
        }
    },
    watch:{
        zipCode(){
            this.zipCity = '';
            if(this.zipCode.length == 5){
                this.searchFun();
            }else{
                this.zipCity = `please input 5 number to search!`;
            }
        }
    },
    methods: {
        searchFun:_.debounce(function(){
            let app = this;
            app.zipCity = 'search...';
            axios.get(`http://ziptasticapi.com/${this.zipCode}`)
                .then((response)=>{
                    app.zipCity = `${response.data.country},${response.data.state},${response.data.city}`;
                })
                .catch((error)=>{
                    app.zipCity = 'error code';
                })

        },500)
    }
}
</script>