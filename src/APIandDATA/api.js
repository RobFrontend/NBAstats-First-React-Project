const nbaArticles = async () => {
  const url = "https://nba-latest-news.p.rapidapi.com/articles";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7338b50c76msh813222d99478f7ep148723jsnc8fa9eecb415",
      "X-RapidAPI-Host": "nba-latest-news.p.rapidapi.com",
    },
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();

    return data.slice(0, 10).map(({ title, source, url: link }) => ({
      title,
      source,
      link,
    }));
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default nbaArticles;
