$('.example-1').extm();
$('.example-2').extm({
    position: 'overlay'
});
$('.example-3').extm({
    squareOverlay: true,
});

function changeMainPhoto(src) {
    document.getElementById("main-photo").src = src;
}