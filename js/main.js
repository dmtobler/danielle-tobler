"use strict";

(function() {

    let leftTimelineCirclesHeight = $('.left-timeline-circle').css('height');
    let leftTimelineCirclesHeight = $('.left-timeline-circle').css('height');

    $(document).ready(function() {


        $(window).resize(function () {
            let mainContainer = $('#main-block-container');
            let containerHeight = $('#main-block-container').css('height');
            $(mainContainer).css('width', containerHeight);
        });
    });

})();