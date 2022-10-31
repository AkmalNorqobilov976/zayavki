<script setup >
import { reactive, onBeforeMount, ref, watch } from "vue";
import { useStore } from "vuex";
import BaseInput from "@/components/Form/input/BaseInput.vue";
import LayoutBreadcrumb from "@/components/Layout/LayoutBreadcrumb.vue";

import DefaultLayout from "@/layouts/defaultLayout.vue";
import BaseSelect2 from "@/components/Form/select/BaseSelect2.vue";
const formLevel = ref("sender");
// const formLevel = ref("sender");
const store = useStore();
const isDisabled = ref(false);
const sender = reactive({
  phone: "",
  name: "",
});
const accepter = reactive({
  phone: "",
  name: "",
});
const progresses = reactive({
  progress1: {
    length: 0,
    color: "#F0B400",
  },
  progress2: {
    length: 0,
    color: "#F5F5F5",
  },
});
const options = ref([
  {
    name: "Yuk mashinasi",

    icon: "TruckIcon",
  },
  {
    name: "Yengil avtomabil",

    icon: "CarIcon",
  },
  {
    name: "Piyoda xizmat",

    icon: "BicycleIcon",
  },
]);
const shipments = reactive({
  shipmentName: "",
  destination: "",
  transportType: "",
  totalSum: 0,
  deliveryPrice: 0,
  // deliveryTime: "",
  isAddition: false,
});
const OnSelect = (option) => {
  shipments.transportType = option.name;
};

const colors = {
  progress: {
    yellow: "#F0B400",
    green: "#12A60F",
    grey: "#F5F5F5",
  },
  icons: {
    blue: "#1E0E62",
    white: "#D5FFD8",
    green: "#12A60F",
    grey: "#484848",
  },
  iconsBg: {
    green: "#12A60F",
    yellow: "#FFCE33",
    grey: "#E7E7E7",
  },
};
const icons = reactive({
  sender: {
    bgColor: "#FFCE33",
    color: "#1E0E62",
  },
  accepter: {
    bgColor: "#E7E7E7",
    color: "#484848",
  },
  shipment: {
    bgColor: "#E7E7E7",
    color: "#484848",
  },
});

watch(formLevel, (first, second) => {
  console.log("Hello");
  if (second == "sender" && !accepter.name && !accepter.phone) {
    icons.accepter.bgColor = colors.iconsBg.yellow;
    icons.accepter.color = colors.icons.yellow;
  }
  if (
    second == "accepter" &&
    !shipments.shipmentName &&
    !shipments.destination &&
    !shipments.transportType &&
    !shipments.totalSum &&
    !shipments.deliveryPrice
  ) {
    icons.shipment.bgColor = colors.iconsBg.yellow;
    icons.shipment.color = colors.icons.blue;
  }
});

watch(sender, (first, second) => {
  console.log("ishladi");
  if (second.name && second.phone) {
    progresses.progress1.length = 100;
    progresses.progress1.color = colors.progress.green;
    icons.sender.bgColor = colors.iconsBg.green;
    icons.sender.color = colors.icons.white;
  } else {
    progresses.progress1.length = 10;
    progresses.progress1.color = colors.progress.yellow;
    progresses.progress2.length = 0;
    progresses.progress2.color = colors.progress.grey;
    icons.sender.bgColor = colors.iconsBg.yellow;
    icons.sender.color = colors.icons.blue;
    icons.accepter.bgColor = colors.iconsBg.grey;
    icons.accepter.color = colors.icons.grey;
  }
});
watch(accepter, (first, second) => {
  console.log("ishladi");

  if (second.name && second.phone) {
    progresses.progress2.length = 100;
    progresses.progress2.color = colors.progress.green;
    icons.accepter.bgColor = colors.iconsBg.green;
    icons.accepter.color = colors.icons.white;
  } else {
    progresses.progress2.length = 0;
    progresses.progress2.color = colors.progress.yellow;
    icons.accepter.bgColor = colors.iconsBg.yellow;
    icons.accepter.color = colors.icons.blue;
    icons.shipment.bgColor = colors.iconsBg.grey;
    icons.shipment.color = colors.icons.grey;
  }
});
watch(shipments, (first, second) => {
  console.log(shipments, "ishladi");
  if (
    second.shipmentName &&
    second.destination &&
    second.transportType &&
    second.totalSum &&
    second.deliveryPrice
    // second.deliveryTime &&
    // second.isAddition
  ) {
    // progresses.progress2.length = 100;
    // progresses.progress2.color = colors.progress.green;
    icons.shipment.bgColor = colors.iconsBg.green;
    icons.shipment.color = colors.icons.white;
  } else {
    // progresses.progress2.length = 0;
    // progresses.progress2.color = colors.progress.yellow;
    // icons.shipment.bgColor = colors.iconsBg.yellow;
    // icons.shipment.color = colors.icons.yellow;
    icons.shipment.bgColor = colors.iconsBg.yellow;
    icons.shipment.color = colors.icons.blue;
  }
});

