import HomePage from "./HomePage";
import DisplayData from "./DisplayData";
function Content({content}){
    console.log(content)
    return(
        <div>
            {content == "show_data" ? <DisplayData /> : <HomePage />}
        </div>
    );
}

export default Content;