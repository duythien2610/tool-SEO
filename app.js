/* =====================================================
   Digital Marketing Workbench — app.js v3
   Includes GEO/AI Search optimization checklist
   from geo-seo-claude concepts
   ===================================================== */
'use strict';

/* ==================== NAVIGATION ==================== */
function navigateTo(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const sec = document.getElementById(id);
  if (sec) sec.classList.add('active');
  const lnk = document.querySelector(`[data-section="${id}"]`);
  if (lnk) lnk.classList.add('active');
  document.getElementById('nav-links').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', e => { e.preventDefault(); navigateTo(l.dataset.section); });
});
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

/* ==================== SKILL COVERAGE MATRIX ==================== */
const skillMatrix = [
  { name: 'SEO Technical', cat: 'SEO', color: 'dot-accent' },
  { name: 'Content Brief', cat: 'SEO', color: 'dot-accent' },
  { name: 'GEO Score Calc', cat: 'AI/GEO', color: 'dot-cyan' },
  { name: 'Citability Scorer', cat: 'AI/GEO', color: 'dot-cyan' },
  { name: 'Keyword Intent', cat: 'Research', color: 'dot-accent' },
  { name: 'Rank Tracking', cat: 'Ops', color: 'dot-green' },
  { name: 'GBP Local', cat: 'Local SEO', color: 'dot-green' },
  { name: 'SEM Planning', cat: 'Channels', color: 'dot-orange' },
  { name: 'Social Calendar', cat: 'Channels', color: 'dot-pink' },
  { name: 'Email Sequence', cat: 'Channels', color: 'dot-pink' },
  { name: 'UTM Builder', cat: 'Analytics', color: 'dot-cyan' },
  { name: 'Tracking Plan', cat: 'Analytics', color: 'dot-cyan' },
  { name: 'KPI Calculator', cat: 'Analytics', color: 'dot-cyan' },
  { name: 'CRO / A/B Test', cat: 'Experiments', color: 'dot-orange' },
  { name: 'ICE Scoring', cat: 'Experiments', color: 'dot-orange' },
  { name: 'Ops Cards', cat: 'Operations', color: 'dot-green' },
  { name: 'Weekly Report', cat: 'Reporting', color: 'dot-pink' },
  { name: 'Export Workspace', cat: 'Reporting', color: 'dot-green' },
  { name: 'Module Guides', cat: 'UX', color: 'dot-pink' },
  { name: 'GEO/AI Platform', cat: 'AI/GEO', color: 'dot-cyan' },
];

function renderSkillGrid() {
  const el = document.getElementById('skill-grid');
  if (!el) return;
  el.innerHTML = skillMatrix.map(s => `
    <div class="skill-chip">
      <span class="dot ${s.color}"></span>
      <span>${s.name}</span>
    </div>
  `).join('');
}
renderSkillGrid();

/* ==================== SEO AUDIT CHECKLIST (incl. GEO/AI) ==================== */
const seoChecks = [
  // Traditional SEO — On-page
  { id: 'c1', label: 'Title tag 50-60 ký tự, có keyword', cat: 'On-page', hint: 'Tránh duplicate title' },
  { id: 'c2', label: 'Meta description 150-160 ký tự + CTA', cat: 'On-page', hint: 'Tác động CTR, không ranking' },
  { id: 'c3', label: 'H1 duy nhất, chứa primary keyword', cat: 'On-page', hint: 'Chỉ 1 H1 mỗi trang' },
  { id: 'c4', label: 'URL slug ngắn, có keyword, no dấu', cat: 'Technical', hint: 'VD: /dich-vu-seo-local' },
  { id: 'c5', label: 'Core Web Vitals pass (LCP<2.5s)', cat: 'Technical', hint: 'Test tại PageSpeed Insights' },
  { id: 'c6', label: 'Mobile responsive, no layout shift', cat: 'Technical', hint: 'CLS < 0.1 là pass' },
  { id: 'c7', label: 'Canonical tag đúng', cat: 'Technical', hint: 'Self-referencing canonical' },
  { id: 'c8', label: 'Internal links ≥ 2 trang liên quan', cat: 'Content', hint: 'Anchor text tự nhiên' },
  { id: 'c9', label: 'Image có alt text chứa keyword', cat: 'Content', hint: 'Mô tả thực tế, không spam' },
  { id: 'c10', label: 'Schema markup (Article/FAQ/Local)', cat: 'Schema', hint: 'Test tại schema.org/validator' },
  { id: 'c11', label: 'Open Graph / Twitter Card đầy đủ', cat: 'Social', hint: 'og:title, og:image, og:desc' },
  // GEO / AI Search — từ geoskills framework
  { id: 'g1', label: 'Answer block: câu hỏi + trả lời ≤50 words', cat: 'GEO/AI', hint: 'Format trực tiếp để AI cite' },
  { id: 'g2', label: 'GPTBot / ClaudeBot / PerplexityBot không bị block', cat: 'GEO/AI', hint: 'Check robots.txt' },
  { id: 'g3', label: 'FAQ schema JSON-LD cho AI Overviews', cat: 'GEO/AI', hint: '3+ câu Q&A thực tế' },
  { id: 'g4', label: 'Có số liệu, %, thống kê cụ thể', cat: 'GEO/AI', hint: 'Tăng 30% AI citation rate' },
  { id: 'g5', label: 'Author bio + E-E-A-T signals + ngày publish', cat: 'GEO/AI', hint: 'Undated content ít được cite' },
  { id: 'g6', label: 'Ngôn ngữ tự nhiên, trả lời đúng query', cat: 'GEO/AI', hint: 'Keyword stuffing giảm 10% GEO' },
  // AI Platform specific — từ marketingskills/ai-seo
  { id: 'ai1', label: 'llms.txt file tồn tại (robots.txt cho AI)', cat: 'AI Platform', hint: 'Mới — Gemini & Perplexity ưu tiên' },
  { id: 'ai2', label: 'Organization schema đầy đủ (tên/SĐT/địa chỉ)', cat: 'AI Platform', hint: 'Gemini: 52% cite brand domains có schema' },
  { id: 'ai3', label: 'Có Wikipedia / Wikidata entity', cat: 'AI Platform', hint: 'ChatGPT: Wikipedia = 47.9% citations' },
  { id: 'ai4', label: 'Presence trên Trustpilot, G2, review sites', cat: 'AI Platform', hint: 'Perplexity: community signals quan trọng' },
  { id: 'ai5', label: 'Brand mention nhất quán trên tất cả platform', cat: 'AI Platform', hint: '2.5x more likely to be cited nếu consistent' },
];

