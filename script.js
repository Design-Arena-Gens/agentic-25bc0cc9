/* Data: concise, structured rules for popular games */
const GAMES = [
  {
    id: "chess",
    name: "Chess",
    aliases: ["chess"],
    categories: ["board", "strategy", "2-player"],
    duration: "10?60 min",
    players: "2",
    objective: "Checkmate the opponent?s king.",
    setup: [
      "Place pieces on their standard starting squares.",
      "White moves first.",
    ],
    rules: [
      "Kings move 1 square any direction; queens any number any direction.",
      "Rooks: straight lines; bishops: diagonals; knights: L-shape (2+1, can jump).",
      "Pawns move forward 1 (optionally 2 on first move); capture diagonally forward.",
      "Special: castling (king+rook, no moving through check), en passant, pawn promotion.",
      "You must move out of check if possible; no illegal moves.",
    ],
    howToWin: [
      "Deliver checkmate (king in check with no legal escape).",
      "Draws: stalemate, repetition, 50-move rule, insufficient material.",
    ],
    tips: [
      "Control the center, develop pieces, castle early.",
      "Avoid moving the same piece repeatedly in the opening.",
    ],
  },
  {
    id: "checkers",
    name: "Checkers",
    aliases: ["draughts", "checkers"],
    categories: ["board", "2-player"],
    duration: "10?30 min",
    players: "2",
    objective: "Capture all opponent pieces or block them.",
    setup: [
      "Place 12 pieces each on dark squares of the first 3 rows.",
      "Moves are on dark squares only.",
    ],
    rules: [
      "Men move diagonally forward 1; capture by jumping forward.",
      "Multiple jumps allowed if available; captures may be mandatory (variant-dependent).",
      "Reach the far row to king; kings move/capture diagonally both directions.",
    ],
    howToWin: ["Eliminate or immobilize the opponent."],
    tips: ["Advance together, control center diagonals, set up double jumps."],
  },
  {
    id: "tictactoe",
    name: "Tic-Tac-Toe",
    aliases: ["tic tac toe", "noughts and crosses"],
    categories: ["paper", "abstract", "2-player"],
    duration: "1?3 min",
    players: "2",
    objective: "Place 3 in a row.",
    setup: ["3?3 grid; X starts."],
    rules: ["Alternate placing marks on empty squares.", "First to 3 in a row wins; otherwise draw."],
    howToWin: ["Fork or block forks; take center first if possible."],
    tips: ["Corner + center combinations create winning forks."],
  },
  {
    id: "uno",
    name: "UNO",
    aliases: ["uno"],
    categories: ["card", "party", "2?10 players"],
    duration: "10?20 min",
    players: "2?10",
    objective: "Be first to discard all your cards.",
    setup: [
      "Shuffle and deal 7 cards to each player.",
      "Flip top card to start discard pile; rest is draw pile.",
    ],
    rules: [
      "On your turn, play a card matching color or number/symbol, or a Wild.",
      "If you can?t play, draw 1; if playable, you may play it immediately (house rules vary).",
      "Specials: Skip, Reverse, Draw Two, Wild, Wild Draw Four (use when no other playable color/number).",
      "Say 'UNO' at 1 card; penalty if caught not saying it.",
    ],
    howToWin: ["Empty your hand first; optionally score by opponents? cards left."],
    tips: ["Hold wilds, track colors, force discards with Reverses/Skips."],
  },
  {
    id: "poker-holdem",
    name: "Poker ? Texas Hold?em",
    aliases: ["texas holdem", "holdem"],
    categories: ["card", "betting"],
    duration: "20?120 min",
    players: "2?10",
    objective: "Win chips by having the best hand or making others fold.",
    setup: [
      "Assign dealer; post blinds; deal 2 hole cards to each player.",
    ],
    rules: [
      "Betting rounds: Preflop (after hole cards), Flop (3), Turn (1), River (1).",
      "On your turn: fold, call, bet/raise. Table stakes only.",
      "Best 5-card hand from 7 cards (2 hole + 5 community).",
    ],
    howToWin: ["Show best hand at showdown or make everyone fold."],
    tips: ["Play position, avoid weak offsuit hands, size bets for value/pressure."],
  },
  {
    id: "rps",
    name: "Rock Paper Scissors",
    aliases: ["rock paper scissors", "roshambo"],
    categories: ["party", "2-player"],
    duration: "<1 min",
    players: "2",
    objective: "Win best of N throws.",
    setup: ["Count in sync and reveal choice."],
    rules: [
      "Rock beats Scissors; Scissors beat Paper; Paper beats Rock.",
      "Ties are replayed.",
    ],
    howToWin: ["Win more rounds than your opponent in the match."],
    tips: ["Randomize; watch for patterns; mix meta reads."],
  },
  {
    id: "sudoku",
    name: "Sudoku",
    aliases: ["sudoku"],
    categories: ["puzzle", "solo"],
    duration: "5?45 min",
    players: "1",
    objective: "Fill the grid so each row, column, and box has 1?9.",
    setup: ["Start from the given numbers (clues)."],
    rules: [
      "No repeats in any row, column, or 3?3 box.",
      "Use logic; guess only if necessary.",
    ],
    howToWin: ["Complete the grid with valid digits."],
    tips: ["Scan singles, use pencil marks, look for hidden/naked pairs."],
  },
  {
    id: "wordle",
    name: "Wordle",
    aliases: ["wordle"],
    categories: ["puzzle", "solo"],
    duration: "1?5 min",
    players: "1",
    objective: "Guess the 5-letter word in 6 tries.",
    setup: ["Start with any valid 5-letter word."],
    rules: [
      "Letters turn green (correct spot), yellow (exists elsewhere), gray (not in word).",
      "Use feedback to refine guesses.",
    ],
    howToWin: ["Find the hidden word within 6 guesses."],
    tips: ["Open with diverse letters; avoid repeating eliminated letters."],
  },
  {
    id: "monopoly",
    name: "Monopoly",
    aliases: ["monopoly"],
    categories: ["board", "family"],
    duration: "60?180 min",
    players: "2?6",
    objective: "Be the last player not bankrupt.",
    setup: [
      "Each player gets cash; place tokens on GO; shuffle cards.",
    ],
    rules: [
      "Roll 2 dice; move; resolve property, rent, chance/community chest, tax, jail.",
      "Buy unowned property or auction; collect sets to build houses/hotels for higher rent.",
      "Three doubles send you to jail; get out by dice, card, or paying.",
    ],
    howToWin: ["Bankrupt others by rent pressure and trades."],
    tips: ["Prioritize orange/light-blue; trade smart; manage cash for rents."],
  },
  {
    id: "scrabble",
    name: "Scrabble",
    aliases: ["scrabble"],
    categories: ["board", "word"],
    duration: "30?90 min",
    players: "2?4",
    objective: "Score the most points by forming words.",
    setup: ["Each draws 7 tiles."],
    rules: [
      "Place words crossword-style; use premium squares; replenish to 7 tiles.",
      "Exchange tiles instead of playing (loses turn).",
      "Bingo: use all 7 tiles for bonus points.",
    ],
    howToWin: ["Maximize word value; control premium squares; minimize opponent options."],
    tips: ["Learn 2?3 letter words; track tiles; aim for bingos."],
  },
];

