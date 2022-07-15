<template>
  <div class="slider-wrapper">
    <b-carousel
    id="carousel-fade"
    v-model="slide"
    class="carousel"
    :interval="4000"
    fade
    background="#FFF"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
    >
        <!-- arsenal -->
        <b-carousel-slide class="carousel-slide">
            <template #img>
            <img
                class="image-slot"
                width="100%"
                height="100%"
                src="../assets/teams/arsenal.gif"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <!-- bournemouth -->
        <b-carousel-slide class="carousel-slide">
            <template #img>
            <img
                class="image-slot"
                width="100%"
                height="100%"
                src="../assets/teams/bournemouth.gif"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <!-- burnley -->
        <b-carousel-slide class="carousel-slide">
            <template #img>
            <img
                class="image-slot"
                width="100%"
                height="100%"
                src="../assets/teams/burnley.gif"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <!-- chelsea -->
        <b-carousel-slide class="carousel-slide">
            <template #img>
            <img
                class="image-slot"
                width="100%"
                height="100%"
                src="../assets/teams/chelsea.gif"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <!-- everton -->
        <b-carousel-slide class="carousel-slide">
            <template #img>
            <img
                class="image-slot"
                width="100%"
                height="100%"
                src="../assets/teams/everton.gif"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <!-- leicester -->
        <b-carousel-slide class="carousel-slide">
            <template #img>
            <img
                class="image-slot"
                width="100%"
                height="100%"
                src="../assets/teams/leicester.gif"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <!-- liverpool -->
        <b-carousel-slide class="carousel-slide">
            <template #img>
            <img
                class="image-slot"
                width="100%"
                height="100%"
                src="../assets/teams/liverpool.gif"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <!-- manchester city -->
        <b-carousel-slide class="carousel-slide">
            <template #img>
            <img
                class="image-slot"
                width="100%"
                height="100%"
                src="../assets/teams/manchester-city.gif"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <!-- manchester united -->
        <b-carousel-slide class="carousel-slide">
            <template #img>
            <img
                class="image-slot"
                width="100%"
                height="100%"
                src="../assets/teams/manchester-united.gif"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <!-- palace -->
        <b-carousel-slide class="carousel-slide">
            <template #img>
            <img
                class="image-slot"
                width="100%"
                height="100%"
                src="../assets/teams/palace.gif"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <!-- southampton -->
        <b-carousel-slide class="carousel-slide">
            <template #img>
            <img
                class="image-slot"
                width="100%"
                height="100%"
                src="../assets/teams/southampton.gif"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <!-- tottenham -->
        <b-carousel-slide class="carousel-slide">
            <template #img>
            <img
                class="image-slot"
                width="100%"
                height="100%"
                src="../assets/teams/tottenham.gif"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <!-- westham -->
        <b-carousel-slide class="carousel-slide">
            <template #img>
            <img
                class="image-slot"
                width="100%"
                height="100%"
                src="../assets/teams/westham.gif"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Slider',
    data () {
        return {
        slide: 0,
        sliding: null
        }
    },
    methods: {
        onSlideStart (slide) {
        this.sliding = true
        },
        onSlideEnd (slide) {
        this.sliding = false
        }
    }
}
</script>

<style lang="scss" scoped>
.image-slot, .carousel-slide, .slider-wrapper, .carousel-inner, .carousel {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    background: #000000;
}
</style>