const items = [
  {
    text: "Salom",
    value: "Salom",
  },
  {
    text: "Hayr",
    value: "Hayr",
  },
];
onBeforeMount(() => {
  store.commit("layout/pushBreadcrumbs", [
    {
      text: "Pochtalar",
      route: "/mails",
    },
    {
      text: "Yangi pochta qo‘shish",
      route: "/mails/add-new-post",
    },
  ]);
});
const rightSidebar = ref(true);
</script>
<template>
  <DefaultLayout :rightSidebar="rightSidebar" class="relative">
    <template #appbar>
      <LayoutBreadcrumb />
    </template>

    <template #rigthsidebar>
      <v-card
        class=" right-sidebar"
        flat
        >
        <div class="text-center right-sidebare-title pa-4">
          <h1 style="color: #1e0e62" class="font-size:38px">Pochta</h1>
          <p>Pochtaning ma’lumotlari</p>
        </div>
        <div class=" shipment-name px-5">
          <h2>Jo'natma nomi:</h2>
          <p class="text-grey">
            {{ "kiritilmagan" }}
          </p>
          <hr />
          <h2>Qayerga yetkazish kerak:</h2>
          <p class="shipment-address">
            Jizzax vil, Oltinariq tum, Bo‘zsuv qishlog’i, Jarliktepa maha, 23-uy
          </p>
        </div>
        <div class=" shipment-name px-5 mt-16">
          <h2>Yuboruvchi ma’lumotlari:</h2>
          <div  class="number-vs-name">
            <p>Ismi:</p>
            <p>Abdujalol</p>
          </div>

          <div class="number-vs-name">
            <p>Telefon raqam:</p>
            <p>+998(97)777-21-21</p>
          </div>
        </div>
        <div class=" shipment-name px-5 mt-5">
          <h2>Qabul qiluvchi ma’lumotlari:</h2>
          <div  class="number-vs-name">
            <p>Ismi:</p>
            <p>Abdujalol</p>
          </div>

          <div class="number-vs-name">
            <p>Telefon raqam:</p>
            <p>+998(97)777-21-21</p>
          </div>
        </div>
        <div class="type-transport px-5 mt-10">
          <h2>Transport turi:</h2>
          <p>Tanlanmagan</p>
          <hr class="mt-1">
        </div>
        <div class="type-transport px-5 mt-4">
          <h2>Yetkazish summasi:</h2>
          <p>0 so‘m</p>
          <hr class="mt-1">
        </div>
        <div class="type-transport px-5 mt-4">
          <h2>Umumiy summa:</h2>
          <p>0 so‘m</p>
        </div>
      </v-card>
    
    </template>
    <div class="add-new-email">
      <h1>3 ta qadam orqali Yangi pochta yarating</h1>
      <p v-if="formLevel == 'sender'">
        1-qadam Yuboruvchining ma’lumotlarini kiriting:
      </p>
      <p v-else-if="formLevel == 'accepter'">
        2-qadam Qabul qiluvchining ma’lumotlarini kiriting:
      </p>
      <p v-else>3-qadam Jo‘natmaning ma’lumotlarini kiriting:</p>
    </div>
    <div class="gray step-form d-inline-flex align-center">
      <div class="step-form-icon">
        <OneIcon
          :color="icons.sender.color"
          :bgColor="icons.sender.bgColor"
          @click="
            formLevel == 'accepter' || formLevel == 'shipment'
              ? (formLevel = 'sender')
              : ''
          "
        />
        <div>
          <p
            class="step-form-info"
            :class="{ 'text-blue-bold': formLevel == 'sender' }"
          >
            Yuboruvchi
          </p>
          <p
            class="button-functions"
            :class="formLevel == 'sender' ? 'blue-fon' : 'black-fon'"
          >
            CTRL+Y
          </p>
        </div>
      </div>

      <div>
        <v-progress-linear
          class="step-form-linear"
          height="10"
          :color="progresses.progress1.color"
          v-model="progresses.progress1.length"
          bg-color="#F5F5F5"
          :bg-opacity="1"
        ></v-progress-linear>
      </div>
      <div class="step-form-icon">
        <TwoIcon
          :color="icons.accepter.color"
          :bgColor="icons.accepter.bgColor"
          @click="formLevel == 'shipment' ? (formLevel = 'accepter') : ''"
        />
        <div>
          <p
            class="step-form-info"
            :class="{ 'text-blue-bold': formLevel == 'accepter' }"
          >
            Qabul qiluvchi
          </p>
          <p
            class="button-functions"
            :class="formLevel == 'accepter' ? 'blue-fon' : 'black-fon'"
          >
            CTRL+Q
          </p>
        </div>
      </div>
      <div class="step-form-icon">
        <v-progress-linear
          class="step-form-linear"
          height="10"
          bg-color="#F5F5F5"
          :bg-opacity="1"
          :color="progresses.progress2.color"
          v-model="progresses.progress2.length"
        ></v-progress-linear>
      </div>
      <div class="step-form-icon">
        <ThreeIcon
          :color="icons.shipment.color"
          :bgColor="icons.shipment.bgColor"
        />
        <div>
          <p
            class="step-form-info"
            :class="{ 'text-blue-bold': formLevel == 'shipment' }"
          >
            Jo‘natma
          </p>
          <p
            class="button-functions"
            :class="formLevel == 'shipment' ? 'blue-fon' : 'black-fon'"
          >
            CTRL+J
          </p>
        </div>
      </div>
    </div>
    <!-- First - Card -->
    <v-card
      v-if="formLevel === 'sender'"
      class="sender-card d-flex items-center pt-8 pl-8 mt-16"
      color="white"
      elevation="0"
    >
      <div>
        <v-img
          width="154"
          height="154"
          :src="require('@/assets/images/yuboruvchi.svg')"
        ></v-img>
      </div>

      <v-form class="ml-8 gap-8 d-flex flex-column">
        <div class="pb-9">
          <BaseInput
            v-model="sender.name"
            label="Ismi"
            placeholder="Ismini kiriting"
          />
        </div>
        <div>
          <BaseInput
            phone
            v-model="sender.phone"
            label="Telefon raqami"
            placeholder="(00) 000 - 00 - 00"
          />
        </div>

        <!-- <v-text-field class="add-new-post" placeholder="+998 (00) 000 - 00 - 00"  label="Telefon raqami" variant="plain" elevation="0"/> -->
      </v-form>

      <div class="buttons">
        <v-btn
          class="btn-next"
          @click="formLevel = 'accepter'"
          :disabled="!(sender.name && sender.phone)"
        >
          Keyingi<v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-card>
    <!--  -->
    <v-card
      v-else-if="formLevel === 'accepter'"
      class="sender-card d-flex items-center pt-8 pl-8 mt-16"
      color="white"
      elevation="0"
    >
      <div>
        <v-img
          width="154"
          height="154"
          :src="require('@/assets/images/qabul-qiluvchi.svg')"
        ></v-img>
      </div>
      <v-form class="ml-8 gap-8 d-flex flex-column">
        <div class="pb-9">
          <BaseInput
            v-model="accepter.name"
            label="Ismi"
            placeholder="Ismini kiriting"
          />
        </div>
        <div>
          <BaseInput
            phone
            v-model="accepter.phone"
            label="Telefon raqami"
            placeholder="(00) 000 - 00 - 00"
          />
        </div>
        <!-- <v-text-field class="add-new-post" placeholder="+998 (00) 000 - 00 - 00"  label="Telefon raqami" variant="plain" elevation="0"/> -->
      </v-form>
      <div class="buttons">
        <v-btn class="btn-prev" @click="formLevel = 'sender'">
          <v-icon>mdi-arrow-left</v-icon>
          Ortga</v-btn
        >
        <v-btn
          class="btn-next"
          @click="formLevel = 'shipment'"
          :disabled="!(accepter.name && accepter.phone)"
        >
          Keyingi <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-card>
    <v-card
      v-else-if="formLevel === 'shipment'"
      class="sender-card d-flex mt-16 py-5 px-8"
      color="white"
      height="800"
      elevation="0"
    >
      <div>
        <v-img
          width="154"
          height="154"
          :src="require(`@/assets/images/Jo'natma.svg`)"
        ></v-img>
      </div>
      <form class="ml-8">
        <div class="d-flex items-center">
          <div>
            <BaseInput
              v-model="shipments.shipmentName"
              label="Jo‘natma nomi"
              placeholder="Nima olib borish kerak"
              padding="0 20px 60px 15px"
            />
          </div>
          <div class="ml-8">
            <BaseInput
              v-model="shipments.destination"
              label="Qayerga yetkazish kerak"
              placeholder="Manzilni kiriting"
              padding="0 30px 60px 20px"
            />
          </div>
        </div>
        <div class="d-flex items-center mt-10">
          <div style="z-index: 9999">
            <BaseSelect2
              :placeholder="'Tanlang'"
              :label="'Transport turi'"
              :options="options"
              text="name"
              @option="OnSelect"
              padding="24px 14px"
            />
          </div>
          <div class="ml-5">
            <BaseInput
              v-model="shipments.deliveryPrice"
              label="Yetkazish summa"
              isPrice
              isRecommendedPrices
              padding="10px 20px"
            />
          </div>
          <div class="ml-5">
            <BaseInput
              v-model="shipments.totalSum"
              label="Umumiy summa"
              isPrice
              padding="10px 20px"
            />
          </div>
        </div>
        <!-- <div class="shipment-addition">
            <p>Qo‘shimcha ma’lumotlarni kiritish</p>
            <div>
              <v-switch
                color="blue-darken-5"
                v-model="shipments.isAddition"
              ></v-switch>
            </div>
          </div>
          <div v-if="shipments.isAddition" class="mt-10">
            <BaseInput
              v-model="shipments.deliveryTime"
              label="Qachonga yetkazish kerak"
              placeholder="10/09/2022"
              type="date"
            />
          </div> -->
        <!-- <v-text-field class="add-new-post" placeholder="+998 (00) 000 - 00 - 00"  label="Telefon raqami" variant="plain" elevation="0"/> -->
      </form>

      <div class="buttons">
        <v-btn
          class="btn-prev"
          @click="
            formLevel = 'accepter';
            rightSidebar = true;
          "
        >
          <v-icon>mdi-arrow-left</v-icon>
          Ortga</v-btn
        >
        <v-btn
          class="btn-next"
          @click="
            formLevel = 'Change data';
            rightSidebar = false;
          "
          :disabled="
            !(
              shipments.deliveryPrice &&
              shipments.destination &&
              shipments.shipmentName &&
              shipments.totalSum &&
              shipments.transportType
            )
          "
        >
          Saqlash
        </v-btn>
      </div>
    </v-card>
    <!-- <div class="buttons">
      <v-btn class="btn-prev"  v-if="formLevel !== 'sender'" @click="formLevel == 'accepter' ? formLevel = 'sender' : formLevel = 'accepter'">
        <v-icon>mdi-arrow-left</v-icon>
        Ortga</v-btn>
      <v-btn class="btn-next" @click="formLevel == 'sender' ? formLevel = 'accepter' : formLevel = 'shipment' ">
        {{formLevel == 'shipment' ? 'Saqlash ' : `Keyingi`}}  <v-icon v-if="formLevel !== 'shipment'">mdi-arrow-right</v-icon>
        </v-btn>

    </div> -->

    <!-- Edit data -->
    <v-card
      v-else-if="formLevel === 'Change data'"
      class="sender-card d-flex mt-16 py-5 px-8"
      color="white"
      height="800"
      elevation="0"
    >
      <div>
        <v-img
          width="154"
          height="154"
          :src="require(`@/assets/images/Jo'natma.svg`)"
        ></v-img>
      </div>
      <form class="ml-10">
        <v-row>
          <v-col md="5">
            <v-card color="#F5F5F5" class="data-card">
              <div>
                <p>Jo‘natma nomi</p>
                <h2>Bolalar uchun Aqqli soat (baby Smartwatch H23)</h2>
              </div>
            </v-card>
          </v-col>

          <v-col xl="8">
            <v-card color="#F5F5F5" class="data-card">
              <div>
                <p>Qayerga yetkazish kerak</p>
                <h2>
                  Jizzax viloyati, Oltinariq tumani, Bo‘zsuv qishlog‘i,
                  Jarliktepa mahallasi, 23-uy
                </h2>
              </div>
            </v-card>
          </v-col>
          <v-col md="4"></v-col>
          <v-col md="3">
            <v-card color="#F5F5F5" class="data-card">
              <div>
                <p>Transport turi</p>
                <h2>Yengil avtomabil</h2>
              </div>
            </v-card>
          </v-col>
          <v-col md="3">
            <v-card color="#F5F5F5" class="data-card">
              <div>
                <p>Yetkazish summasi</p>
                <h2>30,000 so‘m</h2>
              </div>
            </v-card>
          </v-col>
          <v-col md="3">
            <v-card color="#F5F5F5" class="data-card">
              <div>
                <p>Umumiy summa</p>
                <h2>235,000 so‘m</h2>
              </div>
            </v-card>
          </v-col>
          <v-col md="2"></v-col>

          <v-col md="2">
            <v-card class="data-card" color="#F5F5F5">
              <div>
                <p>Yuboruvchi ismi</p>
                <h2>Abdujalol</h2>
              </div>
            </v-card>
          </v-col>
          <v-col md="3">
            <v-card class="data-card" color="#F5F5F5">
              <div>
                <p>Yuboruvchi telefon raqami</p>
                <h2>+998(90)055-44-32</h2>
              </div>
            </v-card>
          </v-col>
          <v-col md="2">
            <v-card class="data-card" color="#F5F5F5">
              <div>
                <p>Qabul qiluvchi ismi</p>
                <h2>Davronbek</h2>
              </div>
            </v-card>
          </v-col>
          <v-col md="3">
            <v-card class="data-card" color="#F5F5F5">
              <div>
                <p>Qabul qiluvchi telefon raqami</p>
                <h2>+998(97)777-21-21</h2>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- <div class="shipment-addition">
            <p>Qo‘shimcha ma’lumotlarni kiritish</p>
            <div> 
              <v-switch
                color="blue-darken-5"
                v-model="shipments.isAddition"
              ></v-switch>
            </div>
          </div>
          <div v-if="shipments.isAddition" class="mt-10">
            <BaseInput
              v-model="shipments.deliveryTime"
              label="Qachonga yetkazish kerak"
              placeholder="10/09/2022"
              type="date"
            />
          </div> -->
        <!-- <v-text-field class="add-new-post" placeholder="+998 (00) 000 - 00 - 00"  label="Telefon raqami" variant="plain" elevation="0"/> -->
      </form>

      <div class="buttons">
        <v-btn class="btn-next"> + Yangi pochta qo‘shish</v-btn>
        <v-btn
          class="btn-prev"
          @click="
            formLevel = 'shipment';
            rightSidebar = true;
          "
        >
          Ma’lumotlarni o‘zgartirish</v-btn
        >
      </div>
    </v-card>
  </DefaultLayout>
