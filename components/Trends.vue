<template>
  <div class="mt-3">
    <!-- Search -->
    <div :class="inputChange ? 'search-box input-focus' : 'search-box'">
      <div class="search-svg">
        <svg
          :fill="inputChange ? 'var(--blue)' : '#6e767d'"
          width="19px"
          height="19px"
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
            svg
          "
        >
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
            />
          </g>
        </svg>
      </div>
      <input
        @focus="inputChange = true"
        @blur="inputChange = false"
        type="text"
        name="searcBar"
        id=""
        placeholder="Search Twitter"
      />
    </div>

    <!-- trends  -->
    <div class="trend-box">
      <div class="title">
        <span>Trends for you</span>
        <div class="setting-svg">
          <svg
            width="20px"
            height="20px"
            fill="#d9d9d9"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="
              r-13gxpu9
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
                d="M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.026-2.29-2.29S10.74 9.71 12 9.71s2.29 1.026 2.29 2.29-1.028 2.29-2.29 2.29z"
              />
              <path
                d="M12.36 22.375h-.722c-1.183 0-2.154-.888-2.262-2.064l-.014-.147c-.025-.287-.207-.533-.472-.644-.286-.12-.582-.065-.798.115l-.116.097c-.868.725-2.253.663-3.06-.14l-.51-.51c-.836-.84-.896-2.154-.14-3.06l.098-.118c.186-.222.23-.523.122-.787-.11-.272-.358-.454-.646-.48l-.15-.014c-1.18-.107-2.067-1.08-2.067-2.262v-.722c0-1.183.888-2.154 2.064-2.262l.156-.014c.285-.025.53-.207.642-.473.11-.27.065-.573-.12-.795l-.094-.116c-.757-.908-.698-2.223.137-3.06l.512-.512c.804-.804 2.188-.865 3.06-.14l.116.098c.218.184.528.23.79.122.27-.112.452-.358.477-.643l.014-.153c.107-1.18 1.08-2.066 2.262-2.066h.722c1.183 0 2.154.888 2.262 2.064l.014.156c.025.285.206.53.472.64.277.117.58.062.794-.117l.12-.102c.867-.723 2.254-.662 3.06.14l.51.512c.836.838.896 2.153.14 3.06l-.1.118c-.188.22-.234.522-.123.788.112.27.36.45.646.478l.152.014c1.18.107 2.067 1.08 2.067 2.262v.723c0 1.183-.888 2.154-2.064 2.262l-.155.014c-.284.024-.53.205-.64.47-.113.272-.067.574.117.795l.1.12c.756.905.696 2.22-.14 3.06l-.51.51c-.807.804-2.19.864-3.06.14l-.115-.096c-.217-.183-.53-.23-.79-.122-.273.114-.455.36-.48.646l-.014.15c-.107 1.173-1.08 2.06-2.262 2.06zm-3.773-4.42c.3 0 .593.06.87.175.79.328 1.324 1.054 1.4 1.896l.014.147c.037.4.367.7.77.7h.722c.4 0 .73-.3.768-.7l.014-.148c.076-.842.61-1.567 1.392-1.892.793-.33 1.696-.182 2.333.35l.113.094c.178.148.366.18.493.18.206 0 .4-.08.546-.227l.51-.51c.284-.284.305-.73.048-1.038l-.1-.12c-.542-.65-.677-1.54-.352-2.323.326-.79 1.052-1.32 1.894-1.397l.155-.014c.397-.037.7-.367.7-.77v-.722c0-.4-.303-.73-.702-.768l-.152-.014c-.846-.078-1.57-.61-1.895-1.393-.326-.788-.19-1.678.353-2.327l.1-.118c.257-.31.236-.756-.048-1.04l-.51-.51c-.146-.147-.34-.227-.546-.227-.127 0-.315.032-.492.18l-.12.1c-.634.528-1.55.67-2.322.354-.788-.327-1.32-1.052-1.397-1.896l-.014-.155c-.035-.397-.365-.7-.767-.7h-.723c-.4 0-.73.303-.768.702l-.014.152c-.076.843-.608 1.568-1.39 1.893-.787.326-1.693.183-2.33-.35l-.118-.096c-.18-.15-.368-.18-.495-.18-.206 0-.4.08-.546.226l-.512.51c-.282.284-.303.73-.046 1.038l.1.118c.54.653.677 1.544.352 2.325-.327.788-1.052 1.32-1.895 1.397l-.156.014c-.397.037-.7.367-.7.77v.722c0 .4.303.73.702.768l.15.014c.848.078 1.573.612 1.897 1.396.325.786.19 1.675-.353 2.325l-.096.115c-.26.31-.238.756.046 1.04l.51.51c.146.147.34.227.546.227.127 0 .315-.03.492-.18l.116-.096c.406-.336.923-.524 1.453-.524z"
              />
            </g>
          </svg>
        </div>
      </div>
      <ul v-for="(item, index) in data" :key="index">
        <li>
          <div class="title">
            <small>{{ item.category }}</small>
            <span>{{ item.title }}</span>
            <small>{{ setTweetCount(item.tweet_count) }} Tweets</small>
          </div>
          <div class="svg">
            <svg
              width="18px"
              height="18px"
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
        </li>
      </ul>
      <div class="show-more">
        <a class="mr-2">Show more</a>
      </div>
    </div>

    <!-- who to follow -->
    <div class="follow-box">
      <span>Who to follow</span>
      <ul v-for="(item, index) in follow_data" :key="index">
        <li>
          <div class="info">
            <div class="pp">
              <img :src="item.pp_route" alt="" srcset="" />
            </div>
            <div class="name">
              <small> {{ item.name }} </small>
              <small class="username"> {{ item.username }} </small>
            </div>
          </div>
          <button class="btn">Follow</button>
        </li>
      </ul>

      <div class="show-more">
        <a class="mr-2">Show more</a>
      </div>
    </div>

    <!-- Policy -->
    <div class="cont">
      <a>Terms of Service</a>
      <a>Privacy Policy</a>
      <a>Cookie Policy</a>
      <a>Imprint</a>
      <a>Ads into</a>
      <a>More...</a>
      <a class="no-cursor">© 2022 Osemudev, Inc</a>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Trends',
  data () {
    return {
      inputChange: false,
      data: [
        {
          category: "Football",
          title: "#quadruple",
          tweet_count: 5_300,
        },
        {
          category: "Trending in World",
          title: "COVID-19",
          tweet_count: 872_250,
        },
        {
          category: "Sports",
          title: "#liverpool",
          tweet_count: 8_340,
        },
        {
          category: "Finance",
          title: "Bitcoin",
          tweet_count: 244_800,
        },
        {
          category: "Trending in Nigeria",
          title: "#PeterObi2023",
          tweet_count: 102_100,
        },
    ],
    follow_data: [
        {
          pp_route: require("../assets/img/follow1-pp.jpg"),
          name: "Brad Traversy",
          username: "@traversymedia",
        },
        {
          pp_route: require("../assets/img/follow2-pp.jpg"),
          name: "Paul George",
          username: "@ygtrece",
        },
      ]
    }
  },
  methods: {
    setTweetCount (tweet) {
      return tweet.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1" + ",");
    },
  }
}
</script>

