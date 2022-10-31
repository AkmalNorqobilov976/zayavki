<template>
    <div>
        <!-- <v-navigation-drawer app right>
            <CashReceipt />
        </v-navigation-drawer> -->
        <v-row>
            <v-col md="10" cols="12">
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
                <v-form>
                    <p>Buyurtma holadi </p>
                    <BtnGroups :length="['Yangi', 'Dostavkaga tayyor', 'Qayta qo\'ng\'iroq', 'Arxiv', 'Spam']" />
                </v-form>


                <v-tabs mobile-breakpoint v-model="tab" align-with-title class="mt-5">
                    <v-tabs-slider color="yellow"></v-tabs-slider>

                    <v-tab>
                        Asosiy
                    </v-tab>
                    <v-tab>
                        Savatcha
                    </v-tab>
                    <v-tab>
                        Mijoz buyurtmalari
                    </v-tab>
                    <v-tab>
                        Detalizatsiya
                    </v-tab>
                    <v-tab>
                        O'zgarishlar tarixi
                    </v-tab>


                </v-tabs>
                <div class="mt-5">
                    <div v-if="tab===0">
                        <v-card flat class="">
                            <div class="indigo lighten-4 pa-5 ">
                                <span class="text-h6">Mijoz</span> Rahmatjon Naimjonov, <span
                                    class="blue--text">+99893342343</span>
                                <p>
                                    Buyurtmalar soni: <span class="red--text font-weight-bold">1ta</span>
                                </p>
                            </div>
                            <v-row>
                                <v-col md="6" sm="12" xs="12" cols="12">

                                </v-col>
                                <v-col md="6" sm="12" xs="12" cols="12">


                                </v-col>
                                <v-col md="12">
                                    <v-autocomplete outlined v-model="values" :items="autoCompleteItems"
                                        label="Shahar/tumanni tanlang"></v-autocomplete>
                                </v-col>
                                <v-col md="6" sm="12" xs="12" cols="12">
                                    <v-text-field label="Izoh (qoshimcha malumot)" outlined></v-text-field>
                                    <v-text-field label="Aniq manzil (kocha / uy)" outlined></v-text-field>

                                </v-col>
                                <v-col md="6" sm="12" xs="12" cols="12">
                                    <v-text-field label="Qoshimcha telefon raqami" outlined
                                        placeholder="+998 90 111 11 11">
                                    </v-text-field>
                                    <v-text-field type="date" outlined label="Qabul qilish vaqti"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card>
                    </div>
                    <div v-if="tab===1">
                        <!-- <v-row class="">
                            <v-col md="6" cols="12">
                                <p>Soni</p>
                                <BtnGroups :length="10" />
                                <p class="mt-10">Bonus</p>
                                <BtnGroups :length="5" />
                            </v-col> -->
                        <!-- <v-col md="6" cols="12">
                                <v-text-field class="mt-10" type="datetime" @click.stop="dialog = true"
                                    label="Mahsulotni tanlang" placeholder="Click the  button to find a record"
                                    outlined>
                                </v-text-field>
                            </v-col> -->
                        <!-- </v-row>  -->
                        <p class="mt-10">Savatchaga qoshilgan qoshimcha mahsulotlar</p>
                        <hr>
                        <v-card>
                            <v-btn @click="dialogCreateOne= !dialogCreateOne">Korzinkaga ma'lumot qo'shish</v-btn>
                            <v-row justify="center">
                                <v-col md="8" cols="12">
                                    <v-dialog v-model="dialogCreateOne" max-width="1200">
                                        <v-card class="pa-5">
                                            <v-form>
                                                <v-row class="mb-5">
                                                    <v-col md="6" cols="12">
                                                        <v-autocomplete label="Mahsulotni tanlang" outlined>
                                                        </v-autocomplete>
                                                    </v-col>
                                                    <v-col md="6" cols="12">
                                                        <v-autocomplete label="Mahsulot pozitsiyasi" outlined>
                                                        </v-autocomplete>
                                                    </v-col>
                                                    <v-col md="6" cols="12">
                                                        <v-text-field outlined label="Qo'shimcha ma'lumot">
                                                        </v-text-field>
                                                    </v-col>
                                                    <v-col md="6" cols="12">
                                                        <v-text-field outlined label="Umumiy summa"></v-text-field>
                                                    </v-col>
                                                    <v-col md="6" cols="12">
                                                        <p>Soni</p>
                                                        <BtnGroups :length="10" />
                                                    </v-col>
                                                    <v-col md="6" cols="12">
                                                        <p>Bonus soni</p>
                                                        <BtnGroups :length="5" />
                                                    </v-col>
                                                </v-row>
                                                <div>
                                                    <div class="d-flex">
                                                        <v-btn color="green white--text" class="mr-2">Saqlash</v-btn>
                                                        <v-btn color="grey" @click="dialogCreateOne=!dialogCreateOne">
                                                            Yopish</v-btn>
                                                    </div>

                                                </div>
                                            </v-form>
                                        </v-card>
                                    </v-dialog>
                                </v-col>
                            </v-row>
                            <v-data-table hide-default-footer :headers="headers"
                                :items="desserts"  :page.sync="page"
                                :items-per-page="itemsPerPage" @page-count="pageCount = $event" item-key="name"
                                 class="elevation-1">
                            </v-data-table>

                            <div class="d-flex justify-space-between">
                                <v-spacer></v-spacer>
                                <v-pagination v-model="page" :length="pageCount"></v-pagination>
                            </div>
                        </v-card>
                        <v-dialog v-model="dialog" transition="dialog-top-transition">

                            <template v-slot:default="dialog">
                                <v-card>
                                    <v-card-title>
                                        Nutrition
                                        <v-spacer></v-spacer>
                                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search"
                                            single-line hide-details>
                                        </v-text-field>
                                    </v-card-title>
                                    <!-- <v-data-table :headers="headers" hide-default-footer v-model="selected" show-select :items="desserts"
                                        :search="search" :page.sync="page" :items-per-page="itemsPerPage"
                                        @page-count="pageCount = $event">
                                    </v-data-table> -->
                                    <v-data-table v-model="selected" :search="search" hide-default-footer
                                        :headers="headers" :items="desserts" :single-select="singleSelect"
                                        :page.sync="page" :items-per-page="itemsPerPage"
                                        @page-count="pageCount = $event" item-key="name" show-select
                                        class="elevation-1">
                                    </v-data-table>

                                    <v-card-actions class="justify-space-between">
                                        <v-btn text @click="dialog.value = false">Yopish</v-btn>
                                        <v-pagination v-model="page" :length="pageCount"></v-pagination>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </div>
                    <div v-if="tab===2">
                        <CustomSlider>
                            <table class="custom-table ">
                                <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>
                                            Mijoz
                                        </th>
                                        <th>
                                            Manzil
                                        </th>
                                        <th>
                                            Mahsulot
                                        </th>
                                        <th>
                                            Operator/Izoh
                                        </th>
                                        <th>
                                            Narxi
                                        </th>
                                        <th>
                                            Vaqt
                                        </th>
                                        <th>
                                            Imzo
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            604320 -
                                            accepted
                                        </td>
                                        <td>
                                            Ботир
                                            +998990593138
                                        </td>
                                        <td>
                                            Jizzax,
                                        </td>
                                        <td>
                                            Avex Electric Isitgich - 1 ta
                                        </td>
                                        <td>
                                            1 -> Shoxabbos
                                        </td>
                                        <td>

                                            970000 so'm
                                            Dostavka: 30000
                                        </td>
                                        <td>
                                            07:21 25.12.21
                                        </td>
                                        <td>.....</td>

                                    </tr>
                                </tbody>
                            </table>
                        </CustomSlider>
                    </div>
                    <div v-if="tab===3">
                        <v-simple-table>
                            <template v-slot:default>
                                <tbody>
                                    <tr>
                                        <td>Operator komissiyasi</td>
                                        <td>6000</td>
                                    </tr>
                                    <tr>
                                        <td>Kuryer komissiyasi</td>
                                        <td> 0</td>
                                    </tr>
                                    <tr>
                                        <td>Mahsulot</td>
                                        <td> Avex Electric Isitgich</td>
                                    </tr>
                                    <tr>
                                        <td>Oxirgi operatsiya egasi</td>
                                        <td> 1</td>
                                    </tr>
                                    <tr>
                                        <td>Alishtirishga berilgan</td>
                                        <td> Yoq</td>
                                    </tr>
                                    <tr>
                                        <td>Alishtirishga berilgan</td>
                                        <td> Yoq</td>
                                    </tr>
                                    <tr>
                                        <td>OqimID:</td>
                                        <td> 67150</td>
                                    </tr>
                                    <tr>
                                        <td>Status:</td>
                                        <td> accepted</td>
                                    </tr>
                                    <tr>
                                        <td>Atkaz sababi:</td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td>Operator:</td>
                                        <td> Shoxabbos - +998 90 351 9004</td>
                                    </tr>
                                </tbody>
                            </template>

                        </v-simple-table>
                    </div>
                    <div v-if="tab===4">
                        <v-simple-table class="">
                            <template v-slot:default>
                                <tbody>
                                    <tr>
                                        <th>Admin</th>
                                        <th>Polya</th>
                                        <th>Eski</th>
                                        <th>Yangi</th>
                                        <th>Sana</th>
                                    </tr>
                                    <tr v-for="i in 10" :key="i">
                                        <td>0</td>
                                        <td>express_package_id</td>
                                        <td class="red"> 0</td>
                                        <td class="green">5178</td>
                                        <td>2022-07-21 15:39:29</td>
                                    </tr>

                                </tbody>
                            </template>

                        </v-simple-table>
                    </div>
                </div>
            </v-col>
            <v-col md="2" cols="12" class="px-1">
                <div class="pa-1">
                    <div class="dash-dash-bordered dot-border font-weight-bold">
                        <p class="pa-1 text-h6">
                            #603785 - <v-btn color="blue lighten-3 white--text">Yangi</v-btn>
                        </p>
                        <div class="d-flex justify-space-between red white--text pa-2">
                            <div>lazerli proyektor1 - 2 ta </div>
                            <div>374000</div>
                        </div>
                        <div class="d-flex justify-space-between blue--text pa-2">
                            <div>Qomatni to'g'rilovchi - 2 ta </div>
                            <div class="red--text"> 354000</div>
                        </div>
                    </div>
                    <div class="mt-5">
                        <p class="text-h5 font-weight-bold"><span class="red--text mr-2">698,000</span>so'm</p>
                        <p class="blue--text">check yuborish</p>
                        <p class="font-weight-bold">
                            2 chi mahsulotdan boshlab har bir mahsulot uchun 30,000 so'm skidka
                        </p>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import Create from './create.vue';