function renderSeoChecklist() {
  const el = document.getElementById('seo-checklist');
  if (!el) return;
  const cats = [...new Set(seoChecks.map(c => c.cat))];
  let html = '';
  cats.forEach(cat => {
    const items = seoChecks.filter(c => c.cat === cat);
    items.forEach(item => {
      html += `
        <div class="check-item" id="ci-${item.id}" onclick="toggleCheck('${item.id}')">
          <input type="checkbox" id="chk-${item.id}" onclick="event.stopPropagation(); toggleCheck('${item.id}')">
          <label for="chk-${item.id}">
            ${item.label}
            <small>${item.cat}${item.cat === 'GEO/AI' ? ' 🤖' : ''}</small>
          </label>
        </div>
      `;
    });
  });
  el.innerHTML = html;
}
function toggleCheck(id) {
  const chk = document.getElementById(`chk-${id}`);
  const item = document.getElementById(`ci-${id}`);
  chk.checked = !chk.checked;
  item.classList.toggle('checked', chk.checked);
}
renderSeoChecklist();

/* ==================== KPI CALCULATOR ==================== */
function fmt(n, d = 2) { return parseFloat(n).toFixed(d); }
function fmtC(n) {
  if (n >= 1e6) return (n/1e6).toFixed(2)+'M';
  if (n >= 1e3) return (n/1e3).toFixed(1)+'K';
  return Math.round(n).toLocaleString();
}
function calculateKpis() {
  const imp  = +document.getElementById('kpi-impressions').value || 0;
  const clk  = +document.getElementById('kpi-clicks').value      || 0;
  const leads= +document.getElementById('kpi-leads').value        || 0;
  const spend= +document.getElementById('kpi-spend').value        || 0;
  const rev  = +document.getElementById('kpi-revenue').value      || 0;

  const ctr  = imp   > 0 ? clk  /imp   * 100 : 0;
  const cvr  = clk   > 0 ? leads/clk   * 100 : 0;
  const cpl  = leads > 0 ? spend/leads       : 0;
  const roas = spend > 0 ? rev  /spend       : 0;
  const cpc  = clk   > 0 ? spend/clk         : 0;

  const cards = [
    { label:'CTR',            value: fmt(ctr)+'%',           cls: ctr>=3?'good':ctr>=1?'warn':'bad' },
    { label:'CVR (→Lead)',    value: fmt(cvr)+'%',           cls: cvr>=3?'good':cvr>=1?'warn':'bad' },
    { label:'CPL',            value: fmtC(cpl)+'đ',          cls: cpl<50000?'good':cpl<200000?'warn':'bad' },
    { label:'ROAS',           value: fmt(roas,1)+'x',        cls: roas>=4?'good':roas>=2?'warn':'bad' },
    { label:'CPC',            value: fmtC(cpc)+'đ',          cls: 'neutral' },
    { label:'Revenue',        value: fmtC(rev)+'đ',          cls: 'neutral' },
  ];

  document.getElementById('kpi-results').innerHTML = cards.map(c =>
    `<div class="metric-card ${c.cls}"><div class="mc-label">${c.label}</div><div class="mc-value">${c.value}</div></div>`
  ).join('');

  const ins = [];
  if (ctr < 1)    ins.push('⚠️ CTR thấp → tối ưu title tag, thêm rich snippet, review meta desc.');
  if (cvr < 1)    ins.push('⚠️ CVR thấp → cải thiện landing page, form, offer hoặc CTA.');
  if (roas >= 4)  ins.push('✅ ROAS tốt → có thể scale budget thêm 20-30%.');
  else if(roas<2) ins.push('🔴 ROAS < 2x → review audience targeting và ad creative.');
  if (cpl>200000) ins.push('💡 CPL cao → thử cải thiện quality score hoặc tối ưu landing page CVR.');
  if (!ins.length) ins.push('✅ KPIs ổn định. Tiếp tục A/B test để cải thiện từng chỉ số.');

  document.getElementById('kpi-insight').innerHTML = ins.join('<br>');
  saveToStorage('kpi', { imp, clk, leads, spend, rev });
}

/* ==================== CONTENT BRIEF ==================== */
const goalTpl = {
  lead:    { intent:'Commercial/Transactional', funnel:'BOFU', cta:'Liên hệ tư vấn / Nhận báo giá', type:'Service page, Case study', words:'1,200–2,000' },
  traffic: { intent:'Informational',             funnel:'TOFU', cta:'Subscribe / Đọc thêm',           type:'Blog, Guide, Listicle',   words:'2,000–3,500' },
  local:   { intent:'Local/Navigational',        funnel:'BOFU', cta:'Xem chi nhánh / Gọi ngay',       type:'Local page, GBP post',    words:'800–1,500'   },
  brand:   { intent:'Branded/Awareness',          funnel:'TOFU', cta:'Follow / Share / Newsletter',    type:'Thought leadership, Story',words:'1,500–2,500' },
};

