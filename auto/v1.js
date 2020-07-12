/*
api를 사용하지 않는 자동학습 프로그램

{
  "room" : room,
  "sender" : sender,
  "time" : time,
  "raw" : msg,
  "type" : "사진 메시지 등",
  "data" : {
    "type" : "문장 형식",
    "time" : [""],
    "place" : [""],
    "person" : [""],
    "data" : {
      "단어1" : {
        "lang" : "언어",
        "kor" : "한국어 번역 결과",
        "valid" : "단어인지 확인 true or false",
        "type" : "주어 목적어 등",
        "content" : "내용",
        "meaning" : "뜻 -> 백과사전 파싱",
        "synonyms" : "동의어 -> 백과사전 파싱",
        "antonyms" : "반의어 -> 백과사전 파싱"
      }
    }
  }
}


같은 사람이 연속으로 보낸것은 같이 이어서 저장
*/

const scriptName = "auto reply";
var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "auto/v1.txt";

cCho = [ "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]
cJung = [ "ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ" ]
cJong = [ "", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ" ]
kor = "ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔㅁㄴㅇㄹㅎㅗㅓㅏㅣㅋㅌㅊㅍㅠㅜㅡ"

sep = han => {
return han.split("").map(str => {
cnt = str.length
if (str.match(/[ㄱ-ㅎ가-힣]/)) {
chars = []
var cCode
for (i = 0; i < cnt; i++) {
cCode = str.charCodeAt(i)
if (cCode < 0xAC00 || cCode > 0xD7A3) {
chars.push(str.charAt(i))
continue
}
cCode = str.charCodeAt(i) - 0xAC00
jong = cCode % 28
jung = ((cCode - jong) / 28) % 21
cho = (((cCode - jong) / 28) - jung) / 21
chars.push(cCho[cho], cJung[jung])
cJong[jong] && chars.push(cJong[jong])
}
return chars.join("")
}
return str
}).join("")
}

dis = (a, b) => {
a = a.split("").map(char => char.match(/[ㄱ-ㅎ가-힣]/) ? sep(char) : char).join("")
b = b.split("").map(char => char.match(/[ㄱ-ㅎ가-힣]/) ? sep(char) : char).join("")
if (!a.length) return b.length;
if (!b.length) return a.length;
l = Math.max(a.length, b.length)
matrix = [];
Array(b.length+1).fill().map((_, i) => matrix[i] = [i])
Array(a.length+1).fill().map((_, i) => matrix[0][i] = i)
Array(b.length).fill().map((_, i) => Array(a.length).fill().map((_, j) => matrix[i+1][j+1] = b.charAt(i) == a.charAt(j) ? matrix[i][j] : Math.min(matrix[i][j] + 1, Math.min(matrix[i+1][j] + 1, matrix[i][j+1] + 1))))
return ((100 - (matrix[b.length][a.length] / l * 100))|0)+"%"
}


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
}
