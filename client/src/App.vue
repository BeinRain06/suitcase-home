<script>
import { ref, reactive } from "vue";
import LandingPage from "./pagetoview/LandingPage.vue";

export default {
  components: {
    LandingPage,
  },
  setup() {
    const navlinksItems = reactive({
      0: {
        id: "home-link",
        text: "Home",
      },
      1: {
        id: "projects-link",
        text: "Projects",
      },
      2: {
        id: "contact-link",
        text: "Contact",
      },
    });

    const navlinkLanguage = ref({
      fr: "FR",
      en: "EN",
    });

    const selectLangRef = ref(null);

    const selectLang = ref(null);

    const itemsRef = ref({});

    /* navlink reference indexing (use a Fn) */

    const setItemRef = (el, key) => {
      if (el) {
        itemsRef.value[key] = el;
      }
    };

    return {
      navlinksItems,
      navlinkLanguage,
      selectLangRef,
      selectLang,
      itemsRef,
      setItemRef,
    };
  },
  methods: {
    /* getHome(id_home) {
      if (id_home) {
        this.$router.push({ path: "/", hash: `#${id_home}` });
      } else {
        this.$router.push({ path: "/" });
      }
    },
    getProject(id_project) {
      this.$router.push({ name: "project", params: { projectId: id_project } });
    }, */
    getHome() {
      this.$router.push({ path: "/" });
    },
    getProject() {
      this.$router.push({ path: "/project" });
    },
    getContact() {
      this.$router.push({ path: "/contact" });
    },

    langSelected() {
      const callElement = this.$refs.selectLangRef;

      if (callElement) {
        this.selectLang = callElement.value;
      }

      console.log("selectLang :", this.selectLang);
    },

    handleNavigationPath(e, key) {
      console.log("e target :", e.target);

      console.log("this itemsRef :", this.itemsRef);

      const itemsNav = this.itemsRef;

      Object.keys(itemsNav).forEach((ex_key) =>
        itemsNav[ex_key].classList.remove("active__navlink"),
      );

      itemsNav[key].classList.add("active__navlink");

      /* push to the new Route */
      switch (key) {
        case "0":
          this.getHome();
          break;
        case "1":
          this.getProject();
          break;
        case "2":
          this.getContact();
          break;
        default:
          throw new Error(
            "There is a problem switching navlink route in navbar",
          );
      }
    },
  },
  mounted() {
    if (this.itemsRef) {
      /*  console.log("this itemRef 0:", this.itemsRef[0]); */
      this.itemsRef[0].classList.add("active__navlink");
    }
    this.langSelected();
  },
};
</script>

<template>
  <header>
    <!-- i have set navbar invisible -- temporary -->
    <nav
      id="navbar"
      class="navbar flex flex-row justify-between items-center pl-[2rem] pr-[1rem] bg-[var(--background-secondary)]"
    >
      <div class="logo__nav-container">
        <div class="logo__nav-icon"></div>
        <div class="logo_nav-name">
          <h5>SuitCase Home</h5>
        </div>
      </div>

      <ul
        class="navlinks__desktop-container w-[40%] h-full flex flex-row justify-end items-center gap-[1.5em]"
      >
        <li
          class="navlink__item cursor-pointer z-20"
          :key="value.id"
          v-for="(value, key) in navlinksItems"
          :ref="(el) => setItemRef(el, key)"
          @click="(e) => handleNavigationPath(e, key)"
        >
          {{ value.text }}
        </li>

        <li
          class="navlink__item-language w-[3.5rem] flex flex-row justify-center z-20"
        >
          <select
            name="language"
            id="language-selected"
            class="cursor-pointer flex-shrink-0"
            ref="selectLangRef"
            @change="langSelected"
          >
            <option value="FR" class="option__language">
              {{ navlinkLanguage.fr }}
            </option>
            <option value="EN" class="option__language">
              {{ navlinkLanguage.en }}
            </option>
          </select>
        </li>
      </ul>
    </nav>
  </header>
  <!-- introduce component routed -->
  <router-view :user-language="selectLang"></router-view>

  <!-- i have set footer hidden -- temporary -->

  <footer id="footer" class="w-full hidden mx-auto">
    <div class="footer__container pt-20 pb-10 px-[1rem]">
      <div
        class="footer__upper w-full h-48 flex flex-row justify-between gap-4 pt-[2%]"
      >
        <div class="footer__upper-left w-[36%]">
          <div class="footer__logo-container">
            <div class="footer__logo-icon"></div>
            <div class="footer__brand-name"><h3>SuitCase Home</h3></div>
          </div>
        </div>
        <div class="footer__upper-right w-[64%] h-full grid grid-cols-3">
          <div class="footer_item">
            <h4 class="footer__item-title pb-1">Home</h4>
            <ul class="footer__item-context">
              <li class="footer__item-link">Mission</li>
              <li class="footer__item-link">Trust</li>
              <li class="footer__item-link">services</li>
            </ul>
          </div>
          <div class="footer_item">
            <h4 class="footer__item-title pb-1">Projects</h4>
            <ul class="footer__item-context">
              <li class="footer__item-link">Project One</li>
              <li class="footer__item-link">Project Two</li>
              <li class="footer__item-link">Project Three</li>
            </ul>
          </div>
          <div class="footer_item">
            <h4 class="footer__item-title pb-1">Contact</h4>
            <ul class="footer__item-context">
              <li class="footer__item-link">Contact</li>
              <li class="footer__item-link footer__number">
                <span class="smaller__span">Tel1: +237 6-90-62-52-48</span>
              </li>
              <li class="footer__item-link footer__number">
                <span class="smaller__span">Tel2: +237 6-97-49-90-25</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__lower h-8 flex flex-row justify-between items-center">
        <div
          class="footer__lower-left h-full flex flex-row items-center space-x-2"
        >
          <div><span class="smaller__span">Suitcase home.</span></div>
          <div>
            <span class="smaller__span pr-1">&copy;</span>
            <span class="smaller__span">2025 All right reserved.</span>
          </div>
        </div>
        <div class="footer__lower-right">
          <span class="smaller__span pr-[0.25rem]">Terms Of Services</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* utilities */
ul {
  list-style: none;
}
/* Navbar */
#navbar {
  width: 100vw;
  height: 50px;
  margin: 0 auto;
}

li.navlink__item {
  width: max(6.45rem, 8%);
  color: inherit;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: all 1s ease;
}

li.navlink__item.active__navlink {
  /* do something */
  color: var(--background-primary);
  background-color: hsla(32, 30%, 37%, 0.65);
}

/* footer */
.footer__item-link {
  /* width: 7rem; */
  cursor: pointer;
  width: max-content;
  word-break: break-word;
  padding: 0.25rem 0 0.25rem 0.5rem;
  font-size: var(--cater-size);
  font-weight: 300;
  line-height: 1.35;
  text-decoration: underline;
  border-bottom: 1px solid inherit;
}

li.footer_number {
  cursor: default;
  text-decoration: none;
}
</style>
