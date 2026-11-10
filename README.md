# eljavs.github.io

Portfolio of Javier Cepeda Bátiz, game designer and programmer. Plain HTML/CSS/JS served by GitHub Pages; no build step.

- `index.html`: all content. Each project is an `<article class="project">` block; copy one to add a project.
- Videos: `<div class="yt" data-id="YOUTUBE_ID"></div>` (thumbnail until clicked, so the page stays light).
- Images live in `assets/img/<project>/`.
- `style.css`, `main.js`: styling, YouTube embeds, gallery lightbox.
- `games/<slug>.html`: one page per game (details, media, links). Linked from the project titles.
- `writeups/<slug>.md`: each game's post-mortem / devlog in Markdown, loaded into its page. Text inside `<!-- -->` is hidden; while a file has nothing else, the page shows "coming soon".
