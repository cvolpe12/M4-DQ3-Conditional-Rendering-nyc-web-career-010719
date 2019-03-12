import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      detailsToDisplay: "profile"
    }
  }

  renderBody = () => {
    if (this.state.detailsToDisplay === "profile") {
      return <Profile />
    }
    if (this.state.detailsToDisplay === "photo") {
      return <Photos />
    }
    if (this.state.detailsToDisplay === "cocktail") {
      return <Cocktails />
    }
    if (this.state.detailsToDisplay === "pokemon") {
      return <Pokemon />
    }
  }

  changeState = (id) => {
    this.setState({
      detailsToDisplay: id
    })
  }


  render() {
    /*

  Replace the code below! Depending on what menu item is selected in the menu,
   I should render either a Profile, Photos, Cocktails, or Pokemon component.
   Think of a way to track which menu item was selected. Which component should
   have state? Which component should have methods to control state?
   Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar handleclick={this.changeState}/>
        {this.renderBody()}
      </div>
    )
  }

}

export default MainBox
