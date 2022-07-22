<template>
  <div class="post-box">
    <div class="post">
        <div class="pp-and-name">
            <div class="info">
                <div class="circular">
                    <img :src="tweet.pp_route" :alt="profile-image">
                </div>
                <div class="name">
                    <h5 class="mb-0" style="display:inline-block"><strong>{{ tweet.name }}</strong></h5>
                    <div class="badge" v-if="tweet.badge">
                    <svg
                        width="17px"
                        height="17px"
                        fill="#d9d9d9"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-label="Verification badge"
                        class="
                        r-jwli3a
                        r-4qtqp9
                        r-yyyyoo
                        r-1xvli5t
                        r-9cviqr
                        r-f9ja8p
                        r-og9te1
                        r-bnwqim
                        r-1plcrui
                        r-lrvibr
                        "
                    >
                        <g>
                        <path
                            d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                        />
                        </g>
                    </svg>
                    </div>
                    <p>{{ tweet.username }}</p>
                </div>
            </div>
            <div class="dots">
                <svg
                    width="24px"
                    height="24px"
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
            <p>2:30 PM · {{ tweet.time }} · Twitter Web App</p>
        </div>
        <div class="stats">
            <p><span>{{ tweet.comment }}</span> Comments <span>{{ tweet.retweet }}</span> Retweets <span>{{ tweet.like }}</span> Likes</p>
        </div>
        <div class="interact">
            <!-- Comment  -->
            <div class="svg-box">
                <svg
                    width="24px"
                    height="24px"
                    fill="#d9d9d9"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="
                        svg r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi
                    "
                    >
                    <g>
                        <path
                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                        />
                    </g>
                </svg>
            </div>
            <!-- Retweet  -->
            <div class="svg-box">
                <svg
                    width="24px"
                    height="24px"
                    fill="#d9d9d9"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="
                        svg r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi
                    "
                    >
                    <g>
                        <path
                        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                        />
                    </g>
                </svg>
            </div>
            <!-- Like  -->
            <div class="svg-box">
                <svg
                    width="24px"
                    height="24px"
                    fill="#d9d9d9"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="
                        svg r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi
                    "
                    >
                    <g>
                        <path
                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                        />
                    </g>
                </svg>
            </div>
            <!-- Share  -->
            <div class="svg-box">
                <svg
                    width="24px"
                    height="24px"
                    fill="#d9d9d9"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="
                        r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi
                    "
                    >
                    <g>
                        <path
                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"
                        />
                        <path
                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"
                        />
                    </g>
                </svg>
            </div>
        </div>
    </div>
    <NewComment :tweeter="tweet"/>
  </div>
</template>

<script>
import NewComment from './NewComment.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Post",
    props: {
        tweet: Object,
    },
    components: { NewComment }
}
</script>

<style lang="scss" scoped>
.post-box {
    min-height: 100vh;
}
.post {
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
                .badge {
                    position: relative;
                    bottom: 3px;
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

    .interact {
        border-bottom: var(--border) 1px solid;
        padding: 5px 0;
        display: flex;
        justify-content: space-around;
        .svg-box { 
            width: 38.5px;
            height: 38.5px; 
            border-radius: 50%; 
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            &:nth-of-type(1):hover {
                background-color: var(--blue-hover-light);
                svg {
                    fill: var(--blue);
                }
            }
            &:nth-of-type(2):hover {
                background-color: var(--green-hover);
                svg {
                    fill: var(--green);
                }
            }
            &:nth-of-type(3):hover {
                background-color: var(--red-hover);
                svg {
                    fill: var(--red);
                }
            }
            &:nth-of-type(4):hover {
                background-color: var(--blue-hover-light);
                svg {
                    fill: var(--blue);
                }
            }
            svg {
                fill: var(--text-color-profile);
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