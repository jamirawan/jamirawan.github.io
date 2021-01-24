	$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '26394276',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '26394276.7898dbd.e43583693da14b4ab51a26d53830d99b',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});