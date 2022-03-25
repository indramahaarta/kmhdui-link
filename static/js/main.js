window.onload = function() {
    var btn = document.getElementById("btn");
    var alert = document.getElementById("alert");

    if (btn != null) {

        btn.addEventListener('click', function(e){
            e.preventDefault();

            var copyText = document.getElementById("short_link").value;
            navigator.clipboard.writeText("https://kmhdui.herokuapp.com/" + copyText);

            var lu = document.getElementById("long_link").value;
            var su = document.getElementById("short_link").value;

            $.ajax({
                type:'POST',
                url:'create/',
                data: {
                    long_url : lu,
                    short_url : su,
                    csrfmiddlewaretoken : $('input[name=csrfmiddlewaretoken').val()
                },
                success: function(){
                    if (lu != "" && su != "" && lu.length >=8 && lu.slice(0,8) == "https://") { 
                        successToGenerateURL("Your URL has been copied to the clipboard");
                    } else if (lu != "" && su != "" && lu.length ==7 && lu.slice(0,7) == "http://"){
                        successToGenerateURL("Your URL has been copied to the clipboard");
                    } else if (lu != "" && su != "") {
                        urlIsNotValid("URL is not valid!!");
                    } else {
                        fieldNotCompleate("The form cannot be empty!!");
                    }
                }
            });
        });
    }

    function successToGenerateURL(text){
        alert.classList.add("additional");
        alert.innerText = text;

        setTimeout(() =>{
            alert.classList.remove("additional");
            btn.innerText = "Generate URL";
        }, 4500)
    }

    function fieldNotCompleate(text){       
        alert.classList.add("additional", "button-style3");
        alert.innerText = text;

        setTimeout(() =>{
            alert.classList.remove("additional", "button-style3");
        }, 4500)
    }

    function urlIsNotValid(text){
        alert.classList.add("additional", "button-style3");
        alert.innerText = text;

        setTimeout(() =>{
            alert.classList.remove("additional", "button-style3");
        }, 4500)
    }
}