const POPULAR_ORDER = [
  "chess",
  "uno",
  "poker-holdem",
  "tictactoe",
  "scrabble",
  "monopoly",
  "checkers",
  "wordle",
  "sudoku",
  "rps",
];

function $(sel){return document.querySelector(sel)}
function el(tag, cls){const e=document.createElement(tag); if(cls) e.className=cls; return e}

function normalize(s){return s.toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}

function searchGames(query){
  if(!query) return [];
  const q = normalize(query)
  const scored = GAMES.map(g=>{
    const hay = normalize([g.name, ...(g.aliases||[])].join(" "))
    let score = 0
    if (hay === q) score = 100
    else if (hay.includes(q)) score = 60
    else {
      const tokens = q.split(/\s+/)
      const hits = tokens.filter(t=>hay.includes(t)).length
      score = hits * 20
    }
    return { g, score }
  }).filter(x=>x.score>0)
  scored.sort((a,b)=>b.score-a.score)
  return scored.map(x=>x.g)
}

function renderPopular(){
  const root = $("#popular-list")
  root.innerHTML = ""
  POPULAR_ORDER.map(id=>GAMES.find(g=>g.id===id)).forEach(g=>{
    const chip = el("button","chip")
    chip.type = "button"
    chip.textContent = g.name
    chip.setAttribute("role","listitem")
    chip.addEventListener("click",()=>selectGame(g))
    root.appendChild(chip)
  })
}

