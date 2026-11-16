import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && Boolean(repoName);

  return {
    base: isGitHubPagesBuild && repoName ? `/${repoName}/` : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
