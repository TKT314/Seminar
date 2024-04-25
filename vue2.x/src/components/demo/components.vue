<template>
    <div class="props-demo">
        <div class="page__hd">
            <h1 class="page__title">Components</h1>
            <p class="page__desc">Một số tính chất đáng chú ý</p>
        </div>
        
        <div class="weui-cells__title">Dynamic props</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input 
                    class="weui-input" 
                    type="text" 
                    placeholder="Input"
                    v-model="parentMsg">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">Normal output:<child :input-message="parentMsg"></child></div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">Output after calculation:：<child-secound :input-message="parentMsg"></child-secound></div>
            </div>
        </div>
        
        <div class="weui-cells__title">Custom events</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div>The result of the parent component listening event: total clicks:{{total}}clicks</div>
            </div>
        </div>
        <button-component class="weui-btn weui-btn_primary"  @sonFun="addNum"></button-component>
        <button-component class="weui-btn weui-btn_primary" @sonFun="addNum"></button-component>
        <!--slot分发-->
        <div class="weui-cells__title">slot distribution</div>
        <div class="slot-parent">
             <slot-component>
                 <h3 slot="header">"Haha"</h3>
                 <p>hoho</p>
                 <h3 slot="footer">"Hihi"</h3>
             </slot-component>
        </div>
    </div>
</template>
<script>
import buttonComponent from './demoChild/button';
import slotComponent from './demoChild/slot';

export default{
    data(){
        return{
            parentMsg:'hello!',
            total:0,
            num:2
        }
    },
    components:{
        'child':{
            props:['inputMessage'],
            template:'<span>{{inputMessage}}</span>'
        },
        'child-secound':{
            props:['inputMessage'],
            template:'<span>{{upperCase}}</span>',
            computed:{
                upperCase(){
                    return this.inputMessage.toUpperCase();
                }
            }    
        },
        'button-component':buttonComponent,
        'slot-component':slotComponent
    },
    methods:{
        addNum(){
            (this.total)++;
        }
    }
}
</script>
<style scoped>
.props-demo h2{
    padding: 20px;
}
.slot-parent{
    padding: 0 15px;
}
</style>