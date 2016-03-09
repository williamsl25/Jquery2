$(document).ready(function (){
  var posts = "";

  blogPosts.forEach(function (el, idx){
    posts += "<article data-author='"
    + el.author
    + "'>"
    + "<h3>"
    + el.title
    + "</h3>"
    + "<p>"
    + el.content
    + "</p>"
    + "</article>";

  }); // end of blogPosts.forEach(function (el, idx)

  $('.blog').on('click', 'article', function(event){
    console.log($('article').html());
    $(this).text("You clicked my link!!!")
  });  //click the link and get a surprise

  $('.blog').append(posts); // will append posts to bottom

  var navItem = $('li').find('a');
  navItem.click(function (event){
    event.preventDefault();
    var selectedPage = "." + $(this).attr('rel');

    $(selectedPage).siblings('section').removeClass('active');
    $(selectedPage).addClass('active');

  });

}); // end of (document).ready
