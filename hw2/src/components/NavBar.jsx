import { useRef, useEffect } from "react";

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
        <div className="dark:bg-gray-800 p-4 shadow-lg dark:text-white space-x-[25px]">
            <button>Home</button>
            <label>|</label>
            <button>Show Data</button>
            <button className = "float-right" onClick={toggleTheme} ref={themeButton}>theme</button>
        </div>
    );
}

export default NavBar;