import CashReceipt from '@/components/cashReceipt.vue'
import BtnGroups from '@/components/btnGroups.vue';
import CustomSlider from '@/components/customSlider.vue'
export default {
    data: () => ({
        selected: [],
        values: "",
        autoCompleteItems: [],
        dialogCreateOne: false,
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dialog: false,
        tab: null,
        items: [
            "web",
            "shopping",
            "videos",
            "images",
            "news",
        ],
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        breadCrumbItems: [
            {
                text: "Request",
                disabled: false,
                href: "/",
            },
            {
                text: "Update Request",
                disabled: false,
                href: "/update",
            }
        ],
        // datas
        search: "",
        page: 1,
        pageCount: 0,
        itemsPerPage: 5,
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
    components: { Create, CashReceipt, BtnGroups, CustomSlider }
}
</script>

<style lang="scss" scoped>
.custom-table,
.custom-table td,
.custom-table th {
    border: 1px solid rgb(169, 167, 167);
    padding: 20px;
}

.custom-table {
    width: 100%;
    border-collapse: collapse;

    tbody tr {
        background: #3498db !important;
        color: white;
        font-weight: 600;
    }
}

.change-history {
    border-collapse: collapse;

    tr {

        td,
        th {

            border: 1px solid black;
        }
    }
}
</style>