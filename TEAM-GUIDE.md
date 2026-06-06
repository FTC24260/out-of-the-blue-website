# 🐟 Out Of the Blue Website — Team Editing Guide

Welcome! This guide explains how **anyone on the team** can update our website —
even if you've never written code before. Take your time, and don't worry: you
**cannot break the live site by accident**. Every change is reviewed and
previewed first.

> **The golden rule:** never edit the `main` branch directly. Always make a
> branch, preview it, and have it reviewed. (More on what that means below.)

---

## 🗺️ The big picture (read this first)

Our website lives in two places:

1. **GitHub** — where the code is stored: <https://github.com/FTC24260/out-of-the-blue-website>
2. **Netlify** — where the live website is hosted: <https://out-of-the-blue-24260.netlify.app>

They're connected. When an approved change lands on GitHub, Netlify
**automatically** rebuilds the live site. You never touch Netlify directly.

Here's the safe flow every change follows:

```
You make a "branch"  →  You edit files  →  Netlify builds a PRIVATE preview
        →  A teammate reviews it  →  It gets merged  →  It goes LIVE
```

The **preview** is our **staging area** — a private copy of the site with your
changes, so we can all see exactly how it'll look *before* it's public. 🎉

---

## ✍️ The easiest way to make a change (right in your browser)

You don't need to install anything. You can edit directly on GitHub.

### Step 1 — Find the file you want to change
Most content lives in the **`src/data/`** folder. See the
[Where to change common things](#-where-to-change-common-things) table below to
find the right file.

### Step 2 — Open it and click the pencil ✏️
- Open the file on GitHub.
- Click the **pencil icon** (top-right of the file) to edit.

### Step 3 — Make your edit
Change the text between the quote marks. For example, to fix a stat:
```js
{ value: 16, label: 'Outreaches this season', suffix: '' },
```
Just change the number `16` or the words in `'...'`. **Don't** delete commas,
quotes, or curly braces `{ }`.

### Step 4 — Save it to a NEW branch (this is the important part)
At the bottom, choose:
- ⭕ **"Create a new branch for this commit and start a pull request"**
- Give the branch a short name like `fix-outreach-count`
- Click **Propose changes**, then **Create pull request**

> 🛑 **Never** pick "Commit directly to the main branch." Always make a new
> branch. This is what keeps the live site safe.

### Step 5 — Preview your change (the staging area)
Once your pull request is open, Netlify automatically builds a **preview**.
Within a minute or two, a comment appears on your pull request with a link like:
```
Deploy Preview ready! 🎉
https://deploy-preview-12--out-of-the-blue-24260.netlify.app
```
Click it to see your change live on a **private copy** — this is the staging
area. The real website is untouched.

### Step 6 — Get it reviewed, then merge
- Ask a teammate (or our site lead) to look at the preview.
- When everyone's happy, click the green **"Merge pull request"** button.
- 🚀 Netlify rebuilds the **real** site automatically. Your change is live in
  ~1–2 minutes!

---

## 📁 Where to change common things

Almost everything you'll want to edit is in **one folder: `src/data/`**.

| What you want to change | File to edit | What to look for |
| --- | --- | --- |
| Team info, location, social links, email | `src/data/site.js` | The `TEAM`, `CONTACT`, `SOCIALS` sections |
| **Team roster** (names, roles, photos) | `src/data/team.js` | `MEMBERS` and `MENTORS` lists |
| **Outreach events** (the gallery walk) | `src/data/gallery.js` | The `OUTREACHES` list |
| Mission text, design-process steps, robot specs, stats, sponsor tiers | `src/data/content.js` | Labeled sections inside |
| Bigger wording / layout changes | `src/components/*.jsx` | One file per section |

> 💡 Search the code for `TODO` to find every spot that still has placeholder
> content waiting to be replaced with real info.

---

## 🖼️ Adding photos (team, robot, outreach, sponsors)

Photos live in the **`public/`** folder. To add one:

1. On GitHub, open the right folder (create it if it doesn't exist):
   - Team photos → `public/team/`
   - Robot photo → `public/`
   - Outreach photos → `public/outreach/`
   - Sponsor logos → `public/sponsors/`
2. Click **Add file → Upload files**, drag your image in, and commit it
   **to a new branch** (same as Step 4 above).
3. Then edit the matching data file to point at it. For example, in
   `src/data/gallery.js`:
   ```js
   src: '/outreach/library-day.jpg',   // was: src: null
   ```

> Use normal web image types: `.jpg`, `.png`, or `.webp`. Keep files reasonably
> small (under ~1 MB each) so the site stays fast.

---

## 🧪 The staging area, explained simply

> "Staging" just means a **safe practice version** of the website where we test
> changes before showing the world.

Every pull request gets its own automatic **Deploy Preview** on Netlify. That
preview *is* our staging area:

- ✅ It has your exact changes.
- ✅ It has its own private link (only people with the link see it).
- ✅ The real website is **completely unaffected** until we merge.

So the workflow is always: **branch → preview (staging) → review → merge (live).**

If you want a longer-lived staging site (e.g. a permanent `staging` branch that
always shows the "next" version), our site lead can set that up in Netlify under
**Branch deploys** — ask if you need it.

---

## 💻 For more advanced edits (optional: editing on your computer)

If you're doing bigger changes, it's easier to run the site on your own laptop.

```bash
# 1. Get the code (only the first time)
git clone https://github.com/FTC24260/out-of-the-blue-website.git
cd out-of-the-blue-website

# 2. Install the tools (only the first time, needs Node.js 18+)
npm install

# 3. Make your own branch
git checkout -b my-change-name

# 4. Start the site locally — opens at http://localhost:5173
npm run dev

# 5. Edit files, watch them update live in your browser, then:
git add -A
git commit -m "Describe what you changed"
git push -u origin my-change-name
```

Then open the repo on GitHub — it'll offer to create a pull request from your
branch. From there it's the same as Step 5 & 6 above.

---

## ✅ Do's and ❌ Don'ts

**Do**
- ✅ Always work on a **new branch**, never `main`.
- ✅ **Preview** your change (staging) before merging.
- ✅ Ask for a quick review — a second pair of eyes catches typos.
- ✅ Make small changes — easier to review and undo.
- ✅ Only use **real** team photos/info (no made-up stats).

**Don't**
- ❌ Don't commit directly to `main`.
- ❌ Don't delete quotes `'`, commas `,`, or braces `{ }` in data files.
- ❌ Don't upload huge image files.
- ❌ Don't put passwords, tokens, or private info in the code.

---

## 😅 "I think I broke something!"

Don't panic — **nothing goes live without a merge**, so the real site is fine.

- If your **preview** looks broken, just fix the file again on your branch; the
  preview updates automatically.
- If a pull request looks wrong, simply **close it** (don't merge) — no harm
  done.
- If something *did* go live and looks wrong, the site lead can instantly roll
  back: Netlify → **Deploys** → find the last good deploy → **Publish deploy**.

---

## 🙋 Who to ask

- **Site lead / mentor:** _TODO: add name + contact here_
- **General help:** post in our team chat.

Happy editing! Every small improvement makes us look better to sponsors and the
community. 🐟💙
