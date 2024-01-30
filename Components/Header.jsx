function Header({title}){
    const myStyles = {
        color: 'blue',
        fontSize: '16px',
        border: '1px solid #ccc',
        padding: '10px',
        backgroundColor: 'lightgray',
        marginTop:'20px',
        display: 'flex',
        justifyContent:'space-between',
        textDecoration: 'none'
      };
    return(
        <header style={myStyles}>
            {title}
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">Contact</a>
            <a href="#">About Us</a>

        </header>
    )
}

export default Header;