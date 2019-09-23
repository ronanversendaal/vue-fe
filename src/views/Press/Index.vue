<template>
    <div class="press" style="min-height: 200px">
        <ul>
            <li v-for="(item, index) in this.press" :key="index">
                <div class="item">
                    <div class="item-header">
                        <h3>{{item.title}}</h3>
                        <div class="item-content">
                            {{item.content | truncate(150)}}
                        </div>
                        <router-link :to="{ name: 'press-detail', params: {id: item.id}}"> Read more</router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from '@/services/axios';

    export default {
        name: 'press',
        created() {
            this.getPress();
        },
        data: () => {
            return {
                press : []
            }
        },
        methods: {
            getPress() {
                axios.get('/api/articles')
                    .then((res) => {
                        this.press = res.data;
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
