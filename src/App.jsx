import React, { useState, useEffect } from 'react';
import {
  Shield,
  Target,
  Crosshair,
  Info,
  Terminal,
  Activity,
  Star,
  TrendingUp,
  Radar,
  Radio,
  Scan,
  Focus
} from 'lucide-react';
import VesperSquadLogo from './assets/vesper_squad_logo.png';
import DuskbladeSoldier_01 from './assets/character_01.png';
import DuskbladeSoldier_02 from './assets/character_02.png';
import DuskbladeSoldier_03 from './assets/character_03.png';
import DuskbladeSoldier_04 from './assets/character_04.png';
import DuskbladeSoldier_05 from './assets/character_05.png';
import DuskbladeSoldier_06 from './assets/character_06.png';

const SOLDIER_IMAGES = [
  DuskbladeSoldier_01,
  DuskbladeSoldier_02,
  DuskbladeSoldier_03,
  DuskbladeSoldier_04,
  DuskbladeSoldier_05,
  DuskbladeSoldier_06,
];

const App = () => {
  const [soldierIndex, setSoldierIndex] = useState(0);
  const [soldierPaused, setSoldierPaused] = useState(false);

  useEffect(() => {
    if (soldierPaused) return;
    const timer = setInterval(() => {
      setSoldierIndex((i) => (i + 1) % SOLDIER_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [soldierPaused]);

  // 訓練科目數據
  const trainings = [
    { 
      title: "特殊武器使用與地面載具駕駛", 
      desc: "於指定建築上練習使用限定彈藥之特殊武器擊毀機動載具；操駕載具透過指定路線快速通過敵佔區。" 
    },
    { 
      title: "定點長距離與動態狙擊練習", 
      desc: "除長距離狙擊外，重點演練兩架相對自轉載具間的貨艙窗口對位狙擊，要求在極短窗口內迅速狙殺目標。" 
    },
    { 
      title: "載具速降演訓 (動態裝載)", 
      desc: "演練載具於慢速移動中的「阿思嘉德」上駛離或駛上飛船，確保動態部署環境下的裝卸效率。" 
    },
    { 
      title: "全環境戰鬥機甲與空降練習", 
      desc: "側重於機甲空降落點定位與戰鬥應對演練，確保重型單位能在關鍵時刻精準投射至作戰熱點。" 
    }
  ];

  // 實戰區域數據
  const missionAreas = [
    { name: "派羅戰區", level: "high" },
    { name: "激光雷射", level: "high" },
    { name: "拉薩路", level: "mid" },
    { name: "QV空間站", level: "mid" },
    { name: "QV碎石站", level: "mid" },
    { name: "瑪瑙設施", level: "low" }
  ];

  const getTagStyle = (level) => {
    switch (level) {
      case 'high': return "bg-red-500/10 text-red-500 border-red-500/30 shadow-[0_0_8px_rgba(239,68,68,0.1)]";
      case 'mid': return "bg-amber-500/10 text-amber-500 border-amber-500/30 shadow-[0_0_8px_rgba(245,158,11,0.1)]";
      case 'low': return "bg-blue-500/10 text-blue-500 border-blue-500/30 shadow-[0_0_8px_rgba(59,130,246,0.1)]";
      default: return "bg-slate-800 border-slate-700 text-slate-400";
    }
  };

  const rewards = [
    { tier: "基礎戰鬥考核", items: ["黑安藤", "彭布羅克包"], color: "border-slate-700 bg-slate-900/20" },
    { tier: "菁英戰鬥考核", items: ["戰壕頭", "蔑視胸", "黑金帕拉蒂諾套服"], color: "border-blue-500/30 bg-blue-500/5" },
    { tier: "王牌戰鬥考核", items: ["戰壕頭(黑/橙)", "Downburst 套服", "套服機庫禮物(*黃昏隊長)"], color: "border-amber-500/40 bg-amber-500/5" }
  ];

  const faqs = [
    { q: "是進去就直接成為隊員嗎?", a: "不是，會先成為傭兵團一員，後面會慢慢培訓考核成為黃昏之刃的一份子。" },
    { q: "新手可以加入嗎？沒有 FPS 經驗也可以嗎?", a: "完全可以。我們看重「能進入臨戰狀態」與「團隊意識」，比起槍法這更重要。" },
    { q: "加入團隊會很嚴肅嗎?像軍事行動一樣?", a: "行動時會稍微嚴肅但不會過於硬核。期望招募的是「享受協作」而非勉強配合的人。" },
    { q: "有制式裝備代表有服裝規定?", a: "是的。主要是為了歸屬感與專業性，重點是要好看、協調！" },
    { q: "是否有出席率限制?", a: "無強制出席規定，但若長期無法出席（如新遊戲上市），希望能提前說明狀況。" },
    { q: "是否是個一言堂的隊伍?", a: "戰術行動中「必須」聽從隊長指示；其餘時間除了核心理念外皆可討論。" },
    { q: "核心理念又是甚麼?", a: "1. FPS地面戰為主。 2. 戰術配合無個人主義。 3. 要有好看的制服。" }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-2 md:p-6 font-sans selection:bg-amber-500 selection:text-black relative overflow-hidden flex items-center justify-center">

      {/* 背景環境效果 */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,1)_0%,rgba(2,6,23,1)_100%)] z-[-1]"></div>

      <div className="poster-scale w-full max-w-[1400px] relative border border-slate-800 bg-slate-900/40 backdrop-blur-md p-4 md:p-6 rounded-sm shadow-2xl z-20 flex flex-col">
        
        {/* Logo 浮水印 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.12] grayscale">
          <img
            src={VesperSquadLogo}
            alt="Logo Watermark"
            className="w-[55%] max-w-[680px]"
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>

        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-amber-500/40 pb-3 mb-4 gap-4 relative z-30 flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={VesperSquadLogo}
                alt="Duskblade Logo"
                className="relative z-10 w-20 h-20 object-contain drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-widest text-white flex items-center gap-3">
                黃昏之刃 <span className="text-amber-500 italic text-xl font-bold">DUSKBLADE</span>
              </h1>
              <p className="text-[12px] font-mono text-slate-500 tracking-[0.4em] uppercase">Vesper Squad // FPS tactical strike unit // 菁英募集中</p>
            </div>
          </div>
          <div className="text-right font-mono text-[12px] text-slate-500 leading-tight space-y-1">
            <div className="flex items-center justify-end gap-2"><span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span> SYSTEM: ONLINE</div>
            <div className="text-amber-500/60 uppercase tracking-tighter italic text-[13px]">"我來、我見、我——招募！"</div>
          </div>
        </header>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 relative z-30">
          
          {/* COL 1: MISSION BRIEFING & EQUIPMENT PREVIEW */}
          <div className="lg:col-span-1 space-y-3 flex flex-col">
            {/* 招募前言 - 已調整不撐滿 */}
            <section className="border border-slate-800 p-4 bg-slate-950/60 relative group">
              <div className="absolute top-0 left-0 w-4 h-[1px] bg-amber-500"></div>
              <div className="absolute top-0 left-0 w-[1px] h-4 bg-amber-500"></div>
              <h3 className="text-base font-bold text-amber-500 mb-3 flex items-center gap-2">
                <Info size={14} /> 招募前言
              </h3>
              <p className="text-[14px] leading-relaxed text-slate-400">
                專注於 FPS 戰鬥場景的團隊合作與戰術配合。我們建立不僅是一個隊伍，而是一套高效的作戰體系。不論是地面肅清還是艦內登檢，我們在尋找渴望戰鬥的靈魂。
              </p>
            </section>

            {/* 小隊定位 - 已調整不撐滿 */}
            <section className="border border-slate-800 p-4 bg-slate-950/60">
              <h3 className="text-base font-bold text-blue-400 mb-4 flex items-center gap-2">
                <Target size={14} /> 隊伍定位
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-2">
                  {["戰術跳幫", "控制/清除", "地表壓制", "搜索與撤離"].map((role, i) => (
                    <div key={i} className="flex items-center gap-2 text-[12px] text-slate-400 bg-slate-900/80 p-1.5 border border-slate-800/50">
                      <div className="w-1 h-1 bg-amber-500"></div> {role}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 左下角留白空間加入戰士裝備圖 */}
            <section className="flex-grow flex flex-col min-h-0">
              <div
                className="relative border border-slate-800 bg-slate-950/80 p-1 overflow-hidden group flex-grow flex cursor-pointer select-none"
                onMouseEnter={() => setSoldierPaused(true)}
                onMouseLeave={() => setSoldierPaused(false)}
                onClick={() => setSoldierIndex((i) => (i + 1) % SOLDIER_IMAGES.length)}
              >
                {/* 裝備掃描視覺效果 */}
                <div className="absolute top-2 left-2 z-20 bg-amber-500/80 text-black px-1.5 py-0.5 text-[12px] font-black italic tracking-tighter uppercase flex items-center gap-1">
                  <Focus size={10} /> Armor Preview
                </div>
                <div className="absolute top-2 right-2 z-20 text-[10px] font-mono text-amber-500/70 tracking-widest bg-black/50 px-1.5 py-0.5 border border-amber-500/30">
                  {String(soldierIndex + 1).padStart(2, '0')} / {String(SOLDIER_IMAGES.length).padStart(2, '0')}
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-amber-500/20 z-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-amber-500/20 z-10"></div>

                {/* 戰士圖片 - 淡入淡出輪播 */}
                {SOLDIER_IMAGES.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Duskblade Soldier ${i + 1}`}
                    className={`absolute inset-1 w-[calc(100%-0.5rem)] h-[calc(100%-0.5rem)] object-cover object-top grayscale-[0.3] group-hover:grayscale-0 transition-opacity duration-1000 ${i === soldierIndex ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'}`}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                ))}

                {/* 指示點 */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                  {SOLDIER_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Soldier ${i + 1}`}
                      onClick={(e) => { e.stopPropagation(); setSoldierIndex(i); }}
                      className={`h-1 transition-all ${i === soldierIndex ? 'w-4 bg-amber-500' : 'w-1 bg-slate-600 hover:bg-slate-400'}`}
                    />
                  ))}
                </div>

                {/* 底部裝飾條 */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent z-10"></div>
              </div>
            </section>
          </div>

          {/* COL 2 & 3: OPS & REWARDS (CENTER) */}
          <div className="lg:col-span-2 space-y-3 flex flex-col min-h-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 戰術訓練 */}
              <section className="border border-slate-800 p-4 bg-slate-950/60 flex flex-col relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] rotate-12"><Activity size={120} /></div>
                <h3 className="text-base font-bold text-amber-500 mb-4 tracking-[0.2em] uppercase flex justify-between">
                  <span>Tactical Training</span>
                  <span className="text-slate-700">戰術訓練</span>
                </h3>
                <div className="space-y-4">
                  {trainings.map((t, i) => (
                    <div key={i} className="relative pl-4 border-l border-slate-800/50 hover:border-amber-500 transition-colors">
                      <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 bg-slate-800 border border-slate-600 rotate-45 group-hover:bg-amber-500"></div>
                      <h4 className="text-[15px] font-bold text-slate-200">{t.title}</h4>
                      <p className="text-[14px] text-slate-500 mt-1 leading-normal italic">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 作戰演練 */}
              <section className="border border-slate-800 p-4 bg-slate-950/60 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-5 scale-x-[-1]"><Radar size={60} /></div>
                <h3 className="text-base font-bold text-blue-400 mb-4 tracking-[0.2em] uppercase flex justify-between">
                  <span>Op Environments</span>
                  <span className="text-slate-700">作戰演練</span>
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-[12px] text-blue-400/60 block uppercase font-mono tracking-tighter border-b border-blue-400/20 pb-1">部署區域 // Locations</span>
                    <ul className="text-[14px] text-slate-300 space-y-1 font-medium leading-relaxed">
                      <li>• <b>船艦:</b> 伊德里斯、890、回收者、北極星、克拉克</li>
                      <li>• <b>地面:</b> 物流中心、OLP、Jump town、法羅中心、幽靈窪地</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[12px] text-blue-400/60 block uppercase font-mono tracking-tighter border-b border-blue-400/20 pb-1">作戰項目 // Tasks</span>
                    <ul className="text-[14px] text-slate-300 space-y-1 font-medium leading-relaxed">
                      <li>• <b>殲滅/控制:</b> 擊殺所有敵人並攻佔目標位置。</li>
                      <li>• <b>物資爭奪:</b> 搶奪或保護關鍵組件/載具並撤離。</li>
                      <li>• <b>救援控制:</b> 搜尋並完成 VIP 護送撤離。</li>
                    </ul>
                  </div>
                  <div className="mt-2 border-slate-800/50">
                    <span className="text-[12px] text-blue-400/60 block uppercase font-mono tracking-tighter border-b border-blue-400/20 pb-1 mb-2">戰區標記 // Zone Indicators</span>
                    <div className="flex flex-wrap gap-1.5 justify-start">
                      {missionAreas.map(area => (
                        <span key={area.name} className={`text-[12px] px-2 py-0.5 border font-mono transition-all duration-300 ${getTagStyle(area.level)}`}>
                          {area.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-800">
                    <div className="bg-slate-900 p-2 border border-slate-800 relative">
                      <div className="text-[9px] text-slate-500 mb-1 flex justify-between uppercase font-mono italic">
                        <span className="flex items-center gap-1 font-bold">戰場威脅分級</span>
                        <span className="text-red-500/70 font-black tracking-tighter animate-pulse">Critical Alpha</span>
                      </div>
                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden flex">
                        <div className="h-full bg-blue-500 w-[25%] border-r border-slate-950"></div>
                        <div className="h-full bg-amber-500 w-[55%] border-r border-slate-950"></div>
                        <div className="h-full bg-red-600 w-[20%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* 獎勵區塊 */}
            <section className="border border-slate-800 p-4 bg-slate-950/60 flex flex-col">
              <h3 className="text-base font-bold text-slate-300 mb-4 flex items-center justify-between">
                <span className="tracking-widest italic font-black uppercase">Benefits & Tiers // 福利與考核</span>
                <TrendingUp size={14} className="text-amber-500 opacity-50" />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {rewards.map((r, i) => (
                  <div key={i} className={`p-3 border rounded-sm flex flex-col min-h-[110px] ${r.color}`}>
                    <div className="flex justify-between items-center mb-1.5 border-b border-white/5 pb-1">
                      <span className="text-[12px] font-black uppercase tracking-widest text-white">{r.tier}</span>
                      <Star size={10} className="text-amber-500" />
                    </div>
                    <ul className="text-[14px] space-y-1 text-slate-400 flex-grow">
                      {r.items.map((item, idx) => (
                        <li key={idx} className="flex gap-1.5 leading-tight italic">
                          <span className="text-amber-500/40">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* 戰術分割線 */}
              <div className="my-5 relative h-[1px] bg-slate-800/60 w-full">
                <div className="absolute left-0 top-0 h-full w-12 bg-amber-500/40"></div>
                <div className="absolute right-0 top-0 h-full w-2 bg-slate-700"></div>
                <div className="absolute left-14 top-[-3px] text-[12px] font-mono text-slate-700 tracking-widest uppercase">
                  End of Tier Definitions
                </div>
              </div>

              <div className="flex items-start gap-3 bg-amber-500/5 p-2 border border-amber-500/20">
                <div className="mt-0.5"><Shield size={12} className="text-amber-500" /></div>
                <p className="text-[14px] text-amber-200/70 leading-normal italic">
                  <span className="font-bold text-amber-500 uppercase">黃昏隊長 :</span> 對團隊有諸多貢獻之核心成員，具備分隊管理權限，並獲贈最高階機庫禮物獎勵。
                </p>
              </div>
            </section>

            {/* 戰隊標語 */}
            <section className="border border-amber-500/20 bg-slate-950/40 relative overflow-hidden flex items-center justify-center py-3 px-4">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #f59e0b 0, #f59e0b 6px, transparent 6px, transparent 14px)' }}></div>
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-500/60"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber-500/60"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-amber-500/60"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-amber-500/60"></div>

              <div className="flex items-center gap-3 relative z-10">
                <div className="h-[1px] w-8 bg-amber-500/50"></div>
                <Crosshair size={14} className="text-amber-500/70 flex-shrink-0" />
                <div className="flex items-center gap-2 font-black italic uppercase tracking-wider text-slate-100 text-[15px] whitespace-nowrap">
                  <span>Speed</span>
                  <span className="text-amber-500">,</span>
                  <span>Surprise</span>
                  <span className="text-amber-500">&</span>
                  <span>Violence of Action</span>
                </div>
                <Crosshair size={14} className="text-amber-500/70 flex-shrink-0" />
                <div className="h-[1px] w-8 bg-amber-500/50"></div>
              </div>
            </section>
          </div>

          {/* COL 4: INTEL & COMM-LINK */}
          <div className="lg:col-span-1 space-y-6 relative z-30 flex flex-col">
            <section className="border border-slate-800 p-4 bg-slate-950/60 flex flex-col relative">
              <div className="absolute top-0 right-0 p-2 opacity-10"><Radio size={40} /></div>
              <h3 className="text-base font-bold text-slate-500 mb-4 flex items-center gap-2">
                <Terminal size={14} /> INTEL / FAQ
              </h3>
              
              <div className="space-y-3 pr-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-slate-800/50 pb-2 last:border-0 group">
                    <div className="text-[14px] text-amber-500/80 font-bold mb-0.5 italic group-hover:text-amber-500 transition-colors tracking-tighter">
                      Q: {faq.q}
                    </div>
                    <div className="text-[14px] text-slate-500 leading-tight">
                      A: {faq.a}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 整合式戰術 QR CODE 區塊 */}
              <div className="mt-4 pt-4 border-t border-slate-800/60 bg-slate-900/30 -mx-4 -mb-4 p-4 rounded-b-sm">
                <div className="text-[12px] text-slate-600 font-mono mb-3 uppercase tracking-widest text-center flex items-center justify-center gap-2">
                  <Scan size={10} /> 通訊頻道已建立 // COMM-LINK SCAN
                </div>
                
                {/* 桌面：QR Code */}
                <div className="hidden lg:flex justify-center items-center group cursor-crosshair">
                   <div className="relative p-1 border border-amber-500/30 bg-black/60 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500/60"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500/60"></div>

                      <div className="bg-amber-500 p-0.5 rounded-sm">
                        <img
                          src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://discord.gg/CfXpr84CSN&color=020617&bgcolor=f59e0b"
                          alt="Discord QR Link"
                          className="w-24 h-24 md:w-32 md:h-32 opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                   </div>
                </div>

                {/* 手機/平板：點擊按鈕 */}
                <a
                  href="https://discord.gg/CfXpr84CSN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:hidden relative flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-black italic uppercase tracking-widest text-[14px] py-3 px-4 border-2 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-[0.98] transition-all group"
                >
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black/40"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black/40"></span>
                  <Radio size={16} className="group-hover:animate-pulse" />
                  <span>Deploy // 加入 Discord</span>
                </a>

                <div className="mt-3 text-[12px] font-mono text-slate-600 text-center italic tracking-[0.2em] font-bold">
                  JOIN NOW: DISCORD.GG/CFXPR84CSN
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-3 flex items-center gap-4 opacity-30 relative z-30 flex-shrink-0">
          <div className="flex-1 h-[1px] bg-slate-800"></div>
          <div className="text-[12px] font-mono text-slate-500 tracking-[0.3em] uppercase">
            Encryption Status: SECURE // Vesper.Sys // VER 3.3
          </div>
          <div className="flex-1 h-[1px] bg-slate-800"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
        body { background-color: #020617; }
        @media (min-width: 1600px) { .poster-scale { zoom: 1.08; } }
        @media (min-width: 1920px) { .poster-scale { zoom: 1.12; } }
        @media (min-width: 2400px) { .poster-scale { zoom: 1.20; } }
        @media (min-width: 2880px) { .poster-scale { zoom: 1.30; } }
      `}} />
    </div>
  );
};

export default App;