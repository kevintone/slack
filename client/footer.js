Template.footer.events({
    'keypress input': function(e) {
        var inputVal = $('.input-box_text').val();
        if(!!inputVal) {
            var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
            if (charCode == 13) {
                e.stopPropagation();
                Meteor.call('newMessage', {text: $('.input-box_text').val()});
                $('.input-box_text').val("");
                return false;
            }
        }
    }
});

Messages.insert({
    text: $('.input-box_text').val(),
    user: Meteor.userId(),
    timestamp: Date.now()
});

Meteor.call('newMessage', {text: $('.input-box_text').val()});