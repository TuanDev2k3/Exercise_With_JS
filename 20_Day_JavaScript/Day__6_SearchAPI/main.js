let searchForm = document.getElementById('search-form')
let searchBox = document.getElementById('search-box')
let searchResult = document.getElementById('search-result')
let showMoreBtn = document.getElementById('show-more-btn')

const accessKey = "r9PnMdRyOq5CMKd0T1nrN5P5px31uRSnUOxc5013q40"
let keyword = ""
let page = 1

async function searchImgs(){
    keyword = searchBox.value.trim()
    const url = `https://api.unsplash.com/search/photos?page=${page}
    &query=${keyword}&client_id=${accessKey}&per_page=12`

    var reponse = await fetch(url)
    var data = await reponse.json()

    if (page === 1){
        searchResult.innerHTML = ""
    }
        
    let results = data.results;
    results.forEach(result =>{
        let image = document.createElement("img")
        image.src = result.urls.small
        let imgLink = document.createElement("a")
        imgLink.href = result.links.html
        imgLink.target = "_blank"

        imgLink.appendChild(image)
        searchResult.appendChild(imgLink)
    })
    showMoreBtn.style.display = "block"
}

searchForm.addEventListener('submit', e=> {
    e.preventDefault()
    page = 1
    searchImgs()
})
showMoreBtn.addEventListener('click', ()=>{
    page++
    searchImgs()
})