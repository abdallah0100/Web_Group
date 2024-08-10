function NaturalGas({title, description}){
    return(<div>
        <div className="pt-6 rounded-lg shadow-lg p-6 dark:bg-[#003C43] dark:text-white">
            <h1 className="dark:text-white text-xl font-semibold mb-2">{title}</h1>
            <p>{description}</p>
        </div>
    </div>)
}

export default NaturalGas