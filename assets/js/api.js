async function fetchProfileData(){
    const url = "https://raw.githubusercontent.com/victorivodev/js-developer-portfolio/main/data/profile.json"
    fetch(url)
    const fetching = await fetch(url)
    return fetching.json()
}