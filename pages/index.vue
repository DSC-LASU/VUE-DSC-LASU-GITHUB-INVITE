<template>
  <fragment>
    <div class="main">
      <div
        class="inner-content tw-border md:tw-w-3/5 tw-w-11/12 tw-m-auto tw-shadow-xs tw-rounded-lg tw-p-5 tw-py-8 tw-mt-10 tw-space-y-4"
      >
        <div
          class="content-header tw-text-center tw-space-y-4 tw-text-xl tw-text-gray-700"
        >
          <div class="logo">
            <img src="~/assets/img/dsclasu.png" alt="Logo" class="dsc-logo" />
          </div>

          <h2 class="tw-font-bold md:tw-text-4xl tw-text-3xl">
            JOIN DSC LASU ON GITHUB
          </h2>
          <p
            class="tw-text-gray-700 md:tw-text-xl tw-text-base md:tw-w-4/5 lg:tw-w-3/5 tw-m-auto"
          >
            Enter your GitHub Username below to get invited to DSC-LASU GitHub
            Organisation
          </p>
        </div>

        <div class="content-body md:tw-w-3/5 tw-w-4/5 tw-m-auto">
          <form class="tw-space-y-4" v-if="isSuccess === false">
            <div class="form-group">
              <p class="tw-text-center tw-text-base tw-text-red-500">
                {{ error_message }}
              </p>
            </div>

            <div class="form-group">
              <input
                type="text"
                v-model="username"
                placeholder="Enter GitHub Username"
                class="tw-border tw-appearance-none focus:tw-border-none focus:tw-outline-none tw-w-full tw-py-3 tw-p-2 tw-rounded-md"
              />
            </div>

            <div class="form-group">
              <input
                :disabled="isLoading"
                @click="inviteUser()"
                type="button"
                value="Get Invite"
                class="tw-border tw-font-bold tw-appearance-none tw-border-none focus:tw-outline-none tw-w-full tw-py-3 tw-p-2 tw-rounded-md tw-bg-google-blue tw-text-white tw-cursor-pointer"
              />
            </div>

            <div class="form-group">
              <p class="tw-text-center tw-text-sm">
                Don't Have a GitHub Account?
                <a
                  href="https://github.com/join"
                  class="tw-text-google-blue tw-font-bold tw-underline"
                  >Join Here</a
                >
              </p>
            </div>
          </form>

          <div class="success tw-space-y-4 tw-text-center" v-else>
            <div class="github-icon">
              <img
                src="~/assets/img/Github-icn.svg"
                alt="Github"
                class="tw-w-32 tw-m-auto"
              />
            </div>

            <p class="tw-font-bold">
              Invite has been successfully sent to your email. ✅
            </p>
          </div>

          <div class="form-group tw-mt-32">
            <p class="tw-text-center tw-font-bold tw-text-gray-600">
              DSC LASU 2020
            </p>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
export default {
  name: 'DSCLASU',
  data() {
    return {
      username: '',
      error_message: '',
      isLoading: false,
      isSuccess: false,
    }
  },
  methods: {
    async inviteUser() {
      this.error_message = ''
      this.isLoading = true
      try {
        const params = JSON.stringify({
          username: this.username,
        })
        const apiCall = await this.$http.post(
          'https://us-central1-dsclasugithubinvite.cloudfunctions.net/app',
          params,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        let apiRes = apiCall.data
        const { status } = apiRes

        if (status) {
          this.isSuccess = true
        }
      } catch (error) {
        this.isLoading = false
        if (error.status === 401) {
          this.error_message = error.data.body
        }
      }
    },
  },
}
</script>

<style>
.dsc-logo {
  width: 300px;
  margin: auto;
}

input[type='button']:disabled {
  background-color: rgba(66, 133, 244, 0.4);
  cursor: progress;
}

.main {
  /* background: #ffffff; */
  background: url('~assets/img/large-bg.png') no-repeat center;
  background-size: 1200px;
  height: 100vh;
}

.inner-content {
  background: rgba(255, 255, 255,0.6);
}
</style>
