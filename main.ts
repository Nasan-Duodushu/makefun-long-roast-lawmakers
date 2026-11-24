// The Long Roast — one satirical sentence, at most 320 characters, roasting
// lawmakers who would regulate AI, crypto or the internet but cannot convert a
// file to PDF. The sentence sets up their authority, then undercuts it with the
// file they cannot convert; the punch lands on the last few words. Written to
// /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';

const LIMIT = 320;

const ROAST =
  'They are writing the law that will govern your neural net, your wallet and your feed — just as soon as the intern shows them where Save As keeps hiding the PDF button.';

function checkRoast(text: string): void {
  // Gate: 1-320 characters of UTF-8 text, one sentence, one line.
  const len = [...text].length;
  if (len < 1 || len > LIMIT) {
    throw new Error(`roast must be 1-${LIMIT} characters, got ${len}`);
  }
  if (text.includes('\n')) throw new Error('roast must be a single line');
  if (!text.endsWith('.')) throw new Error('roast must end with a full stop');
}

const dir = process.env['MAKEFUN_OUTPUT_DIR'] ?? '/output';
mkdirSync(dir, { recursive: true });
checkRoast(ROAST);
writeFileSync(`${dir}/entry.txt`, ROAST, { encoding: 'utf8', mode: 0o644 });
