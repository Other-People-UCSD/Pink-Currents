---
---
$(function(){
    $("#no1static").hover(
        function(){
            $(this).attr("src", "{{ site.baseurl }}/uploads/No1.gif");
        },
        function(){
            $(this).attr("src", "{{ site.baseurl }}/uploads/No1-Cover.jpg");
        }
    );
    $("#no2static").hover(
        function(){
            $(this).attr("src", "{{ site.baseurl }}/uploads/No2.gif");
        },
        function(){
            $(this).attr("src", "{{ site.baseurl }}/uploads/No2-Cover.jpg");
        }
    );
});