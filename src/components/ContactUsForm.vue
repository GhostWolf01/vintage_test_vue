<template>
    <section class="contactUsForm">
        <div class="container">
            <div class="contactUsForm__inner">
                <div class="contactUsForm__form">
                    <form target="_blank" novalidate="true" v-on:submit="checkForm" action="http://httpbin.org/post" method="post">
                        <legend class="contactUsForm__form-title">
                            <h3 id="contactUsTitle">Contact Us</h3>
                        </legend>
                        <div class="contactUsForm__form-name" v-bind:class="{'contactUsForm__form-name--error': $v.name.$error}" >
                            <label for="name">Name</label>
                            <input required  name="name" id="name" v-model="$v.name.$model" patern="[a-zA-Zа-яїєА-Яїє][a-zа-яїє]* [a-zA-Zа-яїєА-Яїє][a-zа-яїє]*" maxlength="30" placeholder="Name" type="text">
                        </div>
                        <div class="contactUsForm__form-phone" v-bind:class="{'contactUsForm__form-phone--error': $v.phone.$error}">
                            <label for="phone">Phone 0445555555</label>
                            <input required id="phone" name="phone" maxlength="13" v-model="$v.phone.$model" placeholder="Phone 0445555555" type="text">
                        </div>
                        <div class="contactUsForm__form-email" v-bind:class="{'contactUsForm__form-email--error': $v.email.$error}">
                            <label for="email">E-mail</label>
                            <input required id="email" name="email" v-model="$v.email.$model" placeholder="E-mail" type="email">
                        </div>
                        <div class="contactUsForm__form-check" v-bind:class="{'contactUsForm__form-check--error': $v.checked.$error}">
                            <input required type="checkbox" name="checked" id="checkbox" v-model="$v.checked.$model">
                            <label for="checkbox">I agree the processing of personal data</label>
                        </div>
                        <div class="contactUsForm__form-submit">
                            <input type="submit" value="Get in touch">
                        </div>
                    </form>
                </div>
                <div  class="contactUsForm__text" >
                    <p>Please tell us more about your request and give us info about your company and country</p>
                </div>
                <div v-show="formSent" class="contactUsForm__result" v-bind:class="{'contactUsForm__result--active' : formSent}">
                    <p>The form is submitted successfully!</p>
                    <button class="contactUsForm__result-btn" v-on:click="formSent=false">OK</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { required, maxLength, email, helpers } from 'vuelidate/lib/validators';

const numeric = helpers.regex('numeric', /^\+380[0-9]{9}/i);
const alphaRu = helpers.regex('alpha', /[a-zA-Zа-яїєА-Яїє][a-zа-яїє]* [a-zA-Zа-яїєА-Яїє][a-zа-яїє]*/)
export default {
    data() {
        return {
            name: "",
            phone: '+380',
            email: "",
            checked: false,
            formSent: false
        }
    },
    validations: {
        name: {
            required,
            maxLength: maxLength(30),
            alphaRu
        },
        phone: {
            required,
            maxLength: maxLength(14),
            numeric
        },
        email: {
            required,
            email
        },
        checked: {
            required
        }
    },
    methods: {
        checkForm: function(e) {
            e.submitter.parentElement.className+=" contactUsForm__form-submit--disablet"
            e.submitter.disabled = true;
            this.formSent = true;
            return true;
        }

    }
}
</script>

<style lang="scss">
    .contactUsForm{
        padding: 100px 0;
        background-color: #3db565;
        background-position: 0;
        background-repeat: repeat;
        background-image: url("../assets/Ellipse.png");
        &__inner{
            position: relative;
            display: flex;
            justify-content: start;
            align-items: flex-start;
        }
        &__form{
            width: 50%;
            padding-right: 45px;
            &-title{
                font-size: 36px;
                line-height: 48px;
                color: white;
                margin-bottom: 50px;
            }
            &-name, &-phone, &-email, &-check{
                font-size: 18px;
                line-height: 34px;
                color: black;
                margin-bottom: 25px;
                input {
                    font-size: 18px;
                    line-height: 34px;
                    background: none;
                    border: none;
                    border-bottom: 1px solid black;
                    width: 100%;
                }
                &--error{
                    transition: all 0.6s;
                    label{
                        color: #f04124;
                    }
                    input{
                        border: 1px solid rgba($color: #f04124, $alpha: 0.8);
                    } 
                } 
            }
            &-phone {
                color: white;
                input{
                border: none;
                color: white;
                border-bottom: 1px solid white;
                }
                &--error{
                    transition: all 0.6s;
                    label{
                        color: #f04124;
                    }
                    input{
                        border: 1px solid rgba($color: #f04124, $alpha: 0.8);
                    } 
                }
            } 
            &-check {
                margin-bottom: 50px;
                color: white;
                input {
                width: auto;
                margin-right: 20px;
                }
            }
            &-submit 
            {
                font-size: 11px;
                letter-spacing: 1.54px;
                line-height: 72.3px;
                text-transform: uppercase;
                color: white;
                font-family: 'SuisseIntl-SemiBold';
                input{
                    width: 280px;
                    height: 84px;
                    background-color: #262626;
                    border: none;
                }
                &--disablet{
                    input{
                    background-color: #a1a1a1;
                    }
                }
            }
        }
        &__text{
            padding-top: 75px;
            margin-left: 30px;
            height: 100%;
            width: 50%;
            font-size: 18px;
            line-height: 34px;
        }
        &__result{
            position: absolute;
            background-color: #3db565;
            font-size: 36px;
            line-height: 48px;
            color: white;
            border: 2px solid #262626;
            padding: 10px;
            top: 35%;
            left: 25%;
            text-align: center;
            &-btn {
                margin-top: 10px;
                cursor: pointer;
                width: 280px;
                height: 80px;
                background-color: #262626;
                border: none;
            }
            &--active{
                animation: open 1s;
                height: auto;
                width: auto;
            }
        }
    }
</style>