function generateContentBrief() {
  const kw    = document.getElementById('brief-keyword').value.trim();
  const aud   = document.getElementById('brief-audience').value.trim();
  const goal  = document.getElementById('brief-goal').value;
  const secs  = document.getElementById('brief-secondary').value.trim().split('\n').filter(Boolean).map(s=>'  - '+s.trim()).join('\n');
  const t     = goalTpl[goal] || goalTpl.traffic;
  const today = new Date().toLocaleDateString('vi-VN');
  if (!kw) { alert('Nhập primary keyword trước.'); return; }

  const out = `
╔══════════════════════════════════════════╗
  SEO CONTENT BRIEF  |  ${today}
╚══════════════════════════════════════════╝

PRIMARY KEYWORD:  ${kw}
AUDIENCE:         ${aud||'(chưa xác định)'}
GOAL:             ${document.getElementById('brief-goal').options[document.getElementById('brief-goal').selectedIndex].text}
INTENT:           ${t.intent}
FUNNEL STAGE:     ${t.funnel}
RECOMMENDED CTA:  ${t.cta}

─── CONTENT SPEC ─────────────────────────
Type:      ${t.type}
Length:    ${t.words} words
URL slug:  /${kw.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'')}

─── SECONDARY KEYWORDS ───────────────────
${secs||'  (chưa nhập)'}

─── OUTLINE ──────────────────────────────
H1: [${kw}] — Giải pháp / Hướng dẫn Đầy Đủ
H2: ${kw} là gì? Tại sao quan trọng?
H2: Lợi ích chính
  H3: [Secondary keyword 1]
  H3: [Secondary keyword 2]
H2: Cách thực hiện / Quy trình / Bảng giá
  H3: Bước 1 — ...
  H3: Bước 2 — ...
H2: Case study / Ví dụ thực tế
H2: FAQ — Câu hỏi thường gặp
H2: Kết luận & ${t.cta}

─── AI WRITING PROMPT ────────────────────
Bạn là SEO content writer chuyên nghiệp.
Viết bài về [${kw}] cho đối tượng [${aud||'...'}].
• Intent: ${t.intent}
• Keyword density 1-2%, tự nhiên
• H1 chứa exact keyword
• CTA cuối: "${t.cta}"
• Thêm FAQ section với ≥ 3 câu hỏi (tối ưu AI Overview)
• Dùng entity-based writing (tên, địa điểm, số liệu cụ thể)

─── GEO/AI OPTIMIZATION CHECKLIST ───────
[ ] Answer box: câu trả lời trực tiếp trong 50 words
[ ] FAQ schema JSON-LD
[ ] Entities: tên tổ chức, địa chỉ, số rõ ràng
[ ] Citation-worthy: stat, survey, data từ nguồn uy tín
[ ] E-E-A-T: tác giả, ngày, cập nhật

─── QA CHECKLIST ─────────────────────────
[ ] H1 chứa exact keyword
[ ] Meta title 50-60 ký tự
[ ] Meta desc 150-160 ký tự có CTA
[ ] Keyword density 1-2%
[ ] Internal links ≥ 2
[ ] External link ≥ 1 (uy tín)
[ ] Image alt text có keyword
[ ] URL slug ngắn, không dấu
[ ] Schema markup đúng loại trang
[ ] Mobile & CWV pass
`.trim();

  document.getElementById('brief-output').textContent = out;
  saveToStorage('last_brief', out);
}

/* ==================== KEYWORD INTENT MAPPER ==================== */
const intentRules = [
  { p:['là gì','what is','how','cách','hướng dẫn','tại sao','why','tutorial','học','kiến thức'],    i:'Informational',  f:'TOFU', a:'Blog / Guide / FAQ' },
  { p:['giá','price','so sánh','vs','review','top','best','tốt nhất','nên dùng','chi phí'],           i:'Commercial',     f:'MOFU', a:'Comparison / Review / Listicle' },
  { p:['mua','buy','order','đặt','liên hệ','contact','đăng ký','signup','nhận báo giá','book'],       i:'Transactional',  f:'BOFU', a:'Landing page / Service page' },
  { p:['tphcm','hà nội','đà nẵng','quận','gần đây','near me','địa chỉ','chi nhánh','local'],          i:'Local',          f:'BOFU', a:'Local landing page / GBP' },
];
const intentCls = { Informational:'intent-informational', Commercial:'intent-commercial', Transactional:'intent-transactional', Local:'intent-local', Navigational:'intent-navigational' };

function classifyKw(kw) {
  const lc = kw.toLowerCase();
  for (const r of intentRules) if (r.p.some(p => lc.includes(p))) return { i: r.i, f: r.f, a: r.a };
  return { i:'Navigational', f:'Any', a:'Homepage / Brand page' };
}
function mapKeywords() {
  const raw = document.getElementById('keyword-input').value.trim().split('\n').filter(Boolean);
  if (!raw.length) { alert('Nhập keyword trước.'); return; }
  const tbody = document.querySelector('#keyword-table tbody');
  tbody.innerHTML = '';
  raw.forEach(kw => {
    const { i, f, a } = classifyKw(kw.trim());
    tbody.insertAdjacentHTML('beforeend', `
      <tr><td>${kw.trim()}</td><td><span class="badge ${intentCls[i]}">${i}</span></td><td>${f}</td><td>${a}</td></tr>
    `);
  });
}
function copyTable(id) {
  const t = document.getElementById(id);
  const text = [...t.querySelectorAll('tr')].map(r => [...r.querySelectorAll('th,td')].map(c=>c.textContent.trim()).join('\t')).join('\n');
  navigator.clipboard.writeText(text).then(() => showToast('Copied! Paste vào Google Sheets.'));
}

/* ==================== CHANNEL PLANNERS ==================== */
function generateSemPlan() {
  const platform  = document.getElementById('sem-platform').value;
  const objective = document.getElementById('sem-objective').value;
  const offer     = document.getElementById('sem-offer').value.trim();
  const budget    = +document.getElementById('sem-budget').value || 0;
  const today     = new Date().toLocaleDateString('vi-VN');

  const platformGuides = {
    'Google Ads':    { matchTypes:'Broad Match Modifier, Phrase, Exact', bidding:'Maximize Conversions → Target CPA', audience:'In-market + Custom intent', negative:'brand competitors, irrelevant queries' },
    'Meta Ads':      { matchTypes:'Lookalike 1-3%, Interest stacking', bidding:'Cost Cap hoặc Bid Cap', audience:'LAL từ email list + pixel visitors', negative:'existing customers nếu đủ data' },
    'LinkedIn Ads':  { matchTypes:'Job title + Industry + Company size', bidding:'Max Delivery', audience:'Seniority: Manager+, Industry relevant', negative:'students, non-B2B' },
    'TikTok Ads':    { matchTypes:'Broad audience + Creator whitelist', bidding:'Lowest Cost', audience:'Interest + Behavioral', negative:'irrelevant age groups' },
  };
  const g = platformGuides[platform] || platformGuides['Google Ads'];
  const budgetPerDay = budget > 0 ? Math.round(budget/30).toLocaleString() : '(chưa nhập)';

  const out = `
SEM CAMPAIGN PLAN — ${platform}
Generated: ${today}
═══════════════════════════════════════════

OBJECTIVE:    ${objective}
OFFER:        ${offer || '(chưa nhập)'}
MONTHLY BUDGET: ${budget > 0 ? budget.toLocaleString()+'đ' : '(chưa nhập)'}
DAILY BUDGET:   ~${budgetPerDay}đ

─── CAMPAIGN STRUCTURE ─────────────────
Campaign → Ad Group → Ad

Campaign: [Brand/Non-brand/Competitor]
  Ad Group 1: [Core service keywords]
    - 10-20 keywords, ${g.matchTypes}
    - 3 responsive ads per group
  Ad Group 2: [Problem-aware keywords]
  Ad Group 3: [Competitor terms] (nếu phù hợp)

─── TARGETING ────────────────────────────
Audience:  ${g.audience}
Negatives: ${g.negative}
Bidding:   ${g.bidding}

─── AD COPY FORMULA ──────────────────────
Headline 1: [Primary keyword + USP]
Headline 2: [Benefit + số liệu cụ thể]
Headline 3: [CTA: "${offer || 'Liên hệ ngay'}"]
Description: [Pain point → Solution → CTA]

─── TRACKING SETUP ───────────────────────
[ ] Conversion tracking đúng action
[ ] UTM parameters nhất quán
[ ] Remarketing audience list
[ ] Call tracking (nếu có phone)

─── KPI TARGETS ──────────────────────────
CTR target:    ≥ 3% (Search), ≥ 1% (Display)
CVR target:    ≥ 3%
Quality Score: ≥ 7
ROAS target:   ≥ 3x
`.trim();

  document.getElementById('channel-output').textContent = out;
}

