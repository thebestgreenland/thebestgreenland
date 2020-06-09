$('.first.circle').circleProgress({
    value: 0.90
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
});
$('.second.circle').circleProgress({
    value: 0.75
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(75 * progress) + '<i>%</i>');
});
$('.third.circle').circleProgress({
    value: 0.95
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(95 * progress) + '<i>%</i>');
});
$('.fourth.circle').circleProgress({
    value: 0.90
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
});
$('.fifth.circle').circleProgress({
    value: 0.95
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(95 * progress) + '<i>%</i>');
});
$('.sixth.circle').circleProgress({
    value: 0.90
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
});