//Makes Sure The Page Loaded
$(document).ready()
{
    $(function () {

        //When Clicked, Will Translate The Texy
        $("#translateButton").on("click", function (event) {
            event.preventDefault();

            //Creates An Object Holding The Text To Translate And The Desired Language
            var translateText =
            {
                userText: $("#newName").val().trim(),
                langId: $("#languageList option:selected").val()
            };

            //Posts The Infomation By Putting It In The Div Below
            $.post("/translate", translateText, function (data, status) 
            { 
                $("#translated").text(data); 
            })
        })

    })
}