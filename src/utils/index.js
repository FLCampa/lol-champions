import Router from "next/router";

const championsUrl =
  "http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion.json";

function sendProps(title, id, tag, difficulty, blurb, image) {
  const formattedId = id.toLowerCase();

  Router.push(
    {
      pathname: `/details`,
      query: {
        title,
        id,
        tag,
        difficulty,
        blurb,
        image,
      },
    },
    `/details/${formattedId}`
  );
}

export { championsUrl, sendProps };