function renderEmpty(){
  const results = $("#results")
  results.innerHTML = ""
  const card = el("div","card")
  const h3 = el("h3")
  h3.textContent = "Quick start"
  const p = el("p","empty")
  p.innerHTML = "Search for a game above or pick one of the popular games."
  card.appendChild(h3)
  card.appendChild(p)
  results.appendChild(card)
}

function renderGame(g){
  const results = $("#results")
  results.innerHTML = ""
  const card = el("div","card")

  const title = el("h3")
  title.textContent = `How to play ${g.name}`
  card.appendChild(title)

  const meta = el("div","meta")
  meta.appendChild(metaKV("Players", g.players))
  meta.appendChild(metaKV("Duration", g.duration))
  meta.appendChild(metaKV("Category", g.categories.join(", ")))
  card.appendChild(meta)

  card.appendChild(listSection("Objective", [g.objective]))
  card.appendChild(listSection("Setup", g.setup))
  card.appendChild(listSection("Rules", g.rules))
  card.appendChild(listSection("How to win", g.howToWin))
  card.appendChild(listSection("Tips", g.tips))

  results.appendChild(card)
}

function metaKV(k,v){
  const d = el("div","kv");
  const b = el("strong"); b.textContent = k; d.appendChild(b)
  const s = el("span"); s.textContent = v; d.appendChild(s)
  return d
}

function listSection(title, items){
  const wrap = el("div","section")
  const h4 = el("h4"); h4.textContent = title; wrap.appendChild(h4)
  const ul = el("ul"); items.forEach(t=>{const li = el("li"); li.textContent = t; ul.appendChild(li)})
  wrap.appendChild(ul)
  return wrap
}

function selectGame(g){
  const input = $("#search-input")
  input.value = g.name
  history.replaceState({}, "", `?q=${encodeURIComponent(g.name)}`)
  renderGame(g)
}

function handleSearchInput(){
  const q = $("#search-input").value.trim()
  if(!q){renderEmpty(); history.replaceState({},"", location.pathname); return}
  const results = searchGames(q)
  if(results.length){ renderGame(results[0]) }
  else {
    const card = el("div","card")
    const h3 = el("h3"); h3.textContent = `No exact guide found for "${q}"`;
    const p = el("p"); p.textContent = "Try another phrasing or a popular game below.";
    card.appendChild(h3); card.appendChild(p)
    const resultsRoot = $("#results"); resultsRoot.innerHTML = ""; resultsRoot.appendChild(card)
  }
}

function initFromQuery(){
  const params = new URLSearchParams(location.search)
  const q = params.get("q")
  if(q){
    $("#search-input").value = q
    const results = searchGames(q)
    if(results.length) renderGame(results[0])
    else renderEmpty()
  } else {
    renderEmpty()
  }
}

function copyLink(){
  const q = $("#search-input").value.trim()
  const target = q ? `${location.origin}${location.pathname}?q=${encodeURIComponent(q)}` : location.href
  navigator.clipboard.writeText(target).then(()=>{
    const btn = $("#copy-link-btn");
    const old = btn.textContent; btn.textContent = "Copied!"; btn.disabled = true
    setTimeout(()=>{btn.textContent = old; btn.disabled = false}, 1000)
  }).catch(()=>{
    // fallback
    prompt("Copy this link:", target)
  })
}

function pickRandom(){
  const g = GAMES[Math.floor(Math.random()*GAMES.length)]
  selectGame(g)
}

// Init
window.addEventListener("DOMContentLoaded",()=>{
  renderPopular()
  initFromQuery()
  $("#search-input").addEventListener("input", debounce(handleSearchInput, 120))
  $("#copy-link-btn").addEventListener("click", copyLink)
  $("#random-btn").addEventListener("click", pickRandom)
})

function debounce(fn, ms){
  let t
  return (...args)=>{ clearTimeout(t); t=setTimeout(()=>fn.apply(null,args), ms) }
}
