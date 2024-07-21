import HomePage from "./HomePage";
import DisplayData from "./DisplayData";
function Content({content}){
    console.log(content)
    return(
        <div className="dark:bg-gray-800 dark:text-white h-screen">
            {content == "show_data" ? <DisplayData /> : <HomePage />}
        </div>
    );
}

export default Content;