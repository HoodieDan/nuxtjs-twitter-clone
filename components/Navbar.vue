<template>
  <div class="navbar-box">
    <div class="menu-box">
      <div class="menu">
        <div class="logo mobile mb-3">
          <svg
            width="30px"
            height="30px"
            fill="#d9d9d9"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="
              r-jwli3a
              r-4qtqp9
              r-yyyyoo
              r-16y2uox
              r-8kz0gk
              r-dnmrzs
              r-bnwqim
              r-1plcrui
              r-lrvibr
              r-yc9v9c
            "
          >
            <g>
              <path
                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
              />
            </g>
          </svg>
        </div>
        <div class="items">
          <nuxt-link class="nuxt" to="/">
            <div class="item" :class="{ 'active': currentRoute === '/' }" @click="closeTweet()">
              <svg
                width="30px"
                height="30px"
                fill="#d9d9d9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="
                  r-13gxpu9 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr
                "
              >
                <g>
                  <path
                    d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"
                  />
                </g>
              </svg>
              <span>Home</span>
            </div>
          </nuxt-link>
          <div class="item mobile no-tablet">
              <svg
                width="30px"
                height="30px"
                fill="#d9d9d9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="
                  r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr
                "
              >
                <g>
                  <path
                    d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"
                  />
                </g>
              </svg>
            <span>Explore</span>
          </div>
          <div class="item no-mobile tablet">
            <svg
              width="30px"
              height="30px"
              fill="#d9d9d9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="
                r-111h2gw
                r-4qtqp9
                r-yyyyoo
                r-1xvli5t
                r-dnmrzs
                r-4wgw6l
                r-f727ji
                r-bnwqim
                r-1plcrui
                r-lrvibr
              "
            >
              <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                />
              </g>
            </svg>
            <span>Search</span>
          </div>
          <div class="item">
            <svg
              width="30px"
              height="30px"
              fill="#d9d9d9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="
                r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr
              "
            >
              <g>
                <path
                  d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"
                />
              </g>
            </svg>
            <span>Notifications</span>
          </div>
          <div class="item">
            <svg
              width="30px"
              height="30px"
              fill="#d9d9d9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="
                r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr
              "
            >
              <g>
                <path
                  d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"
                />
              </g>
            </svg>
            <span>Messages</span>
          </div>
          <div class="item mobile">
            <svg
              width="30px"
              height="30px"
              fill="#d9d9d9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="
                r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr
              "
            >
              <g>
                <path
                  d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"
                />
              </g>
            </svg>
            <span>Bookmarks</span>
          </div>
          <div class="item mobile">
            <svg
              width="30px"
              height="30px"
              fill="#d9d9d9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="
                r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr
              "
            >
              <g>
                <path
                  d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"
                />
                <path
                  d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"
                />
              </g>
            </svg>
            <span>Lists</span>
          </div>
          <nuxt-link class="nuxt" to="/Profile">
            <div class="item mobile" :class="{ 'active': currentRoute === '/Profile' }" @click="closeTweet()">
              <svg
                width="30px"
                height="30px"
                fill="#d9d9d9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="
                  r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr
                "
              >
                <g>
                  <path
                    d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"
                  />
                </g>
              </svg>
              <span>Profile</span>
            </div>
          </nuxt-link>
          <div class="item mobile">
            <svg
              width="30px"
              height="30px"
              fill="#d9d9d9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="
                r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr
              "
            >
              <g>
                <circle cx="17" cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="7" cy="12" r="1.5" />
                <path
                  d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
                />
              </g>
            </svg>
            <span>More</span>
          </div>
        </div>
        <button class="btn">
          <div class="btn-mobile">
            <svg
              width="30px"
              height="30px"
              fill="#d9d9d9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="
                r-jwli3a
                r-4qtqp9
                r-yyyyoo
                r-18yzcnr
                r-dnmrzs
                r-bnwqim
                r-1plcrui
                r-lrvibr
                r-yc9v9c
              "
            >
              <g>
                <path
                  d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"
                />
              </g>
            </svg>
          </div>
          <span class="btn-title">Tweet</span>
        </button>
        <div class="profile">
          <nuxt-link class="nuxt" to="/Profile"  :class="{ 'no-show-sm': openTweet || currentRoute !== '/' }">
            <div class="profiles">
              <div class="pp">
                <img src="../assets/img/pp.jpg" alt="" />
              </div>
              <div class="info">
                <span class="name">Drew</span>
                <span class="username">@the.7th.kind</span>
              </div>
              <div class="more">
                <svg
                  width="30px"
                  height="30px"
                  fill="#d9d9d9"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="
                    r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi
                  "
                >
                  <g>
                    <circle cx="5" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="19" cy="12" r="2" />
                  </g>
                </svg>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  computed: {
    ...mapState(['openTweet']),
    currentRoute() {
      return this.$route.path
    }
  },
  methods: {
    ...mapMutations(['closeTweet'])
  }
}
</script>