</template>
  
  
<style lang="scss" scoped>
.step-form {
  margin-left: 40px;
  // display: flex;

  .step-form-linear {
    width: 414px;
  }

  .step-form-icon {
    position: relative;

    .step-form-info {
      @extend %fSize28lHeight34;
      position: absolute;
      width: 200px;
      left: -30px;
      font-style: normal;
      font-weight: 600;
    }
    .button-functions {
      position: absolute;
      left: 0px;
      top: 100px;
      color: white;
      z-index: 10000;
      padding: 5px 10px 5px 10px;
      border-radius: 8px;
      margin: 5px 0;
    }
    .black-fon {
      background-color: black;
    }
    .blue-fon {
      background-color: #1e0e62;
    }
  }
}

.shipment-addition {
  @extend %fSize20lHeight24;
  font-weight: 600;
  display: flex;
  align-items: center;

  p {
    flex: 1 1 auto;
  }

  div {
    // display: inline-block;
    // align-self: flex-end;
    margin-top: 10px;
  }
}

.sender-card {
  border-radius: 20px;
  position: relative;
  padding: 30px;
  overflow: visible;

  .sender-card-image {
    align-self: center;
  }
}
.sender-card-info {
  flex: 1 1 auto;
  color: $gray-95;
  margin-top: 30px;
  .sender-label {
    color: $dark-62;
    @extend %fSize20lHeight24;
    font-weight: 500;
    font-style: normal;
    margin-bottom: 6px;
  }

  .sender-info {
    @extend %fSize26lHeight31;
    font-weight: 600;
  }
}
.blackColor {
  color: #000;
}
.add-new-email {
  margin: 0 40px 30px 40px;
  h1 {
    font-size: 34px;
    font-weight: 700;
  }
  p {
    margin-top: 10px;
    color: #424242;
    font-size: 24px;
  }
}
.right-sidebare-title {
  h1 {
    font-size: 28px;
    margin-bottom: 8px;
  }
  p {
    font-size: 19px;
    font-weight: 600;
  }
}

