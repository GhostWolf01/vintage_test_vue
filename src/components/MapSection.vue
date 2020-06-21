<template>
    <section class="map">
        <div class="container">
            <div class="map__inner">
                <div class="map__info">
                    <div class="map__title"><h3>Our Offices</h3></div>
                    <div class="map__tabs">
                        <div class="map__tabs-btns">
                            <button v-for="tab in tabs"
                            v-bind:key="tab"
                            v-bind:class="['map__tab-btn', { 'map__tab-btn--active' : tabActive.nameCity  === tab.nameCity }]"
                            v-on:click="tabActive = tab">{{ tab.nameCity }}</button>
                        </div>
                        <component v-bind:is="componentActive.nameCity"></component>

                    </div>
                </div>
                <div class="map__map-active">
                    <GoogleMap v-bind:mapLatlng="componentActive.latlngCity"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Kyiv from './Kyiv.vue';
import NewYork from './NewYork.vue';
import Guangzhou from './Guangzhou.vue';
import Barcelona from './Barcelona.vue';
import GoogleMap from './GoogleMap.vue';

export default {
    components: {
        Kyiv, NewYork, Guangzhou, Barcelona, GoogleMap
    },
    data: function() {
        return {
            tabActive: {
                    nameCity: 'Kyiv',
                    latlngCity: { lat: 50.450183, lng: 30.523305}
                },
            tabs: [ 
                {
                    nameCity: 'Kyiv',
                    latlngCity: { lat: 50.450183, lng: 30.523305}
                }, 
                { 
                    nameCity: 'NewYork',
                    latlngCity: { lat: 40.711850, lng: -74.006396}
                },
                { 
                    nameCity: 'Guangzhou',
                    latlngCity: { lat: 23.129115, lng: 113.264389}
                },
                { 
                    nameCity: 'Barcelona' ,
                    latlngCity: { lat: 41.385064, lng: 2.173411}
                }, 
            ],
        }
    },
    computed: {
        componentActive: function(){
            return this.tabActive;
        },
    }
}

</script>

<style lang="scss" scoped>
    .map{
        background-color: #262626;
        padding: 100px 0 150px 0;
        color: white;
        &__inner{
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
        }
        &__info{
            width: 50%;
        }
        &__title{
            font-size: 34px;
            line-height: 48px;
            margin-bottom: 50px;
        }
        &__tabs{
            &-btns{
                margin-bottom: 50px;
            }
        }
        &__tab-btn{
            transition: all 0.4s;
            font-size: 11px;
            font-family: 'SuisseIntl-SemiBold';
            color: white;
            border: none;
            background: none;
            text-transform: uppercase;
            cursor: pointer;
            &--active{
              color:  #3db565;
            }
        }
        &__map-active{
            width: 674px;
            height: 538px;
            margin: -100px -50% -150px 0;
        }
    }
</style>