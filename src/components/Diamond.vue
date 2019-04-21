<template>
<div class="cont">
  <div class='diamond'>
    {{msg}}
  </div>
</div>
</template>

<script>
export default {
    name: 'Diamond',
    props: {
    msg: String
  }
}
</script>

<style scoped>
.cont {
  padding-top: 15px;
  z-index: 5;
}
.diamond {
  position: relative;
  height: 250px;
  width: 250px;
  line-height: 250px;
  text-align: center;
  /* margin: 10px 40px; */
  margin: 0 auto;
  margin-top: -50px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 30px;
  font-weight: 900;
}
.diamond:before {
  position: absolute;
  content: '';
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  transform: rotateX(45deg) rotateZ(45deg);
  box-shadow: 0px 0px 12px gray;
  /* background-color: aliceblue; */
}
.diamond:after {
  position: absolute;
  top: 10px;
  left: 10px;
  content: '';
  height: calc(100% - 22px);  /* -22px is 2 * 10px gap on either side - 2px border on either side */
  width: calc(100% - 22px);  /* -22px is 2 * 10px gap on either side - 2px border on either side */
  border: 1px solid #606ABC;
  transform: rotateX(45deg) rotateZ(45deg);
}
</style>



