<template>
  <div class="cont">
    <div class="pp-and-tweet">
        <div class="pp-box">
        <nuxt-link to="/Profile" class="nuxt">
            <div class="pp">
            <img src="../assets/img/pp.jpg" alt="" />
            </div>
        </nuxt-link>
        </div>

        <div class="tweet">
        <input
            type="text"
            name="newComment"
            id=""
            placeholder="Tweet Your Reply"
            v-model="tweet"
            @focus="changeWho = true"
        />
        <div :class="!changeWho ? 'who-reply-box' : 'who-reply-box change-who'">
            <div class="who-reply">
            <span>Replying to <span class="blue">{{ tweeter.username }}</span></span>
            </div>
        </div>
        <div class="add-other-box">
            <div class="add-other" :class="{ 'no-show': !changeWho} ">
            <div class="item">
                <svg
                width="20px"
                height="20px"
                fill="#1d9bf0"
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
                    d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"
                    />
                    <circle cx="8.868" cy="8.309" r="1.542" />
                </g>
                </svg>
            </div>
            <div class="item">
                <svg
                width="20px"
                height="20px"
                fill="#1d9bf0"
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
                    d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"
                    />
                    <path
                    d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"
                    />
                </g>
                </svg>
            </div>
            <div class="item">
                <svg
                width="20px"
                height="20px"
                fill="#1d9bf0"
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
                    d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
                    />
                    <path
                    d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"
                    />
                    <circle cx="14.738" cy="9.458" r="1.478" />
                    <circle cx="9.262" cy="9.458" r="1.478" />
                </g>
                </svg>
            </div>
            <div class="item">
                <svg
                width="20px"
                height="20px"
                fill="#1d9bf0"
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
                    <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z" />
                    <path
                    d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z"
                    />
                    <path
                    d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z"
                    />
                    <path
                    d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z"
                    />
                </g>
                </svg>
            </div>
            </div>
            <button
            class="btn"
            :style="
                tweet.length > 0
                ? { opacity: 1, cursor: 'pointer' }
                : { opacity: 0.5 }
            "
            @click="comment"
            >
            Reply
            </button>
        </div>
        </div>
    </div>
    <Comments :username="tweeter.username" :commentData="comments" />
  </div>
</template>

<script>
import Comments from './Comments.vue'
export default {
    name: "NewComment",
    props: {
        tweeter: Object
    },
    data() {
        return {
            tweet: "",
            changeWho: false,
            commentObj: {
                    text: '',
                    like: '0',
                    comment: '0',
                    retweet: '0'
                },
            comments: []
        };
    },
    methods: {
        comment () {
            if (this.tweet.length > 0) {
                this.commentObj.text = this.tweet;
                const comment = { ...this.commentObj }
                this.comments.push(comment)
                this.tweet = ''
            }
        }
    },
    components: { Comments }
}
</script>


<style lang="scss" scoped>
.no-show {
    display: none;
}
.pp-and-tweet {
  width: 100%;
  min-height: 116px;
  max-height: 158px;
  height: auto;
  padding: 8px 16px;
  display: flex;
  border-bottom: 1px solid var(--border);

  .pp-box {
    width: 50px;
    height: 100%;
    position: relative;
    .pp {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .tweet {
    flex: 1;

    input {
      width: 100%;
      height: 56px;
      background-color: transparent;
      border: none;
      outline: none;
      padding: 12px;
      font-size: 20px;
      line-height: 24px;
      color: var(--item-text-color);

      &::placeholder {
        color: var(--text-color-profile);
        font-weight: 400;
      }
    }

    .who-reply-box {
      display: none;
      width: 100%;
      height: 37px;
      border-bottom: 1px solid var(--border);
      .who-reply {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        column-gap: 5px;
        padding: 0 10px;
        border-radius: 16px;

        span {
          color: var(--text-color-profile);
          font-size: 14px;
          line-height: 16px;
          .blue {
            color: var(--blue);
          }
        }

        &:hover {
          background-color: var(--blue-hover-light);
        }
      }
    }
    .change-who {
      display: block;
    }

    .add-other-box {
      width: 100%;
      height: 54px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .add-other {
        display: flex;

        .item {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--t2);

          &:hover {
            background-color: var(--blue-hover-light);
          }
        }
      }

      .btn {
        font-size: 15px;
        line-height: 20px;
        font-weight: 700;
        padding: 8px 16px;
        border-radius: 16px;
        background-color: var(--blue);
        border: none;
        outline: none;
        color: var(--item-text-color);
        opacity: 0.5;
      }
    }
  }
}

@media (max-width: 769px) {
  .pp-and-tweet .tweet .add-other-box .add-other .invisible {
    display: none;
  }
}

// @media (max-width: 415px) {
//   .pp-and-tweet {
//     display: none;
//   }
// }
</style>
