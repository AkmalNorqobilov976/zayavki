<template>
        <div class="error">
            <div class="image-error">
                <img :src="ImageError" alt="" class="">
            </div>
            <div class="error-text">
                <h2>Ro‘yhat topilmadi</h2>
                <h4><span>ID:59409 </span>raqamli ro‘yhat tizimdan topilmadi</h4>
            </div>
            <button>Ortga qaytish</button>
        </div>
</template>
<script>
export default {
    name: '404Error',
    data() {
        return {
            ImageError: require("@/assets/images/404_Error.png")
        };
    },
}
</script>
    
<style lang="scss" scoped>
.error {
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 515px;
    .image-error {
        width: 100%;
        img {
            height: 600px;

        }
    }

    .error-text {
        width: 600px;
        gap: 100px;

        h2 {
            font-family: "Inter";
            font-weight: 700;
            font-size: 50px;
            line-height: 61px;
            width: 422px;
            margin: auto;
        }

        h4 {
            width: 501px;
            height: 29px;
            font-family: "Inter";
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            margin: auto;
            margin-top: 10px;
            opacity: 0.95;

            span {
                color: #1E0E62;
            }
        }

    }

    button {
        background-color: #1E0E62;
        border: none;
        width: 181px;
        height: 50px;
        margin: auto;
        color: #FFFFFF;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        border-radius: 10px;
        margin-top: 22px;
        cursor: pointer;
    }
}
</style>