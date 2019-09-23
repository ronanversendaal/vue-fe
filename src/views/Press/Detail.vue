<template>
    <div class="press-detail" style="min-height: 200px">
        <div class="header">
            <h1>{{item.title}}</h1>

            <div class="content">
                {{item.content}}
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '@/services/axios';

    export default {
        name: 'press-detail',
        created() {
            this.getPressDetail();
        },
        data: () => {
            return {
                item : {}
            }
        },
        methods: {
            getPressDetail() {
                console.log(this.$route)
                axios.get('/api/articles/' + this.$route.params.id)
                    .then((res) => {
                        this.item = res.data;
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
