<script>
import { ref, reactive } from "vue";
import { useDisplayDataStore } from "./store-management/useDisplayDataStore";

import LandingPage from "./pagetoview/LandingPage.vue";

import LoadingPage from "./components/LoadingPage.vue";

import WhatsappButton from "./components/WhatsappButton.vue";

export default {
  components: {
    LandingPage,
    LoadingPage,
    WhatsappButton,
  },
  setup() {
    const storeElt = useDisplayDataStore();

    const navlinksItems = reactive({
      0: {
        id: "home-link",
        text: "Home",
        ref: null,
      },
      1: {
        id: "projects-link",
        text: "Projects",
        ref: null,
      },
      2: {
        id: "contact-link",
        text: "Contact",
        ref: null,
      },
    });

    const scrollPosEx = ref(0);

    const isNavDisplayed = ref(true);

    const navlinkLanguage = ref({
      fr: "FR",
      en: "EN",
    });

    const selectLangRef = ref(null);

    const selectLang = ref(null);

    const itemsRef = ref({});

    const itemsRefMenu = ref({});

    const checkMenuRef = ref(null);

    const middleBarRef = ref(null);

    const modalMenuRef = ref(null);

    /* navlink reference indexing (use a Fn) */

    const setItemRef = (el, key, typeMedia) => {
      if (el) {
        if (typeMedia === "desktop") {
          itemsRef.value[key] = el;
        } else {
          itemsRefMenu.value[key] = el;
        }
      }
    };

    return {
      navlinksItems,
      navlinkLanguage,
      selectLangRef,
      selectLang,
      itemsRef,
      itemsRefMenu,
      checkMenuRef,
      middleBarRef,
      modalMenuRef,
      storeElt,
      scrollPosEx,
      isNavDisplayed,
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
    getProject(projectId) {
      this.storeElt.$patch({ isLoading: true });

      //option API syntax NextTick : await nextTick after data has been updated and execute internal next Fn further () => {return}
      this.$nextTick(() => {
        return;
      });

      setTimeout(() => {
        this.storeElt.$patch({ isLoading: false });
      }, 3000);

      this.$router.push({
        path: `/project/${projectId}`,
        query: { value: "multiple" },
      });
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

    async handleNavigationPath(e, key) {
      console.log("e target :", e.target);

      console.log("this itemsRef :", this.itemsRef);

      const itemsNavDesktop = this.itemsRef;

      const itemsNavMobile = this.itemsRefMenu;

      await Object.keys(itemsNavDesktop).forEach((ex_key) => {
        itemsNavDesktop[ex_key].classList.remove("active__navlink");
        itemsNavMobile[ex_key].classList.remove("active__navlink");
      });

      itemsNavDesktop[key].classList.add("active__navlink");

      itemsNavMobile[key].classList.add("active__navlink");

      /* push to the new Route */
      switch (key) {
        case "0":
          this.getHome();
          break;
        case "1":
          this.getProject("danton_shield");
          break;
        case "2":
          this.getContact();
          break;
        default:
          throw new Error(
            "There is a problem switching navlink route in navbar",
          );
      }

      // close Menu

      //option API syntax NextTick : await nextTick after data has been updated and execute no internal next Fn further () => {return}
      this.$nextTick(() => {
        return;
      });

      this.handleMenu(e);
    },
    handleMenu(e) {
      console.log("e target :", e.target);

      if (
        e.currentTarget.classList.contains("icon_menu_close") ||
        e.currentTarget.classList.contains("modal_menu_link")
      ) {
        this.checkMenuRef.checked = !this.checkMenuRef.checked;
      }

      if (this.checkMenuRef?.checked) {
        this.middleBarRef.classList.add("active_menu");
        this.modalMenuRef.classList.add("active_menu");
      } else {
        this.middleBarRef.classList.remove("active_menu");
        this.modalMenuRef.classList.remove("active_menu");
      }
    },
    handleScroll() {
      /* const viewportInWidth = getComputedStyle(targetElt).width; */

      // 1. Get current vertical scroll position
      const scrollPosNew = window.scrollY;

      // 2. Calculate the difference (Delta Y)
      // Positive = Scrolling Down | Negative = Scrolling Up
      const deltaY = scrollPosNew - this.scrollPosEx;

      // 3. Movement Logic
      // We only act if the user has scrolled a significant amount (threshold)
      if (deltaY >= 45) {
        // User is scrolling down aggressively -> Hide Nav
        setTimeout(() => {
          this.isNavDisplayed = false;
        }, 5000);
      } else if (deltaY <= -30) {
        // User is scrolling up -> Show Nav
        setTimeout(() => {
          this.isNavDisplayed = true;
        }, 350);
      }

      // 4. Force Show Nav if we are at the very top of the page
      if (scrollPosNew <= 0) {
        this.isNavDisplayed = true;
      }

      // 5. Update the reference for the NEXT scroll event
      this.scrollPosEx = scrollPosNew;
    },
  },
  computed: {
    isNavbar() {
      return this.storeElt.isNavbar;
    },
    isFooter() {
      return this.storeElt.isFooter;
    },
    isLoading() {
      return this.storeElt.isLoading;
    },
  },

  // watch route when router back to higkight the first navlink ("Home")
  watch: {
    $route(to, from) {
      if (to.name === "home") {
        this.itemsRef[0]?.classList.add("active__navlink");
      } else if (to.name === "contact") {
        this.itemsRef[2]?.classList.add("active__navlink");
      }
    },
  },
  updated() {
    this.langSelected();
  },
  mounted() {
    if (this.itemsRef && this.itemsRefMenu) {
      this.itemsRef[0]?.classList.add("active__navlink");
      this.itemsRefMenu[0]?.classList.add("active__navlink");
    }

    this.langSelected();

    // Attach the global scroll listener
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Clean up the listener when the component is destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <transition name="delayed-fade" mode-out="out-in">
    <div v-if="!isLoading" class="w-full h-full" key="principal">
      <header>
        <!-- i have set navbar invisible -- temporary -->
        <nav
          v-if="isNavbar"
          id="navbar"
          class="navbar__desktop flex flex-row justify-between items-center pl-[2rem] pr-[1rem] bg-[var(--background-secondary)]"
          :class="{
            isDisplayed: isNavDisplayed,
            '': !isNavDisplayed,
          }"
        >
          <div class="logo__nav-container">
            <div class="logo__nav-icon"></div>
            <div class="logo_nav-name">
              <h5>SuitCase Home</h5>
            </div>
          </div>
          <!-- navlinks desktop -->
          <ul
            class="navlinks__desktop-container w-[40%] h-full hidden min-[620px]:flex flex-row justify-end items-center gap-[1.5em]"
          >
            <li
              class="navlink__item cursor-pointer z-20"
              :key="value.id"
              v-for="(value, key) in navlinksItems"
              :ref="(el) => setItemRef(el, key, 'desktop')"
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

          <!-- navlinks  mobile -->
          <ul
            class="navlinks__mobile-container w-max h-full flex items-center gap-1 min-[620px]:hidden"
          >
            <li
              class="navlink__mobitem-language w-[3.5rem] flex flex-row justify-center z-20"
            >
              <select
                name="language"
                id="language-selected"
                class="cursor-pointer flex-shrink-0 opacity-85"
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

            <!-- Menu Mobile -->
            <li>
              <div class="menu_wrap block">
                <div
                  class="menu_content relative w-8 h-8 flex justify-center items-center rounded border border-solid border-[var(--accent-color-3)]"
                >
                  <div
                    class="middle_bar relative h-[1px] w-[72%] bg-[var(--text-paragraph)] z-0"
                    ref="middleBarRef"
                  ></div>
                  <div
                    class="input_check_wrap absolute w-4/5 h-4/5 opacity-0 mx-auto z-10"
                    @click="handleMenu"
                  >
                    <input
                      type="checkbox"
                      name="checkbox"
                      class="check_menu w-full h-full rounded cursor-pointer"
                      ref="checkMenuRef"
                    />
                  </div>
                </div>
                <div class="modal_menu" ref="modalMenuRef">
                  <div class="modal_close w-full">
                    <div
                      class="icon_menu_close w-full h-6 cursor-pointer flex flex-row justify-end"
                      @click="handleMenu"
                    >
                      x
                    </div>
                  </div>
                  <ul class="modal_menu_links flex flex-col space-y-6">
                    <li
                      class="modal_menu_link z-10"
                      :key="value.id"
                      v-for="(value, key) in navlinksItems"
                      :ref="(el) => setItemRef(el, key, 'mobile')"
                      @click="(e) => handleNavigationPath(e, key)"
                    >
                      <div
                        class="holder_navlink inline-flex items-center justify-end tansition-all duration-300 ease-in-out hover:text-[var(--link--external-btn)] cursor-pointer"
                      >
                        <div>
                          <p class="nav_p_link cursor-pointer">
                            {{ value.text }}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <!-- introduce component routed -->
      <router-view :user-language="selectLang"></router-view>

      <!-- i have set footer hidden -- temporary -->

      <footer v-if="isFooter" id="footer" class="w-full mx-auto">
        <div class="footer__container pt-20 pb-10 max-[420px]:pb-14 px-[1rem]">
          <div
            class="footer__upper w-full h-auto min-[420px]:h-48 flex flex-col items-center md:flex-row md:items-start md:justify-between gap-10 md:gap-4 pt-[2%]"
          >
            <div
              class="footer__upper-left w-[76%] md:w-[36%] text-center md:text-left"
            >
              <div class="footer__logo-container">
                <div class="footer__logo-icon"></div>
                <div class="footer__brand-name"><h3>SuitCase Home</h3></div>
              </div>
            </div>
            <div
              class="footer__upper-right w-[86%] md:w-[64%] h-full grid grid-cols-1 grid-rows- gap-2 min-[420px]:grid-cols-3 min-[420px]:grid-rows-1 place-items-center md:place-items-left"
            >
              <div class="footer_item">
                <h4
                  class="footer__item-title pb-4 min-[420px]:pb-1 text-center lg:text-left"
                >
                  Home
                </h4>
                <ul class="footer__item-context">
                  <li class="footer__item-link">Mission</li>
                  <li class="footer__item-link">Trust</li>
                  <li class="footer__item-link">services</li>
                </ul>
              </div>
              <div class="footer_item">
                <h4
                  class="footer__item-title pb-4 min-[420px]:pb-1 text-center lg:text-left"
                >
                  Projects
                </h4>
                <ul class="footer__item-context">
                  <li class="footer__item-link">Project One</li>
                  <li class="footer__item-link">Project Two</li>
                  <li class="footer__item-link">Project Three</li>
                </ul>
              </div>
              <div class="footer_item">
                <h4
                  class="footer__item-title pb-4 min-[420px]:pb-1 text-center lg:text-left"
                >
                  Contact
                </h4>
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
          <div
            class="footer__lower h-14 mt-10 px-4 md:h-8 md:mt-0 md:px-0 flex flex-row justify-between items-center"
          >
            <div
              class="footer__lower-left h-full flex flex-row items-center space-x-2"
            >
              <div>
                <span class="smaller__span">Suitcase home</span>
                <span class="smaller__span max-[420px]:hidden">.</span>
              </div>
              <div class="max-[420px]:hidden">
                <span class="smaller__span pr-1">&copy;</span>
                <span class="smaller__span">2025 All right reserved.</span>
              </div>
            </div>
            <div class="footer__lower-right">
              <span class="smaller__span pr-[0.25rem]">Terms Of Services</span>
            </div>
          </div>
          <div class="footer__lower-extra">
            <div class="copyright__mobile text-center min-[420px]:hidden">
              <span class="smaller__span pr-1">&copy;</span>
              <span class="smaller__span">2025 All right reserved.</span>
            </div>
          </div>
        </div>
      </footer>
      <!-- floating whatsapp button-->
      <WhatsappButton />
    </div>

    <!-- when Loading is played -->
    <div v-else key="loading" class="absolute top-0 left-0 w-full h-full">
      <LoadingPage />
    </div>
  </transition>
</template>

<style scoped>
/* utilities */
:root {
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}

ul {
  list-style: none;
}
/* Navbar */
#navbar {
  width: 100vw;
  height: 50px;
  margin: 0 auto;
  z-index: 15;
}

li.navlink__item,
li.modal_menu_link {
  width: max(6.45rem, 8%);
  color: inherit;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: all 1s ease;
}

li.navlink__item.active__navlink,
li.modal_menu_link.active__navlink {
  /* do something */
  color: var(--background-primary);
  background-color: hsla(32, 30%, 37%, 0.65);
}

/* navbar scrolling animation - mobile */
.navbar__desktop {
  position: fixed;
  top: 0;
  width: 100%;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); /* The "cool" ease */
}

.isDisplayed {
  transform: translateY(0);
}

.navbar__desktop:not(.isDisplayed) {
  transform: translateY(-100%);
}

/* ── View transition ──────────────────────────────── */

/* timing for the transition effect before enter */
.delayed-fade-enter-active {
  transition:
    opacity 0.35s var(--ease-smooth),
    transform 0.35s var(--ease-smooth);
}
/* timing for the transition effect before leave */
.delayed-fade-leave-active {
  transition:
    opacity 0.35s var(--ease-smooth),
    transform 0.35s var(--ease-smooth);
  transition-delay: 0.28s; /* the wait period */
}

/* starting point */
.delayed-fade-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
/* final point after the wait and fade */
.delayed-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);

  position: absolute;
  width: calc(100% - 5rem);
}

