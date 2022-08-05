<template>
  <section class="article-section">
    <div class="container">
      <div class="row px-5">
        <!-- article-title -->
        <h2 class="article-title col-lg-12 pt-5 pb-2" v-if="!readingMode">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <!-- article-budges -->
        <div class="article-budges col-lg-12 mb-4" v-if="!readingMode">
          <span class="badge bg-danger ms-1 px-3 py-2 mt-2">Lorem</span>
          <span class="badge bg-danger ms-3 px-3 py-2 mt-2">Lorem Lorem</span>
          <span class="badge bg-danger ms-3 px-3 py-2 mt-2">Loremmm</span>
        </div>
        <!-- article-image -->
        <div class="article-image" v-if="!readingMode">
          <img
            src="../assets/images/arcella.jpg"
            alt="arcella-telecom-company"
          />
        </div>
      </div>
      <!-- article-menu -->
      <div class="row px-5 my-4">
        <!-- article-date -->
        <div class="col-lg-3 d-flex justify-content-start">
          <p>
            <i class="fas fa-clock"></i> {{ this.$helpers.getDateForNow() }}
          </p>
        </div>
        <!-- article-actions -->
        <div class="article-actions col-lg-9 d-flex justify-content-end">
          <button class="btn btn-light mx-4 d-flex align-items-center">
            <i class="fas fa-share-alt"></i> <strong class="px-2">Share</strong>
            <!-- in the url you can put the valid article url after publishing -->
            <Share
              :url="`https://arcellatelecom.com/`"
              :title="title"
              source="modifySource"
              :description="`this is some testing text made by Saad Natiq Nori`"
              image="../assets/images/arcella.jpg"
              :facebook="true"
              :linkedin="false"
              :twitter="false"
              :google="false"
              :QQ="false"
              :weibo="false"
              :weChat="false"
              :douban="false"
              :QZone="false"
              :diandian="false"
              >sassa</Share
            >
          </button>

          <div class="article-readmode">
            <button class="btn btn-white" @click="switchToReadingMode">
              <i class="fas fa-file-alt"></i> &nbsp;{{
                readingMode ? "Disable" : "Enable"
              }}
              reading mode
            </button>
            <span class="mx-2">|</span>
            <button class="btn btn-white" @click="zoomOutText">A-</button>
            <button class="btn btn-white" @click="resetTextSize">A</button>
            <button class="btn btn-white" @click="zoomInText">A+</button>
          </div>
        </div>
      </div>
      <h2 class="article-title pt-5 pb-2 px-5" v-if="readingMode">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <!-- article-description -->
      <div
        class="article-description px-5"
        :style="['fontSize:' + defaultTextSize + 'px']"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          neque optio nemo nostrum blanditiis eligendi quia! Amet quos explicabo
          sequi harum ratione dolor totam officiis. Eum illum dolorum laudantium
          nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus neque optio nemo nostrum blanditiis eligendi quia! Amet quos
          explicabo sequi harum ratione dolor totam officiis. Eum illum dolorum
          laudantium nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Accusamus neque optio nemo nostrum blanditiis eligendi quia!
          Amet quos explicabo sequi harum ratione dolor totam officiis.Accusamus
          neque optio nemo nostrum blanditiis eligendi quia! Amet quos explicabo
          sequi harum ratione dolor totam officiis. Eum illum dolorum laudantium
          nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Eum illum dolorum laudantium nesciunt.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusamus neque optio nemo nostrum
          blanditiis eligendi quia! Amet quos explicabo sequi harum ratione
          dolor totam officiis. Eum illum dolorum laudantium nesciunt.Lorem
          ipsum dolor sit amet consectetur adipisicing elit.Accusamus neque
          optio nemo nostrum blanditiis eligendi quia! Amet quos explicabo sequi
          harum ratione dolor totam officiis. Eum illum dolorum laudantium
          nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Accusamusneque optio nemo nostrum blanditiis eligendi quia! Amet quos
          explicabo sequi harum ratione dolor totam officiis. Eum illum dolorum
          laudantium nesciunt. dolor totam officiis. Eum illum dolorum
          laudantium nesciunt, dolor totam officiis. Eum illum dolorum
          laudantium nesciunt.
        </p>
        <p>
          Accusamusneque optio nemo nostrum blanditiis eligendi quia! Amet quos
          explicabo sequi harum ratione dolor totam officiis. Eum illum dolorum
          laudantium nesciunt. dolor totam officiis. Eum illum dolorum
          laudantium nesciunt, dolor totam officiis. Eum illum dolorum
          laudantium nesciunt.Accusamusneque optio nemo nostrum blanditiis
          eligendi quia! Amet quos explicabo sequi harum ratione dolor totam
          officiis. Eum illum dolorum laudantium nesciunt. dolor totam officiis.
          Eum illum dolorum laudantium nesciunt, dolor totam officiis. Eum illum
          dolorum laudantium nesciunt.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import { Share } from "vue3-social-share";
import "vue3-social-share/lib/index.css";

export default {
  components: {
    Share,
  },
  setup() {
    // switch reading mode function
    const readingMode = ref(false);
    const switchToReadingMode = () => {
      if (readingMode.value) {
        readingMode.value = false;
      } else {
        readingMode.value = true;
      }
    };
    //zoom in and out description texts function
    const defaultTextSize = ref(17);
    const zoomInText = () => {
      if (defaultTextSize.value >= 35) {
        console.log("You cant zoom in more");
        return;
      }
      defaultTextSize.value += 3;
    };
    const zoomOutText = () => {
      if (defaultTextSize.value <= 9) {
        console.log("You cant zoom out more");
        return;
      }
      defaultTextSize.value -= 3;
    };
    const resetTextSize = () => {
      defaultTextSize.value = 17;
    };
    //get title or project name from global variables
    const title = ref("");
    onMounted(() => {
      title.value = process.env.VUE_APP_PROJECT_NAME;
    });
    return {
      readingMode,
      switchToReadingMode,
      defaultTextSize,
      zoomInText,
      zoomOutText,
      resetTextSize,
      title,
    };
  },
};
</script>

<style>
@import "../assets/css/article.css";
</style>
