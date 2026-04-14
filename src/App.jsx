import React, { useState } from 'react';
import { 
  Shield, 
  Target, 
  Crosshair, 
  Trophy, 
  Info, 
  MessageSquare, 
  Users, 
  MapPin, 
  Zap, 
  Skull, 
  Terminal, 
  Activity, 
  Layers, 
  Star,
  TrendingUp,
  Radar,
  Radio,
  Scan,
  Compass,
  Cpu,
  ChevronRight,
  Focus
} from 'lucide-react';
import VesperSquadLogo from './assets/vesper_squad_logo.png';
import DuskbladeSoldier from './assets/character.png';

const App = () => {
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
    { tier: "王牌戰鬥考核", items: ["戰壕頭(黑/橙)", "Downburst 套服", "套服機庫禮物(黃昏隊長)"], color: "border-amber-500/40 bg-amber-500/5" }
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
    <div className="min-h-screen bg-[#020617] text-slate-200 p-2 md:p-6 font-sans selection:bg-amber-500 selection:text-black relative overflow-hidden">
      
      {/* 背景環境效果 */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,1)_0%,rgba(2,6,23,1)_100%)] z-[-1]"></div>

      <div className="max-w-7xl mx-auto relative border border-slate-800 bg-slate-900/40 backdrop-blur-md p-4 md:p-8 rounded-sm shadow-2xl z-20">
        
        {/* Logo 浮水印 */}
        <div className="absolute bottom-12 right-12 pointer-events-none z-10 opacity-[0.08] grayscale mix-blend-screen">
          <img 
            src={VesperSquadLogo} 
            alt="Logo Watermark" 
            className="w-28 md:w-40"
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>

        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-amber-500/40 pb-4 mb-6 gap-4 relative z-30">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="bg-amber-500 p-2 text-black font-black italic text-2xl skew-x-[-12deg] relative z-10 shadow-[0_0_15px_rgba(245,158,11,0.5)]">D.B</div>
              <div className="absolute -inset-1 bg-amber-500/20 blur-sm"></div>
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-widest text-white flex items-center gap-3">
                黃昏之刃 <span className="text-amber-500 italic text-xl font-bold">DUSKBLADE</span>
              </h1>
              <p className="text-[10px] font-mono text-slate-500 tracking-[0.4em] uppercase">Vesper Squad // FPS tactical strike unit // 菁英募集中</p>
            </div>
          </div>
          <div className="text-right font-mono text-[9px] text-slate-500 leading-tight space-y-1">
            <div className="flex items-center justify-end gap-2"><span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span> SYSTEM: ONLINE</div>
            <div className="text-amber-500/60 uppercase tracking-tighter italic text-[11px]">"我來、我見、我——招募！"</div>
          </div>
        </header>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-30">
          
          {/* COL 1: MISSION BRIEFING & EQUIPMENT PREVIEW */}
          <div className="lg:col-span-1 space-y-6 flex flex-col h-full">
            {/* 招募前言 - 已調整不撐滿 */}
            <section className="border border-slate-800 p-4 bg-slate-950/60 relative group">
              <div className="absolute top-0 left-0 w-4 h-[1px] bg-amber-500"></div>
              <div className="absolute top-0 left-0 w-[1px] h-4 bg-amber-500"></div>
              <h3 className="text-xs font-bold text-amber-500 mb-3 flex items-center gap-2">
                <Info size={14} /> 招募前言
              </h3>
              <p className="text-[11px] leading-relaxed text-slate-400">
                專注於 FPS 戰鬥場景的團隊合作與戰術配合。我們建立不僅是一個隊伍，而是一套高效的作戰體系。不論是地面肅清還是艦內登檢，我們在尋找渴望戰鬥的靈魂。
              </p>
            </section>

            {/* 小隊定位 - 已調整不撐滿 */}
            <section className="border border-slate-800 p-4 bg-slate-950/60">
              <h3 className="text-xs font-bold text-blue-400 mb-4 flex items-center gap-2">
                <Target size={14} /> 隊伍定位
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-500/5 p-2 border-l-2 border-blue-500/30">
                  <span className="text-[9px] text-blue-400 uppercase font-bold block mb-1 tracking-widest italic">Mission Role</span>
                  <p className="text-[10px] text-slate-300 leading-relaxed">
                    負責地點清除、佔領、搜索與控制等步兵作戰項目。處理轟炸後的控制、破門破壞及高價值撤離任務。
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {["戰術跳幫", "控制/清除", "地表壓制", "搜索與撤離"].map((role, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] text-slate-400 bg-slate-900/80 p-1.5 border border-slate-800/50">
                      <div className="w-1 h-1 bg-amber-500"></div> {role}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 左下角留白空間加入戰士裝備圖 */}
            <section className="flex-grow flex flex-col justify-end">
              <div className="relative border border-slate-800 bg-slate-950/80 p-1 overflow-hidden group">
                {/* 裝備掃描視覺效果 */}
                <div className="absolute top-2 left-2 z-20 bg-amber-500/80 text-black px-1.5 py-0.5 text-[8px] font-black italic tracking-tighter uppercase flex items-center gap-1">
                  <Focus size={10} /> Armor Preview
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-amber-500/20 z-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-amber-500/20 z-10"></div>
                
                {/* 戰士圖片 */}
                <img 
                  src={DuskbladeSoldier} 
                  alt="Duskblade Soldier" 
                  className="w-full h-auto grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                  onError={(e) => e.target.style.display = 'none'}
                />
                
                {/* 底部裝飾條 */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
              </div>
            </section>
          </div>

          {/* COL 2 & 3: OPS & REWARDS (CENTER) */}
          <div className="lg:col-span-2 space-y-6 flex flex-col h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
              {/* 戰術訓練 */}
              <section className="border border-slate-800 p-4 bg-slate-950/60 flex flex-col h-full relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] rotate-12"><Activity size={120} /></div>
                <h3 className="text-xs font-bold text-amber-500 mb-4 tracking-[0.2em] uppercase flex justify-between">
                  <span>Tactical Training</span>
                  <span className="text-slate-700">戰術訓練</span>
                </h3>
                <div className="space-y-4 flex-grow">
                  {trainings.map((t, i) => (
                    <div key={i} className="relative pl-4 border-l border-slate-800/50 hover:border-amber-500 transition-colors">
                      <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 bg-slate-800 border border-slate-600 rotate-45 group-hover:bg-amber-500"></div>
                      <h4 className="text-[11px] font-bold text-slate-200">{t.title}</h4>
                      <p className="text-[10px] text-slate-500 mt-1 leading-normal italic">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 作戰演練 */}
              <section className="border border-slate-800 p-4 bg-slate-950/60 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-5 scale-x-[-1]"><Radar size={60} /></div>
                <h3 className="text-xs font-bold text-blue-400 mb-4 tracking-[0.2em] uppercase flex justify-between">
                  <span>Op Environments</span>
                  <span className="text-slate-700">作戰演練</span>
                </h3>
                <div className="space-y-4 flex-grow">
                  <div className="space-y-2">
                    <span className="text-[9px] text-blue-400/60 block uppercase font-mono tracking-tighter border-b border-blue-400/20 pb-1">部署區域 // Locations</span>
                    <ul className="text-[10px] text-slate-300 space-y-1 font-medium leading-relaxed">
                      <li>• <b>船艦:</b> 伊德里斯、890、回收者、北極星、克拉克</li>
                      <li>• <b>地面:</b> 物流中心、OLP、Jump town、法羅中心、幽靈窪地</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[9px] text-blue-400/60 block uppercase font-mono tracking-tighter border-b border-blue-400/20 pb-1">作戰項目 // Tasks</span>
                    <ul className="text-[10px] text-slate-300 space-y-1 font-medium leading-relaxed">
                      <li>• <b>殲滅/控制:</b> 擊殺所有敵人並攻佔目標位置。</li>
                      <li>• <b>物資爭奪:</b> 搶奪或保護關鍵組件/載具並撤離。</li>
                      <li>• <b>救援控制:</b> 搜尋並完成 VIP 護送撤離。</li>
                    </ul>
                  </div>
                  <div className="mt-2 border-slate-800/50">
                    <span className="text-[9px] text-blue-400/60 block uppercase font-mono tracking-tighter border-b border-blue-400/20 pb-1 mb-2">戰區標記 // Zone Indicators</span>
                    <div className="flex flex-wrap gap-1.5 justify-start">
                      {missionAreas.map(area => (
                        <span key={area.name} className={`text-[9px] px-2 py-0.5 border font-mono transition-all duration-300 ${getTagStyle(area.level)}`}>
                          {area.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* 獎勵區塊 */}
            <section className="border border-slate-800 p-4 bg-slate-950/60 mt-6 flex-grow flex flex-col">
              <h3 className="text-xs font-bold text-slate-300 mb-4 flex items-center justify-between">
                <span className="tracking-widest italic font-black uppercase">Benefits & Tiers // 福利與考核</span>
                <TrendingUp size={14} className="text-amber-500 opacity-50" />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {rewards.map((r, i) => (
                  <div key={i} className={`p-3 border rounded-sm flex flex-col min-h-[110px] ${r.color}`}>
                    <div className="flex justify-between items-center mb-1.5 border-b border-white/5 pb-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-white">{r.tier}</span>
                      <Star size={10} className="text-amber-500" />
                    </div>
                    <ul className="text-[10px] space-y-1 text-slate-400 flex-grow">
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
                <div className="absolute left-14 top-[-3px] text-[7px] font-mono text-slate-700 tracking-widest uppercase">
                  End of Tier Definitions
                </div>
              </div>

              <div className="flex items-start gap-3 bg-amber-500/5 p-2 border border-amber-500/20">
                <div className="mt-0.5"><Shield size={12} className="text-amber-500" /></div>
                <p className="text-[9px] text-amber-200/70 leading-normal italic">
                  <span className="font-bold text-amber-500 uppercase">黃昏隊長 :</span> 對團隊有諸多貢獻之核心成員，具備分隊管理權限，並獲贈最高階機庫禮物獎勵。
                </p>
              </div>
            </section>
          </div>

          {/* COL 4: INTEL & COMM-LINK */}
          <div className="lg:col-span-1 space-y-6 relative z-30 flex flex-col h-full">
            <section className="border border-slate-800 p-4 bg-slate-950/60 flex flex-col h-full relative">
              <div className="absolute top-0 right-0 p-2 opacity-10"><Radio size={40} /></div>
              <h3 className="text-xs font-bold text-slate-500 mb-4 flex items-center gap-2">
                <Terminal size={14} /> INTEL / FAQ
              </h3>
              
              <div className="space-y-3 overflow-y-auto max-h-[510px] pr-2 custom-scrollbar flex-grow">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-slate-800/50 pb-2 last:border-0 group">
                    <div className="text-[10px] text-amber-500/80 font-bold mb-0.5 italic group-hover:text-amber-500 transition-colors tracking-tighter">
                      Q: {faq.q}
                    </div>
                    <div className="text-[10px] text-slate-500 leading-tight">
                      A: {faq.a}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 整合式戰術 QR CODE 區塊 */}
              <div className="mt-4 pt-4 border-t border-slate-800/60 bg-slate-900/30 -mx-4 -mb-4 p-4 rounded-b-sm">
                <div className="text-[9px] text-slate-600 font-mono mb-3 uppercase tracking-widest text-center flex items-center justify-center gap-2">
                  <Scan size={10} /> 通訊頻道已建立 // COMM-LINK SCAN
                </div>
                
                <div className="flex justify-center items-center group cursor-crosshair">
                   <div className="relative p-1 border border-amber-500/30 bg-black/60 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500/60"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500/60"></div>
                      
                      <div className="bg-amber-500 p-0.5 rounded-sm">
                        <img 
                          src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://discord.gg/CfXpr84CSN&color=020617&bgcolor=f59e0b" 
                          alt="Discord QR Link"
                          className="w-20 h-20 md:w-28 md:h-28 opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                   </div>
                </div>
                
                <div className="mt-3 text-[9px] font-mono text-slate-600 text-center italic tracking-[0.2em] font-bold">
                  JOIN NOW: DISCORD.GG/CFXPR84CSN
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-6 flex items-center gap-4 opacity-30 relative z-30">
          <div className="flex-1 h-[1px] bg-slate-800"></div>
          <div className="text-[8px] font-mono text-slate-500 tracking-[0.3em] uppercase">
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
      `}} />
    </div>
  );
};

export default App;