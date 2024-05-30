<script lang="ts">
import AsideComponent from "./AsideComponent.vue";

function showSidebar() {
  document.querySelector(".icon")?.classList.toggle("active");
  document.querySelector(".mobile-menu")?.classList.toggle("push-left");
  document.querySelector("body")?.classList.toggle("no-scroll");
}

export default {
  name: "Navbar",
  components: { AsideComponent },
  setup() {
    return {
      showSidebar,
    };
  },
};
</script>

<template>
  <AsideComponent></AsideComponent>
  <header class="header">
    <img
      src="https://vendre.se/thumb/1967/0x68/vendre-optimizers_logo-black.png"
      alt="Logo"
      class="header-logo"
    />
    <nav class="top-menu show-for-large">
      <div class="row">
        <div class="large-12 large-only columns">
          <ul class="inline-list center">
            <li>
              <div class="header-links-position">
                <a
                  href="https://vendre.se/produkt/"
                  data-toggle-element-menu-click="#page-menu-id72"
                  class="svg-icon top-menu-icon"
                  data-desktop-link=""
                  >Produkt</a
                >
              </div>
            </li>
            <li>
              <div class="header-links-position">
                <a
                  href="https://vendre.se/partners/"
                  data-toggle-element-menu-click="#page-menu-id349"
                  class="svg-icon top-menu-icon"
                  data-desktop-link=""
                  >Partners</a
                >
              </div>
            </li>
            <li>
              <a href="https://vendre.se/priser/" data-desktop-link=""
                >Priser</a
              >
            </li>
            <li>
              <a href="https://vendre.se/referenser/" data-desktop-link=""
                >Referenser</a
              >
            </li>
            <li>
              <a href="https://vendre.se/kundcase/" data-desktop-link=""
                >Kundcase</a
              >
            </li>
            <li>
              <div class="header-links-position">
                <a
                  href="https://vendre.se/gallery.php?id=457"
                  data-toggle-element-menu-click="#page-menu-id457"
                  class="svg-icon top-menu-icon"
                  data-desktop-link=""
                  >Kunskap</a
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      class="icon move-left"
      data-slide-in-from-right="data-mobile-menu"
      data-menu-toggle-from="right"
      data-favorite-animation=""
    >
      <span class="icon-menu-button" @click="showSidebar()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <rect y="3.25" width="24" height="1.5"></rect>
          <rect y="11.25" width="24" height="1.5"></rect>
          <rect y="19.25" width="24" height="1.5"></rect>
        </svg>
      </span>
      <span class="icon-close-button" @click="showSidebar()">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8021 4.61221L4.65999 18.7543C4.26946 19.1449 3.6363 19.1449 3.24577 18.7543C2.85525 18.3638 2.85525 17.7307 3.24577 17.3401L17.3879 3.198C17.7784 2.80748 18.4116 2.80747 18.8021 3.198C19.1926 3.58852 19.1926 4.22169 18.8021 4.61221Z"
            fill="black"
          ></path>
          <path
            d="M4.66004 3.14996L18.8022 17.2921C19.1927 17.6826 19.1927 18.3158 18.8022 18.7063C18.4116 19.0968 17.7785 19.0968 17.388 18.7063L3.24582 4.56418C2.8553 4.17365 2.8553 3.54049 3.24582 3.14996C3.63635 2.75944 4.26951 2.75944 4.66004 3.14996Z"
            fill="black"
          ></path>
        </svg>
      </span>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 20px 20px;
  z-index: 1000;
}

.header-logo {
  height: 40px;
  width: auto;
}

.inline-list {
  position: relative;
  margin: 0 auto;
  width: fit-content;
  display: flex;
  gap: 10px;
  list-style: none;
}

.inline-list li a {
  padding: 0 20px;
  display: block;
  position: relative;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.28px;
  transition: 0.2s ease;
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.icon {
  width: 40px;
  min-width: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: right;
  cursor: pointer;
  position: relative;
  margin: 0 20px 0 0;
}

.top-menu {
  display: none;
}

@media screen and (min-width: 930px) {
  .icon {
    display: none;
  }

  .top-menu {
    display: flex;
  }
}

.icon span {
  height: 24px;
  width: 24px;
}

.icon-menu-button {
  display: block;
}

.icon-close-button {
  display: none;
}

.icon.active .icon-menu-button {
  display: none;
}

.icon.active .icon-close-button {
  display: inline;
}
</style>
