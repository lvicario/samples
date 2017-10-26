google.setOnLoadCallback(function()
{

    // Color changer
    $(".small").click(function(){
        $("#css-size").attr("href", "css/style_small.css");
        return false;
    });
    
    $(".medium").click(function(){
        $("#css-size").attr("href", "css/style_medium.css");
        return false;
    });
    
    $(".large").click(function(){
        $("#css-size").attr("href", "css/style_large.css");
        return false;
    });

});