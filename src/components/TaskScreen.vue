<template>
    <div class="task-screen">        
        <div class="container user-container">
            <div class="row mb-3">
                <div class="col-6 col-lg-11"></div>
                <div class="col-6 col-lg-1 d-flex flex-column align-items-end align-items-lg-start px-0 px-lg-auto user-column">
                    <div class="ps-2">
                    <div class="user-column__name">Anton</div>
                    <div class="user-column__coins">1000 <img src="../../public/images/coin.png" alt="coin"></div>
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col px-0">
                    <button class="task-cross btn-accessory">
                        <img src="../../public/images/close_btn.png" alt="cross">
                    </button>
                </div>
                <div class="d-none d-sm-block col-sm-10 task-condition"><span>{{$store.getters.jsonData.TaskConditions}}</span></div>
                <div class="col px-0 text-end">
                    <button class="task-bulb btn-accessory" @click="showModal">
                        <img src="../../public/images/bulb.png" alt="bulb">
                    </button>
                </div>
            </div>
            <div class="row mb-3 d-sm-none">
                <div class="col-12 task-condition"><span>{{$store.getters.jsonData.TaskConditions}}</span></div>
            </div>
            <div class="row">
                <div class="col-2 col-xl-4"></div>
                <div class="col-8 col-xl-4 task-question">
                    {{$store.getters.jsonData.TaskText}}
                </div>
                <div class="col-2 col-xl-4"></div>
            </div>
            <div class="row row-cols-1 row-cols-sm-3 mx-auto task-image">    
                <div class="col task-image__item" v-for="(item, index) in $store.getters.jsonData.TaskImages">
                    <div class="task-image__img">
                        <img :src="item" alt="image for task">
                    </div>
                    <div class="task-image__option">
                        {{$store.getters.jsonData.AnswerOptions[index]}}
                    </div>
                </div>
            </div>
        </div>
        <modal-form v-model:show="modalOn"></modal-form>
        <answer-menu></answer-menu>
    </div>
</template>

<script>
    import AnswerMenu from './AnswerMenu.vue';
    import ModalForm from './ModalForm.vue';
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            AnswerMenu, ModalForm
        },
        data(){
            return{
                modalOn: false
            }
        },
        computed: {
            ...mapGetters(['jsonData'])
        },
        methods:{
            ...mapActions(['getJsonData']),
            showModal(){
                this.modalOn = true;
            }
        },
        async mounted(){
            await this.getJsonData();
        }
    }   

</script>

<style scoped>
    .row{
        margin-right: 0;
        margin-left: 0;
    }

    .container{
        padding-left: 0;
        padding-right: 0;
    }

    .user-container{      
        max-width: 1010px;
        margin: 0 auto;
        background: repeating-linear-gradient(
            to right,
            #ffe5e5,
            #ffe5e5 59px,
            #ffffff 28px,
            #ffffff 87px
        );
    }

    .user-column{
        font-size: 2rem;
    }

    .user-column__name{
        padding-top: 40px;
        margin-bottom: 6px;
    }

    .user-column__coins{
        display: flex;
        align-items: center;
        font-size: 1.2rem;
    }

    .user-column__coins img{
        margin-left: 3px;
    }

    .btn-accessory{
        position: relative;
        text-align: center;
        background-color: #f5dce3;
        width: 42px;
        height: 42px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 4px 0px 0px #d5bcc4;
    }

    .btn-accessory img{
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .task-condition{
        text-align: center;
    }

    .task-condition span{
        line-height: 2.3;
    }

    .task-question{
        text-align: center;
        font-size: 1.3rem;
    }

    .task-image{
        text-align: center;
        max-width: 370px;
        padding: 175px 0 225px 0;
    }

    .task-image__option{
        font-size: 1.2rem;
        font-weight: 600;
    }

    @media(max-width:1200px){
        .user-container{
            padding: 10px 15px 0 15px;
        }
    }

    @media(max-width: 576px){
        .task-image{
            padding: 30px 0 30px 0;
        }
    }

    @media(max-width: 576px){
        .user-column__name{
            padding-top: 0;
        }

        .task-question{
            font-size: 1.1rem;
        }
    }
</style>