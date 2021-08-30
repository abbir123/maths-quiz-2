player_1 = localStorage.getItem("player1_name");
player_2 = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML = player_1 + ":";

document.getElementById("player_2").innerHTML = player_2 + ":";


document.getElementById("player1_score").innerHTML = player1_score;

document.getElementById("player2_score").innerHTML = player2_score;


document.getElementById("player_question").innerHTML = "Question Turn-" + player_1;

document.getElementById("player_answer").innerHTML = "Answer Turn-" + player_2;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    charAt1 = word.charAt(1)

    lenght_divide_2 = Math.floor(word.length / 2)
    charAt2 = word.charAt(lenght_divide_2);
    console.log(charAt2);
    lenght_minus_1 = word.length - 1;
    charAt3 = word.charAt(lenght_minus_1);
    console.log(charAt3);
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);
    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
