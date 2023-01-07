var player = []
var dealer = []
var scoreP = document.getElementById('scoreP')
var scoreD = document.getElementById('scoreD')
var yourCards = document.getElementById('yourCards')
var houseCards = document.getElementById('houseCards')
var result = document.getElementById('resultMsg')

// yourCards.innerHTML="<img src = '7-H.png'></img>"

function generate() {
    let random = Math.floor(Math.random() * 13) + 1;
    return random;
}

function cardDisplay(n) {
    let card = ['C','D','H','S']
    let r1 = Math.floor(Math.random() * 4);
    temp = n+"-"+"H"+".jpg"
    // temp = n+"-"+card[r1]+".png"
    img1 = "<img src = '"+temp+"'></img>";
    yourCards.innerHTML+=img1
    console.log(img1);
}
function cardDisplay2(n) {
    let card = ['C','D','H','S']
    let r1 = Math.floor(Math.random() * 4);
    temp = n+"-"+"H"+".jpg"
    // temp = n+"-"+card[r1]+".png"
    img1 = "<img src = '"+temp+"'></img>";
    houseCards.innerHTML+=img1
    console.log(img1);
}


setTimeout(() => {
    player.push(generate())
    player.push(generate())
    dealer.push(generate())
    console.log(player)
    console.log(dealer)
    let p1 = player[0]
    let p2 = player[1]
    let d1 = dealer[0]
    if (p1==1) {
        p1=11
    }
    else if(p1>10){
        p1=10
    }
    if (p2==1) {
        p2=11
    }
    else if(p2>10){
        p2=10
    }
    if (d1==1) {
        d1=11
    }
    else if(d1>10){
        d1=10
    }
    scoreP.innerText=(p1+p2)
    scoreD.innerText=(d1)
    yourCards.innerHTML="<img src = '"+player[0]+"-H.jpg'></img>"+"<img src = '"+player[1]+"-H.jpg'></img>"
    houseCards.innerHTML="<img src = '"+dealer[0]+"-H.jpg'></img>"
}, 3000);

function deal() {
    location.reload()
    
}

function hit() {
    let sum1 = 0;
    let x = generate()
    cardDisplay(x)
    player.push(x)

    for (let i = 0; i < player.length; i++) {
        if (player[i] == 1) {
            sum1 = sum1 + 11
            if (sum1>21) {
                sum1=sum1-10;
            }
        }
        else if (player[i] >= 11) {
            sum1 = sum1 + 10
        }
        else {
            sum1 = sum1 + player[i]
        }
        // sum1 = check(sum1, player);
    }

    console.log(player + " - sum = " + sum1)
    console.log(dealer)
    if (sum1 > 21) {
        // alert("you lose ")
        result.innerText = "You Lose"
    }
    scoreP.innerText=sum1
    // scoreD.innerHTML=sum2 and i am a fullstack developer
}
function stand() {
    let sum1 = 0
    let sum2 = 0
    if(dealer[0]>=11){
        sum2 = 10
    }
    else if(dealer[0]==1){
        sum2=11
    }
    else{
        sum2 = dealer[0]
    }
    let x = generate()
    while (sum2 <= 17) {
        cardDisplay2(x)
        if (x == 1) {
            sum2 = sum2 + 11
            if (sum2>21) {
                sum2=sum2-10;
            }
        }
        else if (x >= 11) {
            sum2 = sum2 + 10
        }
        else {
            sum2 = sum2 + x
        }
        dealer.push(x)
        // sum2 = check(sum2,dealer);
    }

    for (let i = 0; i < player.length; i++) {
        if (player[i] == 1) {
            sum1 = sum1 + 11
            if (sum1>21) {
                sum1=sum1-10;
            }
        }
        else if (player[i] >= 11) {
            sum1 = sum1 + 10
        }
        else {
            sum1 = sum1 + player[i]
        }
        // sum1 = check(sum1, player);
    }

    sum1 = check(sum1,player);
    sum2 = check(sum2,dealer);
    scoreP.innerText=+sum1
    scoreD.innerText=+sum2
    console.log(player + " sum = " + sum1)
    console.log(dealer + " sum = " + sum2)
    if (sum1 < sum2 && sum2 <= 21) {
        result.innerText = "You Lose"
    }
    if ((sum1 > sum2 && sum1 <= 21) || (sum2 > 21)) {
        result.innerText = "You Win"
    }
    if (sum1 == sum2 && sum1 <= 21) {
        console.log("Draw")
        result.innerText = "Its a Draw!!"
    }
    console.log("end")
}

function check(sum, arr) {
    let x=0;
    if (sum > 21) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 1) {
                x++
            }
        }
    }
    return (sum - 10*x);
}