function generateSocialPlan() {
  const platform = document.getElementById('social-platform').value;
  const pillar   = document.getElementById('social-pillar').value.trim() || 'educational, brand, case study';
  const goal     = document.getElementById('social-goal').value;
  const today    = new Date().toLocaleDateString('vi-VN');

  const freq = { LinkedIn:'3-5x/week', Facebook:'1-2x/day', Instagram:'4-6x/week', TikTok:'1-3x/day', 'Twitter/X':'3-7x/day' };
  const formats = { LinkedIn:'Article, Carousel, Poll, Short video', Facebook:'Reel, Carousel, Story, Live', Instagram:'Reel, Carousel, Story, Static', TikTok:'Short video 15-60s, Duet, Stitch', 'Twitter/X':'Thread, Image tweet, Poll' };

  const out = `
SOCIAL CONTENT CALENDAR — ${platform}
Generated: ${today}
═══════════════════════════════════════════

GOAL:         ${goal}
CONTENT PILLARS: ${pillar}
POSTING FREQ: ${freq[platform]||'3-5x/week'}
BEST FORMATS: ${formats[platform]||'Video, Image, Text'}

─── 4-WEEK CALENDAR TEMPLATE ────────────
Week 1: Educational (40%)
  → How-to, Tips, Framework breakdown
  → Format: Carousel or Article
Week 2: Brand/Story (20%)
  → Behind the scenes, Team, Values
  → Format: Short video / Reel
Week 3: Case Study / Social Proof (25%)
  → Client results, Before/After
  → Format: Image + long caption
Week 4: Engagement / CTA (15%)
  → Poll, Q&A, Lead gen post
  → Format: Poll or Story

─── CONTENT HOOKS ────────────────────────
✦ "[Số] cách để [đạt kết quả] mà không cần [effort]"
✦ "Sai lầm tôi thấy [audience] thường mắc phải..."
✦ "Nếu tôi bắt đầu lại từ đầu, tôi sẽ làm..."
✦ "Unpopular opinion: [Controversial take]"

─── TRACKING METRICS ─────────────────────
${goal === 'Awareness' ? 'Reach, Impressions, Follower growth' : goal === 'Engagement' ? 'Likes, Comments, Shares, Saves, ER%' : goal === 'Traffic' ? 'Link clicks, CTR, UTM sessions in GA4' : 'Lead form submissions, Message DMs, CPA'}
`.trim();

  document.getElementById('channel-output').textContent = out;
}

function generateEmailPlan() {
  const type    = document.getElementById('email-type').value;
  const trigger = document.getElementById('email-trigger').value.trim();
  const goal    = document.getElementById('email-goal').value.trim();
  const today   = new Date().toLocaleDateString('vi-VN');

  const sequences = {
    'Welcome':        [{ d:0, sub:'Chào mừng — đây là điều bạn nhận được', goal:'Confirm + Set expectation' }, { d:2, sub:'[Tên] — bắt đầu với bước đầu tiên', goal:'Activate / First value' }, { d:5, sub:'Một câu hỏi nhỏ cho bạn...', goal:'Segment & qualify' }, { d:10, sub:'Khách hàng như bạn đã làm điều này', goal:'Social proof + Soft CTA' }],
    'Lead nurture':   [{ d:0, sub:'[Resource] bạn vừa yêu cầu', goal:'Deliver lead magnet' }, { d:3, sub:'Tại sao [problem] không tự giải quyết được', goal:'Educate + Problem agitate' }, { d:7, sub:'Case study: [Company] tăng [metric] 30%', goal:'Social proof' }, { d:14, sub:'Bạn sẵn sàng nói chuyện?', goal:'Hard CTA: book call / demo' }],
    'Re-engagement':  [{ d:0, sub:'Lâu rồi không gặp — [gift/offer]', goal:'Win back with offer' }, { d:3, sub:'Chúng tôi đã cải thiện [feature/product]', goal:'Show value' }, { d:7, sub:'Lần cuối cùng — bạn có muốn tiếp tục không?', goal:'Final ask' }],
    'Post-purchase':  [{ d:0, sub:'Cảm ơn! Đơn hàng của bạn đang được xử lý', goal:'Confirm + Reassure' }, { d:2, sub:'Hướng dẫn sử dụng [product]', goal:'Onboard / Activate' }, { d:7, sub:'Bạn thấy thế nào?', goal:'Collect review / NPS' }, { d:14, sub:'Người dùng như bạn cũng thích [upsell]', goal:'Cross-sell / Upsell' }],
  };
  const seq = sequences[type] || sequences['Welcome'];

  const out = `
EMAIL SEQUENCE — ${type}
Generated: ${today}
═══════════════════════════════════════════

TRIGGER: ${trigger || '(chưa nhập)'}
CONVERSION GOAL: ${goal || '(chưa nhập)'}

─── EMAIL SEQUENCE ───────────────────────
${seq.map(e => `Day ${e.d}:
  Subject: "${e.sub}"
  Goal:    ${e.goal}
  CTA:     [Liên quan đến ${goal || 'mục tiêu'}]
  Length:  150-250 words — short & scannable
`).join('\n')}
─── BEST PRACTICES ───────────────────────
✦ Gửi lúc 9-10am hoặc 6-7pm
✦ Subject line ≤ 50 ký tự
✦ 1 email = 1 CTA duy nhất
✦ Personalization: dùng [Tên], [Company]
✦ Track: Open Rate, CTR, Reply Rate, Unsubscribe

─── KPI TARGETS ──────────────────────────
Open Rate:   ≥ 25% (cold), ≥ 40% (warm)
CTR:         ≥ 2.5%
Conversion:  [${goal||'đặt target'}]
`.trim();

  document.getElementById('channel-output').textContent = out;
}

