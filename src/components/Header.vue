<template>
    <header>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <!-- Slide One - Set the background image for this slide in the line below -->
                <div class="carousel-item active"
                     style="background-image: url('https://images.wallpaperscraft.com/image/computer_keyboard_mouse_laptop_mac_apple_66734_1920x1080.jpg')">
                    <div class="carousel-caption d-none d-md-block">
                        <h3 class="display-4">-30%</h3>
                        <p class="lead">BUY RIGHT NOW</p>
                    </div>
                </div>
                <!-- Slide Two - Set the background image for this slide in the line below -->
                <div class="carousel-item"
                     style="background-image: url('https://source.unsplash.com/wfh8dDlNFOk/1920x1080')">
                    <div class="carousel-caption d-none d-md-block">
                        <h3 class="display-4"> -50%</h3>
                        <p class="lead">BUY RIGHT NOW AND GET BONUSES</p>
                    </div>
                </div>
                <!-- Slide Three - Set the background image for this slide in the line below -->
                <div class="carousel-item"
                     style="background-image: url('https://source.unsplash.com/O7fzqFEfLlo/1920x1080')">
                    <div class="carousel-caption d-none d-md-block">
                        <h3 class="display-4">Third Slide</h3>
                        <p class="lead">This is a description for the third slide.</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'A6'
    }
  }
}
</script>

<style scoped>
  #carouselExampleIndicators {
    margin-top: -1em
  }
</style>
