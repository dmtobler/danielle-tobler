"use strict";

(function() {
        // let mainContainer = $('#main-block-container');
        // let containerHeight = $('#main-block-container').css('height');
        // let nameWidth = $('#name-title').css('width');
        // console.log(nameWidth);
        // $(mainContainer).css('width', containerHeight);

        let leftTimelineCirclesHeight = $('.left-timeline-circle').css('height');
        let leftTimelineCirclesHeight = $('.left-timeline-circle').css('height');

    $(document).ready(function() {


        $(window).resize(function () {
            mainContainer = $('#main-block-container');
            containerHeight = $('#main-block-container').css('height');
            $(mainContainer).css('width', containerHeight);
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