/* ==================== UTM BUILDER ==================== */
function buildUtm() {
  const url      = document.getElementById('utm-url').value.trim();
  const source   = document.getElementById('utm-source').value.trim().replace(/\s/g,'_');
  const medium   = document.getElementById('utm-medium').value.trim().replace(/\s/g,'_');
  const campaign = document.getElementById('utm-campaign').value.trim().replace(/\s/g,'_');
  const content  = document.getElementById('utm-content').value.trim().replace(/\s/g,'_');

  if (!url || !source || !medium || !campaign) { alert('Điền đủ URL, Source, Medium và Campaign.'); return; }

  let utmUrl = url + (url.includes('?') ? '&' : '?');
  utmUrl += `utm_source=${encodeURIComponent(source)}&utm_medium=${encodeURIComponent(medium)}&utm_campaign=${encodeURIComponent(campaign)}`;
  if (content) utmUrl += `&utm_content=${encodeURIComponent(content)}`;

  const out = `UTM URL:
${utmUrl}

─── BREAKDOWN ─────────────────────────
Source:   ${source}
Medium:   ${medium}
Campaign: ${campaign}${content ? '\nContent:  ' + content : ''}

─── NAMING CONVENTIONS ────────────────
✦ lowercase, dùng underscore (_) thay space
✦ source = nơi traffic đến (google, facebook)
✦ medium = loại kênh (cpc, email, social)
✦ campaign = tên chiến dịch + tháng/năm
✦ content = phân biệt ad variant / placement`;

  document.getElementById('utm-output').textContent = out;
}

/* ==================== TRACKING PLAN ==================== */
let trackData = loadFromStorage('track_data') || [];
function renderTrackingTable() {
  const tbody = document.querySelector('#tracking-table tbody');
  if (!tbody) return;
  tbody.innerHTML = trackData.map((r,i) => `
    <tr>
      <td><code style="color:var(--cyan);font-size:0.75rem;">${r.event}</code></td>
      <td>${r.trigger}</td>
      <td>${r.props}</td>
      <td>${r.decision}</td>
      <td><button class="del-btn" onclick="deleteTrack(${i})">✕</button></td>
    </tr>
  `).join('');
}
function addTrackingEvent() {
  const event    = document.getElementById('track-event').value.trim();
  const trigger  = document.getElementById('track-trigger').value.trim();
  const props    = document.getElementById('track-props').value.trim();
  const decision = document.getElementById('track-decision').value.trim();
  if (!event) { alert('Nhập event_name.'); return; }
  trackData.push({ event, trigger, props, decision });
  saveToStorage('track_data', trackData);
  renderTrackingTable();
  ['track-event','track-trigger','track-props','track-decision'].forEach(id => { document.getElementById(id).value = ''; });
}
function deleteTrack(i) { trackData.splice(i,1); saveToStorage('track_data', trackData); renderTrackingTable(); }

/* ==================== EXPERIMENT BACKLOG ==================== */
let expData = loadFromStorage('exp_data') || [];
const expStatuses = ['Backlog','Running','Won','Lost'];

function renderExpTable() {
  const tbody = document.querySelector('#experiment-table tbody');
  if (!tbody) return;
  tbody.innerHTML = expData.map((r,i) => {
    const ice = Math.round((+r.impact + +r.confidence + +r.ease) / 3);
    const iceBadge = ice >= 7 ? 'badge-high' : ice >= 4 ? 'badge-med' : 'badge-low';
    const statusColor = { Backlog:'badge-stable', Running:'badge-progress', Won:'badge-done', Lost:'badge-blocked' };
    return `
      <tr>
        <td>${r.name}</td>
        <td style="max-width:200px;font-size:0.75rem;color:var(--t3);">Because ${r.observation}<br>→ ${r.change}</td>
        <td>${r.metric}</td>
        <td><span class="badge ${iceBadge}">${ice}/10</span></td>
        <td>
          <select style="background:var(--bg-3);border:1px solid var(--border);color:var(--t1);border-radius:6px;padding:0.2rem 0.4rem;font-size:0.75rem;"
            onchange="updateExpStatus(${i}, this.value)">
            ${expStatuses.map(s=>`<option ${s===r.status?'selected':''}>${s}</option>`).join('')}
          </select>
        </td>
        <td><button class="del-btn" onclick="deleteExp(${i})">✕</button></td>
      </tr>
    `;
  }).sort((a,b)=>{}).join('');
}
function addExperiment() {
  const name       = document.getElementById('exp-name').value.trim();
  const observation= document.getElementById('exp-observation').value.trim();
  const change     = document.getElementById('exp-change').value.trim();
  const metric     = document.getElementById('exp-metric').value.trim();
  const impact     = +document.getElementById('exp-impact').value     || 5;
  const confidence = +document.getElementById('exp-confidence').value || 5;
  const ease       = +document.getElementById('exp-ease').value       || 5;
  if (!name) { alert('Nhập experiment name.'); return; }
  expData.push({ name, observation, change, metric, impact, confidence, ease, status:'Backlog' });
  // Sort by ICE descending
  expData.sort((a,b) => ((+b.impact + +b.confidence + +b.ease) - (+a.impact + +a.confidence + +a.ease)));
  saveToStorage('exp_data', expData);
  renderExpTable();
  ['exp-name','exp-observation','exp-change','exp-metric','exp-impact','exp-confidence','exp-ease'].forEach(id=>{ document.getElementById(id).value=''; });
}
function updateExpStatus(i, val) { expData[i].status = val; saveToStorage('exp_data', expData); }
function deleteExp(i) { expData.splice(i,1); saveToStorage('exp_data', expData); renderExpTable(); }

