<template>
    <div class="city">
        <div class="city__place-name">
            <p>Global Message Services Ukraine LLC</p>
        </div>
        <div class="city__place-address">
            <p>Kuiv, Stepan Bandera, 33<br>
            02066<br>
            Ukraine</p>
        </div>
    </div>
</template>


<style lang="scss">
    @keyframes open {
        from {transform: scale(0);}
        to { transform: scale(1);}
    }
    .city{
        animation: open 1s;
        &__place-name{
            font-size: 26px;
            line-height: 20px;
            margin-bottom: 36px;
        }
        &__place-address{
            font-size: 11px;
            line-height: 20px;
        }
    }
</style>