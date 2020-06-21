<template>
    <div id="map">

    </div>
</template>
<script>
import {Loader} from 'google-maps';
import googleMapStyle from '../assets/map/googleMapStyle.json';
import markerStyle from '../assets/map/marker.png';


export default {
    name: 'googleMap',
    props : [ 'mapLatlng' ] ,
    data() {
        return {
            map: null, 
            marker: null
        }
    },
    watch: {
        mapLatlng: function (val) {
            this.map.setCenter(val);
            this.marker.setPosition(val);
        }
    },
    mounted() {
            let apiKey = "AIzaSyCuJQvEPFtEnnUeDksw0T1BFBW0KNL3DHM";
            let loaderOptions = {
                language: 'ua', 
                libraries: ['geometry', 'places', 'visualization']
            };
            let loader = new Loader( apiKey, loaderOptions);
            let options = {
                    zoom: 13,
                    center: this.mapLatlng,
                    styles: googleMapStyle,
                    mapTypeId: 'roadmap',
                    disableDefaultUI: true
                }
            loader.load().then((google) => {
            this.map = new google.maps.Map(document.getElementById('map'), options);
            this.marker = new google.maps.Marker({
                position: this.mapLatlng,
                map: this.map,
                title:"",
                icon: markerStyle,
            })
        })
    },
}
</script>
<style lang="scss">
    #map{
        height: 100%;
        width: 100%;
    }
</style>
