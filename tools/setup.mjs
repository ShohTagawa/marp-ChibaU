#!/usr/bin/env node
// tools/setup.mjs — 新しいPC（mac / Windows / Linux）でこのリポジトリを使い始めるときの一発セットアップ。
//
//   npm run setup            すべて実行
//   npm run setup -- --check 状態確認だけ（何も変更しない）
//
// やること:
//   1. ルートの npm install（marp-cli / pdf-lib / puppeteer-core）
//   2. tools/echarts-render の npm install（グラフを静的SVGに焼く）
//   3. tools/marp-scroll-sync の npm install（同期プレビュー拡張の依存 marp-core）
//   4. ローカル VS Code 拡張 2つを ~/.vscode/extensions にリンク
//        - marp-chibau-pdf  （▶プレゼン / 📄PDF ボタン）
//        - marp-scroll-sync（本文↔スライド同期プレビュー）
//      Windows はジャンクション（管理者権限・開発者モード不要）、mac/Linux はシンボリックリンク。
//   5. Chrome / Python / ffmpeg の有無を表示
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { ROOT, findChrome, platform, shellSync } from './lib/marp-env.mjs';

const { IS_WIN } = platform;
const CHECK = process.argv.includes('--check');
const ok = (s) => console.log('  ✔ ' + s);
const ng = (s) => console.log('  ✘ ' + s);
const info = (s) => console.log('  · ' + s);

function npmInstall(dir, label) {
  const pkg = path.join(dir, 'package.json');
  if (!fs.existsSync(pkg)) { ng(`${label}: package.json がありません`); return; }
  const deps = Object.keys({ ...(JSON.parse(fs.readFileSync(pkg, 'utf8')).dependencies || {}), ...(JSON.parse(fs.readFileSync(pkg, 'utf8')).devDependencies || {}) });
  const missing = deps.filter((d) => !fs.existsSync(path.join(dir, 'node_modules', d, 'package.json')));
  if (!missing.length) { ok(`${label}: 依存は揃っています`); return; }
  if (CHECK) { ng(`${label}: 未インストール → ${missing.join(', ')}`); return; }
  info(`${label}: npm install（${missing.join(', ')}）`);
  const r = shellSync('npm', ['install', '--no-audit', '--no-fund'], { cwd: dir, stdio: 'inherit' });
  if (r.status === 0) ok(`${label}: インストール完了`); else ng(`${label}: npm install 失敗 (exit=${r.status})`);
}

function linkExtension(srcRel, linkName) {
  const src = path.join(ROOT, srcRel);
  const extDir = path.join(os.homedir(), '.vscode', 'extensions');
  const link = path.join(extDir, linkName);
  if (!fs.existsSync(src)) { ng(`${linkName}: 元フォルダがありません ${srcRel}`); return; }
  let current = null;
  try {
    const st = fs.lstatSync(link);
    if (st.isSymbolicLink() || (IS_WIN && st.isDirectory())) {
      try { current = fs.realpathSync(link); } catch { current = '(壊れたリンク)'; }
    } else { current = '(リンクではない実体)'; }
  } catch { /* 無い */ }
  const want = fs.realpathSync(src);
  if (current && path.resolve(current) === path.resolve(want)) { ok(`${linkName}: リンク済み → ${link}`); return; }
  if (CHECK) { ng(`${linkName}: 未リンク${current ? `（現在: ${current}）` : ''}`); return; }
  fs.mkdirSync(extDir, { recursive: true });
  if (current) {
    if (current === '(リンクではない実体)') { ng(`${linkName}: ${link} はリンクではない実フォルダなので触りません。手で退避してください。`); return; }
    fs.rmSync(link, { recursive: false, force: true });
  }
  // Windows: 'junction' はディレクトリ用で管理者権限・開発者モードが不要。mac/Linux: 通常の symlink。
  fs.symlinkSync(want, link, IS_WIN ? 'junction' : 'dir');
  ok(`${linkName}: リンク作成 → ${link}`);
}

function which(cmd) {
  const r = shellSync(IS_WIN ? 'where' : 'which', [cmd], { encoding: 'utf8' });
  return r.status === 0 ? r.stdout.trim().split(/\r?\n/)[0] : null;
}

console.log(`\n== marp-ChibaU setup (${process.platform}) ${CHECK ? '[check only]' : ''}`);
console.log(`   root: ${ROOT}\n`);

console.log('[1] Node パッケージ');
info(`node ${process.version}`);
npmInstall(ROOT, 'ルート (marp-cli / pdf-lib)');
npmInstall(path.join(ROOT, 'tools', 'echarts-render'), 'tools/echarts-render (echarts)');
npmInstall(path.join(ROOT, 'tools', 'marp-scroll-sync'), 'tools/marp-scroll-sync (marp-core)');

console.log('\n[2] VS Code ローカル拡張');
linkExtension('tools/marp-pdf/vscode-extension', 'marp-chibau-pdf');
linkExtension('tools/marp-scroll-sync', 'marp-scroll-sync');
info('反映には VS Code の再読込が必要: コマンドパレット →「Developer: Reload Window」');
const marpExt = which('code') ? shellSync('code', ['--list-extensions'], { encoding: 'utf8' }).stdout || '' : '';
if (/marp-team\.marp-vscode/i.test(marpExt)) ok('marp-team.marp-vscode（公式プレビュー拡張）: インストール済み');
else info('marp-team.marp-vscode（公式プレビュー拡張）: 未確認。VS Code の推奨拡張から入れてください');

console.log('\n[3] 外部ツール');
try { ok(`Chrome/Edge: ${findChrome()}`); } catch (e) { ng(e.message.split('\n')[0]); }
const py = which(IS_WIN ? 'python' : 'python3');
if (py) ok(`python: ${py}（pptx2marp / check-fidelity 用）`); else info('python が見つかりません（pptx 取り込みを使うときだけ必要）');
const ff = which('ffmpeg');
if (ff) ok(`ffmpeg: ${ff}`); else info('ffmpeg が見つかりません（動画→原稿の文字起こしを使うときだけ必要。Windows: winget install Gyan.FFmpeg）');

console.log('\n完了。使い方:');
console.log('  npm run pdf      -- slides/<deck>/<deck>.md   ベクターPDF（引数なし=最後に編集したデック）');
console.log('  npm run present  -- slides/<deck>/<deck>.md   Chrome で全画面プレゼン');
console.log('  npm run png      -- slides/<deck>/<deck>.md   全ページPNG（目視確認用）');
console.log('  npm run lint     -- slides/<deck>             tsutawaru 体裁チェック');
console.log('  VS Code: デックの .md を開くと右上／ステータスバーに ▶ と 📄 が出ます\n');
