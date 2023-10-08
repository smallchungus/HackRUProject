<template>
    <div class="register">
      <form class="form form--hidden" id="createAccount">
            <h1 class="form__title">Register</h1>
            <div class="form__message form__message--error"></div>
            <div class="form__input-group">
                <input type="text" v-model="signupUsername" class="form__input" autofocus placeholder="Username">
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="text" class="form__input" v-model="signupEmail" autofocus placeholder="Email Address">
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" v-model="signupPassword" autofocus placeholder="Password">
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="text" class="form__input" v-model="CardHolderName" autofocus placeholder="Cardholder Name">
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="text" class="form__input" :maxlength=16 v-model="CardNumber" autofocus placeholder="Credit Card Number">
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="month" id="start" v-model="monthVal" name="start" min="2024-03" >
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" :maxlength=3 class="form__input" v-model="CVVval" autofocus placeholder="CVV">
                <div class="form__input-error-message"></div>
            </div>
            <!-- <button class="form__button" @click="store">Continue</button>
            <p class="form__text"> -->
              
            </p>
        </form>
    </div>
  </template>
<script>
export default{
    name: 'RegisterView',
    data(){
        return{
            signupUsername: "",
            signupPassword: "",
            signupEmail : "",
            CardHolderName : "",
            CardNumber : "",
            monthEntered : "",
            monthVal : "",
            CVVval : "",
            signupUsernameStore: "",
            signupPasswordStore: "",
            signupEmailStore : "",
            signupUserNameStore: "",
            CardHolderNameStore: "",
            CardNumberStore: "",
            monthEnteredStore: "",
            monthValStore: "",
            CVVvalStore: ""
        }
    },
    methods: {
        store(){
           this.signupUserNameStore = this.signupUsername
            console.log(this.signupUserNameStore);
            this.signupPasswordStore = this.signupPassword
            console.log(this.signupPasswordStore);
            this.signupEmailStore = this.signupEmail
            console.log(this.signupEmailStore);
            this.CardHolderNameStore = this.CardHolderName
            console.log(this.CardHolderNameStore);
            this.CardNumberStore = this.CardNumber
            console.log(this.CardNumberStore);
            this.monthEnteredStore = this.monthEntered
            console.log(this.monthEnteredStore);
            this.monthValStore = this.monthVal
            console.log(this.monthValStore);
            this.CVVvalStore = this.CVVval
            console.log(this.CVVvalStore);
        }
    },
}
</script>
<style>
</style>