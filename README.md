# Portfolio website

This Vite site is prepared for GitHub Pages without a GitHub Actions workflow. The `docs/` folder contains the built website, including `docs/index.html` and its assets.

## Publish on GitHub Pages

1. Create a public GitHub repository and push this entire project, including `docs/`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch and the `/docs` folder, then save.

The site will appear at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`. The build uses relative asset URLs, so it also works at a custom domain.

After changing source files, run `npm run build` and commit the updated `docs/` folder before pushing. Do not edit `docs/` directly; the build regenerates it.
