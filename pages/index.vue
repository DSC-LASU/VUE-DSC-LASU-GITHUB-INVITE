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
          <form class="tw-space-y-4">
            <div class="form-group">
              <input
                type="text"
                placeholder="Enter GitHub Username"
                class="tw-border tw-appearance-none focus:tw-border-none focus:tw-outline-none tw-w-full tw-py-3 tw-p-2 tw-rounded-md"
              />
            </div>

            <div class="form-group">
              <input
                type="button"
                value="Get Invite"
                class="tw-border tw-appearance-none tw-border-none focus:tw-outline-none tw-w-full tw-py-3 tw-p-2 tw-rounded-md tw-bg-google-blue tw-text-white tw-cursor-pointer"
              />
            </div>

            <div class="form-group">
              <p class="tw-text-center tw-text-sm">
                Don't Have a GitHub Account? <a href="https://github.com/join" class="tw-text-google-blue tw-font-bold tw-underline">Join Here</a>
              </p>
            </div>



            <div class="form-group tw-mt-32">
              <p class="tw-text-center tw-font-bold tw-text-gray-600">
               DSC LASU 2020
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
// https://dsclasu-c83d8.web.app/invite
export default {
  name: 'DSCLASU',
}
</script>

<style>
</style>
