<template>
    <v-app class="signinform">
        <v-row class="custom-signin" justify="center" align="center">
            <v-col md="6">
                <v-card>
                    <v-toolbar color="blue">
                        <v-toolbar-title class="text-h4 font-weight-bold  white--text">Signin</v-toolbar-title>
                    </v-toolbar>
                    <v-form ref="form" v-model="valid" lazy-validation class="pa-4">
                        <v-text-field v-model="login" outlined :counter="10" :rules="nameRules" label="login" required>
                        </v-text-field>

                        <v-text-field v-model="parol" outlined type="password" :rules="nameRules" label="parol" required>
                        </v-text-field>
                        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                            Kirish
                        </v-btn>

                        <v-btn color="error" class="mr-4" @click="reset">
                            Tozalash
                        </v-btn>

                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
export default {
    data: () => ({
        valid: true,
        login: '',
        parol: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
       
    }),

    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.$store.commit('setAdmin')
                this.$router.push('/')
            }
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}
</script>
<style lang="scss" scoped>
.custom-signin {
    height: 100vh;
    overflow: hidden;
}
</style>