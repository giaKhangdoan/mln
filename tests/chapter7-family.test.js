import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import test from 'node:test';
import {
  chapters,
  chapter7Hero,
  heroImageResearch,
  presentationSlides,
  sourcePage
} from '../src/data/chapter7-family.js';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

test('content slides stay ordered 01–10 in the approved 3/3/4 groups', () => {
  assert.deepEqual(chapters.map(({ slides }) => slides.length), [3, 3, 4]);
  assert.deepEqual(
    chapters.flatMap(({ slides }) => slides.map(({ number }) => number)),
    Array.from({ length: 10 }, (_, index) => String(index + 1).padStart(2, '0'))
  );
});

test('source page 11 is the final page in the shared 11-page presentation', () => {
  assert.equal(sourcePage.number, '11');
  assert.equal(presentationSlides.length, 11);
  assert.equal(presentationSlides.at(-1).number, '11');
  assert.equal(presentationSlides.at(-1).pageType, 'sources');
  assert.equal(presentationSlides.at(-1).sourcePage, sourcePage);
});

test('slides 01 and 02 use a visual three-stage roadmap and structured learning goals', async () => {
  const slides = chapters.flatMap(({ slides: chapterSlides }) => chapterSlides);
  const slide01 = slides.find(({ number }) => number === '01');
  const slide02 = slides.find(({ number }) => number === '02');
  const app = await readFile(resolve(projectRoot, 'src/App.jsx'), 'utf8');
  const presentation = await readFile(resolve(projectRoot, 'src/components/PresentationMode.jsx'), 'utf8');

  assert.deepEqual(slide01.roadmapSteps, ['Cơ sở lý luận', 'Biến đổi', 'Phương hướng xây dựng']);
  assert.equal(slide01.points.length, 1);
  assert.deepEqual(slide02.objectives.map(({ code }) => code), ['LO 1', 'LO 2', 'LO 3']);
  assert.ok(slide02.objectives.every(({ title, description }) => title && description));
  assert.doesNotMatch(JSON.stringify(slides.slice(0, 2)), /Mạch trình bày/);
  assert.match(app, /<Chapter7OverviewVisual slide=\{slide\} \/>/);
  assert.match(presentation, /<Chapter7OverviewVisual slide=\{slide\} \/>/);
});

test('slide 07 preserves all four cited demographic and labor metrics', () => {
  const slide07 = chapters.flatMap(({ slides }) => slides).find(({ number }) => number === '07');

  assert.ok(slide07, 'slide 07 should exist');
  assert.deepEqual(
    slide07.metrics.map(({ value }) => value),
    ['1,93', '14,5%', '63,0%', '74,3%']
  );
  assert.match(slide07.points.join(' '), /năm 2024 là 1,91/);
  assert.match(slide07.points.join(' '), /14,0% \(2024\).*14,5% \(2025\)/);
  assert.match(slide07.points.join(' '), /không đo trực tiếp việc chăm sóc không lương/);
  assert.match(slide07.source, /Cục Thống kê, Thông cáo 05\/01\/2026/);
});

test('source page retains seven numbered records and official HTTPS citations', () => {
  assert.deepEqual(
    sourcePage.fullSources.map(({ id }) => id),
    Array.from({ length: 7 }, (_, index) => `S-${String(index + 1).padStart(2, '0')}`)
  );

  const linkedSources = sourcePage.fullSources.flatMap(({ links }) => links);
  assert.equal(linkedSources.length, 7);
  assert.ok(linkedSources.every(({ url }) => url.startsWith('https://')));
  assert.ok(linkedSources.some(({ url }) => url.includes('nso.gov.vn')));
  assert.ok(linkedSources.some(({ url }) => url.includes('chinhphu.vn')));
  assert.ok(linkedSources.some(({ url }) => url.includes('vbpl.moj.gov.vn')));
  assert.match(sourcePage.citationConvention, /gia đình hạt nhân quy mô nhỏ/);
  assert.match(sourcePage.citationConvention, /diễn giải/);
});

test('the only direct quotation in content slides is the approved textbook phrase', () => {
  const quotedPhrases = chapters
    .flatMap(({ slides }) => slides)
    .flatMap(({ points = [] }) => points)
    .flatMap((point) => [...point.matchAll(/“([^”]+)”/g)].map((match) => match[1]));

  assert.deepEqual(quotedPhrases, ['gia đình hạt nhân quy mô nhỏ']);
});

test('hero stays on the approved typography fallback while photo rights are unconfirmed', () => {
  assert.equal(chapter7Hero.kind, 'typography');
  assert.equal(heroImageResearch.decision, 'typography-fallback');
  assert.ok(heroImageResearch.candidates.length >= 1);
  assert.ok(heroImageResearch.candidates.every(({ reuseStatus }) => reuseStatus === 'unconfirmed'));
});

test('the page and presentation both consume Chapter 7 data and keep the approved placeholders', async () => {
  const app = await readFile(resolve(projectRoot, 'src/App.jsx'), 'utf8');
  const presentation = await readFile(resolve(projectRoot, 'src/components/PresentationMode.jsx'), 'utf8');
  const index = await readFile(resolve(projectRoot, 'index.html'), 'utf8');

  assert.match(app, /from '\.\/data\/chapter7-family'/);
  assert.match(presentation, /from '\.\.\/data\/chapter7-family'/);
  const heroComponent = app.match(/function HeroTypography\(.*?\n\}/s)?.[0];
  assert.ok(heroComponent, 'the typography hero component should remain present');
  assert.doesNotMatch(heroComponent, /<img\b/i);
  assert.match(app, /<HeroTypography hero=\{chapter7Hero\} \/>/);
  assert.match(app, /<PlaceholderSection id="quiz"/);
  assert.match(app, /<PlaceholderSection id="phu-luc-ai"/);
  assert.match(app, /id: 'quiz'/);
  assert.match(app, /id: 'phu-luc-ai'/);
  assert.match(app, /Nội dung sẽ được bổ sung sau/);
  const placeholderSection = app.match(/function PlaceholderSection\(.*?\n\}/s)?.[0];
  assert.ok(placeholderSection, 'the placeholder component should remain present');
  assert.doesNotMatch(placeholderSection, /<(?:button|input|select|textarea)\b/i);
  assert.doesNotMatch(app, /from '\.\/data\/(history1945-1946|historyQuiz|aiAppendix)'/);
  assert.match(index, /Chương 7/);
  assert.doesNotMatch(JSON.stringify({ chapters, sourcePage }), /1954–1975|1945–1946|Tây Nguyên/);
  assert.doesNotMatch(`${app}\n${index}`, /1954–1975|1945–1946|Kháng chiến, kiến quốc/);
});
