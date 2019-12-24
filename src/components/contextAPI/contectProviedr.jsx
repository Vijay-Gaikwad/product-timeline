import React from 'react'

export const AppContext = React.createContext()

 class ContextProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      productContext:{}
     }
  }
  
  render() {
    return (
      <AppContext.Provider value = {{...this.state}}>
        {this.props.children}
        {console.log(this.props.children)}
      </AppContext.Provider>
    )
  }
}

export default ContextProvider;