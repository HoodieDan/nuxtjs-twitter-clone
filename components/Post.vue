<template>
  <div class="post">
    <div class="pp-and-name">
        <div class="info">
            <div class="circular">
                <img :src="tweet.pp_route" :alt="profile-image">
            </div>
            <div class="name">
                <h5 class="mb-0"><strong>{{ tweet.name }}</strong></h5>
                <p>{{ tweet.username }}</p>
            </div>
        </div>
        <div class="dots">
            <svg
                width="18px"
                height="18px"
                fill="#d9d9d9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="
                dot r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi
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
    <div class="text">
        <h6>{{ tweet.text }}</h6>
    </div>
    <div class="image" v-if="tweet.image_route">
        <img :src="tweet.image_route" :alt="image">
    </div>
    <div class="time">
        <p>2:30 PM · {{ tweet.time }}</p>
    </div>
    <div class="stats">
        <p><span>{{ tweet.comment }}</span> comments <span>{{ tweet.retweet }}</span> Retweets <span>{{ tweet.like }}</span> likes</p>
    </div>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Post',
    props: {
        tweet: Object,
    }
}
</script>

<style lang="scss" scoped>
.post {
    min-height: 100vh;
    padding: 20px;
    color: var(--item-text-color);
    .pp-and-name {
        display: flex;
        justify-content: space-between;
        .info {
            display: flex;
            .name {
                margin-left: 10px;
                p {
                    color: var(--text-color-profile);
                }
            }
        }
        .dots {
            transition: all 0.2s;
            height: 34px;
            width: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            transition: var(--t2);
            &:hover {
                background-color: var(--blue-hover-light);

                .dot {
                    fill: var(--blue);
                }
            }
        }
    }
    .text {
        margin-bottom: 10px;
    }

    .image {
        width: 100%;
        border-radius: 10px;
        img {
            border-radius: 10px;
        }
    }
    .time {
        margin-top: 20px;
        border-bottom: var(--border) 1px solid;
        p {
            font-size: 15px;
            color: var(--text-color-profile);
        }
    }
    .stats {
        border-bottom: var(--border) 1px solid;
        padding-top: 20px;
        padding-bottom: 20px;
        p {
            color: var(--text-color-profile);
            margin-bottom: 0;
            span {
                color: var(--item-text-color);
                font-weight: 600;
                &:nth-of-type(2) {
                    padding-left: 20px;
                }
                &:nth-of-type(3) {
                    padding-left: 20px;
                }
            }
            
        }
    }
}
.circular {
    width: 50px;
    height: 50px;
    border: 5px #000000 solid;
    border-radius: 50%;
    position: relative;
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
</style>