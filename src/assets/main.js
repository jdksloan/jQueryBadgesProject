$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/jdksloan.json',
    dataType: 'jsonp',
    success: function(response) {
      response.courses.completed.forEach(function(course) {
        $( "#badges" ).append( '<div class="course">' + "<h3>" +  course.title + "</h3>" + "<img src='" + course.badge + "''/>" + "<a class='btn btn-primary' href='" + course.url + "' target='_blank'>See Course </a>"  + "</div>" );
      });
    }
  });
});
