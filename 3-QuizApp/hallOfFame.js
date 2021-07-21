const repeatBtnEl = document.getElementById('repeat-btn');
var table = document.getElementById("result-board");

var firebaseConfig = {
    apiKey: "AIzaSyBm8rI6AYCBowV6ZISNnyhtCk-gCHW4yys",
    authDomain: "js-quizapp-db.firebaseapp.com",
    projectId: "js-quizapp-db",
    storageBucket: "js-quizapp-db.appspot.com",
    messagingSenderId: "809770109991",
    appId: "1:809770109991:web:536dc3e4f51323e2f1d202",
    measurementId: "G-3G5H05N5DS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var playerDetailsRef = firebase.database().ref('players-data');
playerDetailsRef.orderByChild('score').on('value', (snapshot) => {
    const players = snapshot.val();
    for(var key in players){
        var playerName = players[key].name;
        var playerScore = players[key].score;
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = playerName;
        cell2.innerHTML = playerScore;
    }
})

repeatBtnEl.addEventListener('click', () => {
    alert('Answer the quiz properly! 🤣')
    window.location.href ='index.html';
})