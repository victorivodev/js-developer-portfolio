async function fetchProfile(){
    const url = "linkrawgithub"
    fetch(url)
    const fetching = await fetch(url)
    return fetching.json()
}