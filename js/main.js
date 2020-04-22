"use strict";

(function() {


    $(document).ready(function() {

        let mainContainer = $('#main-block-container');
        let containerHeight = $('#main-block-container').css('height');
        $(mainContainer).css('width', containerHeight.toString());

        $(window).resize(function () {
            mainContainer = $('#main-block-container');
            containerHeight = $('#main-block-container').css('height');
            $(mainContainer).css('width', containerHeight.toString());
        });


        // setTimeout(function () {
        //     $('#github-link').show();
        // }, 200);
        //
        // setTimeout(function () {
        //     $('#gitlab-link').show();
        // }, 400);
        //
        // setTimeout(function () {
        //     $('#linkedin-link').show();
        // }, 600);
        //
        // setTimeout(function () {
        //     $('#email-link').show();
        // }, 800);

    });

})();