/* ==================== RANK TRACKER ==================== */
let rankData = loadFromStorage('rank_data') || [];
function renderRankTable() {
  const tbody = document.querySelector('#rank-table tbody');
  if (!tbody) return;
  tbody.innerHTML = rankData.map((r,i) => {
    const diff = (r.previous && r.current) ? r.previous - r.current : 0;
    const chg  = diff > 0 ? `<span style="color:var(--green)">▲${diff}</span>` : diff < 0 ? `<span style="color:var(--red)">▼${Math.abs(diff)}</span>` : '—';
    let badge = '<span class="badge badge-stable">Stable</span>';
    if (diff > 0) badge = '<span class="badge badge-up">↑ Up</span>';
    if (diff < 0) badge = '<span class="badge badge-down">↓ Down</span>';
    if (r.current <= 3) badge += ' <span class="badge badge-done">Top 3</span>';
    return `<tr>
      <td>${r.keyword}</td>
      <td style="max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${r.url}">${r.url||'—'}</td>
      <td><strong>${r.current||'—'}</strong></td>
      <td>${r.previous||'—'}</td>
      <td>${chg}</td>
      <td>${badge}</td>
      <td>${r.note||''}</td>
      <td><button class="del-btn" onclick="deleteRank(${i})">✕</button></td>
    </tr>`;
  }).join('');
}
function addRankRow() {
  const kw   = document.getElementById('rank-keyword').value.trim();
  const url  = document.getElementById('rank-url').value.trim();
  const cur  = parseInt(document.getElementById('rank-current').value);
  const prev = parseInt(document.getElementById('rank-previous').value);
  const note = document.getElementById('rank-note').value.trim();
  if (!kw) { alert('Nhập keyword.'); return; }
  rankData.push({ keyword:kw, url, current:cur||null, previous:prev||null, note });
  saveToStorage('rank_data', rankData);
  renderRankTable();
  ['rank-keyword','rank-url','rank-current','rank-previous','rank-note'].forEach(id=>{ document.getElementById(id).value=''; });
}
function deleteRank(i) { rankData.splice(i,1); saveToStorage('rank_data', rankData); renderRankTable(); }

/* ==================== GBP ==================== */
let gbpData = loadFromStorage('gbp_data') || [];
function renderGbpTable() {
  const tbody = document.querySelector('#gbp-table tbody');
  if (!tbody) return;
  const cls = { Pending:'badge-pending', 'In progress':'badge-progress', Done:'badge-done', Blocked:'badge-blocked' };
  tbody.innerHTML = gbpData.map((r,i) => `
    <tr>
      <td>${r.branch}</td><td>${r.task}</td>
      <td><span class="badge ${cls[r.status]||''}">${r.status}</span></td>
      <td>${r.owner||'—'}</td><td>${r.updated}</td>
      <td><button class="del-btn" onclick="deleteGbp(${i})">✕</button></td>
    </tr>
  `).join('');
}
function addGbpTask() {
  const branch = document.getElementById('gbp-branch').value.trim();
  if (!branch) { alert('Nhập Branch.'); return; }
  gbpData.push({ branch, task:document.getElementById('gbp-task').value, status:document.getElementById('gbp-status').value, owner:document.getElementById('gbp-owner').value.trim(), updated:new Date().toLocaleDateString('vi-VN') });
  saveToStorage('gbp_data', gbpData);
  renderGbpTable();
  document.getElementById('gbp-branch').value = '';
  document.getElementById('gbp-owner').value  = '';
}
function deleteGbp(i) { gbpData.splice(i,1); saveToStorage('gbp_data', gbpData); renderGbpTable(); }

/* ==================== OPS CARDS ==================== */
let opsData = loadFromStorage('ops_data') || [];
function renderOpsTable() {
  const tbody = document.querySelector('#ops-table tbody');
  if (!tbody) return;
  const today = new Date(); today.setHours(0,0,0,0);
  const vCol = { SEO:'var(--accent-2)', SEM:'var(--orange)', Social:'var(--pink)', Email:'var(--pink)', CRM:'var(--cyan)', Performance:'var(--orange)', 'Xsell / Sales / Growth':'var(--green)' };
  tbody.innerHTML = opsData.map((r,i) => {
    let flag = '<span class="badge badge-ok">On track</span>';
    if (r.due) {
      const d = new Date(r.due); d.setHours(0,0,0,0);
      const diff = Math.ceil((d - today)/86400000);
      if (diff < 0)  flag = '<span class="badge badge-overdue">Overdue!</span>';
      else if (diff===0) flag = '<span class="badge badge-today">Due Today</span>';
      else if (diff<=2)  flag = '<span class="badge badge-today">Due Soon</span>';
    }
    return `<tr>
      <td>${r.title}</td>
      <td style="color:${vCol[r.vertical]||'var(--t3)'};font-weight:600;">${r.vertical}</td>
      <td>${r.process}</td>
      <td>${r.owner||'—'}</td><td>${r.due||'—'}</td>
      <td>${flag}</td>
      <td><button class="del-btn" onclick="deleteOps(${i})">✕</button></td>
    </tr>`;
  }).join('');
}
function addOpsCard() {
  const title = document.getElementById('card-title').value.trim();
  if (!title) { alert('Nhập card title.'); return; }
  opsData.push({ title, vertical:document.getElementById('card-vertical').value, process:document.getElementById('card-process').value, owner:document.getElementById('card-owner').value.trim(), due:document.getElementById('card-due').value });
  saveToStorage('ops_data', opsData);
  renderOpsTable();
  document.getElementById('card-title').value = '';
  document.getElementById('card-owner').value = '';
  document.getElementById('card-due').value   = '';
}
function deleteOps(i) { opsData.splice(i,1); saveToStorage('ops_data', opsData); renderOpsTable(); }

/* ==================== WEEKLY REPORT ==================== */
function generateReport() {
  const vertical   = document.getElementById('report-vertical').value;
  const highlights = document.getElementById('report-highlights').value.trim();
  const issues     = document.getElementById('report-issues').value.trim();
  const actions    = document.getElementById('report-actions').value.trim();
  const today      = new Date();
  const weekStr    = `W${getWeekNum(today)} — ${today.toLocaleDateString('vi-VN')}`;

  const rankSummary = rankData.length
    ? rankData.slice(0,5).map(r=>`  #${r.current??'?'} ${r.previous&&r.current ? (r.previous-r.current>0?'▲':'▼')+Math.abs(r.previous-r.current) : '→'} — ${r.keyword}`).join('\n')
    : '  (no rank data)';
  const gbpSummary  = gbpData.length ? `Done: ${gbpData.filter(g=>g.status==='Done').length}/${gbpData.length}` : '(no GBP data)';
  const opsSummary  = opsData.length ? `${opsData.length} cards | Overdue: ${opsData.filter(o=>o.due&&new Date(o.due)<today).length}` : '(no cards)';
  const expSummary  = expData.length ? `Running: ${expData.filter(e=>e.status==='Running').length} | Won: ${expData.filter(e=>e.status==='Won').length}` : '(no experiments)';

  const out = `
══════════════════════════════════════════════
WEEKLY INSIGHT REPORT — ${vertical.toUpperCase()}
${weekStr}
══════════════════════════════════════════════

▶ HIGHLIGHTS & WINS
${highlights ? highlights.split('\n').map(l=>'  • '+l.trim()).join('\n') : '  (chưa điền)'}

▶ ISSUES / INCONSISTENCIES
${issues ? issues.split('\n').map(l=>'  ! '+l.trim()).join('\n') : '  (chưa điền)'}

▶ NEXT ACTIONS (Who / What / When)
${actions ? actions.split('\n').map(l=>'  → '+l.trim()).join('\n') : '  (chưa điền)'}

──────────────────────────────────────────────
WORKSPACE DATA PULL

Rank Tracker:
${rankSummary}

GBP Tasks:   ${gbpSummary}
Ops Cards:   ${opsSummary}
Experiments: ${expSummary}

──────────────────────────────────────────────
Next report: ${getNextMonday()}
`.trim();

  document.getElementById('report-output').textContent = out;
  saveToStorage('last_report', out);
}
function getWeekNum(d) { const j=new Date(d.getFullYear(),0,1); return Math.ceil((((d-j)/86400000)+j.getDay()+1)/7); }
function getNextMonday() { const d=new Date(); d.setDate(d.getDate()+(7-d.getDay()+1)%7||7); return d.toLocaleDateString('vi-VN'); }