@media screen and (min-width: 140px) {
  /* Menu Mobile */
  .middle_bar {
    transition: all 1s ease;
  }

  .middle_bar::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: var(--text-paragraph);
    transition: all 1s ease;
  }

  .middle_bar::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: var(--text-paragraph);
    transition: all 1s ease;
  }

  .input_check_wrap {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* activate menu */

  .middle_bar.active_menu {
    transform: rotate(135deg);
  }

  .middle_bar.active_menu::before {
    top: 0;
    /* transform: rotate(45deg); */
    transform: rotate(90deg);
  }

  .middle_bar.active_menu::after {
    top: 0;
    /* transform: rotate(135deg); */
    transform: rotate(90deg);
  }

  .modal_menu {
    position: absolute;
    top: 3.5rem;
    left: 0;
    /*  transform: scale(0.45) translateX(-50%); */
    transform: translateX(-100%);
    width: max(260px, 90%);
    height: 18.75rem;
    padding: 1.125rem 0.9rem;
    color: var(--accent-color-1);
    background-color: var(--accent-color-4);
    visibility: invisible;
    opacity: 0;
    border-radius: 50%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: all 310ms linear;
  }

  .modal_menu.active_menu {
    position: absolute;
    top: 4.15rem;
    left: 50%;
    /* transform: scale(1) translateX(-50%); */
    transform: translateX(-50%);
    width: max(260px, 90%);
    height: 18.75rem;
    padding: 1.125rem 0.9rem;
    visibility: visible;
    opacity: 0.99;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: all 300ms linear;
  }

  /* footer */
  .footer__item-context {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  .footer__item-link {
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
}

@media screen and (min-width: 420px) {
  /* footer */
  h4.footer__item-title {
    font-size: var(--regular-size);
    line-height: 1.6;
  }

  .footer__item-link {
    padding: 0.25rem 0;
    font-size: var(--cater-size);
  }
}

@media screen and (min-width: 768px) {
  /* footer */
  h4.footer__item-title {
    font-size: var(--regular-size);
  }

  .footer__item-link {
    padding: 0.25rem 0 0.25rem 0.5rem;
    font-size: var(--cater-size);
  }
}

@media screen and (min-width: 1280px) {
  /* footer */
  h4.footer__item-title {
    font-size: var(--subtitle-size);
    line-height: 1.5;
  }

  .footer__item-context {
    align-items: center;
  }
}
</style>
