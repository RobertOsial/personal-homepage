const githubAPIBaseURL = "https://api.github.com";

export const getRepositories = async (username) => {
  const response = await fetch(`${githubAPIBaseURL}/users/${username}/repos`);
  const data = response.json();
  
  return data;
}