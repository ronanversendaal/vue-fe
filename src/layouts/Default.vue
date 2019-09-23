<template>
    <div id="layout layout-default">

        <Header/>
        <MainNavigation />

        <div id="wrap" class="clearfix">
            <slot />
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Header from '@/components/layout/navigation/Header';
    import MainNavigation from '@/components/layout/navigation/MainNavigation';
    import Footer from '@/components/layout/navigation/Footer';

    export default {
        name: "Default",
        components: {
            Header, Footer, MainNavigation
        }
    }
</script>

<style scoped>
@import "../styles/global.scss";
</style>