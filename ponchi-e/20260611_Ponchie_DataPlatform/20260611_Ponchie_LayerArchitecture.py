#!/usr/bin/env python3
"""Nexus+ レイヤー構成ポンチ絵のソース。

このファイルを編集して実行すると、同名の .md を再生成する：
    python3 20260611_Ponchie_LayerArchitecture.py
"""
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[1] / "tools" / "ponchie-svg"))
from ponchie_svg import SVG

# ── 配色 ────────────────────────────────────────────
ACC = "#1A7A5E"      # アクセント緑
ACC_D = "#125642"    # 濃緑（文字用）
BLUE = "#2E5A93"     # 出口レイヤーの青
WARN = "#E07B39"     # 要整備オレンジ
WARN_D = "#9a5224"   # オレンジ系見出し
GRAY = "#E5E7EB"     # 既存グレー
INK = "#374151"      # 本文
INK_SUB = "#6b7280"  # 補足

s = SVG()

# ── タイトル帯 ──────────────────────────────────────
s.rect(0, 0, 1280, 66, fill="url(#gAccH)")
s.text("Nexus+のレイヤー構成 （検討案）", 40, 33, size=26, weight=700, fill="#fff")
s.rect(1242, 33, 130, 34, anchor="e", rx=8, fill="#fff")
s.image("../assets/chiba-logo.png", 1177, 33, 110, 18, anchor="c")
s.text("2つの出口、4つのコンポーネントレイヤーと全層を貫く2本の縦串（認証・ガバナンス）で整理",
       40, 88, size=13, fill=INK_SUB)
s.circle(490, 186, 170, fill="url(#glow)")

# ── L0 対象：人・場・コミュニティ（細い帯） ─────────
s.comment("L0 対象")
s.rect(40, 118, 900, 24, rx=12, fill=GRAY, stroke="#D1D5DB")
s.text("人 ・ 場 ・ コミュニティ", 490, 130, size=13, weight=700, fill="#4b5563", anchor="c")

# ── L1 出口（アプリ｜評価・可視化、同列2分割・青） ──
s.comment("L1 出口レイヤー")
EXITS = [
    dict(x=40, icon="apps", title="UI・UX・アプリ",
         desc="スマホアプリ・Webアプリ", badge="新規"),
    dict(x=502, icon="chart", title="評価・可視化",
         desc="教学IR・意思決定支援／可視化ダッシュボード／対話型分析システム",
         badge="アップデート"),
]
for e in EXITS:
    x, cy = e["x"], 186
    s.rect(x, 150, 438, 72, rx=14, fill="url(#gOut)", shadow="sh")
    s.icon(e["icon"], x + 38, cy, bg="#fff", fg=BLUE)
    s.text(e["title"], x + 70, cy - 13, size=16, weight=700, fill="#fff")
    s.text(e["desc"], x + 70, cy + 15, size=12, fill="#D6E4F5")
    s.pill(e["badge"], x + 426, cy - 13, anchor="e", h=24, size=11.5,
           fill="#fff", color=BLUE)

