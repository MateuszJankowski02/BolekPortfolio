<script>
  export default {

  }
</script>
<template>
    <div class="section" id="contact">
        <div class="contact-wrapper">
            <div class="contact-info-wrapper">
                <div>
                    <p>Let's talk</p>
                    <p>Tell me something about yourself, maybe we can do something incredible together</p>
                </div>
                <div>
                    <p>Mail me at:</p>
                    <p>j.bolek02@gmail.com</p>
                </div>
            </div>
            <div class="contact-form-wrapper">
                <form>
                    <fieldset class="contact-form">
                        <legend>Send me a message!</legend>
                        <input type="text" id="fullname" name="fullname" placeholder="Full name">
                        <input type="text" id="email" name="email" placeholder="Email">
                        <input type="text" id="subject" name="subject" placeholder="Subject">
                        <textarea id="message" name="message" placeholder="What's on your mind?"></textarea>
                        <AppButton buttonTitle="Send" class="contact-form-button" @click.prevent=""/>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>


</style>