# Deploy To Cloudflare Pages

This app can be hosted as a static site.

## What to deploy

Do **not** deploy the whole project folder directly, because that would also publish local audit notes and other working files.

Instead, publish the generated `dist/` folder.

## 1. Create the publish folder locally

From `minimally_different_app/`, run:

```powershell
powershell -ExecutionPolicy Bypass -File .\build-static.ps1
```

That creates:

- `dist/index.html`
- `dist/assessment.html`
- `dist/starter.html`
- `dist/crossword.html`
- `dist/number-game.html`
- the matching JS/CSS files

## 2. Put the app in GitHub

Recommended:

- make **`minimally_different_app` itself** the GitHub repo root

Suggested repo contents:

- app source files
- `build-static.ps1`
- `README.md`
- `DEPLOY_CLOUDFLARE_PAGES.md`

You do **not** need to commit `dist/`.

## 3. Create a Cloudflare Pages project

In Cloudflare Pages:

1. `Workers & Pages`
2. `Create application`
3. `Pages`
4. `Connect to Git`
5. Choose your GitHub repo

## 4. Use these build settings

- **Framework preset**: `None`
- **Build command**:

```powershell
powershell -ExecutionPolicy Bypass -File .\build-static.ps1
```

- **Build output directory**:

```text
dist
```

## 5. First beta URL

Use the default Cloudflare URL first:

- `https://your-project-name.pages.dev`

That is enough for beta testers.

## 6. Optional custom domain later

When you want a cleaner beta URL, add a custom domain in Cloudflare Pages.

## Notes

- The app is currently front-end only.
- This setup is suitable for beta testing.
- It does **not** yet provide authentication, saved user data, or paid access control.
