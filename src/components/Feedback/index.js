// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  onClickChange = () => {
    this.setState(prevState => ({isEmojiClicked: false}))
  }

  renderEmojis = () => {
    const {isEmojiClicked} = this.state
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="main-container">
        <h1 className="heading">
          How satisfied are you with our <br /> customer support performance?
        </h1>
        <ul className="un-order-list-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="list-container">
              <img
                className="imgU"
                src={eachEmoji.imageUrl}
                alt={eachEmoji.name}
                onClick={this.onClickChange}
              />
              <p className="para">{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderSuccessFull = () => {
    const {isEmojiClicked} = this.state
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} className="imgU" alt="Love Emoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="thankyou-para">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="app-container">
        <div className="main-container">
          {isEmojiClicked ? this.renderEmojis() : this.renderSuccessFull()}
        </div>
      </div>
    )
  }
}

export default Feedback
