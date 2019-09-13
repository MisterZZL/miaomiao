<template>
    <div id="main">
        <Header title="我的喵喵"/>
        <div id="content">
           <router-view></router-view>
        </div>    
        <Tabbar/>
    </div>
</template>

<script>
import Header from "../../components/Header";
import Tabbar from "../../components/TabBar";


export default {
    name: "Mine",
    components: {
        Header,
        Tabbar,
        
    }             
}
</script>

<style scoped>
    
</style>