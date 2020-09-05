var wordlist = ["a", "ability", "able", "about", "above", "accept", "according", "account", "across", "act", "action", "activity", "actually", "add", "address", "administration", "admit", "adult", "affect", "after", "again", "against", "age", "agency", "agent", "ago", "agree", "agreement", "ahead", "air", "all", "allow", "almost", "alone", "along", "already", "also", "although", "always", "American", "among", "amount", "analysis", "and", "animal", "another", "answer", "any", "anyone", "anything", "appear", "apply", "approach", "area", "argue", "arm", "around", "arrive", "art", "article", "artist", "as", "ask", "assume", "at", "attack", "attention", "attorney", "audience", "author", "authority", "available", "avoid", "away", "baby", "back", "bad", "bag", "ball", "bank", "bar", "base", "be", "beat", "beautiful", "because", "become", "bed", "before", "begin", "behavior", "behind", "believe", "benefit", "best", "better", "between", "beyond", "big", "bill", "billion", "bit", "black", "blood", "blue", "board", "body", "book", "born", "both", "box", "boy", "break", "bring", "brother", "budget", "build", "building", "business", "but", "buy", "by", "call", "camera", "campaign", "can", "cancer", "candidate", "capital", "car", "card", "care", "career", "carry", "case", "catch", "cause", "cell", "center", "central", "century", "certain", "certainly", "chair", "challenge", "chance", "change", "character", "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil", "claim", "class", "clear", "clearly", "close", "coach", "cold", "collection", "college", "color", "come", "commercial", "common", "community", "company", "computer", "concern", "condition", "conference", "Congress", "consider", "consumer", "contain", "continue", "control", "cost", "could", "country", "couple", "course", "court", "cover", "create", "crime", "cultural", "culture", "cup", "current", "customer", "cut", "dark", "data", "daughter", "day", "dead", "deal", "death", "debate", "decade", "decide", "decision", "deep", "defense", "degree", "Democrat", "democratic", "describe", "design", "despite", "detail", "determine", "develop", "development", "die", "difference", "different", "difficult", "dinner", "direction", "director", "discover", "discuss", "discussion", "disease", "do", "doctor", "dog", "door", "down", "draw", "dream", "drive", "drop", "drug", "during", "each", "early", "east", "easy", "eat", "economic", "economy", "edge", "education", "effect", "effort", "eight", "either", "election", "else", "employee", "end", "energy", "enjoy", "enough", "enter", "entire", "environment", "environmental", "especially", "establish", "even", "evening", "event", "ever", "every", "everybody", "everyone", "everything", "evidence", "exactly", "example", "executive", "exist", "expect", "experience", "expert", "explain", "eye", "face", "fact", "factor", "fail", "fall", "family", "far", "fast", "father", "fear", "federal", "feel", "feeling", "few", "field", "fight", "figure", "fill", "film", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire", "firm", "first", "fish", "five", "floor", "fly", "focus", "follow", "food", "foot", "for", "force", "foreign", "forget", "form", "former", "forward", "four", "free", "friend", "from", "front", "full", "fund", "future", "game", "garden", "gas", "general", "generation", "get", "girl", "give", "glass", "go", "goal", "good", "github", "government", "great", "green", "ground", "group", "grow", "growth", "guess", "gun", "guy", "hair", "half", "hand", "hang", "happen", "happy", "hard", "have", "he", "head", "health", "hear", "heart", "heat", "heavy", "help", "her", "here", "herself", "high", "him", "himself", "his", "history", "hit", "hold", "home", "hope", "hospital", "hot", "hotel", "hour", "house", "how", "however", "huge", "human", "hundred", "husband", "I", "idea", "identify", "if", "image", "imagine", "impact", "important", "improve", "in", "include", "including", "increase", "indeed", "indicate", "individual", "industry", "information", "inside", "instead", "institution", "interest", "interesting", "international", "interview", "into", "investment", "involve", "issue", "it", "item", "its", "itself", "job", "join", "just", "keep", "key", "kid", "kill", "kind", "kitchen", "know", "knowledge", "land", "language", "large", "last", "late", "later", "laugh", "law", "lawyer", "lay", "lead", "leader", "learn", "least", "leave", "left", "leg", "legal", "less", "let", "letter", "level", "lie", "life", "light", "like", "likely", "line", "list", "listen", "little", "live", "local", "long", "look", "lose", "loss", "lot", "love", "low", "machine", "magazine", "main", "maintain", "major", "majority", "make", "man", "manage", "management", "manager", "many", "market", "marriage", "material", "matter", "may", "maybe", "me", "mean", "measure", "media", "medical", "meet", "meeting", "member", "memory", "mention", "message", "method", "middle", "might", "military", "million", "mind", "minute", "miss", "mission", "model", "modern", "moment", "money", "month", "more", "morning", "most", "mother", "mouth", "move", "movement", "movie", "Mr", "Mrs", "much", "music", "must", "my", "myself", "name", "nation", "national", "natural", "nature", "near", "nearly", "necessary", "need", "network", "never", "new", "news", "newspaper", "next", "nice", "night", "no", "none", "nor", "north", "not", "note", "nothing", "notice", "now", "number", "occur", "of", "off", "offer", "office", "officer", "official", "often", "oh", "oil", "ok", "old", "on", "once", "one", "only", "onto", "open", "operation", "opportunity", "option", "or", "order", "organization", "other", "others", "our", "out", "outside", "over", "own", "owner", "page", "pain", "painting", "paper", "parent", "part", "participant", "particular", "particularly", "partner", "party", "pass", "past", "patient", "pattern", "pay", "peace", "people", "per", "perform", "performance", "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture", "piece", "place", "plan", "plant", "play", "player", "PM", "point", "police", "policy", "political", "politics", "poor", "popular", "population", "position", "positive", "possible", "power", "practice", "prepare", "present", "president", "pressure", "pretty", "prevent", "price", "private", "probably", "problem", "process", "produce", "product", "production", "professional", "professor", "program", "project", "property", "protect", "prove", "provide", "public", "pull", "purpose", "push", "put", "quality", "question", "quickl", "quite", "race", "radio", "raise", "range", "rate", "rather", "reach", "read", "ready", "real", "reality", "realize", "really", "reason", "receive", "recent", "recently", "recognize", "record", "red", "reduce", "reflect", "region", "relate", "relationship", "religious", "remain", "remember", "remove", "report", "represent", "Republican", "require", "research", "resource", "respond", "response", "responsibility", "rest", "result", "return", "reveal", "rich", "right", "rise", "risk", "road", "rock", "role", "room", "rule", "run", "safe", "same", "save", "say", "scene", "school", "science", "scientist", "score", "sea", "season", "seat", "second", "section", "security", "see", "seek", "seem", "sell", "send", "senior", "sense", "serie", "serious", "serve", "service", "set", "seven", "several", "shake", "share", "she", "shoot", "short", "shot", "should", "shoulder", "show", "side", "sign", "significant", "similar", "simple", "simply", "since", "sing", "single", "sister", "sit", "site", "situation", "six", "size", "skill", "skin", "small", "smile", "so", "social", "society", "soldier", "some", "somebody", "someone", "something", "sometimes", "son", "song", "soon", "sort", "sound", "source", "south", "southern", "space", "speak", "special", "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard", "star", "start", "state", "statement", "station", "stay", "step", "still", "stock", "stop", "store", "story", "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject", "success", "successful", "such", "suddenly", "suffer", "suggest", "summer", "support", "sure", "surface", "system", "table", "take", "talk", "task", "tax", "teach", "teacher", "team", "technology", "television", "tell", "ten", "tend", "term", "test", "than", "thank", "that", "the", "their", "them", "themselves", "then", "theory", "there", "these", "they", "thing", "think", "third", "this", "those", "though", "thought", "thousand", "threat", "three", "through", "throughout", "throw", "thus", "time", "to", "today", "together", "tonight", "too", "top", "total", "tough", "toward", "town", "trade", "traditional", "training", "travel", "treat", "treatment", "tree", "trial", "trip", "trouble", "true", "truth", "try", "turn", "TV", "two", "type", "under", "understand", "unit", "until", "up", "upon", "us", "use", "usually", "value", "various", "very", "victim", "view", "violence", "visit", "voice", "vote", "wait", "walk", "wall", "want", "war", "watch", "water", "way", "we", "weapon", "wear", "week", "weight", "well", "west", "western", "what", "whatever", "when", "where", "whether", "which", "while", "white", "who", "whole", "whom", "whose", "why", "wide", "wife", "will", "win", "wind", "windo", "wish", "with", "within", "without", "woman", "wonder", "word", "work", "worker", "world", "worry", "would", "write", "writer", "wrong", "yard", "yeah", "year", "yes", "yet", "you", "young", "your", "yourself", "yeeeeeeeeeee"];
//단어목록 배열
function lettering(sentence) {
	//단어를 글자화 (변수->배열)ex{hello->["h","e","l","l","o"]
	var letter = [];
	for (a = 0; a < sentence.length; a++) {
		letter.push(sentence[a].split(""));
	}
	return letter;
}
var word;
var wordletter;
var life;
var line = [];
var hotline;
var man = ["┌──┐\n│\n│\n│\n│\n│\n│\n│\n│\n┴─────", "┌──┐\n│ ┌┴┐\n│\n│\n│\n│\n│\n│\n│\n┴─────", "┌──┐\n│ ┌┴┐\n│ │ │\n│\n│\n│\n│\n│\n│\n┴─────", "┌──┐\n│ ┌┴┐\n│ │ │\n│ └┬┘\n│\n│\n│\n│\n│\n┴─────", "┌──┐\n│ ┌┴┐\n│ │ │\n│ └┬┘\n│ ┌┴┐\n│\n│\n│\n│\n┴─────", "┌──┐\n│ ┌┴┐\n│ │ │\n│ └┬┘\n│ ┌┴┐\n│ ├ ├\n│\n│\n│\n┴─────", "┌──┐\n│ ┌┴┐\n│ │ │\n│ └┬┘\n│ ┌┴┐\n│ ├ ├\n│ │ │\n│\n│\n┴─────", "┌──┐\n│ ┌┴┐\n│ │ │\n│ └┬┘\n│ ┌┴┐\n│ ├ ├\n│ │ │\n│ ├─┤\n│\n┴─────", "┌──┐\n│ ┌┴┐\n│ │ │\n│ └┬┘\n│ ┌┴┐\n│ ├ ├\n│ │ │\n│ ├─┤\n│ │ │\n┴─────"];
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
	msg = msg.trim();
	if (msg == prefix + "행맨") {
		line[room] = "";
		life[room] = 9;
		replier.reply("행맨 게임을 시작합니다.\n[" + prefix + "답]으로 풀수 있습니다.\n예)" + prefix + "a​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n" + "\u200b".repeat(500) + "madeby franknoh");
		word[room] = wordlist[Math.floor(Math.random() * wordlist.length)];
		if (hackon == true) {
			Api.showToast(word);
		}
		wordletter[room] = lettering(word[room]);
		for (a = 0; a < wordletter[room].length; a++) {
			line[room] = line[room] + "_";
		}
		replier.reply(man[0] + "\n" + line[room] + wordletter[room].length + "글자");
		hotline[room] = lettering(line[room]);
	} else if (msg.indexOf(prefix) != -1 && msg.split("").length == prefix.split("").length + 1) {
		if (word[room]) {
			if (word[room].indexOf(msg.split(prefix)[1]) != -1) {
				for (n = 0; n < word[room].length; n++) {
					if (msg.split(prefix)[1] == word[room][n]) {
						hotline[room][n] = word[room][n];
					}
				}
				line[room] = "";
				for (a = 0; a < hotline[room].length; a++) {
					line[room] = line[room] + hotline[room][a];
				}
				replier.reply(man[9 - life[room]] + "\n[행맨]\n남은 목숨:" + life[room] + "\n" + line[room]);
				if (line[room] == word[room]) {
					replier.reply("축하드립니다");
				}
			} else {
				life[room]--;
				if (life[room] == 0) {
					replier.reply("\n게임을 종료합니다.\n제시어는" + word[room] + "입니다.");
				} else {
					replier.reply(man[9 - life[room]] + "\n[행맨]\n남은 목숨:" + life[room] + "\n" + line[room]);
				}
			}
		}
		else {
			replier.reply(prefix + "행맨 으로 게임을 시작해주세요");
		}
	}
	if (msg == prefix + "핵맨") {
		if (word[room]) {
			replier.reply("단어 : " + word[room] + "\n현제 : " + line[room]);
		} else {
			replier.reply("진행중인 게임이 없습니다.");
		}
	}
	if (msg == prefix + "단어목록") {
		replier.reply("단어목록\n" + "\u200b".repeat(500) + wordlist.join("\n"));
	}
}
