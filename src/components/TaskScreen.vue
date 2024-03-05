<template>
    <div class="task-screen">
        <div class="user-container">
            <div class="user-column">
                <div class="user-column__name">Anton</div>
                <div class="user-column__coins">1000 <img src="../../public/images/coin.png" alt="coin"></div>
            </div>
            <button class="task-cross btn-accessory">
                <img src="../../public/images/close_btn.png" alt="cross">
            </button>
            <div class="task-condition"><span>{{taskConditions}}</span></div>
            <button class="task-bulb btn-accessory" @click="showModal">
                <img src="../../public/images/bulb.png" alt="bulb">
            </button>
            <div class="task-question">
                {{taskQuestion}}
            </div>
            <div class="task-image">
                <div class="task-image__container">
                    <div class="task-image__item" v-for="(item, index) in json.TaskImages">
                        <div class="task-image__img">
                            <img :src="item" alt="image for task">
                        </div>
                        <div class="task-image__option">
                            {{json.AnswerOptions[index]}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <modal-form v-model:show="modalOn"></modal-form>
        <answer-menu :answerOptions="answerOptions" :correctAnswer="correctAnswer"></answer-menu>
    </div>
</template>

<script>
    import JsonData from "../data.json";
    import AnswerMenu from './AnswerMenu.vue';
    import ModalForm from './ModalForm.vue';

    export default {
        components: {
            AnswerMenu, ModalForm
        },
        data(){
            return{
                taskConditions: JsonData.TaskConditions,
                taskQuestion: JsonData.TaskText,
                answerOptions: JsonData.AnswerOptions,
                correctAnswer: JsonData.CorrectAnswer,
                json: JsonData,
                modalOn: false
            }
        },
        methods:{
            showModal(){
                this.modalOn = true;
            }
        }
    }   

</script>

<style scoped>
    .user-container{      
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;
        grid-template-rows: 150px 63px 1fr 5fr;
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
        grid-column: 3/4;
        grid-row: 1/2;
        justify-self: end;
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

    .task-cross{
        grid-column: 1/2;
        grid-row: 2/3;
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
        grid-column: 2/3;
        text-align: center;
        grid-row: 2/3;
    }

    .task-condition span{
        line-height: 2.3;
    }

    .task-bulb{
        grid-column: 3/4;
        justify-self: end;
        grid-row: 2/3;
    }

    .task-question{
        grid-column: 2/3;
        text-align: center;
        grid-row: 3/4;
        font-size: 1.4rem;
    }

    .task-image{
        grid-column: 2/3;
        text-align: center;
        grid-row: 4/5;
    }

    .task-image__container{
        display: grid;
        grid-template-columns: repeat(3,127px);
        grid-template-rows: repeat(4, 1fr);
        justify-content: center;
    }

    .task-image__item{
        grid-row: 2/2;
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
        .user-container{
            grid-template-rows: 1fr 1fr 1fr 1fr 5fr;
        }

        .user-column__name{
            padding-top: 0;
        }

        .task-condition{
            grid-column: 1/4;
            grid-row: 3/4;
        }
        .task-question{
            grid-column: 1/4;
            grid-row: 4/5;
            font-size: 1.1rem;
        }

        .task-image{
            grid-column: 1/4;
            grid-row: 5/6;
        }

        .task-image__container{
            display: block;
        }
    }
</style>