/* ==================== EXPORT ==================== */
function exportWorkspace() {
  let out = `DIGITAL MARKETING WORKBENCH — EXPORT\nExported: ${new Date().toLocaleString('vi-VN')}\n\n`;
  out += `=== RANK TRACKER ===\nKeyword\tURL\tCurrent\tPrevious\tNote\n`;
  rankData.forEach(r => out += `${r.keyword}\t${r.url}\t${r.current}\t${r.previous}\t${r.note}\n`);
  out += `\n=== GBP TASKS ===\nBranch\tTask\tStatus\tOwner\n`;
  gbpData.forEach(g => out += `${g.branch}\t${g.task}\t${g.status}\t${g.owner}\n`);
  out += `\n=== OPS CARDS ===\nTitle\tVertical\tProcess\tOwner\tDue\n`;
  opsData.forEach(o => out += `${o.title}\t${o.vertical}\t${o.process}\t${o.owner}\t${o.due}\n`);
  out += `\n=== EXPERIMENTS ===\nName\tMetric\tICE\tStatus\n`;
  expData.forEach(e => out += `${e.name}\t${e.metric}\t${Math.round((+e.impact + +e.confidence + +e.ease)/3)}\t${e.status}\n`);
  out += `\n=== LAST BRIEF ===\n${loadFromStorage('last_brief')||''}\n`;
  out += `\n=== LAST REPORT ===\n${loadFromStorage('last_report')||''}\n`;

  const blob = new Blob([out], { type:'text/plain;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `dmworkbench-${new Date().toISOString().slice(0,10)}.txt`;
  a.click(); URL.revokeObjectURL(url);
  showToast('Export xong — paste vào Google Sheets!');
}

/* ==================== COPY HELPER ==================== */
function copyToClipboard(id) {
  const el = document.getElementById(id); if (!el) return;
  const text = el.textContent;
  navigator.clipboard.writeText(text).then(() => showToast('Đã copy!')).catch(() => {
    const ta = document.createElement('textarea'); ta.value = text;
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    showToast('Đã copy!');
  });
}

/* ==================== LOCAL STORAGE ==================== */
const SK = 'dmwb_v3';
function saveToStorage(key, val) { try { const a=JSON.parse(localStorage.getItem(SK)||'{}'); a[key]=val; localStorage.setItem(SK,JSON.stringify(a)); } catch(e){} }
function loadFromStorage(key) { try { return JSON.parse(localStorage.getItem(SK)||'{}')[key]||null; } catch(e){ return null; } }

/* ==================== TOAST ==================== */
function showToast(msg) {
  document.querySelector('.toast')?.remove();
  const t = document.createElement('div'); t.className='toast'; t.textContent=msg;
  t.style.cssText='position:fixed;bottom:1.5rem;right:1.5rem;z-index:9999;background:linear-gradient(135deg,#6366f1,#4f46e5);color:#fff;padding:.6rem 1.1rem;border-radius:9px;font-size:.82rem;font-weight:600;box-shadow:0 4px 18px rgba(99,102,241,.4);animation:toastIn .2s ease;';
  document.head.insertAdjacentHTML('beforeend','<style>@keyframes toastIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}</style>');
  document.body.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0'; t.style.transition='opacity .3s'; setTimeout(()=>t.remove(),300); }, 2500);
}

/* ==================== HELP GUIDE TOGGLE ==================== */
function toggleGuide(module) {
  const guide = document.getElementById(`guide-${module}`);
  if (!guide) return;
  guide.classList.toggle('visible');
  // Scroll to guide smoothly
  if (guide.classList.contains('visible')) {
    setTimeout(() => guide.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  }
}

/* ==================== GEO SCORE CALCULATOR ==================== */
function calculateGeoScore() {
  // Dimension configs: [ids, weight, label, color]
  const dims = [
    { ids: ['geo-t1','geo-t2','geo-t3','geo-t4','geo-t5'], weight: 20, label: '🔧 Technical', color: '#6366f1' },
    { ids: ['geo-c1','geo-c2','geo-c3','geo-c4','geo-c5','geo-c6'], weight: 35, label: '✍️ Citability', color: '#06b6d4' },
    { ids: ['geo-s1','geo-s2','geo-s3','geo-s4','geo-s5'], weight: 20, label: '🏗️ Schema', color: '#a78bfa' },
    { ids: ['geo-b1','geo-b2','geo-b3','geo-b4','geo-b5'], weight: 25, label: '🏆 Brand', color: '#10b981' },
  ];

  let composite = 0;
  const dimScores = [];
  const issues = [];

  dims.forEach(dim => {
    const total = dim.ids.length;
    const checked = dim.ids.filter(id => document.getElementById(id)?.checked).length;
    const pct = Math.round((checked / total) * 100);
    const weighted = Math.round(pct * dim.weight / 100);
    composite += weighted;
    dimScores.push({ label: dim.label, pct, color: dim.color });

    // Issues
    dim.ids.forEach(id => {
      if (!document.getElementById(id)?.checked) {
        const labelEl = document.querySelector(`label[for="${id}"] span, label input#${id} + span`);
        const txt = document.querySelector(`#${id}`)?.closest('label')?.querySelector('span')?.textContent?.trim();
        if (txt) {
          const sev = dim.weight === 35 ? 'critical' : dim.weight === 25 ? 'high' : 'medium';
          issues.push({ text: txt, sev });
        }
      }
    });
  });

  // Grade
  const grade = composite >= 80 ? 'A · Excellent' : composite >= 60 ? 'B · Good' : composite >= 40 ? 'C · Needs work' : 'D · Critical';
  const numColor = composite >= 80 ? 'var(--green)' : composite >= 60 ? 'var(--cyan)' : composite >= 40 ? 'var(--orange)' : 'var(--red)';

  // Render
  const result = document.getElementById('geo-result');
  result.classList.add('visible');
  document.getElementById('geo-big-num').textContent = composite;
  document.getElementById('geo-big-num').style.color = numColor;
  document.getElementById('geo-big-grade').textContent = `/100 · ${grade}`;

  // Breakdown bars
  document.getElementById('geo-breakdown').innerHTML = dimScores.map(d => `
    <div class="geo-bar-item">
      <span class="geo-bar-label">${d.label}</span>
      <div class="geo-bar-track"><div class="geo-bar-fill" style="width:${d.pct}%;background:${d.color}"></div></div>
      <span class="geo-bar-val">${d.pct}</span>
    </div>
  `).join('');

  // Top 6 issues
  const sorted = issues.sort((a,b) => { const o={critical:0,high:1,medium:2}; return o[a.sev]-o[b.sev]; }).slice(0,6);
  const icons = { critical:'🔴', high:'🟡', medium:'🔵' };
  document.getElementById('geo-issues').innerHTML = sorted.length
    ? sorted.map(i => `<div class="geo-issue-item ${i.sev}">${icons[i.sev]} ${i.text}</div>`).join('')
    : '<div class="geo-issue-item medium">✅ Xuất sắc! Tất cả checkboxes đã hoàn thành.</div>';

  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  showToast(`GEO Score: ${composite}/100 — ${grade}`);
}

/* ==================== CONTENT CITABILITY SCORER ==================== */
function scoreCitability() {
  const text = document.getElementById('cit-text')?.value?.trim() || '';
  if (text.length < 50) { showToast('⚠️ Paste nội dung bài viết trước (tối thiểu 50 ký tự)'); return; }

  const lc = text.toLowerCase();
  const words = text.split(/\s+/).length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

  // 6 metrics from geoskills geo-fix-content
  const scores = [
    {
      label: 'Answer Block',
      max: 20,
      score: (() => {
        // Has direct answer pattern: ?...\n or short paragraph
        const hasQuestion = (lc.match(/[?]/g)||[]).length >= 1;
        const hasShortAnswer = text.split('\n').some(l => l.trim().length > 10 && l.trim().length < 200);
        return hasQuestion && hasShortAnswer ? 18 : hasShortAnswer ? 12 : 5;
      })()
    },
    {
      label: 'Self-Containment',
      max: 18,
      score: Math.min(18, Math.round(words / 50 * 18)) // longer = more self-contained
    },
    {
      label: 'Statistical Density',
      max: 17,
      score: (() => {
        const numMatches = (lc.match(/\d+[\.,]?\d*\s*(%|triệu|tỷ|nghìn|k\b|usd|vnd|x\b)/gi)||[]).length;
        return Math.min(17, numMatches * 4);
      })()
    },
    {
      label: 'Structural Clarity',
      max: 17,
      score: (() => {
        const hasBullets = /[-•*]\s/.test(text);
        const hasNumbers = /\d+\.\s/.test(text);
        const hasHeadings = /##|\n[A-ZÁÀẢÃ]/.test(text);
        return (hasBullets ? 6 : 0) + (hasNumbers ? 5 : 0) + (hasHeadings ? 6 : 0);
      })()
    },
    {
      label: 'Expertise Signals',
      max: 13,
      score: (() => {
        const hasAuthor = /tác giả|author|by |nguồn:|source:/i.test(text);
        const hasDate = /\d{4}|tháng \d|january|february|march|april|may|june|july|august|september|october|november|december/i.test(text);
        const hasCite = /theo |according to|nghiên cứu|report|study/i.test(text);
        return (hasAuthor ? 5 : 0) + (hasDate ? 4 : 0) + (hasCite ? 4 : 0);
      })()
    },
    {
      label: 'AI Query Alignment',
      max: 15,
      score: (() => {
        const hasQ = (lc.match(/là gì|như thế nào|tại sao|how|what|why|when|where|which/g)||[]).length;
        return Math.min(15, hasQ * 4);
      })()
    },
  ];

  const total = scores.reduce((s, m) => s + m.score, 0);
  const maxTotal = scores.reduce((s, m) => s + m.max, 0);
  const pct = Math.round((total / maxTotal) * 100);
  const level = pct >= 70 ? '🟢 Excellent — AI sẽ trích dẫn bài này' : pct >= 50 ? '🟡 Good — Cần thêm data và answer block' : '🔴 Low — Cần cải thiện cấu trúc và dữ liệu';

  document.getElementById('cit-result').innerHTML = `<strong style="color:var(--cyan);font-size:1.1rem">${pct}/100</strong> · ${level}`;

  const barsEl = document.getElementById('cit-bars');
  barsEl.style.display = 'flex';
  barsEl.innerHTML = scores.map(m => {
    const p = Math.round((m.score / m.max) * 100);
    return `
      <div class="cit-bar-row">
        <span class="cit-bar-lbl">${m.label}</span>
        <div class="cit-bar-track"><div class="cit-bar-fill" style="width:${p}%"></div></div>
        <span class="cit-bar-val">${m.score}/${m.max}</span>
      </div>
    `;
  }).join('');

  document.getElementById('cit-summary').innerHTML = pct >= 70
    ? '✅ Bài viết này có cấu trúc tốt, AI engines (ChatGPT, Perplexity, Gemini) có khả năng cao sẽ trích dẫn.'
    : pct >= 50
    ? '💡 Cải thiện: Thêm số liệu cụ thể, format answer block rõ hơn, và đảm bảo tác giả + ngày được hiển thị.'
    : '⚠️ Cần cải thiện nhiều: Thêm H2/H3, bullet points, số liệu và câu trả lời trực tiếp ở đầu bài.';

  showToast(`Citability Score: ${pct}/100`);
}

/* ==================== INIT ==================== */
renderRankTable();
renderGbpTable();
renderOpsTable();
renderExpTable();
renderTrackingTable();

const kpi = loadFromStorage('kpi');
if (kpi) { Object.entries(kpi).forEach(([k,v])=>{ const el=document.getElementById(`kpi-${k}`); if(el) el.value=v; }); calculateKpis(); }
const brief = loadFromStorage('last_brief');
if (brief) document.getElementById('brief-output').textContent = brief;
const report = loadFromStorage('last_report');
if (report) document.getElementById('report-output').textContent = report;

console.log('%c📊 DM Workbench v4 — GEO Score + Citability + Help Guides Ready', 'color:#818cf8;font-weight:bold;font-size:1rem;');
