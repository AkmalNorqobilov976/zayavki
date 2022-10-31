<template>

    <div class="d-flex align-center receipt-cash">

        <div id="invoice-POS">

            <div id="top">
                <div style="text-align: center;">
                    <Shop100kIcon />
                    <div class="info-receipt white">
                        <h2>100k shop</h2>
                    </div>
                </div>

                <!--End Info-->
            </div>
            <!--End InvoiceTop-->


            <!--End Invoice Mid-->

            <div id="bot">

                <div id="table">
                    <table>
                        <tr class="tabletitle">
                            <td class="item">
                                <h4>Item</h4>
                            </td>
                            <td class="Hours">
                                <h4>Qty</h4>
                            </td>
                            <td class="Rate">
                                <h4>Sub Total</h4>
                            </td>
                        </tr>

                        <tr class="service">
                            <td class="tableitem">
                                <p class="itemtext">Communication</p>
                            </td>
                            <td class="tableitem">
                                <p class="itemtext">5</p>
                            </td>
                            <td class="tableitem">
                                <p class="itemtext">$375.00</p>
                            </td>
                        </tr>

                        <tr class="service">
                            <td class="tableitem">
                                <p class="itemtext">Asset Gathering</p>
                            </td>
                            <td class="tableitem">
                                <p class="itemtext">3</p>
                            </td>
                            <td class="tableitem">
                                <p class="itemtext">$225.00</p>
                            </td>
                        </tr>

                        <tr class="service">
                            <td class="tableitem">
                                <p class="itemtext">Design Development</p>
                            </td>
                            <td class="tableitem">
                                <p class="itemtext">5</p>
                            </td>
                            <td class="tableitem">
                                <p class="itemtext">$375.00</p>
                            </td>
                        </tr>

                        <tr class="service">
                            <td class="tableitem">
                                <p class="itemtext">Animation</p>
                            </td>
                            <td class="tableitem">
                                <p class="itemtext">20</p>
                            </td>
                            <td class="tableitem">
                                <p class="itemtext">$1500.00</p>
                            </td>
                        </tr>

                        <tr class="service">
                            <td class="tableitem">
                                <p class="itemtext">Animation Revisions</p>
                            </td>
                            <td class="tableitem">
                                <p class="itemtext">10</p>
                            </td>
                            <td class="tableitem">
                                <p class="itemtext">$750.00</p>
                            </td>
                        </tr>


                        <tr class="tabletitle">
                            <td></td>
                            <td class="Rate">
                                <span>tax</span>
                            </td>
                            <td class="payment">
                                <span>$419.25</span>
                            </td>
                        </tr>

                        <tr class="tabletitle">
                            <td></td>
                            <td class="Rate">
                                <span>Total</span>
                            </td>
                            <td class="payment">
                                <span>$3,644.25</span>
                            </td>
                        </tr>

                    </table>
                </div>
                <!--End Table-->

                <div id="legalcopy">
                    <p class="legal"><strong>Thank you for your business!</strong>  Payment is expected within 31 days;
                        please process this invoice within that time. There will be a 5% interest charge per month on
                        late
                        invoices.
                    </p>
                </div>

            </div>
            <!--End InvoiceBot-->
        </div>
    </div>
    <!--End Invoice-->

</template>
<script>
import Shop100kIcon from './svgs/shop100kIcon.vue';
export default {
    components: {
        Shop100kIcon
    }
}
</script>
<style lang="scss" scoped>
.receipt-cash{
    height: 100vh;
}
#invoice-POS {
    // vertical-align: center;
    box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5);
    padding: 2mm;
    margin: 0 auto;
    width: 90%;
    background: #FFF;



    h1 {
        font-size: 3em;
        color: #222;
    }

    h2 {
        font-size: 1.5em;
    }

    h3 {
        font-size: 2em;
        font-weight: 300;
        line-height: 2em;
    }

    p {
        font-size: 1.7em;
        color: #666;
        line-height: 2em;
    }

    #top,
    #mid,
    #bot {
        /* Targets all id with 'col-' */
        border-bottom: 1px solid #EEE;
    }

    #top {
        min-height: 100px;
    }

    #mid {
        min-height: 80px;
    }

    #bot {
        min-height: 50px;
    }

    #top .logo {
        //float: left;
        margin: auto;
        height: 60px;
        width: 60px;
        background: url(http://michaeltruong.ca/images/logo1.png) no-repeat;
        background-size: 60px 60px;
    }

    .clientlogo {
        float: left;
        height: 60px;
        width: 60px;
        background: url(http://michaeltruong.ca/images/client.jpg) no-repeat;
        background-size: 60px 60px;
        border-radius: 50px;
    }

    .info-receipt {
        display: block;
        //float:left;
        margin-left: 0;
    }



    table {
        width: 100%;
        border-collapse: collapse;
    }



    .tabletitle {
        //padding: 5px;
        // font-size: .9em;
        overflow: hidden;
        background: #EEE;
    }

    .service {
        border-bottom: 1px solid #EEE;
    }

    // .item {
    //     width: 24mm;
    // }

    .itemtext {
        font-size: .8em;
    }

    #legalcopy {
        font-size: .6em;
        margin-top: 5mm;
    }



}
</style>