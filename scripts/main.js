// $(document).ready(function () {
//     $('#green').hover(function () {
//         $('#text').css('color', 'green'); // over

//     }, function () {
//         $('#text').css('color', 'black'); // out
//     });
//     $('#red').hover(function () {
//         $('#text').css('color', 'red'); // over

//     }, function () {
//         $('#text').css('color', 'black'); // out
//     });
//     $('#blue').hover(function () {
//         $('#text').css('color', 'blue'); // over

//     }, function () {
//         $('#text').css('color', 'black'); // out
//     });
// });
$(document).ready(function () {
    //Lorsque ma souris survol ce qui concerne la classe .color,
    $('.color').hover(function () {
        //je crée une variable pour ajouter l'attribut #id à l'objet ".color" ( celui qui sera survolé)
        var divColor = $(this).attr('id');
        $('#text').css('color', divColor)
            //la couleur du texte change en lui appliquant la couleur de l'id correspondant.            $('#text').css('color',addAttr);  // over
        }, function () {
            $('#text').css('color','black');// out
        }
    );
});