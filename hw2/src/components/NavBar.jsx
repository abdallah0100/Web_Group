import { useRef, useEffect } from "react";
import { Link } from "react-router-dom"

function NavBar(){

    const themeButton = useRef();
    const toggleTheme = ()=>{
        document.documentElement.classList.toggle("dark");
        if (document.documentElement.classList.contains("dark"))
            themeButton.current.innerHTML = "Light Mode";
        else 
            themeButton.current.innerHTML = "Dark Mode";
    }
    //used to set the text in the theme button at the start
    useEffect(() => {
        if (document.documentElement.classList.contains("dark"))
            themeButton.current.innerHTML = "Light Mode";
         else
            themeButton.current.innerHTML = "Dark Mode";
        
    }, []);

    return(
        <header className="dark:bg-gray-800 p-4 shadow-lg dark:text-white space-x-[25px]">
            <Link to="/">Home</Link>
            <label>|</label>
            <Link to="/electricity">Electricty</Link>
            <label>|</label>
            <Link to="/natural_gas">Natural Gas</Link>
            <label>|</label>
            <Link to="/international">International Energy Data</Link>
            <button className = "float-right" onClick={toggleTheme} ref={themeButton}>theme</button>
        </header>
    );
}

export default NavBar;