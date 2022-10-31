<template>
    <CustomSlider>
        <div class="btn-group d-inline-flex ">
            <div v-for="i in length" :key="i" class="pa-3 px-5" :class="{'active-btn': i==selected}"
                @click="selectOne(i)">
                {{i}}
            </div>
        </div>
    </CustomSlider>
</template>

<script>

import CustomSlider from './customSlider.vue';
export default {
    props: {
        length: {
            type: undefined,
            default: 0
        }
    },
    components: {
    CustomSlider
},
    data: () => ({
        selected: null
    }),
    methods: {
        selectOne(i) {
            this.selected = i;
            this.
                $emit('selected', i);
        }
    }
}
</script>

<style lang="scss" scoped>
.btn-group {
    
    overflow: hidden;
    border: 1px solid black;
    border-radius: 30px;

    div {

        border-left: none;
        cursor: pointer;
        // border: 1px solid;

        &:first-child {
            // border-top-left-radius: 30px;
            // border-bottom-left-radius: 30px;
        }

        &:last-child {
            // border-top-right-radius: 30px;
            // border-bottom-right-radius: 30px;
        }

        &:active {
            background: rgba(8, 231, 37, .3);
        }
    }



    .active-btn {
        background: green;
        color: white;
        font-weight: bold;
        // border: 2px solid black !important;
        // border-left: 1px;
    }

}
</style>