# CBSE Class 11 Study Desk

The SAT Study Desk design, rebuilt for CBSE Class 11 Physics (blue), Chemistry (green), Maths (purple), English (red) and Computer Science (orange). Each subject has its own page.

Live site: https://kixot.github.io/study/

Open `index.html` directly, or run `node server.mjs` and go to http://127.0.0.1:4174. When opened locally and online, each subject page loads the newest questions, theory and app code from the live site, so the local copy is always up to date; offline, it uses the files in this folder.

## Content
- Every NCERT chapter (rationalised syllabus): Physics 14, Chemistry 9, Maths 14, Computer Science 11 + Boolean logic.
- English: Hornbill (6 prose chapters, 5 poems), Snapshots (5 chapters), unseen passages, note-making/summarising/sub-titling, all writing types (notice, classified and display ads, poster, speech, debate, formal letters and job applications, essay/article/report) and grammar (tenses, agreement, determiners, modals, clauses, voice, narration, editing, reordering).
- 30 questions per chapter (15 per poem), 2,235 in total: MCQs, assertion–reason, numericals and Python output questions, with answer checking and explanations. Every runnable Python output question was checked by running the code.
- The questions are original, written in the NCERT exercise, NCERT exemplar, RD Sharma (Maths) and CBSE exam patterns. Nothing is copied from copyrighted books.
- Class 11 has no CBSE board exam, so there are no official Class 11 board papers.
- Theory & tricks for every chapter: key ideas, formula sheet, worked example, trap, shortcut and what exams ask. The Chemistry notes build on the revision notes in `Documents\Chem`.
- The library links to the official NCERT chapter PDFs and whole-book ZIPs on ncert.nic.in.
- Quick 10, random sets that prefer unseen questions, saved mistakes, a resumable session and JSON export. Progress is stored per subject on this device.

## Files
- `app.js`, `styles.css`: the shared engine and design (subject colours are set in `styles.css`).
- `data/<subject>.js`: subject settings. `data/<subject>-N.js`: chapters, theory and questions.
- `make-pages.mjs`: regenerates `physics.html`, `chemistry.html` and `maths.html`.
- `validate.mjs`: checks every question file (`node validate.mjs`).

Question format: `['E'|'M'|'H', text, [correct, wrong, wrong, wrong], explanation, source]`. Options are shuffled when shown. A number in place of the options means a numerical answer; `'AR1'`–`'AR4'` means an assertion–reason question with that option correct.
