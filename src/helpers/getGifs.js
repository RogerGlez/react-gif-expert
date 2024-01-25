const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4e9PF287QtdpAmQ7OMPq4CHjOT9WhEqC&q=${category}&limit=5`;
    const response = await fetch(url);
    const responseBody = await response.json();
    console.log(responseBody.data);
    const gifs = responseBody.data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}

export default getGifs;