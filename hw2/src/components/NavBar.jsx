import { useRef, useEffect } from "react";
function NavBar({setContent}){

    const themeButton = useRef();
    const toggleTheme = ()=>{
        document.documentElement.classList.toggle("dark");
        if (document.documentElement.classList.contains("dark"))
            themeButton.current.innerHTML = "Light Mode";
        else 
            themeButton.current.innerHTML = "Dark Mode";
    }

/**
 * calling the function directly inside the onClick prop of the buttons causes rendering issue, as it is called on render.
 *  This results in the setContent function being called during the rendering process, which is not allowed, the solution is to use double functions.
 */
    const updateContent = (newContent)=> () => {
        setContent(newContent);
    }

    //used to set the text in the theme button at the start
    useEffect(() => {
        if (document.documentElement.classList.contains("dark"))
            themeButton.current.innerHTML = "Light Mode";
         else
            themeButton.current.innerHTML = "Dark Mode";
        
    }, []);

    return(
        <div className="dark:bg-gray-800 p-4 shadow-lg dark:text-white space-x-[25px] ">
            <button onClick={updateContent("home")}>Home</button>
            <label>|</label>
            <button onClick={updateContent("show_data")} >Show Data</button>
            <button className = "float-right" onClick={toggleTheme} ref={themeButton}>theme</button>
        </div>
    );
}

export default NavBar;