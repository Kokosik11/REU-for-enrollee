// const forms = document.querySelectorAll(".request-form");
$(".request-form").each((index, form) => {
    $(form).submit(() => {
        if($(form).find(".personal").attr("checked")) {
            $.post(
                `request/${index+1}`,
                $(form).serialize()
            );
            return false; 
        }
        else {
            alert("Дайте согласие на обработку данных!")
            return false;
        }
    })
})