const colorArr = [
    {
        color: '#FF7557',
        font: 'black'
    },{
        color: '#FFC957',
        font: 'black'
    },{
        color: '#FF578D',
        font: 'white'
    },{
        color: '#57BAFF',
        font: 'black'
    },{
        color: '#578DFF',
        font: 'white'
    },{
        color: '#7557ff',
        font: 'white'
    }];
const quoteArr = [{
    quote: "Winners never and quitters never win",
    author: "Vince Lombardi"
}, {
    quote: "ABC",
    author: "XYZ"
}, {
    quote: "LMN",
    author: "OPQ"
}, {
    quote: "HJK",
    author: "BNM"
}];

$(document).ready(function () {

    $('#quote').html(quoteArr[0].quote);
    $('#author').html(quoteArr[0].author);

});

function change() {
    let index = Math.floor(Math.random() * Math.floor((colorArr.length - 1)));
    $('body').css('background', colorArr[index].color);
    $('.card').css('color', colorArr[index].color);
}
