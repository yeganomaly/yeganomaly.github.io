# yeganomaly

My personal site: a noisy editorial zine about AI agents, Web3 and vibe coding, built in public.

**Live:** https://yeganomaly.github.io

## How it works

Plain HTML, CSS and a bit of JavaScript. No build step, no framework, no tracking.

| File | What it is |
|---|---|
| `index.html` | The whole site: layout, styles and interactions |
| `work.js` | Portfolio entries (the **Work** section) |
| `log.js` | Articles, viral posts and build notes (the **Log** section) |
| `assets/` | Portrait, mascot, share card and self-hosted fonts |

### Add a project or a post

Open `work.js` or `log.js`, copy one entry block, change the values and save.
The site sorts by date and builds the filters on its own. Instructions are at the top of each file.

### Run it locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Credits

Fonts are self-hosted under the SIL Open Font License (see `assets/fonts/LICENSE-*.txt`):
Titan One, Big Shoulders Display, Redaction, Schibsted Grotesk, Courier Prime and Reenie Beanie.

## License

Code: MIT (see `LICENSE`).
The portrait, mascot and written content are © Yegane (yeganomaly) and are **not** covered by the MIT license. Please don't reuse them.
