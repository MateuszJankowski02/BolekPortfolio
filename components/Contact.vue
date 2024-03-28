<script>
  export default {

  }
</script>
<template>
    <div class="section">
        <div class="contact-wrapper">
            <h5 class="section-heading">Contact Me</h5>
            <div class="contact-info-wrapper">
                <div>
                    <p>Let's talk</p>
                    <p>Tell me something about yourself, maybe we can do something incredible together</p>
                </div>
                <div>
                    <p>Mail me at:</p>
                    <p>Loremipsum@dolor.com</p>
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
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/abstracts' as *;

.contact-wrapper{
    grid-column: 2;
    grid-row: 2;
    display: grid;
    font-size: 1.4rem;
    line-height: 1.6rem;
    @media (max-width: 500px) {
        grid-template-rows: 1fr 7fr 7fr;
        grid-template-columns: 1fr;
        .section-heading{
        grid-column-start: 1;
        grid-column-end: span 1;
        text-align: center;
    }
    }
    @media (min-width: 500px) {
        grid-template-rows: 1fr 7fr;
        grid-template-columns: 1fr 1fr;
        .section-heading{
        grid-column-start: 1;
        grid-column-end: span 2;
        text-align: center;
    }
    }
    
}

.contact-info-wrapper{
    @include flex-center(column);
    align-items: flex-start;
    gap: .5rem;
}

.contact-form-wrapper{
    @include flex-center(column);
}

.contact-form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

</style>