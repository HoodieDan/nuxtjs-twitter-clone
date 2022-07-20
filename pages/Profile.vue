<template>
  <div class="home-box">
    <TimeLine1 class="middle">
      <template v-slot:topTitle>
        <TopTitle>
          <div class="top">
            <div class="back">
              <div v-show="openTweet" class="arrow" @click="closeTweet()">
                <i class="fa-solid fa-arrow-left fa"></i>
              </div>
              <nuxt-link v-show="!openTweet" to="/">
                <i class="fa-solid fa-arrow-left fa"></i>
              </nuxt-link>
            </div>
            <span class="top-title">Drew</span>
          </div>
        </TopTitle>
      </template>
      <template v-slot:main>
        <div class="profile" v-show="!openTweet">
            <div class="header">
                <img src="https://pbs.twimg.com/profile_banners/859568844821721088/1646195193/1500x500" alt="header img">
            </div>
            <div class="edit">
                <div class="circular">
                    <!-- profile picture  -->
                    <img src="../assets/img/pp.jpg" alt="profile image">
                </div>
                <div class="edit-profile">
                    <!-- Edit profile  -->
                    <button class="btn">Edit Profile</button>
                </div>
            </div>
            <div class="info">
                <div class="user-info">
                    <h5 class="name mb-0">Drew</h5>
                    <p>@the.7th.kind</p>
                    <!-- User bio  -->
                    <div class="bio">
                        <p>Paul Clifton Anthony George is the greatest of all time.</p>
                    </div>
                    <div class="extra-info">
                        
                    </div>
                    <div class="counts">
                        <p><span>77</span> Followers</p>
                        <p><span>59</span> Following</p>
                    </div>
                    <div class="links row">
                        <div class="link col-3 active-link">
                            <p class="text-center">Tweets</p>
                        </div>
                        <div class="link col-4">
                            <p class="text-center">Tweets & Replies</p>
                        </div>
                        <div class="link col-3">
                            <p class="text-center">Media</p>
                        </div>
                        <div class="link col-2">
                            <p class="text-center">Likes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </template>

        <!-- Tweets  -->
      <template v-slot:tweets>
        <h3 v-show="!tweetData">No tweets to show.</h3>
        <Tweets  :tweetData="tweetData"/>
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
import TimeLine1 from '../components/TimeLine.vue';
import TopTitle from '../components/TopTitle.vue';
import Tweets from '../components/Tweets.vue';

export default {
    name: "IndexPage",
    // components: { Navbar }
    layout: "dashboardWrapper",
    components: { Trends, TimeLine1, TopTitle, Tweets },
    data () {
        return {
            tweetData: [
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
            ]
        }
    },
    computed: {
      ...mapState(['openTweet'])
    },
    methods: {
      ...mapMutations(['closeTweet'])
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
    cursor: pointer;
    .fa {
      color: #fff;
    }
    .top-title {
      font-size: 19px;
      line-height: 24px;
      font-weight: 700;
      margin-left: 50px;
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
    position: relative;
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
      .top-title {
        font-size: 17px;
        margin-left: 0;
      }
    }
  }
}

.profile {
    border-bottom: 1px solid var(--border);
    position: relative;
    .header {
        height: 200px;
        width: 100%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .edit {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;

        .circular {
            width: 150px;
            height: 150px;
            background-color: #000000;
            border: 5px #000000 solid;
            border-radius: 50%;
            position: relative;
            bottom: 75px;
            left: 20px;
            cursor: pointer;
            overflow: hidden;
        }
        .circular img {
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }

        .edit-profile {
            position: relative;
            right: 20px;
            bottom: 5px;
            display: flex;
            align-items: center;

            button {
                background-color: #000000;
                border: var(--border) 2px solid;
                color: #d9d9d9;
            }
        }
    }
    .info {
        width: 100%;
        padding: 20px;
        padding-bottom: 0;
        color: #d9d9d9;
        .user-info {
            .name {
                font-weight: 700;
            }
            p {
                font-size: 15px;
                font-weight: 400;
                color: var(--text-color-profile)
            }

            .bio {
                p {
                    color: #d9d9d9;
                }
            }

            .counts {
                color: var(--text-color-profile);
                display: flex;
                height: 20px;

                p:nth-of-type(2) {
                    margin-left: 50px;
                }

                span {
                    color: #d9d9d9;
                    font-weight: 600;
                }
            }

            .links {
                // display: flex;
                // justify-content: space-between;
                padding: 20px 0 0 0;

                .link {
                    cursor: pointer;
                    color: var(--text-color-profile);
                    padding-top: 20px;
                    &:hover {
                        background-color: var(--item-hover);
                    }
                }
            }
        }
    }
}

.active-link {
    border-bottom: var(--blue) 5px solid;
}
@media (max-width: 415px) {
  .top{
    position: relative;
    .back {
      position: relative;
      right: 50px;
    }
  }
}
</style>
