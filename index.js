    // Vue.component('test_h1',{
    //     template: '<h1>Congratulations, Quiz Completed.</h1>'
    // })
    // import { computed } from 'vue' 
    const app = Vue.createApp({
        data() {
            return {
                index: 0,
                selectedAnswer: '',
                correctAnswer: 0,
                wrongAnswer: 0,
                count: 3,
                questions: [
                    {
                        question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
                        answers: {a: 'Amazon EC2 costs are billed on a monthly basis', b: 'Users retain full administrative access to their Amazon EC2 instances', c: 'Amazon EC2 instances can be launched on demand when needed.', d: 'Users can permanently run enough instances to handle peak workloads'},
                        correctAnswer: 'c'
                    },
                    {
                        question: "Which AWS service would simplify the migration of a database to AWS ?",
                        answers: {a: 'AWS Storage Gateway', b: 'AWS Database Migration Service (AWS DMS)', c: 'Amazon EC2.', d: 'Amazon AppStream 2.0'},
                        correctAnswer: 'b'
                    },
                    {
                        question: "Which AWS offering enables users to find, buy, and immediately start using software solutions in theirAWS environment?",
                        answers: {a: 'AWS Config', b: 'AWS OpsWorks', c: 'AWS SDK', d: 'AWS Marketplace'},
                        correctAnswer: 'd'
                    },
                ]
            }
        },
        methods: {
            answered(e) {
                this.selectedAnswer = e.target.value
                if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                    this.correctAnswer++
                else
                    this.wrongAnswer++
            },
            nextQuestion() {
                this.index++
                this.selectedAnswer = ''
            },
            showResults() {
                this.index++
            },
            resetQuiz() {
                this.index = 0
                this.selectedAnswer = ''
                this.correctAnswer = 0
                this.wrongAnswer = 0
            }
        },
        computed: {
            getPageTitle() {
              if (this.correctAnswer === 0) {
                return "Tough Luck! 😢";
              } else if (this.correctAnswer > 0 && this.correctAnswer < 1) {
                return "You Can Do Better! 🙂";
              } else if (this.correctAnswer === 1 || this.correctAnswer === 2) {
                return "Almost Perfect Score! 😂";
              } else if (this.correctAnswer === 3) {
                return "Perfect Score! 🎉";
              } else {
                return "Nice Score! 😄";
              }
            }
          }
        
        
    })

    app.mount('#app')

    