<style lang="scss" scoped>
.trend-box {
  width: 100%;
  background-color: var(--right-item-color2);
  margin-top: 65px;
  border-radius: 16px;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 48px;

    span {
      color: var(--item-text-color);
      font-size: 19px;
      font-weight: 800;
    }
    .setting-svg {
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      transition: var(--t2);

      &:hover {
        background-color: var(--item-hover);
      }
    }
  }

  .show-more {
    width: 100%;
    height: 52px;
    padding: 16px;
    transition: var(--t2);
    cursor: pointer;

    a {
      font-size: 15px;
      font-weight: 400;
      color: #1d9bf0;
    }

    &:hover {
      background-color: var(--right-hover);
    }
  }
}
li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  transition: var(--t2);
  line-height: 19px;

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;

    small {
      color: var(--text-color-profile);
      font-size: 13px !important;
    }

    span {
      font-size: 15px !important;
      font-weight: 700 !important;
      color: var(--item-text-color);
    }
  }

  .svg {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: var(--t2);

    * {
      fill: var(--text-color-profile);
      transition: fill 0.2s;
    }

    &:hover {
      background-color: var(--blue-hover-light);

      * {
        fill: var(--blue);
      }
    }
  }

  &:hover {
    background-color: var(--right-hover);
  }
}

.follow-box {
  width: 100%;
  height: 244px;
  border-radius: 16px;
  background-color: var(--right-item-color2);
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 19px;
    font-weight: 800;
    padding: 12px 16px;
    color: var(--item-text-color);
  }

  .show-more {
    width: 100%;
    height: 52px;
    padding: 16px;
    transition: var(--t2);
    cursor: pointer;

    a {
      font-size: 15px;
      font-weight: 400;
      color: #1d9bf0;
    }

    &:hover {
      background-color: var(--right-hover);
    }
  }
}
li {
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  transition: var(--t2);

  .info {
    display: flex;
    align-items: center;
    column-gap: 12px;

    .pp {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
    }

    .name {
      display: flex;
      flex-direction: column;

      small {
        font-size: 15px;
        font-weight: 700;
        color: var(--item-text-color);

        &:hover {
          text-decoration: underline;
        }
      }
      small.username {
        font-weight: 400;
        color: var(--text-color-profile);

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  .btn {
    min-height: 32px;
    min-width: 32px;
    padding: 0 16px;
    border-radius: 16px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 13px;
    font-weight: 700;
  }

  &:hover {
    background-color: var(--right-hover);
  }
}
div.cont {
  width: 100%;
  padding: 16px 0;
  display: flex;
  flex-wrap: wrap;

  a {
    font-size: 13px;
    font-weight: 400;
    color: var(--text-color-profile);
    padding-right: 12px;
    cursor: pointer;

    &:hover:not(:last-child) {
      text-decoration: underline;
    }

    &.no-cursor {
      cursor: text;
    }
  }
}

.search-box {
  // width: 350px;
  width: 100%;
  height: 44px;
  background-color: var(--right-item-color);
  border: 1px solid var(--right-item-color);
  display: flex;
  align-items: center;
  border-radius: 100px;
  overflow: hidden;

  .search-svg {
    width: 44px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 12px;
    font-size: 15px;
    color: var(--item-text-color);
  }
}

.input-focus {
  border: 1px solid var(--blue);
  background-color: transparent;
}
</style>
