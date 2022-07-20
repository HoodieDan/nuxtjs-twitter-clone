<template>
  <div class="home-box">
    <TimeLine1 class="middle">
      <template v-slot:topTitle>
        <TopTitle class="top-title">
          <div class="top">
            <div class="back" v-show="openTweet" @click="closeTweet">
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <span v-show="openTweet === false" class="top-title">Home</span>
            <span v-show="openTweet" class="top-title tweet">Tweet</span>
          <div class="svg-top">
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
                    d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </TopTitle>
      </template>
      <template v-slot:main>
        <NewTweet v-show="openTweet === false" />
      </template>

      <template v-slot:tweets>
        <Tweets :tweetData="tweetData"/>
      </template>
    </TimeLine1>
    <div class="right">
      <Trends />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Trends from '../components/Trends.vue';
import NewTweet from '../components/NewTweet.vue';
import TimeLine1 from '../components/TimeLine.vue';
import TopTitle from '../components/TopTitle.vue';
import Tweets from '../components/Tweets.vue';

export default {
    name: "IndexPage",
    // components: { Navbar }
    layout: "dashboardWrapper",
    components: { Trends, NewTweet, TimeLine1, TopTitle, Tweets },
    data () {
      return {
        tweetData: [
          {
            name: "Babafrayo",
            username: "@babafray0",
            badge: true,
            time: "Jan 6",
            pp_route: require('../assets/img/person2-pp.jpg'),
            image_route: false,
            text: "I go by the name of Babafrayo.",
            comment: "67",
            retweet: "138",
            like: "8.2K",
          },
          {
            name: "Tobi Badejo",
            username: "@teebazz",
            badge: false,
            time: "Aug 15",
            pp_route: require('../assets/img/person4-pp.jpg'),
            image_route: require("../assets/img/image.jpg"),
            text: "I remember the first time I played the bass guitar. I played it.",
            comment: "2",
            retweet: "148",
            like: "1.6K",
          },
          {
            name: "Drew",
            username: "@the.7th.kind",
            badge: true,
            time: "Nov 1",
            pp_route: require('../assets/img/pp.jpg'),
            image_route: require("../assets/img/image3.jpg"),
            text: "Friends turned family.",
            comment: "1.1K",
            retweet: "820",
            like: "32.2K",
          },
          {
            name: "Drew",
            username: "@the.7th.kind",
            badge: true,
            time: "Nov 4",
            pp_route: require('../assets/img/pp.jpg'),
            image_route: false,
            text: "Frank Ocean is the greatest.",
            comment: "1.1K",
            retweet: "820",
            like: "32.2K",
          },
          {
            name: "Babafrayo",
            username: "@babafray0",
            badge: true,
            time: "Jul 10",
            pp_route: require('../assets/img/person2-pp.jpg'),
            image_route: require("../assets/img/image2.jpg"),
            text: "I just came back from eid with my real gees.",
            comment: "67",
            retweet: "138",
            like: "8.2K",
          },
          {
            name: "Tuunji the all ends dev",
            username: "@tuunji",
            badge: true,
            time: "Jan 30",
            pp_route: require('../assets/img/person1-pp.jpg'),
            image_route: require("../assets/img/person1-pp.jpg"),
            text: "#newprofilepic",
            comment: "67",
            retweet: "138",
            like: "50B",
          },
          {
            name: "Drew",
            username: "@the.7th.kind",
            badge: true,
            time: "May 4",
            pp_route: require('../assets/img/pp.jpg'),
            image_route: require("../assets/img/image4.jpg"),
            text: "Grind don't stop.",
            comment: "1.1K",
            retweet: "820",
            like: "32.2K",
          },
          {
            name: "Amazon Angel",
            username: "@inem",
            badge: true,
            time: "Feb 4",
            pp_route: require('../assets/img/person3-pp.jpg'),
            image_route: require("../assets/img/image5.jpg"),
            text: "I too fine.",
            comment: "1.1K",
            retweet: "820",
            like: "32.2K",
          },
        ],
      }
    },
    computed: {
      ...mapState(['openTweet']),
    },
    methods: {
      ...mapMutations(['closeTweet']),
    }
}
</script>

<style lang="scss" scoped>
.home-box {
  display: flex;
  justify-content: center;
  overflow-y: initial !important;
  overflow-x: hidden;

  .top {
    width: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .tweet {
      position: relative;
      right: 100px;
    }
    .top-title {
      font-size: 19px;
      line-height: 24px;
      font-weight: 700;
    }
    .svg-top {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: var(--t2);

      &:hover {
        background-color: var(--item-hover);
      }
    }
  }
  .middle {
    overflow-y: auto;
    .top-title {
      border-bottom: none;
    }
  }
  .right {
    overflow-y: auto;
  }
}

@media (max-width: 1050px) {
  .right {
    display: none;
  }
}

@media (max-width: 415px) {
  .home-box {
    display: block;
    width: 100%;

    .top {
      width: 85%;
      margin-left: auto;
      position: absolute;
      right: 0;
      position: relative;
      .back {
        position: relative;
        right: 50px;
      }
      .top-title {
        font-size: 17px;
      }
    }
  }
}
</style>
