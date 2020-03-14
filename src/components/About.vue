<template>
  <div id="about">
    <Diamond msg="About" />
    <div class="cont">
      <div class="row">
        <div class="col-md-6">
          <h2 class="text-center">Education</h2>
          <div class="row">
            <div class="col-md-4">
              <img
                src="http://saknepal.org/wp-content/uploads/2015/05/University-of-Guelph1.jpg"
                class="img-fluid school-img"
                alt="Responsive image"
              />
            </div>
            <div class="col-md-8">
              <p class="msg">
                <br />I am currently completing my 4th year at the University of Guelph,
                studying both computer science and mathematics.
                <br />
                <br />Object oriented programming (OOP), Data structures
                and Algorithms are a few of the many topics I have experience with.
                <br />
                <br />A more recent topic of study for me is Artificial Intelligence (AI). I am
                very interested in the area of machine learning and more specifically
                the application of neural networks.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="text-center">Interests</h2>
          <img src="../assets/AI.png" class="img-fluid hobbie-img" alt="Responsive image" />
          <img src="../assets/ball.png" class="img-fluid hobbie-img" alt="Responsive image" />
          <img src="../assets/pong.png" class="img-fluid hobbie-img2" alt="Responsive image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Diamond from "./Diamond.vue";
export default {
  name: "About",
  components: {
    Diamond
  }
};
</script>

<style scoped>
#about {
  background-color: #eeefef;
}
.cont {
  max-width: 1920px;
  margin: 0 auto;
}
.school-img,
.hobbie-img,
.hobbie-img2 {
  display: block;
  margin: 0 auto;
}
.hobbie-img {
  max-width: 153px;
  padding: 5px;
}
.hobbie-img2 {
  max-width: 145px;
  padding: 5px;
}

.msg {
  padding: 20px;
  max-width: 900px;
  font-family: "Courier New", Courier, monospacel;
  font-weight: 900;
}
</style>
