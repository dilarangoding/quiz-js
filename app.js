      const DB_QUIZ = [
        {
          question: "Mana Album Pink Floyd Yang Benar",
          answers: [
            "Little Wings",
            "Paranoid",
            "The Dark Side of the moon",
            "Abbey Road",
          ],
        },
        {
          question: "Judul Lagu Yang Ada Dialbum Abbey Road?",
          answers: [
            "Here Comes the sun", 
            "Hey Jude", 
            "Jablay", 
            "Rock n Roll"
          ],
        },
        {
          question: "Pilih Jawaban Yang Tepat",
          answers: [
            "Album The Beatles(White) Keluar tahun 1968",
            "Album Parklife Keluar tahun 1995",
            "Album Never Mind The Bollocks, Here's the Sex Pistols keluar tahun 1978", 
            "Album The Queen is Dead keluar tahun 1987"
          ],
        },
      ];

      const CORRECT_ANSWERS = [2, 0, 0];


      function startQuiz(){
        document.getElementById('opening_window').style.display = "none";
        document.getElementById('quiz_window').style.display = "block";
      }

      //###################

      let current_q = 0;
      let total_score = 0;
      let saved_answers = [];


      document.addEventListener("DOMContentLoaded", function (event) {
        setupQuestion();
      });

      function setupQuestion() {
        document.getElementById("question").innerText  =  DB_QUIZ[current_q]["question"];

        for (let i = 0; i <= DB_QUIZ.length ; i++) {
          document.getElementById(`choicesText${i}`).innerText = DB_QUIZ[current_q]["answers"][i];
        }
      }

      function nextQuestion(){
        current_q++;
        saveAnswer();
        if(current_q > DB_QUIZ.length - 1){
          stopQuiz();
        }
        resetState();
        setupQuestion();
      }

      function resetState(){
        const choosedAnswer = document.querySelector('input[name="choices"]:checked');
        if(choosedAnswer != null){
          choosedAnswer.checked = false
        }
      }

      function saveAnswer(){
        const answers = document.querySelector('input[name="choices"]:checked');
        if(answers != null ){
            saved_answers.push(parseInt(answers.getAttribute('data-id')))
        }else{
          saved_answers.push(null);
        }
      }

      function stopQuiz(){
        checkScore();
        
        document.getElementById('quiz_window').style.display = "none";
        document.getElementById('closing_window').style.display = "block";
        document.getElementById('scoreText').innerHTML = 'Score kamu...' + total_score;

        return
      }

      function checkScore(){
          for (let i = 0; i < saved_answers.length; i++) {
            
            if(saved_answers[i] === CORRECT_ANSWERS[i]){
              total_score += 100;
            }
          
          }
      }
    