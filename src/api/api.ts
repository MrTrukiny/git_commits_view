import { configGithubRequest } from './utils';

export const fetchGitHubAPI = async () => {
  // Get GitHub fetch config
  const { url, options } = configGithubRequest();

  // Get GitHub data
  const data = await (await fetch(url, options)).json();

  // Map data and return
  return data.map((commit: any) => ({
    author: commit.commit.committer.name,
    date: commit.commit.committer.date,
    commit: commit.commit.message,
  }));
};
