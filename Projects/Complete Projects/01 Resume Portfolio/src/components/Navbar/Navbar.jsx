import "./Navbar.css";

function Navbar(){
    return(
        <div className="navbar_container">
            <div className="navbar_left">
                <p>Mebanseibor Lyngdoh</p>
            </div>
            <div className="navbar_right">
                <a href="">About</a>
                <a href="">Contact Me</a>
                <a href="">Projects</a>
                <a href="https://github.com/Mebanseibor">Github</a>
            </div>
        </div>
    );
};

export default Navbar;