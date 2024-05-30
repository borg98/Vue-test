<script lang="ts">
function showInnerMenu(event: MouseEvent) {
  const parentElement = (event.currentTarget as HTMLElement).parentElement;
  if (parentElement) {
    parentElement.classList.toggle("open");
    parentElement.querySelector("span svg")?.classList.toggle("rotate");
  }
}

export default {
  name: "AsideComponent",
  setup() {
    return {
      showInnerMenu,
    };
  },
};
</script>

<template>
  <aside class="mobile-menu">
    <div class="mobile-menu-wrapper">
      <ul>
        <li class="parent">
          <span data-parent="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path
                d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"
              ></path>
            </svg>
          </span>
          <a
            href="#"
            title="Produkt"
            data-parent=""
            @click="showInnerMenu($event)"
            >Produkt</a
          >
          <ul>
            <li class="item-page-menu">Vendre Suite</li>
            <li class="item-page-link">
              <a href="https://vendre.se/vendre-ecommerce/">Vendre eCommerce</a>
            </li>
            <li class="item-page-link">
              <a href="https://vendre.se/vendre-sales/">Vendre Sales</a>
            </li>
            <li class="item-page-link">
              <a href="https://vendre.se/vendre-cms/">Vendre CMS</a>
            </li>
            <li class="item-page-link">
              <a href="https://vendre.se/vendre-pim/">Vendre PIM</a>
            </li>
          </ul>
          <ul>
            <li class="item-page-menu">Du säljer till</li>
            <li class="item-page-link">
              <a href="https://vendre.se/b2b/">B2B</a>
            </li>
            <li class="item-page-link">
              <a href="https://vendre.se/b2c/">B2C</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li class="parent">
          <span data-parent="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path
                d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"
              ></path>
            </svg>
          </span>
          <a
            href="#"
            title="Partners"
            data-parent=""
            @click="showInnerMenu($event)"
            >Partners</a
          >
          <ul>
            <li class="item-page-menu">Partners</li>
            <li class="item-page-link">
              <a href="https://vendre.se/partners/">Våra Partners</a>
            </li>
            <li class="item-page-link">
              <a href="https://vendre.se/bli-partner/">Bli Partner</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li class="parent">
          <a href="https://vendre.se/priser/" title="Priser">Priser</a>
        </li>
      </ul>
      <ul>
        <li class="parent">
          <a href="https://vendre.se/referenser/" title="Referenser"
            >Referenser</a
          >
        </li>
      </ul>
      <ul>
        <li class="parent">
          <a href="https://vendre.se/kundcase/" title="Kundcase">Kundcase</a>
        </li>
      </ul>
      <ul>
        <li class="parent">
          <span data-parent="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path
                d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"
              ></path>
            </svg>
          </span>
          <a
            href="#"
            title="Kunskap"
            data-parent=""
            @click="showInnerMenu($event)"
            >Kunskap</a
          >
          <ul>
            <li class="item-page-menu">Nyheter</li>
            <li class="item-page-link">
              <a href="https://vendre.se/blogg/">Bloggen</a>
            </li>
            <li class="item-page-link">
              <a href="https://press.vendre.se/">Pressrum</a>
            </li>
          </ul>
          <ul>
            <li class="item-page-menu">Support &amp; Dokumentation</li>
            <li class="item-page-link">
              <a href="https://support.vendre.io/">För Kunder</a>
            </li>
            <li class="item-page-link">
              <a href="https://academy.vendre.se/login.php"
                >För Solution Partners</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style>
.mobile-menu {
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 0;
  top: 0;
  left: 100%;
  z-index: 10;
  margin-left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  box-shadow: none;
  position: fixed;
  background-color: #f9f9f9;
  padding-top: calc(50px + 21px * 2);
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile-menu.push-left {
  transform: translate3d(-100%, 0, 0);
}

.mobile-menu ul {
  list-style: none;
  margin: 0;
}

.mobile-menu ul li {
  text-align: center;
  line-height: 70px;
  height: 70px;
  overflow: hidden;
  position: relative;
  transition: all 0.2s;
  margin: 10px 50px;
}
.mobile-menu ul li.open {
  height: auto;
}

.mobile-menu ul li.parent span {
  position: absolute;
  z-index: 1;
  right: 0;
  text-align: center;
  font-weight: bold;
  font-size: 0.875rem;
  cursor: pointer;
  height: 70px;
  display: flex;
}

.mobile-menu ul li.parent span svg {
  width: 60px;
  height: 30px;
  margin: auto;
  fill: #000;
}

.rotate {
  transform: rotate(180deg);
}

.mobile-menu ul li a {
  position: relative;
  width: 100%;
  margin: 0;
  color: #000;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
}

ul {
  padding-inline-start: 0;
}

.mobile-menu ul li ul li.item-page-menu {
  color: #ccc;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  line-height: 2.21;
  height: auto;
  padding-bottom: 15px;
}

.mobile-menu ul li ul li.item-page-link {
  height: auto;
  padding-bottom: 15px;
  line-height: normal;
}

.mobile-menu ul li ul li.item-page-link a {
  font-size: 19px;
  line-height: 1.6;
  text-transform: none;
  font-weight: normal;
}

.mobile-menu-wrapper {
  width: clamp(50px, 100%, 900px);
  position: relative;
  float: left;
  min-height: 100%;
}
</style>
