<template>
  <div class="sectionPopapSelect"></div>
</template>

<script>

import store from "../../../store"
import svgWork from "../../../js/svgWork"

export default {
  store,
  data(){
    return{
      sectionNumber: {}
    }
  },
  props: {
    section: {}
  },
  watch: {
    section: function(){  
      this.sectionNumber = this.section
      this.selectSection()
      this.drawSVG()
    },
    zoom: function(){
      document.querySelector(".sectionPopapSelect").style=`width:${store.getters.ZOOM * 10}%`
    }
  },
  computed: {
    zoom(){
      return store.getters.ZOOM
    },
  },
  methods: {
    showModal(bool, index){
      this.$emit('showModal', bool)
      if(this.sectionNumber === 1){
        this.$emit('apartNumber1', index)
      }
      if(this.sectionNumber === 2){
        this.$emit('apartNumber2', index)
      }
      if(this.sectionNumber === 3){
        this.$emit('apartNumber3', index)
      }
    },
    selectSection(){
      if(this.sectionNumber === 1){
        document.querySelector(".sectionPopapSelect").innerHTML = store.getters.SECTION1
      }
      if(this.sectionNumber === 2){
        document.querySelector(".sectionPopapSelect").innerHTML = store.getters.SECTION2
      }
      if(this.sectionNumber === 3){
        document.querySelector(".sectionPopapSelect").innerHTML = store.getters.SECTION3
      }
    },
    backlightOn(apart, index) {
      if(this.sectionNumber === 1){
        this.$emit('apartNumber1', index)
      }
      if(this.sectionNumber === 2){
        this.$emit('apartNumber2', index)
      }
      if(this.sectionNumber === 3){
        this.$emit('apartNumber3', index)
      }
      apart.setAttribute("style", "fill: #E4CDA1")
    },

    backlightOff(apart) {
      apart.setAttribute("style", "fill: #CFD0D0")
    },

    drawSVG(){
      const sectionSVG = document.querySelector(".sectionPopapSelect svg")
      if(this.sectionNumber === 1){
        sectionSVG.setAttribute("transform", "translate(150 0)")
      }
      else if(this.sectionNumber === 2){
        sectionSVG.setAttribute("transform", "translate(150 0)")
      }
      else if(this.sectionNumber === 3){
        sectionSVG.setAttribute("transform", "translate(0 -50)")
      }
      svgWork.findFlat(this.sectionNumber, "sectionPopapSelect", "SelectedApartments")
      const apartments = document.querySelectorAll(".SelectedApartments")
      const apartment = document.querySelector(".sectionPopapSelect svg")
      apartment.setAttribute("style", "pointer-events: all;") 
      apartments.forEach((apart, index) => {
        apart.addEventListener("mouseover", () => this.backlightOn(apart, index))
        apart.addEventListener("mouseout", () => this.backlightOff(apart))
        apart.addEventListener("click", () => this.showModal(true, index))
    })
    }
    
  },
  mounted(){
    this.selectSection()
  },
}

</script>

<style lang="scss" scoped>
  .sectionPopapSelect{
    width: 90%;
    height: 40%;
  }
</style>