<template>
    <v-app>
        <div class="d-flex justify-end pa-2 hidden-md-and-up">
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="navigationDrawer=!navigationDrawer"></v-app-bar-nav-icon>
        </div>
        <v-navigation-drawer v-model="navigationDrawer" app absolute>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <div class="d-flex align-center  text-h5 font-weight-bold blue  white--text">
                        <div v-bind="attrs" v-on="on" class="mdi mdi-account ma-4"></div>
                        <div v-bind="attrs" v-on="on" class="ml-2 text-h6 flex-grow-1 flex-shrink-1">
                            Profile
                            <p class="subtitle-2 font-weight-medium">balans: 3,000,000 so'm</p>
                        </div>
                        <span class="mdi mdi-chevron-left pa-5 hidden-md-and-up"
                            @click.capture="navigationDrawer=!navigationDrawer"></span>
                    </div>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" :to="item?.to">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-list shaped>

                <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item v-for="(item, i) in sidebarItems" :key="i" :to="item.route">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <v-container fluid>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        navigationDrawer: true,
        selectedItem: 0,
        items: [
            { title: 'Shoxabbos +998 11 111 11 11' },
            { title: 'Profilim', to: "/profile_account" },
            { title: 'Chiqish' },
        ],
        sidebarItems: [
            { text: 'Yangi', icon: 'mdi-format-list-numbered', route: '/' /*'/new'*/ },
            { text: 'Dostavkaga tayyor', icon: 'mdi-check', route: '/accepted' },
            { text: 'Yo\'lda', icon: 'mdi-car', route: '/sent' },
            { text: 'Yetkazildi', icon: 'mdi-truck-snowflake', route: '/delivered' },
            { text: 'Qayta qo\'ng\'iroq', icon: 'mdi-clock', route: '/pending' },
            { text: 'Qaytib keldi', icon: 'mdi-close', route: '/cancelled' },
            { text: 'Arxiv', icon: 'mdi-folder-zip', route: '/archived' },
            { text: 'Spam', icon: 'mdi-cancel', route: '/spam' },
            { text: 'Hold', icon: 'mdi-anchor', route: '/hold' },
            { text: 'Hammasi', icon: 'mdi-playlist-check', route: '/all' },
        ],
    })
}
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 960px) {
    .hidden-md-and-up {
        display: none !important;
    }

    // .show-md-and-top{
    //     display: unset !important;
    // }
}
</style>