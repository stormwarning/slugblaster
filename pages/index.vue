<template>
    <div class="container">
        <div ref="parallaxCover">
            <img
                data-depth="0.10"
                src="~/assets/img/cover-gradient.png"
                alt=""
            />
            <img data-depth="0.20" src="~/assets/img/cover-burst.png" alt="" />
            <img data-depth="0.50" src="~/assets/img/cover-junk.png" alt="" />
            <img data-depth="0.70" src="~/assets/img/cover-rider.png" alt="" />
        </div>
    </div>
</template>

<script>
import Parallax from 'parallax-js'
import Logo from '~/components/Logo.vue'

export default {
    components: {
        Logo,
    },

    mounted() {
        this.Parallax = new Parallax(this.$refs.parallaxCover, {
            relativeInput: true,
            hoverOnly: true,
        })
    },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