.right-sidebar {
  height: 100vh;
  // border-image: url("@/assets/images/receipt.png");
  // background-repeat: no-repeat;
  background: url("@/assets/images/receiptCard.png");
  background-size: contain;
  background-repeat: no-repeat;
  padding: 40px 20px;
  // &::after {
  //   // background: url("@/assets/images/receipt.png");
    
  //   height: 40px;
  //   width: 100%;
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }
  // &::before {
  //   background: url("@/assets/images/receipt.png");
  //   height: 40px;
  //   width: 100%;
  //   position: absolute;
  //   bottom: -40px;
  //   content:'fsdf';
  //   z-index: 1999;
  //   transform: rotateX(180deg);
  // }
  .shipment-name {
    .number-vs-name{
      h2,p{
        color: black;
        font-weight: 600;
      }
      margin-top: 4px;
      display: flex;
      justify-content: space-between;
    }
    h2 {
      font-size: 22px;
      font-weight: 600;
    }
    p {
      color: grey;
      font-size: 19px;
      text-transform: capitalize;
    }
    hr {
      margin: 32px 0 15px 0;
      background-color: #d9d9d9;
    }
    p.shipment-address {
      margin-top: 6px;
      color: black;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
    }
    .type-transport{
      h2{
        font-size: 20px;
      }
      p{
        color: grey;
        font-size: 18px;
        font-weight: 500;
        margin-top: 6px;
        margin-bottom: 4px;
      }
      
    }
  }
}
.buttons {
  position: absolute;
  display: flex;
  gap: 30px;
  top: 600px;

  .btn-next {
    background-color: #f0b400;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 19px;
    text-transform: capitalize;
    color: black;
    border: 2px solid #f0b400;
    border-radius: 10px;
  }
  .btn-prev {
    padding: 20px 40px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 19px;
    text-transform: capitalize;
    background-color: white;
    border: 2px solid #1e0e62;
    color: #1e0e62;
    border-radius: 10px;
  }
}
.card-stme {
  // border-image: url("https://media.istockphoto.com/photos/beautiful-nature-at-morning-in-misty-spring-forest-with-sun-picture-id506856658?s=612x612") 30 round ;
  border-image: url("https://media.istockphoto.com/photos/beautiful-nature-at-morning-in-misty-spring-forest-with-sun-picture-id506856658?s=612x612")
    30 30 repeat /*change here*/;
  border: 10px solid transparent;
  padding: 15px;
}
.data-card {
  padding: 20px 40px 20px 20px;
  border-radius: 15px;
  p {
    color: #1e0e62;
    font-weight: 600;
    font-size: 19px;
  }
  h2 {
    font-size: 24px;
    font-weight: 600;
  }
}
.text-blue-bold {
  color: #0f0346;
  font-weight: 800;
}
</style>