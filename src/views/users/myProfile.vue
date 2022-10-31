<template>
    <div>
        <!-- <v-navigation-drawer right app>
            <v-file-input class="mt-10" label="Avatar" outlined></v-file-input>
        </v-navigation-drawer> -->
        <v-breadcrumbs :items="breadCrumbItems">
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item :to="item.href">
                    {{ item.text }}
                </v-breadcrumbs-item>
            </template>
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <v-row>
            <v-col cols="12" md="10">
                <v-tabs v-model="tab">
                    <v-tab>
                        Akkount
                    </v-tab>
                    <v-tab>
                        Guruhlar
                    </v-tab>
                    <v-tab>
                        Balance+Dostup
                    </v-tab>
                    <v-tab>
                        Tranzactions
                    </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab" class="mt-5">
                    <v-tab-item>
                        <v-card>
                            <v-row>
                                <v-col md="6" cols="12">
                                    <v-text-field label="Login" outlined></v-text-field>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-text-field label="Pochta" outlined></v-text-field>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-text-field label="Ism" outlined></v-text-field>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-text-field label="Familiya" outlined></v-text-field>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-text-field label="Parol" type="password" outlined></v-text-field>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-text-field label="Parolni tasdiqlash" outlined></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <p class="text-h5">Guruhlar</p>
                        <p class="subtitle-2">
                            Укажите, к какой группе должен принадлежать этот аккаунт.
                        </p>
                        <v-card class="pa-5">
                            <v-checkbox label="Owners">
                            </v-checkbox>
                            <p class="subtitle-1">Default group for website owners.</p>

                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-form>
                            <v-row>
                                <v-col md="6" cols="12">
                                    <v-autocomplete outlined label="Sklad"></v-autocomplete>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-switch color="indigo darken-1" label="Men Aloqadaman"></v-switch>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-text-field outlined label="Asosiy balans"></v-text-field>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-text-field outlined label="Deposit balans"></v-text-field>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-text-field outlined label="Action fee"></v-text-field>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-text-field outlined label="ID"></v-text-field>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-text-field outlined label=""></v-text-field>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-text-field outlined label="Zayavka limit"></v-text-field>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-text-field outlined label="Operator jinsi"></v-text-field>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-text-field outlined label="Hudud"></v-text-field>
                                </v-col>
                                <v-col md="6" cols="12">
                                    <v-switch color="indigo darken-1" label="Zakaz ola oladi"></v-switch>
                                </v-col>
                                <v-col md="6" cols="12"></v-col>
                                <v-col md="1">
                                    <v-btn color="indigo darken-1 white--text">Saqlash</v-btn>
                                </v-col>
                                <v-col md="1">

                                    <v-btn color="grey white--text">Saqlash va Yopish</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-tab-item>
                    <v-tab-item>
                        <p class="subtitle-1">Transactions</p>
                        <v-data-table @click:row="$router.push('/update')" hide-default-footer :headers="headers"
                            :items="desserts" :page.sync="page" :items-per-page="itemsPerPage"
                            @page-count="pageCount = $event" item-key="name" class="elevation-1">
                            <template v-slot:item="{item}">
                                <div v-show="false">{{item}}</div>
                                <tr>
                                    <td>444444</td>
                                    <td>minus</td>
                                    <td>4000</td>
                                    <td>ListID: 5105, Kuryer: Admin, +998111111111 -> Oldim</td>
                                    <td>вт, 4 окт. 2022 г., 22:06</td>
                                </tr>
                            </template>
                        </v-data-table>
                        <div class=" d-flex justify-end pt-2">
                            <!-- <v-text-field :value="itemsPerPage" label="Items per page" type="number" min="-1" max="15"
                @input="itemsPerPage = parseInt($event, 10)"></v-text-field> -->
                            <v-pagination v-model="page" :length="pageCount"></v-pagination>
                        </div>
                    </v-tab-item>
                </v-tabs-items>
            </v-col>
            <v-col cols="12" md="2">
                <v-file-input class="mt-10" label="Avatar" outlined></v-file-input>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    data: () => ({
        tab: null,
        breadCrumbItems: [
            {
                text: 'Administrator',
                disabled: false,
                href: '/',
            },
            {
                text: 'Create Request',
                disabled: false,
                href: '/profile_account',
            }
        ],
        page: 1,
        pageCount: 0,
        itemsPerPage: 5,
        headers: [
            {
                text: "ID",
                align: "start",
                sortable: false,
                value: "name",
            },
            { text: "turi", value: "calories", sortable: true },
            { text: "amount", value: "fat", sortable: true },
            { text: "comment", value: "carbs", sortable: true },
            { text: "created_at", value: "protein", sortable: true },
        ],
        desserts: [
            {
                name: "Frozen Yogurt",
                calories: 159,
                fat: 6,
                carbs: 24,
                protein: 4,
                iron: "1%",
            },
            {
                name: "Ice cream sandwich",
                calories: 237,
                fat: 9,
                carbs: 37,
                protein: 4.3,
                iron: "1%",
            },
            {
                name: "Eclair",
                calories: 262,
                fat: 16,
                carbs: 23,
                protein: 6,
                iron: "7%",
            },
            {
                name: "Cupcake",
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: "8%",
            },
            {
                name: "Gingerbread",
                calories: 356,
                fat: 16,
                carbs: 49,
                protein: 3.9,
                iron: "16%",
            },
            {
                name: "Jelly bean",
                calories: 375,
                fat: 0,
                carbs: 94,
                protein: 0,
                iron: "0%",
            },
            {
                name: "Lollipop",
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: "2%",
            },
            {
                name: "Honeycomb",
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: "45%",
            },
            {
                name: "Donut",
                calories: 452,
                fat: 25,
                carbs: 51,
                protein: 4.9,
                iron: "22%",
            },
            {
                name: "KitKat",
                calories: 518,
                fat: 26,
                carbs: 65,
                protein: 7,
                iron: "6%",
            },
        ],
    })
}
</script>