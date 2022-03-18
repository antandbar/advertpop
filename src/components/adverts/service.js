import client from '../../api/client';

const advertsBaseUrl = '/api/v1/adverts';

export const getAdverts = (name) => {
  //const url = `${advertsBaseUrl}?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`;
  const url = `${advertsBaseUrl}?name=${name}`;
  return client.get(url);
};

/* export const getTweet = tweetId => {
  const url = `${tweetsBaseUrl}/${tweetId}?_expand=user&_embed=likes`;
  return client.get(url);
};

export const createTweet = tweet => {
  const url = tweetsBaseUrl;
  return client.post(url, tweet);
}; */
