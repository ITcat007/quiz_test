<template>
    <div class="w-100 mx-auto answer-menu">
        <div class="position-relative h-100 answer-menu__grayBg">
            <div class="h-100 mx-auto answer-menu__container">
                <div class="d-flex position-absolute answer-menu__inner">    
                    <button class="d-flex flex-column align-items-center justify-content-center position-relative w-100 text-center answer-menu__answer" v-for="(answer, i) in $store.getters.jsonData.AnswerOptions" :class="{selected: isSelected === i}" @click="removeBoxShadow(i)">                            
                        <input type="radio" :value="answer" v-model="checkedAnswer"/>
                        <label>{{answer}}</label>
                    </button>
                    <button class="answer-menu__button" @click="sendAnswer">Check</button>
                </div>               
            </div>
        </div>
    </div>
</template>  
  
<script>
    export default{  
        data(){
            return{
                checkedAnswer: 'null',
                isSelected: false
            }               
        },    
        methods:{
            removeBoxShadow(i){
                this.isSelected = i;
            },
            sendAnswer(){              
                if(this.checkedAnswer === this.$store.getters.jsonData.CorrectAnswer){
                    alert("Correctly!");
                } else if(this.checkedAnswer === 'null'){
                    alert("Choose the correct option");
                } else{
                    alert("Incorrectly!");
                }
                this.checkedAnswer = 'null';
                this.isSelected = false;
            }
        }
    }
</script>

<style scoped>
    .answer-menu{
        max-width: 1295px;
        height: 82px; 
    }

    .answer-menu__grayBg{
        background-color: rgba(221,221,226,.7);        
    }

    .answer-menu__container{
        max-width: 1010px;
        background: repeating-linear-gradient(
            to right,
            #e0c6ca,
            #e0c6ca 59px,
            #dcdce1 28px,
            #dcdce1 87px
        );
    }

    .answer-menu__inner{
        left: 0;
        right: 0;
        z-index: 3;
        background-color: transparent;
        padding: 0 27px;
        column-gap: 18px;
    }

    .answer-menu__answer{
        background-color: rgba(255,255,255,.5);
        height: 47px;
        border: 0;
        margin: 18px 0;
        border-radius: 10px;
        font-size: 2rem;
        box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.1);
    }

    .selected{
        box-shadow: none;
    }

    .answer-menu__answer label{
        font-size: 1.3rem;
        font-weight: 600;
    }

    input[type=radio] {
        opacity: 0;
        position: absolute;
        left: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;      
    }

    .answer-menu__button{
        display: inline-block;
        padding: 0 36px;
        border: 0;
        background-color: rgba(255,255,255,.5);
        margin: 18px 0;
        border-radius: 10px;
        font-weight: 600;
        box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }

    .answer-menu__button:hover{
        box-shadow: none;
    }

    @media(max-width: 1200px){
        .answer-menu__grayBg{
            background: transparent;
        }

        .answer-menu__container{
            position: relative;
        }
    }

    @media(max-width: 576px){   
        .answer-menu__container{
            background: none;
        }

        .answer-menu__inner{
            flex-direction: column;
            align-items: center;
            flex-wrap: wrap;
            background: repeating-linear-gradient( to right, #e0c6ca, #e0c6ca 59px, #dcdce1 28px, #dcdce1 87px );
        }

        .answer-menu__button{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 150px;
            padding-top: 14px;
            padding-bottom: 14px;
        }
    }
</style>