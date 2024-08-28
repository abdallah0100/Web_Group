export const toggleStorage = (data)=>{
    if (!data)
        return
    let storage = localStorage.getItem("favourites")
    let favs;
    if (!storage)
        favs = []
    else
        favs = JSON.parse(storage)

    // Find the object with id 2
    const itemIndex = favs.findIndex(item => item.chartTitle === data.chartTitle)
    if (itemIndex !== -1){
        //removes the element at item index
        favs.splice(itemIndex, 1)
    }else{
        favs.push(data)
    }
    localStorage.setItem("favourites", JSON.stringify(favs))
}

export const elementInStorage = (element)=>{
    if (!element)
        return false
    let storage = localStorage.getItem("favourites")
    let favs;
    if (!storage)
        return false
    else
        favs = JSON.parse(storage)
    const itemIndex = favs.findIndex(item => item.chartTitle === element.chartTitle)
    return itemIndex !== -1
}