# ── L2〜L5 コンポーネントレイヤー帯 ─────────────────
LAYERS = [
    dict(title="AI",
         desc="AI agent・RAG：実践知を実装し、支援に活用／リンク：mcpなどで適切なコンテキストに接続／AI DB：DBをAIで自動更新",
         icon="ai", bg="url(#gAccH)", shadow="sh", icon_bg="#fff", icon_fg=ACC,
         ink="#fff", sub="#DFF2EA", pill=("新規", "#fff", ACC_D)),
    dict(title="データ・コンテンツ",
         desc="データを管理・記録／AI・UX・評価等のレイヤーで呼び出して利用／個人・組織・部局など、スイッチングし組合せられるコンテキスト",
         icon="db", bg="#E4F2EC", shadow="shSoft", icon_bg=ACC, icon_fg="#fff",
         ink=ACC_D, sub=INK, pill=("要整備", WARN, "#fff")),
    dict(title="ハードウェア・PaaS （クラウド基盤）・プラットフォーム",
         desc="GCPのマネージドサービスを積極利用／他の機能への拡張も切り分けて、このレイヤーで載せられるようにしておく",
         icon="cloud", bg="#EDF4F1", shadow="shSoft", icon_bg=ACC, icon_fg="#fff",
         ink=ACC_D, sub=INK, pill=("新規・従量", ACC, "#fff")),
    dict(title="ネットワーク",
         desc="学内NW・SINET・クラウドへの閉域接続など",
         icon="network", bg="#F3F7F5", shadow="shSoft", icon_bg=ACC, icon_fg="#fff",
         ink=ACC_D, sub=INK, pill=("既存", GRAY, "#4b5563")),
]
y = 233
for L in LAYERS:
    cy = y + 36
    s.comment(f"レイヤー：{L['title']}")
    s.rect(40, y, 900, 72, rx=14, fill=L["bg"], shadow=L["shadow"])
    s.icon(L["icon"], 78, cy, bg=L["icon_bg"], fg=L["icon_fg"])
    s.text(L["title"], 110, cy - 13, size=16, weight=700, fill=L["ink"])
    s.text(L["desc"], 110, cy + 15, size=13, fill=L["sub"])
    label, fill, color = L["pill"]
    s.pill(label, 923, cy, anchor="e", fill=fill, color=color)
    y += 83

# ── 縦串2本（認証・セキュリティ／運用・ガバナンス） ─
PILLARS = [
    dict(x=958, w=130, panel="#DCEDE5", icon="shield", icon_bg=ACC,
         head="認証・\nセキュリティ", head_color=ACC_D,
         items=["統合ID（Google）", "IAM (DB記入・読込)", "アクセス権統制", "監査ログ"],
         note="権限をAI/DB/UX\nへ伝播", note_color=ACC_D,
         pill=("既存", GRAY, "#4b5563")),
    dict(x=1102, w=138, panel="#FBEDE2", icon="people", icon_bg=WARN,
         head="運用・\nガバナンス", head_color=WARN_D,
         items=["プロジェクトマネジメント", "利用ポリシー", "データオーナー", "研修・FD"],
         note="安全・安心・継続的発展\nに対応", note_color=WARN_D,
         pill=("要整備", WARN, "#fff")),
]
for p in PILLARS:
    cx = p["x"] + p["w"] / 2
    s.comment(f"縦串：{p['head'].splitlines()[0]}…")
    s.rect(p["x"], 150, p["w"], 414, rx=16, fill=p["panel"], shadow="shSoft")
    s.icon(p["icon"], cx, 186, r=16, bg=p["icon_bg"], fg="#fff")
    s.text(p["head"], cx, 226, size=12.5, weight=700, fill=p["head_color"],
           anchor="c", lh=1.36)
    for i, item in enumerate(p["items"]):
        s.text(item, cx, 272 + i * 26, size=11, fill=INK, anchor="c")
    s.text(p["note"], cx, 399, size=11, weight=700, fill=p["note_color"],
           anchor="c", lh=1.45)
    label, fill, color = p["pill"]
    s.pill(label, cx, 533, fill=fill, color=color)

# ── 凡例 ────────────────────────────────────────────
s.comment("凡例")
s.text("凡例", 40, 590, size=12, weight=700, fill=INK_SUB)
LEGEND = [
    (90, "新規", ACC, "#fff", "今回投資する層"),
    (270, "既存", GRAY, "#4b5563", "学内資産をそのまま活用"),
    (500, "要整備", WARN, "#fff", "体制・ルールづくりが必要（費用は小）"),
]
for x, label, fill, color, caption in LEGEND:
    x0, y0, w, h = s.pill(label, x, 588, anchor="w", h=24, size=11.5,
                          fill=fill, color=color)
    s.text(caption, x0 + w + 10, 588, size=11, fill=INK_SUB)

# ── 結論帯 ──────────────────────────────────────────
s.comment("結論帯")
s.arrow_band(40, 1210, 620)
s.text("プロジェクトスコープ：それぞれの機能がどのレイヤーに当てはまる事象かを考える",
       630, 651, size=19, weight=700, fill="#fff", anchor="c")

s.write_marp_md(HERE / "20260611_Ponchie_LayerArchitecture.md",
                source=Path(__file__).name)
print("regenerated: 20260611_Ponchie_LayerArchitecture.md")
