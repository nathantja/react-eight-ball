import { useState } from "react";
import "./EightBall.css";
import _ from "lodash";

const ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]

/** EightBall
 *
 * Eightball which displays messages on click, and changes color accordingly
 *
 * Properties:
 * - Answers: array of objects like { msg, color }
 *
 * State:
 * - bgColor: CSS color
 * - message: string message
 *
 *  App -> EightBall
  */

function EightBall({ answers = ANSWERS }) {
  const [bgColor, setBgColor] = useState("black")
  const [message, setMessage] = useState("Think of a Question")

  function setStates () {
    const { msg, color } = _.sample(answers);
    setBgColor(color);
    setMessage(msg);
  }

  return (
    <div className="EightBall" onClick={ setStates } style={{ backgroundColor: bgColor }}>
      <h1>{message}</h1>
    </div>
  )

}


export default EightBall
