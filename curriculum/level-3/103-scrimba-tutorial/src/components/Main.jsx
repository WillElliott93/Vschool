


function Main() {
    const userName = "John Doe"
    const userStyle = {
      backgroundColor: "blue",
      color: "white"
    }
  
    return (
      <div className="main-content">
        <h1 style={userStyle}>Welcome, {userName}!</h1>
        <ol>
            <li>I would love to learn react because its an easier
            version of JS!
            </li>
            <li>I would also love to learn react because majority
            of places use it!
            </li>
        </ol>
      </div>
    )
  }

  export default Main