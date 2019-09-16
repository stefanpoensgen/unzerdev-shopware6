(this.webpackJsonp=this.webpackJsonp||[]).push([["heidel-payment"],{"3L1I":function(e,t,n){var a=n("XFKd");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n("SZ7m").default)("709260ad",a,!0,{})},"5XaW":function(e,t){e.exports='{% block heidel_payment_metadata %}\n    <sw-card class="heidel-payment-metadata" :title="$tc(\'heidel-payment.paymentDetails.metadata.cardTitle\')">\n        <sw-container slot="grid" type="row">\n            {% block heidel_payment_metadata_container %}\n                <sw-data-grid\n                    :dataSource="data"\n                    :columns="columns"\n                    :showSelection="false"\n                    :showActions="false">\n                </sw-data-grid>\n            {% endblock %}\n        </sw-container>\n    </sw-card>\n{% endblock %}\n'},FcYZ:function(e,t){e.exports="{% block sw_order_detail_content_tabs_general %}\n    {% parent %}\n\n    {% block heidel_payment_payment_tab %}\n        <sw-tabs-item v-if=\"isHeidelpayPayment\"\n                      :route=\"{ name: 'heidel-payment.payment.detail', params: { id: $route.params.id } }\"\n                      :title=\"$tc('heidel-payment.tabTitle')\">\n            {{ $tc('heidel-payment.tabTitle') }}\n        </sw-tabs-item>\n    {% endblock %}\n{% endblock %}"},Hp0e:function(e,t){e.exports='{% block heidel_payment_detail %}\n    <sw-card class="heidel-payment-detail" :title="$tc(\'heidel-payment.paymentDetails.detail.cardTitle\')">\n        {% block heidel_payment_detail_container %}\n            <sw-container columns="1fr 1fr" gap="0 20px">\n                {% block heidel_payment_detail_container_left %}\n                    <sw-container>\n                        <sw-description-list>\n                            <dt>{{ $tc(\'heidel-payment.paymentDetails.detail.amountTotal\') }}</dt>\n                            <dd>{{ paymentResource.basket.amountTotalGross | currency(paymentResource.currency) }}</dd>\n\n                            <dt>{{ $tc(\'heidel-payment.paymentDetails.detail.amountTotalVat\') }}</dt>\n                            <dd>{{ paymentResource.basket.amountTotalVat | currency(paymentResource.currency) }}</dd>\n\n                            <dt>{{ $tc(\'heidel-payment.paymentDetails.detail.currency\') }}</dt>\n                            <dd>{{ paymentResource.currency }}</dd>\n\n                            {% block heidel_payment_detail_container_left_inner %}{% endblock %}\n                        </sw-description-list>\n                    </sw-container>\n                {% endblock %}\n\n                {% block heidel_payment_detail_container_right %}\n                    <sw-container>\n                        <sw-description-list>\n                            <dt>{{ $tc(\'heidel-payment.paymentDetails.detail.orderId\') }}</dt>\n                            <dd>{{ paymentResource.orderId }}</dd>\n\n                            <dt>{{ $tc(\'heidel-payment.paymentDetails.detail.id\') }}</dt>\n                            <dd>{{ paymentResource.id }}</dd>\n\n                            <dt>{{ $tc(\'heidel-payment.paymentDetails.detail.state\') }}</dt>\n                            <dd>{{ paymentResource.state.name }}</dd>\n\n                            {% block heidel_payment_detail_container_right_inner %}{% endblock %}\n                        </sw-description-list>\n                    </sw-container>\n                {% endblock %}\n            </sw-container>\n        {% endblock %}\n\n        {% block heidel_payment_detail_ship_button %}\n            <sw-container v-if="paymentResource.isGuaranteed" columns="1fr" justify="left">\n                <sw-button-process :isLoading="isLoading" :processSuccess="isSuccessful" @click="ship">\n                    {{ $tc(\'heidel-payment.paymentDetails.actions.shipButton\') }}\n                </sw-button-process>\n            </sw-container>\n        {% endblock %}\n    </sw-card>\n{% endblock %}\n'},Mzft:function(e,t,n){"use strict";n.r(t);var a=n("guYI"),i=n.n(a);n("mWga");const{Component:s,Mixin:o}=Shopware;s.register("heidel-payment-actions",{template:i.a,inject:["HeidelPaymentService"],mixins:[o.getByName("notification")],data(){return{isLoading:!1,isSuccessful:!1,transactionAmount:this.paymentResource.basket.amountTotalGross}},props:{transactionResource:{type:Object,required:!0},paymentResource:{type:Object,required:!0}},computed:{isChargePossible:function(){return"authorization"===this.transactionResource.type},isRefundPossible:function(){return"charge"===this.transactionResource.type}},methods:{charge(){this.isLoading=!0,this.HeidelPaymentService.chargeTransaction(this.paymentResource.orderId,this.transactionResource.id,this.transactionAmount).then(()=>{this.createNotificationSuccess({title:this.$tc("heidel-payment.paymentDetails.notifications.chargeSuccessTitle"),message:this.$tc("heidel-payment.paymentDetails.notifications.chargeSuccessMessage")}),this.isSuccessful=!0,this.$emit("reload")}).catch(e=>{let t=e.response.data.message;"generic-error"===t&&(t=this.$tc("heidel-payment.paymentDetails.notifications.genericErrorMessage")),this.createNotificationError({title:this.$tc("heidel-payment.paymentDetails.notifications.chargeErrorTitle"),message:t}),this.isLoading=!1})},refund(){this.isLoading=!0,this.HeidelPaymentService.refundTransaction(this.paymentResource.orderId,this.transactionResource.id,this.transactionAmount).then(()=>{this.createNotificationSuccess({title:this.$tc("heidel-payment.paymentDetails.notifications.refundSuccessTitle"),message:this.$tc("heidel-payment.paymentDetails.notifications.refundSuccessMessage")}),this.isSuccessful=!0,this.$emit("reload")}).catch(e=>{let t=e.response.data.message;"generic-error"===t&&(t=this.$tc("heidel-payment.paymentDetails.notifications.genericErrorMessage")),this.createNotificationError({title:this.$tc("heidel-payment.paymentDetails.notifications.refundErrorTitle"),message:t}),this.isLoading=!1})}}});var r=n("Hp0e"),c=n.n(r);n("3L1I");const{Component:l,Mixin:d}=Shopware;l.register("heidel-payment-detail",{template:c.a,inject:["HeidelPaymentService"],mixins:[d.getByName("notification")],data:()=>({isLoading:!1,isSuccessful:!1}),props:{paymentResource:{type:Object,required:!0}},methods:{ship(){this.isLoading=!0,this.HeidelPaymentService.ship(this.paymentResource.orderId).then(()=>{this.createNotificationSuccess({title:this.$tc("heidel-payment.paymentDetails.notifications.shipSuccessTitle"),message:this.$tc("heidel-payment.paymentDetails.notifications.shipSuccessMessage")}),this.isSuccessful=!0,this.$emit("reload")}).catch(e=>{let t=e.response.data.message;"generic-error"===t&&(t=this.$tc("heidel-payment.paymentDetails.notifications.genericErrorMessage")),this.createNotificationError({title:this.$tc("heidel-payment.paymentDetails.notifications.shipErrorTitle"),message:t}),this.isLoading=!1})}}});var p=n("pry3"),h=n.n(p);const{Component:m}=Shopware;m.register("heidel-payment-history",{template:h.a,props:{paymentResource:{type:Object,required:!0}},computed:{data:function(){let e=[];return this.paymentResource.transactions.forEach(t=>{let n=this.$options.filters.currency(parseFloat(t.amount),this.paymentResource.currency),a=this.$options.filters.date(t.date,{hour:"numeric",minute:"numeric",second:"numeric"});e.push({type:this.transactionTypeRenderer(t.type),amount:n,date:a,resource:t})}),e},columns:function(){return[{property:"type",label:this.$tc("heidel-payment.paymentDetails.history.column.type"),rawData:!0},{property:"amount",label:this.$tc("heidel-payment.paymentDetails.history.column.amount"),rawData:!0},{property:"date",label:this.$tc("heidel-payment.paymentDetails.history.column.date"),rawData:!0}]}},methods:{transactionTypeRenderer:function(e){switch(e){case"authorization":return this.$tc("heidel-payment.paymentDetails.history.type.authorization");case"charge":return this.$tc("heidel-payment.paymentDetails.history.type.charge");case"shipment":return this.$tc("heidel-payment.paymentDetails.history.type.shipment");case"cancellation":return this.$tc("heidel-payment.paymentDetails.history.type.cancellation");default:return this.$tc("heidel-payment.paymentDetails.history.type.default")}},reloadPaymentDetails:function(){this.$emit("reload")}}});var u=n("5XaW"),y=n.n(u);const{Component:g}=Shopware;g.register("heidel-payment-metadata",{template:y.a,props:{paymentResource:{type:Object,required:!0}},computed:{data:function(){let e=[];return this.paymentResource.metadata.forEach(t=>{e.push({key:t.key,value:t.value})}),e},columns:function(){return[{property:"key",label:this.$tc("heidel-payment.paymentDetails.metadata.column.key"),rawData:!0},{property:"value",label:this.$tc("heidel-payment.paymentDetails.metadata.column.value"),rawData:!0}]}}});var f=n("pu9F"),b=n.n(f);const{Component:_}=Shopware;_.register("heidel-payment-basket",{template:b.a,props:{paymentResource:{type:Object,required:!0}},computed:{data:function(){let e=[];return this.paymentResource.basket.basketItems.forEach(t=>{let n=this.$options.filters.currency(parseFloat(t.amountGross),this.paymentResource.currency),a=this.$options.filters.currency(parseFloat(t.amountNet),this.paymentResource.currency);e.push({quantity:t.quantity,title:t.title,amountGross:n,amountNet:a})}),e},columns:function(){return[{property:"quantity",label:this.$tc("heidel-payment.paymentDetails.basket.column.quantity"),rawData:!0},{property:"title",label:this.$tc("heidel-payment.paymentDetails.basket.column.title"),rawData:!0},{property:"amountGross",label:this.$tc("heidel-payment.paymentDetails.basket.column.amountGross"),rawData:!0},{property:"amountNet",label:this.$tc("heidel-payment.paymentDetails.basket.column.amountNet"),rawData:!0}]}}});var k=n("FcYZ"),w=n.n(k);const{Component:D}=Shopware,{Criteria:S}=Shopware.Data;D.override("sw-order-detail",{template:w.a,data:()=>({isHeidelpayPayment:!1}),computed:{showTabs:()=>!0,paymentMethodStore:()=>State.getStore("payment_method")},created(){this.$router.push({name:"sw.order.detail",params:{id:this.orderId}})},watch:{orderId:{deep:!0,handler(){if(!this.orderId)return void(this.isHeidelpayPayment=!1);const e=this.repositoryFactory.create("order"),t=new S(1,1);t.addAssociation("transactions"),e.get(this.orderId,this.context,t).then(e=>{e.transactions.forEach(e=>{e.customFields&&e.customFields.heidelpay_is_transaction&&(this.isHeidelpayPayment=!0)})})},immediate:!0}}});var R=n("dM2R"),$=n.n(R);const{Component:T,State:v}=Shopware;T.register("heidel-payment-tab",{template:$.a,inject:["HeidelPaymentService"],data:()=>({paymentResources:[],isLoading:!0}),created(){this.createdComponent()},watch:{$route(){this.resetDataAttributes(),this.createdComponent()}},methods:{createdComponent(){this.loadData()},orderStore:()=>v.getStore("order"),resetDataAttributes(){this.paymentResources=[],this.isLoading=!0},reloadPaymentDetails(){this.resetDataAttributes(),this.loadData()},loadData(){const e=this.$route.params.id;this.orderStore().getByIdAsync(e).then(e=>{this.order=e,this.order.getAssociation("transactions").getList().then(e=>{e.items.forEach(e=>{e.customFields&&e.customFields.heidelpay_is_transaction&&this.HeidelPaymentService.fetchPaymentDetails(e.id).then(e=>{this.isLoading=!1,this.paymentResources.push(e)}).catch(()=>{this.isLoading=!1})})})})}}});var P=n("wwkQ"),E=n("UIvx");const{Module:B}=Shopware;B.register("heidel-payment",{type:"plugin",name:"HeidelPayment",title:"heidel-payment.general.title",description:"heidel-payment.general.descriptionTextModule",version:"1.0.0",targetVersion:"1.0.0",snippets:{"de-DE":P,"en-GB":E},routeMiddleware(e,t){"sw.order.detail"===t.name&&t.children.push({component:"heidel-payment-tab",name:"heidel-payment.payment.detail",isChildren:!0,path:"/sw/order/heidelpayment/detail/:id"}),e(t)}});n("V472")},UIvx:function(e){e.exports=JSON.parse('{"heidel-payment":{"tabTitle":"Heidelpay","paymentDetails":{"history":{"cardTitle":"Payment History","column":{"type":"Type","amount":"Amount","date":"Date"},"type":{"authorization":"Authorization","charge":"Charging","shipment":"Shipping notification","cancellation":"Refund","default":""}},"actions":{"chargeButton":"Charge","shipButton":"Shipping notice","refundButton":"Refund"},"detail":{"cardTitle":"Payment Details","amountTotal":"Amount (gross)","amountTotalVat":"Amount (net)","currency":"Currency","orderId":"Order-ID","id":"Payment-ID","state":"State"},"metadata":{"cardTitle":"Metadata","column":{"key":"Key","value":"Value"}},"basket":{"cardTitle":"Basket","column":{"quantity":"Quantity","title":"Title","amountGross":"Amount (gross)","amountNet":"Amount (net)"}},"notifications":{"genericErrorMessage":"An error has occoured!","refundSuccessTitle":"Refund","refundSuccessMessage":"The reimbursement was successfully completed.","refundErrorTitle":"Refund","chargeSuccessTitle":"Charge","chargeSuccessMessage":"The collection of the payment was carried out successfully..","chargeErrorTitle":"Charge","shipSuccessTitle":"Shipping notice","shipSuccessMessage":"The shipping notification was successfully sent.","shipErrorTitle":"Shipping notice"}}}}')},V472:function(e,t){const{Application:n}=Shopware,a=Shopware.Classes.ApiService;class i extends a{constructor(e,t,n="heidelpay"){super(e,t,n)}fetchPaymentDetails(e){const t=`_action/${this.getApiBasePath()}/transaction/${e}/details`;return this.httpClient.get(t,{headers:this.getBasicHeaders()}).then(e=>a.handleResponse(e))}chargeTransaction(e,t,n){const i=`_action/${this.getApiBasePath()}/transaction/${e}/charge/${n}`;return this.httpClient.get(i,{headers:this.getBasicHeaders()}).then(e=>a.handleResponse(e))}refundTransaction(e,t,n){const i=`_action/${this.getApiBasePath()}/transaction/${e}/refund/${t}/${n}`;return this.httpClient.get(i,{headers:this.getBasicHeaders()}).then(e=>a.handleResponse(e))}ship(e){const t=`_action/${this.getApiBasePath()}/transaction/${e}/ship`;return this.httpClient.get(t,{headers:this.getBasicHeaders()}).then(e=>a.handleResponse(e))}}n.addServiceProvider("HeidelPaymentService",e=>{const t=n.getContainer("init");return new i(t.httpClient,e.loginService)})},XFKd:function(e,t,n){},dM2R:function(e,t){e.exports='{% block heidel_payment_payment_details %}\n    <div class="heidel-payment-detail">\n        <div v-if="!isLoading">\n            {% block heidel_payment_payment_details_content %}\n                <template v-for="paymentResource in paymentResources">\n                    {% block heidel_payment_payment_details_content_payment_detail %}\n                        <heidel-payment-detail\n                            :paymentResource="paymentResource"\n                            @reload="reloadPaymentDetails">\n                        </heidel-payment-detail>\n                    {% endblock %}\n\n                    {% block heidel_payment_payment_details_content_payment_history %}\n                        <heidel-payment-history\n                            :paymentResource="paymentResource"\n                            @reload="reloadPaymentDetails">\n                        </heidel-payment-history>\n                    {% endblock %}\n\n                    {% block heidel_payment_payment_details_content_payment_basket %}\n                        <heidel-payment-basket\n                            :paymentResource="paymentResource"\n                            @reload="reloadPaymentDetails">\n                        </heidel-payment-basket>\n                    {% endblock %}\n\n                    {% block heidel_payment_payment_details_content_payment_metadata %}\n                        <heidel-payment-metadata\n                            :paymentResource="paymentResource"\n                            @reload="reloadPaymentDetails">\n                        </heidel-payment-metadata>\n                    {% endblock %}\n\n                    {% block heidel_payment_payment_details_content_inner %}{% endblock %}\n                </template>\n            {% endblock %}\n        </div>\n\n        <sw-loader v-if="isLoading"></sw-loader>\n    </div>\n{% endblock %}\n'},guYI:function(e,t){e.exports='{% block heidel_payment_actions %}\n    <sw-container columns="1fr 1fr" gap="0 10px" v-on:click.native.stop>\n        {% block heidel_payment_actions_amount_field %}\n            <div class="heidel-payment-actions--input">\n                <sw-number-field\n                    v-model="transactionAmount">\n                </sw-number-field>\n            </div>\n        {% endblock %}\n\n        <div class="heidel-payment-actions--button">\n            {% block heidel_payment_actions_charge_button %}\n                <sw-button-process :isLoading="isLoading" :processSuccess="isSuccessful" v-if="isChargePossible" @click="charge">\n                    {{ $tc(\'heidel-payment.paymentDetails.actions.chargeButton\') }}\n                </sw-button-process>\n            {% endblock %}\n\n            {% block heidel_payment_actions_refund_button %}\n                <sw-button-process :isLoading="isLoading" :processSuccess="isSuccessful" v-if="isRefundPossible" @click="refund">\n                    {{ $tc(\'heidel-payment.paymentDetails.actions.refundButton\') }}\n                </sw-button-process>\n            {% endblock %}\n\n            {% block heidel_payment_actions_default_button %}\n                <sw-button :disabled="true" v-if="!isChargePossible && !isRefundPossible">\n                    {{ $tc(\'heidel-payment.paymentDetails.actions.chargeButton\') }}\n                </sw-button>\n            {% endblock %}\n\n            {% block heidel_payment_actions_button_container_inner %}{% endblock %}\n        </div>\n    </sw-container>\n{% endblock %}\n'},mWga:function(e,t,n){var a=n("s4xX");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n("SZ7m").default)("69ddd31b",a,!0,{})},pry3:function(e,t){e.exports='{% block heidel_payment_history %}\n    <sw-card :title="$tc(\'heidel-payment.paymentDetails.history.cardTitle\')">\n        {% block heidel_payment_history_container %}\n            <sw-container slot="grid" type="row">\n                {% block heidel_payment_history_data_grid %}\n                    <sw-data-grid\n                        :dataSource="data"\n                        :columns="columns"\n                        :showSelection="false">\n\n                        {% block heidel_payment_history_actions %}\n                            <template slot="actions" slot-scope="{ item }">\n                                {% block heidel_payment_history_data_grid_item_actions %}\n                                    <heidel-payment-actions\n                                        :transactionResource="item.resource"\n                                        :paymentResource="paymentResource"\n                                        @reload="reloadPaymentDetails">\n                                    </heidel-payment-actions>\n                                {% endblock %}\n                            </template>\n                        {% endblock %}\n                    </sw-data-grid>\n                {% endblock %}\n            </sw-container>\n        {% endblock %}\n    </sw-card>\n{% endblock %}\n'},pu9F:function(e,t){e.exports='{% block heidel_payment_basket %}\n    <sw-card class="heidel-payment-basket" :title="$tc(\'heidel-payment.paymentDetails.basket.cardTitle\')">\n        <sw-container slot="grid" type="row">\n            {% block heidel_payment_basket_container %}\n                <sw-data-grid\n                    :dataSource="data"\n                    :columns="columns"\n                    :showSelection="false"\n                    :showActions="false">\n                </sw-data-grid>\n            {% endblock %}\n        </sw-container>\n    </sw-card>\n{% endblock %}\n'},s4xX:function(e,t,n){},wwkQ:function(e){e.exports=JSON.parse('{"heidel-payment":{"tabTitle":"Heidelpay","paymentDetails":{"history":{"cardTitle":"Zahlungsverlauf","column":{"type":"Typ","amount":"Betrag","date":"Datum"},"type":{"authorization":"Reservierung","charge":"Einzug","shipment":"Versandtmitteilung","cancellation":"Rückerstattung","default":""}},"actions":{"chargeButton":"Einziehen","shipButton":"Versandmitteilung","refundButton":"Rückerstatten"},"detail":{"cardTitle":"Zahlungsdetails","amountTotal":"Betrag (brutto)","amountTotalVat":"Betrag (netto)","currency":"Währung","orderId":"Auftrags-ID","id":"Zahlungs-ID","state":"Status"},"metadata":{"cardTitle":"Metadaten","column":{"key":"Schlüssel","value":"Wert"}},"basket":{"cardTitle":"Warenkorb","column":{"quantity":"Anzahl","title":"Titel","amountGross":"Betrag (brutto)","amountNet":"Betrag (netto)"}},"notifications":{"genericErrorMessage":"Es ist ein Fehler aufgetreten!","refundSuccessTitle":"Rückerstatten","refundSuccessMessage":"Die Rückerstattung wurde erfolgreich durchgeführt.","refundErrorTitle":"Rückerstatten","chargeSuccessTitle":"Einziehen","chargeSuccessMessage":"Das Einziehen der Zahlung wurde erfolgreich durchgeführt.","chargeErrorTitle":"Einziehen","shipSuccessTitle":"Versandmitteilung","shipSuccessMessage":"Die Versandmitteilung wurde erfolgreich gesendet.","shipErrorTitle":"Versandmitteilung"}}}}')}},[["Mzft","runtime","vendors-node"]]]);