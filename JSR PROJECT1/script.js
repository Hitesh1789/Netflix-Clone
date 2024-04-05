let plus = document.querySelectorAll(".queries");
for (let i = 0; i < 6; i++) {
    plus[i].addEventListener("click", () => {

        if (document.querySelectorAll(".clicked")[i].style.display == "none") {
            document.querySelectorAll(".clicked")[i].style.display = "block";
            document.querySelectorAll(".clicked")[i].style.display = "flex";
            document.querySelectorAll(".clicked")[i].style.flexDirection = "column";
            document.querySelectorAll(".clicked")[i].style.top = "89px";
            document.querySelectorAll(".clicked")[i].style.gap = "19px";
            document.querySelectorAll(".queries svg")[i].style.transform = "rotate(-45deg)";

            if(i==0){
                document.querySelectorAll(".cl")[i].style.height = "345px";
            }
            else if(i==1){
                document.querySelectorAll(".cl")[i].style.height ="231px";
            }
            else if(i==2){
                document.querySelectorAll(".cl")[i].style.height ="378px";
            }
            else if(i==3){
                document.querySelectorAll(".cl")[i].style.height ="230px";
            }
            else if(i==4){
                document.querySelectorAll(".cl")[i].style.height ="230px";
            }
            else {
                document.querySelectorAll(".cl")[i].style.height ="315px";
            }
        }
        else {
            document.querySelectorAll(".cl")[i].style.height = "86px";
            document.querySelector(".cl").style.transition = "all 0.1s ease-in ";
            // document.querySelectorAll(".clicked")[i].innerHTML= "";
            document.querySelectorAll(".clicked")[i].style.display = "none";
            document.querySelectorAll(".queries svg")[i].style.transform = "rotate(-90deg)";
        }
    });
}