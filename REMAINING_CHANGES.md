# Remaining Changes — Admitra Update

## What's Done
- [x] Rename to "Admitra" (index.html, package.json, TopBar)
- [x] Remove "Brief Zilnic" tab (TopBar + App.jsx)
- [x] CustomSelect component created (src/components/ui/CustomSelect.jsx + CSS)
- [x] CustomSelect applied to Statistics.jsx (diagnostic dropdown)
- [x] CustomSelect applied to AssessmentMatrix.jsx (score dropdowns)
- [x] Image compression utility (src/utils/imageCompression.js)
- [x] Created src/components/mistakes/ directory

## What's Left

### Phase 3: Mistakes Page Redesign
1. **Create `src/components/mistakes/ImageUploader.jsx`** — Drop zone / file input with preview, uses imageCompression.js
2. **Create `src/components/mistakes/MistakeCard.jsx`** — View-mode card: date badge, error type tag, image thumbnails, summary, edit/delete
3. **Create `src/components/mistakes/MistakeEditor.jsx`** — Edit/create mode: pill toggles for discipline, CustomSelect for error type, image uploaders, text fields, save/cancel
4. **Create `src/components/mistakes/MistakesPage.jsx`** — Page wrapper: header, filter row (discipline/type), card grid, empty state
5. **Update `src/hooks/useAppState.js`** — ADD_MISTAKE action: add `problemImage: null, solutionImage: null`
6. **Update `src/constants/storage.js`** — Bump STATE_VERSION to 3
7. **Update `src/state/migrations.js`** — Add migrateV2toV3: adds null image fields to existing mistakes
8. **Update `src/App.jsx`** — Replace MistakeLog import with MistakesPage
9. **Add CSS to `src/styles.css`** — mistakes-page, mistakes-grid, mistake-card-v2, image-upload-zone, image-thumbnail, pill-toggle styles

### Phase 4: KaTeX Math Rendering
1. **Run `npm install katex`**
2. **Create `src/utils/mathAutoConvert.js`** — unicodeToLatex() converting ²→^{2}, ∞→\infty, →→\to, etc.
3. **Create `src/components/ui/MathText.jsx`** — Splits on $...$ delimiters, renders via katex.renderToString(); auto-detects Unicode math if no $ found
4. **Update `src/main.jsx`** — Add `import 'katex/dist/katex.min.css'`
5. **Update question components** — Wrap prompts/options/statements/explanations with MathText:
   - src/components/questionTypes/MultipleChoiceQ.jsx
   - src/components/questionTypes/TrueFalseQ.jsx
   - src/components/questionTypes/FillBlankQ.jsx
   - src/components/questionTypes/CodeTraceQ.jsx (prompt only, NOT code block)
   - src/components/session/AnswerFeedback.jsx
6. **Add CSS overrides** — `.katex { color: inherit; font-size: 1.05em; }`

## Full plan file
See: C:\Users\77 KSF\.claude\plans\spicy-chasing-pie.md
