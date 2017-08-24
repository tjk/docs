<template>
  <div class="ad2 ma-0">
    <script src="//m.servedby-buysellads.com/monetization.js" type="text/javascript"></script>
    <div class="bsa-cpc"></div>
    <script>
      (function(){
        if(typeof _bsa !== 'undefined' && _bsa) {
        _bsa.init('default', 'CKYD6KQN', 'placement:vuetifyjscom', {
          target: '.bsa-cpc',
          align: 'horizontal',
          disable_css: 'true'
        });
          }
      })();
    </script>
  </div>
</template>

<style>
  .ad2 {
    width: 100%;
  }
  
  .bsa-cpc #_default_ {
    position: relative;
    padding: 7px 16px 8px;
    background-color: #3a3a3a;
    font-size: 14px;
    line-height: 1.5;
  }

  .bsa-cpc .default-ad {
    display: none;
  }

  .bsa-cpc ._default_ {
    display: inline;
    overflow: hidden;
    line-height: 1;
  }

  .bsa-cpc ._default_> * {
    vertical-align: middle;
  }

  .bsa-cpc a {
    color: #fff;
    text-decoration: none;
  }

  .bsa-cpc a:hover {
    color: #2196f3;
  }

  .bsa-cpc .default-image {
    display: none;
  }

  .bsa-cpc .default-title:after {
    content: " — ";
  }

  .bsa-cpc .default-title,
  .bsa-cpc .default-description {
    display: inline;
  }

  .bsa-cpc .default-title {
    position: relative;
    margin-left: 8px;
  }

  .bsa-cpc .default-title:before {
    position: relative;
    top: -1px;
    left: -8px;
    padding: 3px 5px;
    border-radius: 2px;
    background-color: #1fad1f;
    color: #fff;
    content: "Sponsor";
    text-transform: uppercase;
    font-size: 10px;
    font-family: Verdana, sans-serif;
    line-height: 1;
  }
</style>