<style lang="scss" scoped>
.active span {
  color: var(--active-color);
  font-weight: 700;
}
.no-show {
  display: none;
}

.navbar-box {
  min-width: 88px;
  max-width: 280px;
  width: 100%;
  position: relative;

  .menu-box {
    max-width: 275px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;

    .menu {
      display: flex;
      flex-direction: column;
      height: 100vh;
      padding: 0 12px;
      position: fixed;

      .logo {
        width: fit-content;
        padding: 12px;
        border-radius: 100px;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
          background-color: var(--logo-hover);
        }
      }

      .items {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        width: 100%;

        .nuxt:hover {
          text-decoration: none;
        }

        .item {
          width: min-content;
          display: inline-flex;
          align-items: center;
          height: 50px;
          padding: 0 20px 0 12px;
          font-size: 19px;
          border-radius: 100px;
          cursor: pointer;
          font-weight: 400;
          transition: background-color 0.2s;

          &:hover {
            background-color: var(--item-hover);
          }

          span {
            padding-left: 20px;
            color: var(--item-text-color);
          }
        }

        .no-mobile {
          display: none;
        }
      }

      .btn {
        // width: 225px;
        width: 90%;
        min-width: 52px;
        min-height: 52px;
        padding: 0px 32px;
        margin: 24px 0 16px 0;
        font-size: 17px;
        background-color: var(--blue);
        font-weight: 700;
        border: none;
        border-radius: 100px;
        color: var(--btn-color);
        cursor: pointer;
        box-shadow: rgba(217, 217, 217, 0.2) 0px 0px 5px,
          rgba(217, 217, 217, 0.25) 0px 1px 4px 1px;
        transition: background-color 0.2s;

        &:hover {
          background-color: var(--blue-hover);
        }

        .btn-mobile {
          display: none;
        }
      }
    }
  }
}

// Media Queries
@media (max-width: 1300px) {
  .navbar-box {
    max-width: 88px;

    .menu-box {
      max-width: 88px;

      .menu {
        padding: 0;

        .items {
          span {
            display: none;
          }
          .item {
            padding: 12px;
          }
        }

        .btn {
          width: fit-content;
          padding: 10px;
          margin: 24px 0 16px 0;
          .btn-mobile {
            display: block;
          }
          span {
            display: none;
          }
        }
      }
    }
  }
}

@media (max-width: 1050px) {
  .navbar-box .menu-box .menu .items .tablet {
    display: block;
  }

  .navbar-box .menu-box .menu .items .no-tablet {
    display: none;
  }
}

@media (max-height: 715px) {
  .navbar-box .menu-box .menu .items {
    row-gap: 2px;
  }
}

@media (max-height: 630px) and (min-width: 415px) {
  .navbar-box .menu-box .menu .items .item:nth-child(5),
  .navbar-box .menu-box .menu .items .item:nth-child(6) {
    display: none;
  }
}

// MOBILE
@media (max-width: 575px) {
  .navbar-box {
    max-width: none;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 54px;
    background-color: var(--bg-color);
    z-index: 99;
    .menu-box {
      max-width: none;
      width: 100%;
      position: block;
      flex-direction: row;

      .menu {
        width: 100%;
        max-width: none;
        position: relative;
        flex-direction: row;

        .btn {
          position: fixed;
          right: 24px;
          bottom: 60px;
        }

        .items {
          width: 100%;
          flex-direction: row;
          justify-content: space-around;
          background-color: var(--bg-color);
          border-top: 1px solid var(--border);

          .mobile {
            display: none;
          }

          .no-mobile {
            display: block;
          }
        }

        .mobile {
          display: none;
        }
      }
    }
  }
}
// MOBILE
// Media Queries

.profiles {
  width: 250px;
  min-height: 64px;
  margin: auto 0 12px 0;
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  border-radius: 100px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba($color: #ffffff, $alpha: 0.08);
  }

  .pp {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }

  .info {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-weight: 700;
    color: #d9d9d9;
    margin: 0 12px;
    row-gap: 2px;

    .username {
      color: #6e767d;
      font-weight: 400;
    }
  }

  .more {
    margin-left: auto;
  }
}

@media (max-width: 1300px) {
  .profiles {
    width: fit-content;
    .info,
    .more {
      display: none;
    }
  }
}

@media (max-width: 415px) {
  .profiles {
    position: fixed;
    top: 12px;
    left: 16px;
    padding: 0;
    min-height: 0;
    z-index: 99;

    .pp {
      width: 32px;
      height: 32px;
    }
  }
  .no-show-sm {
    display: none;
  }
}
</style>
