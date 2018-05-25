<template>
    <div>
        <ul>
            <li v-for="(itmes,index) in tabTitle"
            v-on:click="changeIndex(index)"
            v-bind:class="{active:index===curIndex}">{{itmes}}</li>
        </ul>
        <div class="wrap">
            <transition-group name="tab" tag="div" mode="out-in">
                <div class="cont"
                v-for="(conItems,conIndex) in contTitle"
                v-bind:key="conIndex"
                v-show="curIndex===conIndex">{{conItems}}</div>
            </transition-group>
        </div>
    </div>
</template>

<script>
let tabTitle=["tab1","tab2","tab3"];
let contTitle=["content1","content2","content3"];
export default{
    data:function(){
        return{
            tabTitle:tabTitle,
            contTitle:contTitle,
            curIndex:0
        }

  },
  methods:{
    changeIndex:function(index){
      this.curIndex=index;
    }
  }
}
</script>

<style>
    ul,li{
        list-style:none;
    }

    ul>li{
        width:200px;
        height:30px;
        border:1px solid black;
        text-align:center;
        background:#eee;
        display:inline-block;
        border-left:none;
        border-bottom:none;
    }
    #app{
        overflow:hidden;
    }


    .active{
        background:#bbb;
    }

    .cont{
        width:600px;
        height:100px;
        background-color:#eee;
        text-align:center;
        border:1px solid black;
        position:absolute;
    }

    .wrap{
        overflow:hidden;
        width:600px;
        height:100px;
        position:relative;
        border:1px solid black;

    }

    .tab-enter-active{
        transition:all 0.5s ease;
        transform:translateX(0%);
    }

    .tab-leave-active{
        transition:all 0.5s ease;
        transform:translateX(-100%);
    }

    .tab-enter{
        transform:translateX(100%);
    }

    .tab-leave{
        transform:translateX(0%);
    }  
</style>