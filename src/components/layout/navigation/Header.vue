<template>
    <header>
        <div class="toggle-mobile-nav js-toggle-mobile-nav">
            <span class="visuallyhidden">Show navigation</span>
        </div>
        <div class="center">
            <div id="logo">
                <a href="/"><img src="@/assets/img/keukenhof_logo_negative.png"></a>
            </div>
            <div id="search-box" class="js-collapse">
                <a href="https://keukenhof.nl/en/" class="js-toggle">template.search.submit</a>
                <form action="search" method="get">
                    <button type="submit">template.search.submit</button>
                    <input type="text" name="search" placeholder="search">
                </form>
            </div>
            <div id="language-chooser" class="js-collapse">
                <div class="active-choice">
                    <span class="language-en"><a href="/en/" class="js-toggle">nl</a></span>
                </div>
                <ul class="choices">
                    <li class="language-nl"><a href="https://keukenhof.nl/nl/pers/" class="nl">Dutch</a></li>
                    <li class="language-fr"><a href="https://keukenhof.nl/fr/presse/" class="fr">French</a></li>
                    <li class="language-de"><a href="https://keukenhof.nl/de/presse/" class="de">German</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>