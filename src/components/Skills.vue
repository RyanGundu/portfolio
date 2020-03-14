<template>
  <div id="skills">
    <br />
    <div class="row">
      <div class="skill-bars col-lg-6">
        <h1 class="text-center">SKILLS</h1>
        <br />

        <h3>Languages</h3>
        <v-progress-circular
          class="skill"
          :rotate="-90"
          :size="100"
          :width="15"
          :value="93"
          color="#3e67bc"
        >C</v-progress-circular>
        <v-progress-circular
          class="skill"
          :rotate="-90"
          :size="100"
          :width="15"
          :value="88"
          color="#3e67bc"
        >Java</v-progress-circular>
        <v-progress-circular
          class="skill"
          :rotate="-90"
          :size="100"
          :width="15"
          :value="88"
          color="#3e67bc"
        >JavaScript</v-progress-circular>
        <v-progress-circular
          class="skill"
          :rotate="-90"
          :size="100"
          :width="15"
          :value="88"
          color="#3e67bc"
        >Python</v-progress-circular>
        <br />
        <br />
        <h3>Frameworks</h3>
        <v-progress-circular
          class="skill"
          :rotate="-90"
          :size="100"
          :width="15"
          :value="87"
          color="teal"
        >React</v-progress-circular>
        <v-progress-circular
          class="skill"
          :rotate="-90"
          :size="100"
          :width="15"
          :value="85"
          color="teal"
        >Angular</v-progress-circular>
        <v-progress-circular
          class="skill"
          :rotate="-90"
          :size="100"
          :width="15"
          :value="73"
          color="teal"
        >Vue</v-progress-circular>
        <br />
        <br />
        <h3>Technologies</h3>
        <v-progress-circular
          class="skill"
          :rotate="-90"
          :size="100"
          :width="15"
          :value="84"
          color="pink"
        >Node</v-progress-circular>
        <v-progress-circular
          class="skill"
          :rotate="-90"
          :size="100"
          :width="15"
          :value="72"
          color="pink"
        >GraphQL</v-progress-circular>
        <v-progress-circular
          class="skill"
          :rotate="-90"
          :size="100"
          :width="15"
          :value="76"
          color="pink"
        >Firebase</v-progress-circular>
        <v-progress-circular
          class="skill"
          :rotate="-90"
          :size="100"
          :width="15"
          :value="70"
          color="pink"
        >MySQL</v-progress-circular>
        <v-progress-circular
          class="skill"
          :rotate="-90"
          :size="100"
          :width="15"
          :value="73"
          color="pink"
        >MongoDB</v-progress-circular>
      </div>
      <div class="experience col-lg-6">
        <h1 class="text-center">EXPERIENCE</h1>
        <img
          src="https://postmediawindsorstar2.files.wordpress.com/2014/04/rbc-royal-bank-logo.png?w=1200"
          class="img-fluid work-img"
          alt="Responsive image"
        />
        <div class="job-tag text-center">
          <p>
            Web Developer, WMAI Applied Analytics & Innovation
            <br />May 2019 - August 2019
          </p>
        </div>
        <br />
        <hr />
        <img
          src="https://ryangundu.github.io/images/pandanusLOGO.png"
          class="img-fluid work-img"
          alt="Responsive image"
        />
        <div class="job-tag text-center">
          <p>
            Web Developer
            <br />May 2018 - July 2018
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills"
};
</script>

<style scoped>
#skills {
  max-width: 1920px;
  margin: 0 auto;
  overflow-x: hidden;
}

.row {
  margin: 20px;
}
.skill {
  margin: 5px;
}
.skill-bars,
.experience {
  padding: 10px;
}

.work-img {
  width: 350px;
  margin: 0 auto;
  margin-top: 70px;
  display: block;
}

.job-tag {
  margin-top: 8px;
  font-weight: bold;
}
</style>


