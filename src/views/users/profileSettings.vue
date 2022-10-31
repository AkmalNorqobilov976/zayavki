<template>
    <div>
        <v-tabs v-model="tab">
            <v-tab>
                Region
            </v-tab>
            <v-tab>
                Redaktor kodi
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="mt-5">
            <v-tab-item>
                <v-form>
                    <v-autocomplete outlined label="Til"></v-autocomplete>
                    <v-autocomplete outlined label="Soat mintaqasini tanlang"></v-autocomplete>
                    
                </v-form>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
export default {
    data: () => ({
        tab: null
    })
}
</script>