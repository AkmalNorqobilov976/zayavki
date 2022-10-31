<template>
    <div class="position-relative" @keydown.esc="escDown">
        <v-btn small @click="menuDrawer=!menuDrawer" class="text-none">
            {{label}}<v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
        <div v-if="menuDrawer" class="menu-select2">
            <v-autocomplete dense outlined v-model="selected" :items="options">
            </v-autocomplete>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        label: {
            Type: String,
            default: 'select2'
        },
        options: ['foo','bar', 'zoo'],

    },
    data: () => ({
        menuDrawer: false,
        selected: ""
    }),
    created() {
        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 27) { this.menuDrawer = false; }
        })
    },
    methods: {
        // escDown() {
        //     console.log('esc down');
        // },
        updateModel() {
            this.$emit('selectedValue', this.selected)
        }
    }
}
</script>

<style lang="scss" scoped>
.position-relative {
    position: relative;
    z-index: 0;
}

.menu-select2 {
    position: absolute;
    z-index: 9999;
    top: 30px;
    width: 300px;

}
</style>