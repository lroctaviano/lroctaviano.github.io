<template>
    <section class="contact-container" id="getInTouch">
        <div class="contact-items-container">
            <div class="contact-text-container">
                <div class="contact-text-description">
                    <h4 class="contact-text-title">Get in touch!</h4>
                    <p class="contact-text-subtitle">Feel free to contact me via email or my professional accounts if you are interested in my works and expertise.</p>
                    <div class="contact-text-buttons">
                        <button title="Linkedin" @click="getContactInfo('linkedin')" class="contact-text-button">
                            <i class="contact-text-icon mdi mdi-linkedin"></i>
                        </button>
                        <button title="Mobile Contact" @click="getContactInfo('telno')" class="contact-text-button">
                            <i class="contact-text-icon mdi mdi-phone"></i>
                        </button>
                        <button title="Github" @click="getContactInfo('github')" class="contact-text-button">
                            <i class="contact-text-icon mdi mdi-github"></i>
                        </button>
                        <button title="Jobstreet" @click="getContactInfo('jobsteet')" class="contact-text-button">
                            <i class="contact-text-icon mdi mdi-briefcase"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="contact-buttons-container">
                <div class="contact-buttons">
                    <button onclick="location.href='mailto:luigioctaviano@gmail.com'" class="contact-button contact-email-button">Send Email</button>
                    <a href="https://docs.google.com/document/d/1120C-juUxhZZLSFRbsrATXHJJKNcu3OrPvTMperunok/edit?usp=sharing" class="contact-button contact-download-button" target="_blank">View my CV</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        getContactInfo (contactType) {
            switch (contactType) {
                case 'linkedin':
                    window.open('https://www.linkedin.com/in/luigioctaviano/', '_blank')
                    break
                case 'telno':
                    location.href = 'tel:+639062839275'
                    break
                case 'github':
                    window.open('https://github.com/lroctaviano', '_blank')
                    break
                case 'jobsteet':
                    window.open('https://www.jobstreet.com.ph/profile/luisrafael-octaviano-RfbDvbgZq6', '_blank')
                    break
            }
        }
    }
}
</script>
<style scoped>
.contact-container {
    height: auto;
    background: #F5F5F5;
    color: #000;
}

.contact-items-container {
    display: flex;
    flex-direction: column;
    height: inherit;
}

.contact-text-container {
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
}

.contact-buttons-container {
    width: 100%;
    height: inherit;
    display: flex;
}

.contact-text-description {
    margin: auto;
    padding: 25px;
    text-align: center;
}

.contact-text-title {
    font-size: 30px;
    font-weight: bold;
}

.contact-text-subtitle {
    font-size: 20px;
}

.contact-button {
    padding: 15px 30px;
    border: 1px solid #18A0FB;
    border-radius: 5px;
    font-family: 'Montserrat';
    cursor: pointer;
    font-size: 17px;
    width: 215px;
}

.contact-email-button  {
    padding: 15px 30px;
    background: #18A0FB;
    color: #FFF;
    margin-bottom: 25px;
}

.contact-download-button {
    background: #FFF;
    color: #18A0FB;
    margin-bottom: 25px;
    text-decoration: none;
    text-align: center;
}

.contact-buttons {
    margin: auto;
    display: flex;
    flex-direction: column;
}

.contact-text-buttons {
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-top: 20px;
    width: fit-content;
}

.contact-text-button {
    height: 44px;
    width: 44px;
    margin-right: 10px;
    background: #E5E5E5;
    border-radius: 50%;
    display: flex;
    border: 1px solid transparent;
    cursor: pointer;
    transition: border 0.3s ease;
    pointer-events: auto;
    color: #000000;
    padding: 0;
}

.contact-text-button:last-child {
    margin-right: 0;
}

.contact-text-button:hover {
    border: 1px solid #000000;
}

.contact-text-icon {
    margin: auto;
    font-size: 25px;
}

@media only screen and (min-width: 768px) {
    .contact-buttons {
        text-align: left;
        flex-direction: row;
        margin-bottom: 20px;
    }

    .contact-email-button  {
        margin-right: 45px;
    }
}

@media only screen and (min-width: 992px) {
    .contact-text-title {
        font-size: 45px;
    }

    .contact-text-subtitle {
        font-size: 25px;
    }
}

@media only screen and (min-width: 1200px) {
    .contact-container {
        height: 300px;
    }

    .contact-items-container {
        flex-direction: row;
    }

    .contact-text-container {
        width: 65%;
        margin-left: 80px;
    }

    .contact-text-buttons { 
        margin: unset;
        margin-top: 20px;
        margin-right: auto;
    }

    .contact-buttons-container {
        width: 35%;
        margin-right: 80px;
    }

    .contact-text-description {
        padding: 0;
        padding-right: 80px;
        text-align: left;
    }

    .contact-email-button  {
        margin-right: 45px;
        margin-bottom: unset;
    }

    .contact-download-button {
        margin-bottom: unset;
    }

    .contact-buttons {
        margin-bottom: unset;
        margin: auto;
        margin-left: auto;
        margin-right: 0;
    }
}
</style>
