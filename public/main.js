$(document).ready(function() {
    var text_max = 280;
    $('#textarea_feedback').html(text_max );

    $('#comment').keyup(function() {
        var text_length = $('#comment').val().length;
        var text_remaining = text_max - text_length;

        $('#textarea_feedback').html(text_remaining );
    });

});
