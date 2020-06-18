<template>
  <section class="contacts">
    <div class="container">
      <div class="contacts__inner">
        <div class="contacts__title"><h2>Contacts</h2></div>
        <div class="contacts__office">
          <div class="contacts__office-title">
            <h3><b class="contacts__office-title--activ">GMS</b> Headquarters</h3>
          </div>
          <div class="contacts__office-inner">
            <div class="contacts__office-address">
              <p>Global Message Services Ukraine LLC<br>
              Bundesstrasse 5 | 3rd Floor<br>
              6300 Zug<br>
              Switzerland</p>
            </div>
            <div class="contacts__office-tel">
              <a href="tel:+41 41 544 62 00">+41 41 544 62 00</a>
            </div>
          </div>
          <div class="contacts__office-contact">
            <div class="contacts__office-mail">
              <p>Email</p>
              <a href="mailto:info@gms-worldwide.com">info@gms-worldwide.com</a>
            </div>
            <div class="contacts__office-viber">
              <p>Send message</p>
              <a href="viber://chat?number=%2B41415446200">Viber us</a>
            </div>
            <div class="contacts__office-form">
              <p>Send form</p>
              <a href="#">Contact us</a>
            </div>
          </div>
        </div>
        <div class="contacts__support">
          <div class="contacts__support-title">
            <h3>Technical support <b class="contacts__support-title--activ">24/7</b></h3>
          </div>
          <div class="contacts__support-text">
            <p>GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.</p>
          </div>
          <div class="contacts__support-tel">
            <a href="tel:+41 41 544 62 06">+41 41 544 62 06</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .contacts{
    &__inner{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      padding: 62px 0 100px 0;
      color: rgb( 51, 51, 51 );
      font-weight: normal;
    }
    &__title{
      width: 100%;
      text-align: left;
      font-size: 50px;
      line-height: 48px;
      margin-bottom: 50px;
    }
    &__office{
      width: 50%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: start;
      align-items: flex-start;
      &-title{
        width: 100%;
        font-size: 34px;
        line-height: 48px;
        margin-bottom: 45px;
        &--activ{
          text-decoration: none;
          color: rgb( 61, 181, 101 );
        }
      }
      &-address{
        font-size: 15px;
        margin-right: 37px;
        line-height: 28px;
      }
      &-tel{
        font-size: 26px;
        line-height: 36px;
        margin-top: 25px;
        & a{
          color: rgb( 61, 181, 101 );
        }
      }
      &-contact{
        font-size: 15px;
        line-height: 28px;
        & a{
          font-size: 14px;
          line-height: 28px;
          letter-spacing: 0.7px;
          font-family: "SuisseIntl-SemiBold";
          text-transform: uppercase;
          color: rgb( 61, 181, 101 );
        }
      }
    }
    &__support{
      width: 50%;
      padding-left: 45px;
      &-title{
        font-size: 34px;
        line-height: 48px;
        margin-bottom: 45px;
        &--activ{
          color: #3db565;
        }
      }
      &-text{
        font-size: 15px;
        line-height: 28px;
      }
      &-tel{
        font-size: 26px;
        line-height: 36px;
        margin-top: 25px;
        & a{
          color: rgb( 61, 181, 101 );
        }
      }
    }
  }
</style>
