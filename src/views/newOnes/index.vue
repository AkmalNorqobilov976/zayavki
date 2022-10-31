<template>
    <div>
        <v-card>
            <CustomSliderSearch>
                <v-row justify="space-between">
                    <v-col cols="12" sm="9" md="9">
                        <div class="d-flex">
                            <v-btn class="mr-5" to="/create" color="indigo white--text">
                                <v-icon left>mdi-plus</v-icon>Qo'shish
                            </v-btn>
                            <v-btn color="grey white--text">
                                <v-icon left>mdi-copyleft</v-icon>Raspechatka
                            </v-btn>
                            <v-btn color="grey white--text">
                                <v-icon left>mdi-home-flood</v-icon>Hold qilish
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="3" md="3">
                        <v-text-field type="search" placeholder="Qidirish" dense outlined append-icon="mdi-magnify" />
                    </v-col>
                </v-row>
            </CustomSliderSearch>
        </v-card>
        <v-card class="mb-10">
            <CustomSlider style="z-index:-1;">
                <div class="d-flex pb-10" dense>
                    <v-icon>mdi-filter</v-icon>
                    <div class="d-flex ml-10 align-center filter-items">
                        <BaseSelect2 label="Magazin" />
                        <BaseSelect2 label="Operator" />
                        <BaseSelect2 label="Viloyat" />
                        <BaseSelect2 label="Shundan tashqari" />
                        <v-checkbox label="Faqat Payme"></v-checkbox>
                        <v-checkbox label="Faqat kuni kelgani"></v-checkbox>
                    </div>
                </div>
            </CustomSlider>
            {{ $store.state }}
            <v-data-table v-model="selected" @click:row="$router.push('/update')" hide-default-footer :headers="headers"
                :items="desserts" :page.sync="page" :items-per-page="itemsPerPage" @page-count="pageCount = $event"
                item-key="name" show-select class="elevation-1">
                <template v-slot:item="{ item }">
                    <tr>
                        <td>
                            <v-checkbox v-model="selected" color="grey darken-2" :value="item"></v-checkbox>
                        </td>
                        <td>
                            <div class=" pt-2" @click="$router.push('/update')">
                                <img :src="require('@/assets/images/operator.jpg')" width="40" class="m-auto" />
                            </div>
                            <span class="font-weight-bold">{{ item.id }}</span>
                        </td>
                        <td>
                            <a> {{ item.product }}</a>
                            <p>34234324</p>
                        </td>
                        <td>
                            {{ item.customer }}
                        </td>
                        <td>
                            {{ item.additional }}
                        </td>
                        <td>
                            {{ item.date }}
                        </td>
                        <td>
                            {{ item.changed_date }}
                        </td>
                        <td>
                            {{ item.newable }}
                        </td>
                        <td>
                            <v-btn class="red white--text">Hold</v-btn>
                        </td>

                    </tr>
                </template>
            </v-data-table>

            <div class=" d-flex justify-end pt-2">
                <!-- <v-text-field :value="itemsPerPage" label="Items per page" type="number" min="-1" max="15"
                @input="itemsPerPage = parseInt($event, 10)"></v-text-field> -->
                <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </div>


        </v-card>
    </div>
</template>

<script>
import CustomSlider from "@/components/customSlider.vue"
import BaseSelect2 from '@/components/select2/baseSelect2.vue';
import CustomSliderSearch from "@/components/customSliderSearch.vue";
export default {
    data() {
        return {
            autoCompleteItems: ["foo", "bar", "fizz", "buzz"],
            values: null,
            selected: [],
            btns: [
                ["Removed", "0"],
                ["Large", "lg"],
                ["Custom", "b-xl"],
            ],
            colors: ["deep-purple accent-4", "error", "teal darken-1"],
            items: [...Array(4)].map((_, i) => `Item ${i}`),
            page: 1,
            pageCount: 0,
            itemsPerPage: 5,
            headers: [
                {
                    text: "ID",
                    align: "start",
                    sortable: false,
                    value: "id",
                },
                { text: "mahsulot", value: "product", sortable: true },
                { text: "Mijoz", value: "customer", sortable: true },
                { text: "Qo'shimcha ma'lumot", value: "additional", sortable: true },
                { text: "sana", value: "date", sortable: true },
                { text: "O'zgargan sana", value: "changed_date", sortable: true },
                { text: "Operni yangilash", value: "newable", sortable: true },
                { text: "Hold", value: "hold", sortable: true },
            ],
            desserts: [
                {
                    id: "23423423/2",
                    product: "lazerli proyektor1",
                    customer: "Баходир Toshkent shahri,",
                    additional: "kdsdasdas",
                    date: "	пт, 24 дек. 2021 г., 18:09",
                    changed_date: "	пт, 21 окт. 2022 г., 17:00",
                    newable: "",
                    hold: "",
                },

            ],
        };
    },
    components: { BaseSelect2, CustomSlider, CustomSliderSearch }
}
</script>

<style lang="scss" scoped>
.filter-items {
    gap: 20px;
}
</style>