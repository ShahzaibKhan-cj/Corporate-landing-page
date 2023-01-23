//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   scrollify  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




 



    $(function() {
        $.scrollify({
          section : ".scrolling",
          easing:"easeOutExpo",
          scrollSpeed: 1300,
          overflowScroll:true,
          touchScroll:true,
          interstitialSection:".form-section, .footer-section",
          // standardScrollElements: ".test",
          setHeights: false,
        });


        // $.scrollify({
        //   section : "#header-section",
        //   easing:"easeOutExpo",
        //   scrollSpeed: 1300,
        //   overflowScroll:true,
        //   touchScroll:true,
        //   // interstitialSection:".test"
        // });
      });
  
 