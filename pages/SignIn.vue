<template>
  <div class="container">
    <div class="inner row">
        <!-- Prem teams slider -->
        <div class="left col-8">
            <slider />
        </div>

        <div class="right col-4">
            <div class="sign-in">
                <h3 class="mb-5 text-center">Sign In</h3>
                <form action="/SignIn">
                    <label for="username" class="ml-2">Username:</label>
                    <input type="text" placeholder="Username" class="mb-4">

                    <label for="password" class="ml-2">Password:</label>
                    <input type="password" placeholder="Password" class="mb-4">

                    <button class="btn w-100" type="submit">Sign In</button>
                </form>
            </div>
            <nuxt-link to="/Register">
                <p class="register mt-3 text-center">I do not have an account yet</p>
            </nuxt-link>
        </div>
    </div>
  </div>
</template>

<script>
import Slider from '../components/Slider.vue'
export default {
    name: 'SignIn',
    components: { Slider },
}
</script>

<style lang="scss" scoped>
.container {
    background-color: #000000;
    .inner{
        position: relative;
        height: 100vh;
        display: flex;
        align-content: center;
        .left {
            padding-right: 0;
        }
        .right {
            background-color: var(--right-item-color2);
            color: #d9d9d9;
            border-top-right-radius: 16px;
            border-bottom-right-radius: 16px;
            padding: 20px;

            .register {
                font-size: 10px;
                padding: 5px auto;
            }
        }
    }
}

h3 {
    font-weight: 700;
}

input {
    width: 100%;
    height: 40px;
    background-color: #000000;
    border: 1px var(--border) solid;
    border-radius: 32px;
    outline: none;
    padding: 12px 30px;
    font-size: 15px;
    color: var(--item-text-color);

    &:focus, &:active {
        border: var(--blue-hover) 1px solid;
    }
}

.btn:hover {
    background-color: var(--blue);
    color: #FFFFFF;
}

@media (max-width: 1240px) {
    .left {
        display: none;
    }
    .row {
        justify-content: center;
    }
    .col-4 {
        flex: 0 0 100%;
        max-width: 40%;
    }

    .right {
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
    }
}

@media (max-width: 992px) {
    .col-4 {
        max-width: 65%;
    }
}

@media (max-width: 575px) {
    .col-4 {
        max-width: 80vw;
    }
}
</style>