<template>
    <div class="modal" v-if="show" @click.stop="hideModal">
        <div class="modal__inner">
            <button><img src="../../public/images/close_btn.png" alt="close"></button>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'modal-form',
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideModal() {
                this.$emit('update:show', false)
            }
        }
    }
</script>

<style scoped>
    .modal{
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7);
        position: fixed;
        z-index: 4;
        display: flex;
        align-items: center;
    }

    .modal__inner{
        position: relative;
        margin: 0 auto;
        padding: 30px 70px;
        background: #fff;
        width: 500px;
        height: 500px;
    }

    button{
        position: absolute;
        top: 0;
        right: 0;
        border: 0;
        background: none;
        padding: 15px;
        cursor: pointer;
    }

    @media(max-width:1120px){
        .modal__inner{
            height: 50%;
        }
    }

    @media(max-width: 576px){
        .modal__inner{
            padding: 30px;
        }
    }
</style>