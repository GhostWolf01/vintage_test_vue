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
                            v-bind:class="['map__tab-btn', { 'map__tab-btn--active' : tabActive  === tab }]"
                            v-on:click="tabActive = tab">{{ tab }}</button>
                        </div>
                        <component v-bind:is="componentActive"></component>

                    </div>
                </div>
                <div class="map__map-active">
                    
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

export default {
    components: {
        Kyiv, NewYork, Guangzhou, Barcelona
    },
    data: function() {
        return {
            tabActive: 'Kyiv',
            tabs: [ 'Kyiv', 'NewYork', 'Guangzhou', 'Barcelona' ]
        }
    },
    computed: {
        componentActive: function(){
            return this.tabActive;
        }
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
    }
</style>