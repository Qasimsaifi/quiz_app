import quizdata from "@/data/mcq"

export default function Home() {
  return (
    <div>
      <h1 className="home-heading">Test Your Knowledge</h1>
      <h2>Availble quiz</h2>
      <div>
        <h4>{quizdata.quiz_text}</h4>
    <a href="quiz" className="btn">Start Quiz</a>
      </div>
    </div>
  )
}
