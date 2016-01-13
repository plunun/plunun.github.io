// Place any jQuery/helper plugins in here.
$(function() {
   // Hide Language B when the web page loads
   $('.fransk').hide();
   $('.toggleNorsk').click(function () {
       $('.norsk').show();
       $('.fransk').hide();
   });
   $('.toggleFransk').click(function () {
     $('.fransk').show();
     $('.norsk').hide();
   });
});
