import React from "react"

const Header = () => {
	const headerStyle = {
	  padding: "20px 0",
	  lineHeight: "1.5em",
	}
	
	return(
		<header style={headerStyle}>
			<h1
			  style={{
				  fontSize: "4rem",
				  fontWeight: "400",
				  marginBottom: "2rem",
				  lineHeight: "1em",
				  color: "#232323",
				  textTransform: "lowercase",
				  textAlign: "center",
			  }}
			>Todos</h1>
		</header>
	)
}

export default Header
