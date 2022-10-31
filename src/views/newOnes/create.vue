<template>
    <div>
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

        <v-tabs v-model="tab" class="mb-5" slider-color="blue">
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab>Shaxsiy ma'lumotlar </v-tab>
            <v-tab>Mahsulotlarni tanlash </v-tab>
        </v-tabs>
        <v-card flat v-if="tab===0">
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field label="Mijoz telefon raqami" outlined placeholder="+998 90 111 11 11"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field label="Mijoz ismi" outlined></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                    <v-autocomplete outlined v-model="values" :items="autoCompleteItems" label="Shahar/tumanni tanlang">
                    </v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field label="Aniq manzil (kocha / uy)" outlined></v-text-field>

                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field label="Qoshimcha telefon raqami" outlined placeholder="+998 90 111 11 11">
                    </v-text-field>

                </v-col>

                <v-col cols="12">

                    <v-text-field type="date" outlined></v-text-field>

                </v-col>

            </v-row>
        </v-card>
        <v-card flat v-if="tab===1">
            <v-row>

                <v-col cols="12" md="6">
                    <p>Soni</p>
                    <div>
                        <BtnGroups :length="10" />
                    </div>
                    <p class="mt-10">Bonus</p>
                    <div>
                        <BtnGroups :length="5" />
                    </div>

                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field class="mt-10" @click.stop="dialog = true" label="Mahsulotni tanlang"
                        placeholder="Click the  button to find a record" outlined></v-text-field>

                </v-col>

            </v-row>
        </v-card>
        <v-btn v-if="close" color="red">Yopish</v-btn>
        <div class="d-flex mt-5"> <v-btn color="green white--text" class="mr-2">Saqlash</v-btn> <v-btn color="grey">Saqlash va Yopish</v-btn></div>

        <v-dialog v-model="dialog" transition="dialog-top-transition">

            <template v-slot:default="dialog">
                <v-card>
                    <v-card-title>
                        Nutrition
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                            hide-details>
                        </v-text-field>
                    </v-card-title>

                    <v-data-table v-model="selected" :search="search" hide-default-footer :headers="headers"
                        :items="desserts" :single-select="singleSelect" :page.sync="page" :items-per-page="itemsPerPage"
                        @page-count="pageCount = $event" item-key="name" show-select class="elevation-1">
                    </v-data-table>

                    <v-card-actions class="justify-space-between">
                        <v-btn text @click="dialog.value = false">Yopish</v-btn>
                        <v-pagination v-model="page" :length="pageCount"></v-pagination>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>

    </div>
</template>
<script>
import BtnGroups from '@/components/btnGroups.vue';
export default {
    props: {
        close: {
            type: Boolean,
            default: false
        },
    },
    data: () => ({
        selected: [],
        tab: null,
        toggle10: null,
        toggle5: null,
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        page: 1,
        pageCount: 0,
        itemsPerPage: 5,
        dialog: false,
        autoCompleteItems: ["foo", "bar", "fizz", "buzz"],
        values: null,
        breadCrumbItems: [
            {
                text: "Request",
                disabled: false,
                href: "/",
            },
            {
                text: "Create Request",
                disabled: false,
                href: "/create",
            }
        ],
        newObject: {
            phone: "",
            name: "",
            cityName: "",
            destination: "",
            addinionalPhone: "",
            additionalInfo: "",
            acceptionTime: "",
            mount: "",
            checkedProducts: [],
            bonus: ""
        },
        search: "",
        headers: [
            {
                text: "Id",
                align: "start",
                sortable: true,
                value: "id",
            },
            { text: "Nomi", value: "name" },
            { text: "narxi", value: "price" },
            { text: "Mahsulot soni", value: "quantity" },
            { text: "Operator puli", value: "salary_operator" },
            { text: "Yaratilgan sana", value: "created_at" },
        ],
        desserts: [
            {
                id: 1233,
                name: "Test mahsulot",
                price: 1000,
                quantity: 400,
                salary_operator: 100000,
                created_at: "пт, 24 дек. 2021 г., 18:09",
            },

        ],
    }),
    components: { BtnGroups }
}
</script>

<style lang="scss" scoped>
.selected-button {
    background: green;
}
</style>