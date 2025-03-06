function Submit(){
    var contactname = document.getElementById("cname").value;
    var contactemail = document.getElementById("cemail").value;
    var contactqueries = document.getElementById("cqueries").value;
    console.log("Name: "+contactname);
    console.log("Email "+contactemail);
    console.log("Enqueries/Queries: "+contactqueries);
    alert("Thanks for your queries! We will get back you in touch!!");
}

/*$('.game-list-wrapper .game-list').Game-list({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.game-list-wrapper .custom-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 5
        }
    }
});*/
