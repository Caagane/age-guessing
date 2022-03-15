

function ageGuessing() {
    let steps = document.getElementById('steps');
    let input = document.getElementById('input').value;
    
    let allSteps = {
        step1: "Adigoon ii sheegin da'daada ma ma kuu sheegaa?!",
        step2: "Namber qabso, <span>1</span> ilaa <span>9</span>",
        step3: "Namberka aad qabsatay, <span>* 2</span>",
        step4: "Tirada kuu soo baxay, <span>+ 5</span>",
        step5: "Tirada kuu soo baxay, <span>* 50</span>",
        step6: "Hadii bishii aad dhalatay la daafay, <span>+ 1772</span> <br> hadii kale <span>+ 1771</span>",
        step7: "Tirada kuu soo baxay, <span>-</span> Sanadkii aad dhalatay",
        step8: "Tirada kuu soo baxday halkan Gali"
    }

    switch (steps.innerHTML) {
        case allSteps.step1:
            steps.innerHTML = allSteps.step2;
            document.getElementById('next').innerHTML = 'Ka Dibna';
            break;
        case allSteps.step2:
            steps.innerHTML = allSteps.step3;
            break;
        case allSteps.step3:
            steps.innerHTML = allSteps.step4;
            break;
        case allSteps.step4:
            steps.innerHTML = allSteps.step5;
            break;
        case allSteps.step5:
            steps.innerHTML = allSteps.step6;
            break;
        case allSteps.step6:
            steps.innerHTML = allSteps.step7;
            break;
        case allSteps.step7:
            steps.innerHTML = allSteps.step8;
            document.getElementById('next').innerHTML = "Soo Saar Da'dayda";
            document.getElementById('input').style.display = 'block';
            break;
        case allSteps.step8:
            if (document.getElementById('input').style.display != "none" && input === "") {
                alert('ii sheeg tirada kuu soo baxday');
            } else {


                if (document.getElementById('input').style.display != "none" && input.length != 3) {
                    alert('a aaah! wax baa khaldan!, tiradu waa inay 3 god ahaataa!');
                } else if (input.length === 3) {
                    document.getElementById('next').innerHTML = "Haa, isku day";
                    document.getElementById('input').style.display = 'none';
                    steps.innerHTML = allSteps.step1;

                    document.getElementById('container').innerHTML += `
                        <div class="result">
                            <p>Da'daadu waa = ${input.charAt(1)}${input.charAt(2)}</p>
                            <p>Numberkii aad qabsatay = ${input.charAt(0)}</p>
                        </div>
                    `;
                    
                    input = "";
        
                }

            }
            break;
    }

}













