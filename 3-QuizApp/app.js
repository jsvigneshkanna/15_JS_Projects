

// var firebaseConfig = {
//     apiKey: "AIzaSyBm8rI6AYCBowV6ZISNnyhtCk-gCHW4yys",
//     authDomain: "js-quizapp-db.firebaseapp.com",
//     projectId: "js-quizapp-db",
//     storageBucket: "js-quizapp-db.appspot.com",
//     messagingSenderId: "809770109991",
//     appId: "1:809770109991:web:536dc3e4f51323e2f1d202",
//     measurementId: "G-3G5H05N5DS"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// var playerDetailsRef = firebase.database().ref('Collected Data');

const playerNameInput = document.getElementById("player_name_text");
const dpEls = document.querySelectorAll(".dp");
const homeSubmitBtn = document.getElementById("home_submit");

let playerName = undefined;
let playerDp = undefined;

// homepage js starts

function getPlayerDp() {
    let dpId = undefined;
    dpEls.forEach((dpEl) => {
        if (dpEl.checked){
            dpId = dpEl.id;
        }
    });
    return dpId;
}

homeSubmitBtn.addEventListener('click', () =>{
    playerName = playerNameInput.value;
    playerDp = getPlayerDp();
    // savePlayerDetails(playerName, playerDp);
    localStorage.setItem('player_name', playerName);
    localStorage.setItem('player_dp', playerDp);
    window.location.href = 'quizPage.html'
});

// function savePlayerDetails(playerName, playerDp) {
//     var newplayerDetailsRef = playerDetailsRef.push();
//     newplayerDetailsRef.set({
//         name: playerName,
//         dp: playerDp,
//     });
// }

// homepage js ends