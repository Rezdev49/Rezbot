const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
const moment = require('moment-timezone')
const fs = require('fs')
let Jimp = require('jimp')
let handler = async (m, { conn }) => {
	let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
	let img = 'https://telegra.ph/file/cf749e142eab82d102e27.jpg'
	let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
let thumb = await(await fetch(wibu)).buffer()
let ftoko = {
    key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + time,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
	let dares = [
`Hai kak ${conn.getName(m.sender)} 🍟\nSaya bot whatsapp yang di buat oleh ©Rezdev🐋,

┌──「 REZ - BOT 」
├ Aktif selama ${uptime}
├ Mode : ${global.opts['self'] ? 'Self' : 'publik'}
├ ${Object.keys(global.db.data.users).length} Pengguna
├ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} Chat Terbanned
├ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} Pengguna Terbanned
│===============

*Note tulisan miring atau tanda*
*</> Jangan ikut di ketik!!*
${readMore}
「 ❏ N E W  - F I T U R 」
•.toanime _reply image_ (Ⓛ)
•.ai _text_ (Ⓛ)


「 ❏ R P G - A B S E N 」
•.daily (Ⓛ)
•.gethadiah (Ⓛ)
•.hadiah (Ⓛ)
•.monthly (Ⓛ)
•.weekly (Ⓛ)


「 ❏ R P G - M E N U 」
•.adventure (Ⓛ)
•.pull <jumlah> (Ⓛ)
•.pullall (Ⓛ)
•.atm <jumlah> (Ⓛ)
•.atmall (Ⓛ)
•.bansos (Ⓛ)
•.berburu (Ⓛ)
•.berdagang *@tag* (Ⓛ)
•.berkebon (Ⓛ)
•.chop (Ⓛ)
•.chopig (Ⓛ)
•.craft (Ⓛ)
•.bank (Ⓛ)
•.dompet (Ⓛ)
•.dompet @user (Ⓛ)
•.Duel @tag (Ⓛ)
•.feed [pet type] (Ⓛ)
•.open <crate> (Ⓛ)
•.gaji (Ⓛ)
•.gajian (Ⓛ)
•.heal (Ⓛ)
•.inv (Ⓛ)
•.kolam (Ⓛ)
•.kerja (Ⓛ)
•.work (Ⓛ)
•.koboy (Ⓛ)
•.aquarium (Ⓛ)
•.tempatikan (Ⓛ)
•.aquariumikan (Ⓛ)
•.leaderboard [jumlah user] (Ⓛ)
•.eat <item> <jumlah> (Ⓛ)
•.makan (Ⓛ)
•.mancing (Ⓛ)
•.fishing (Ⓛ)
•.masak <masakan> <args> (Ⓛ)
•.cook <Cook> <args> (Ⓛ)
•.membunuh *@tag* (Ⓛ)
•.meracik [type] (Ⓛ)
•.merampok *@tag* (Ⓛ)
•.mulung (Ⓛ)
•.nabung <jumlah> (Ⓛ)
•.nambang (Ⓛ)
•.nebang (Ⓛ)
•.nguli (Ⓛ)
•.pasar <jual> <args> (Ⓛ)
•.pet (Ⓛ)
•.ramuan [pet type] (Ⓛ)
•.shop <sell|buy> <args> (Ⓛ)
•.shopfish <sell|buy> <args> (Ⓛ)
•.transfer (Ⓛ)
•.kerja (Ⓛ)
•.work (Ⓛ)


「 ❏ G A M E S - M E N U 」
•.asahotak (Ⓛ)
•.caklontong (Ⓛ)
•.casino <jumlah> (Ⓛ)
•.delttt (Ⓛ)
•.dungeon [nama room] (Ⓛ)
•.family100 (Ⓛ)
•.fighting (Ⓛ)
•.hunter (Ⓛ)
•.pancing <type> (Ⓛ)
•.judi <jumlah> (Ⓛ)
•.kuis (Ⓛ)
•.lengkapikalimat (Ⓛ)
•.math <mode> (Ⓛ)
•.shot <jumlah> (Ⓛ)
•.siapakahaku (Ⓛ)
•.suit (Ⓛ)
•.suitpvp @tag (Ⓛ)
•.susunkata (Ⓛ)
•.tebakangka <0-9> (Ⓛ)
•.tebakanime (Ⓛ)
•.tebakbendera (Ⓛ)
•.tebakgambar (Ⓛ)
•.tebakgame (Ⓛ)
•.tebakkata (Ⓛ)
•.tebakkimia (Ⓛ)
•.tebaklagu (Ⓛ)
•.tebaklirik (Ⓛ)
•.tebaklogo (Ⓛ)
•.tekateki (Ⓛ)
•.tictactoe [custom room name] (Ⓛ)
•.ttt [custom room name] (Ⓛ)


「 ❏ EXP & L I M I T 」
•.buy <jumlah limit> (Ⓛ)
•.buyall (Ⓛ)
•.cupon [@user] (Ⓛ)
•.bank (Ⓛ)
•.dompet (Ⓛ)
•.dompet @user (Ⓛ)
•.exp [@user] (Ⓛ)
•.levelup (Ⓛ)
•.limit [@user] (Ⓛ)
•.narik <jumlah> (Ⓛ)


「 ❏ C O N V E R T E R 」
•.attp <teks> (Ⓛ)
•.emojimix (Ⓛ)
•.getexif (Ⓛ)
•.semoji (Ⓛ)
•.smeme (Ⓛ)
•.stikertelegram <url> (Ⓛ)
•.stickercry (Ⓛ)
•.stickerhug (Ⓛ)
•.stickerkiss (Ⓛ)
•.stiker (caption|reply media) (Ⓛ)
•.stiker <url> (Ⓛ)
•.stikergif (caption|reply media) (Ⓛ)
•.stikergif <url> (Ⓛ)
•.stikerfilter (Ⓛ)
•.stikermaker (Ⓛ)
•.stikertelegram <url> (Ⓛ)
•.stickernobg (Ⓛ)
•.triggered (Ⓛ)
•.ttp <teks> (Ⓛ)
•.wanted (Ⓛ)
•.wm <packname>|<author> (Ⓛ)


「 ❏ M A I N - M E N U 」
•.afk [alasan] (Ⓛ)
•.ceksn (Ⓛ)
•.menfess <nomor|nama pengirim|pesan> (Ⓛ)
•.menfes <nomor|nama pengirim|pesan> (Ⓛ)
•.pay (Ⓛ)
•.menu (Ⓛ)
•.help (Ⓛ)
•.? (Ⓛ)
•.ref (Ⓛ)
•.daftar <nama>.<umur> (Ⓛ)
•.sewa (Ⓛ)
•.unreg <SERIAL NUMBER> (Ⓛ)


「 ❏ K E R A N G - M E N U 」
•.apakah <teks>? (Ⓛ)
•.howgay siapa? (Ⓛ)
•.howpintar siapa? (Ⓛ)
•.howcantik siapa? (Ⓛ)
•.howganteng siapa? (Ⓛ)
•.howgabut siapa? (Ⓛ)
•.howgila siapa? (Ⓛ)
•.howlesbi siapa? (Ⓛ)
•.howstress siapa? (Ⓛ)
•.howbucin siapa? (Ⓛ)
•.howjones siapa? (Ⓛ)
•.howsadboy siapa? (Ⓛ)
•.howgay siapa? (Ⓛ)
•.howpintar siapa? (Ⓛ)
•.howcantik siapa? (Ⓛ)
•.howganteng siapa? (Ⓛ)
•.howgabut siapa? (Ⓛ)
•.howgila siapa? (Ⓛ)
•.howlesbi siapa? (Ⓛ)
•.howstress siapa? (Ⓛ)
•.howbucin siapa? (Ⓛ)
•.howjones siapa? (Ⓛ)
•.howsadboy siapa? (Ⓛ)
•.kapan <text>? (Ⓛ)
•.kapankah <text>? (Ⓛ)
•.siapa <teks> (Ⓛ)
•.siapakah <teks> (Ⓛ)
•.wangy <pasangan> (Ⓛ)


「 ❏ Q U O T E S 」
•.quotesanime (Ⓛ)
•.bacot (Ⓛ)
•.bucin (Ⓛ)
•.galau (Ⓛ)
•.kata <opsi> (Ⓛ)
•.quotes (Ⓛ)


「 ❏ A D M I N - M E N U 」
•.demote <@user> (Ⓛ)
•.kick @user (Ⓛ)
•.promote <@user> (Ⓛ)


「 ❏ G R O U P - M E N U 」
•.add @user (Ⓛ)
•.enable <option> (Ⓛ)
•.disable <option> (Ⓛ)
•.cekexpired (Ⓛ)
•.infogrup (Ⓛ)
•.grouplist (Ⓛ)
•.grouptime <open/close> <number> (Ⓛ)
•.group *open / close* (Ⓛ)
•.kick @user (Ⓛ)
•.gc (Ⓛ)
•.group (Ⓛ)
•.link (Ⓛ)
•.listadmin (Ⓛ)
•.hidetag [teks] (Ⓛ)
•.readviewonce (Ⓛ)
•.revoke (Ⓛ)
•.setdeskgroup <text> (Ⓛ)
•.setppgroup (Ⓛ)
•.setwelcome <teks> (Ⓛ)
•.tagadmin (Ⓛ)
•.tagall <pesan> (Ⓛ)
•.tagme (Ⓛ)


「 ❏ I N T E R N E T 」
•.bkp (Ⓛ)
•.brainly <soal> (Ⓛ)
•.cecan (Ⓛ)
•.cerpen (Ⓛ)
•.cogan (Ⓛ)
•.darkjokes (Ⓛ)
•.get <url> (Ⓛ)
•.gimage <search> (Ⓛ)
•.githubstalk (Ⓛ)
•.google <search> (Ⓛ)
•.kbbi <kata> (Ⓛ)
•.lirik <teks> (Ⓛ)
•.peta <wilayah> (Ⓛ)
•.neko (Ⓛ)
•.pinterest <text> (Ⓛ)
•.playstore (Ⓛ)
•.puisi (Ⓛ)
•.ssweb (Ⓛ)
•.translate <lang> <teks> (Ⓛ)
•.waifu (Ⓛ)
•.wikipedia <text> (Ⓛ)
•.yts <pencarian> (Ⓛ)
•.ytsearch <pencarian> (Ⓛ)
•.ytstalk <username> (Ⓛ)


「 ❏ A N O N Y M O U S 」
•.start (Ⓛ)
•.skip (Ⓛ)
•.stop (Ⓛ)
•.next (Ⓛ)
•.sendkontak (Ⓛ)


「 ❏ D O W N L O A D E R 」
•.fb <url> (Ⓛ)
•.fb2 <url> (Ⓛ)
•.gitclone <url> (Ⓛ)
•.ig (Ⓛ)
•.igstory <username> (Ⓛ)
•.instagram (Ⓛ)
•.joox <judul> (Ⓛ)
•.lirplay (Ⓛ)
•.lirplay2 (Ⓛ)
•.mediafire <url> (Ⓛ)
•.play <pencarian> (Ⓛ)
•.play <pencarian> (Ⓛ)
•.play <pencarian> (Ⓛ)
•.sfile (Ⓛ)
•.soundcloud <url> (Ⓛ)
•.tiktok <url> (Ⓛ)
•.twitter <url> (Ⓛ)
•.yta (Ⓛ)
•.ytaudio (Ⓛ)
•.ytmp3 (Ⓛ)
•.ytmp3doc (Ⓛ)
•.yts <pencarian> (Ⓛ)
•.ytsearch <pencarian> (Ⓛ)
•.ytshorts <url> (Ⓛ)
•.ytv (Ⓛ)
•.ytvideo (Ⓛ)
•.ytmp4 (Ⓛ)
•.zippyshare <url> (Ⓛ)


「 ❏ B E R I T A 」
•.cnnnews (Ⓛ)
•.kompasnews (Ⓛ)
•.liputan6 (Ⓛ)
•.metronews (Ⓛ)
•.tribunnews (Ⓛ)


「 ❏ T O O L S - M E N U 」
•.asupan (Ⓛ)
•.calc <expression> (Ⓛ)
•.carigrup <pencarian> (Ⓛ)
•.cutvideo <menit>:<detik> <menit>:<detik> (Ⓛ)
•.del (Ⓛ)
•.delete (Ⓛ)
•.filter <opsi> (Ⓛ)
•.githubsearch <pencarian> (Ⓛ)
•.kalkulator <soal> (Ⓛ)
•.mycontact (Ⓛ)
•.ocr (Ⓛ)
•.totext (Ⓛ)
•.profile [@user] (Ⓛ)
•.qr <teks> (Ⓛ)
•.qrcode <teks> (Ⓛ)
•.readmore <teks>|<teks> (Ⓛ)
•.q (Ⓛ)
•.spamcall <nomor> (Ⓛ)
•.style <text> (Ⓛ)
•.tinyurl <link> (Ⓛ)
•.topdf <reply image> (Ⓛ)
•.totalfitur (Ⓛ)
•.tourl (Ⓛ)
•.tts <lang> <teks> (Ⓛ)
•.upload (caption|reply media) (Ⓛ)
•.wait (caption|reply image) (Ⓛ)
•.yts <pencarian> (Ⓛ)
•.ytsearch <pencarian> (Ⓛ)


「 ❏ F U N - M E N U 」
•.alay (Ⓛ)
•.artinama [name] (Ⓛ)
•.alay (Ⓛ)
•.dare (Ⓛ)
•.darkjokes (Ⓛ)
•.getname <@tag/reply> (Ⓛ)
•.halah <teks> (Ⓛ)
•.hilih <teks> (Ⓛ)
•.huluh <teks> (Ⓛ)
•.heleh <teks> (Ⓛ)
•.holoh <teks> (Ⓛ)
•.jadian (Ⓛ)
•.dare (Ⓛ)
•.namaninja <teks> (Ⓛ)
•.rate (Ⓛ)
•.reaction <reply> (Ⓛ)
•.taugasih (Ⓛ)
•.truth (Ⓛ)


「 ❏ D A T A - B O T 」
•.delcmd <teks> (Ⓛ)
•.infocmd <text> (Ⓛ)
•.listcmd (Ⓛ)
•.unlockcmd (Ⓛ)
•.lockcmd (Ⓛ)
•.setcmd <teks> (Ⓛ)


「 ❏ V O T I N G 」
•.cekvote (Ⓛ)
•.hapusvote (Ⓛ)
•.mulaivote [alasan] (Ⓛ)
•.upvote (Ⓛ)
•.devote (Ⓛ)


「 ❏ A B S E N 」
•.absen (Ⓛ)
•.cekabsen (Ⓛ)
•.hapusabsen (Ⓛ)
•.mulaiabsen [teks] (Ⓛ)


「 ❏ C A T A T A N 」
•.buatcatatan <title|isi> (Ⓛ)
•.hapuscatatan title (Ⓛ)
•.lihatcatatan <title> (Ⓛ)


「 ❏ P A C A R A N 」
•.cekpacar (Ⓛ)
•.ikhlasin (Ⓛ)
•.putus (Ⓛ)
•.tembak *@tag* (Ⓛ)
•.terima *@tag* (Ⓛ)
•.tolak *@tag* (Ⓛ)


「 ❏ I S L A M I 」
•.alquran <114> <1> (Ⓛ)
•.asmaulhusna [nomor] (Ⓛ)
•.hadis (Ⓛ)
•.kisahnabi <name> (Ⓛ)
•.jadwalsalat <kota> (Ⓛ)


「 ❏ D E V E L O P E R 」
•.prem *@tag|days* (Ⓛ)
•.banchat (Ⓛ)
•.ban *@tag|days* (Ⓛ)
•.bcloc <teks> (Ⓛ)
•.block <@user> (Ⓛ)
•.broadcast <teks> (Ⓛ)
•.bc <teks> (Ⓛ)
•.broadcastchats <teks> (Ⓛ)
•.bcchats <teks> (Ⓛ)
•.broadcastgroup <teks> (Ⓛ)
•.bcgc <teks> (Ⓛ)
•.debounce (Ⓛ)
•.unprem (Ⓛ)
•.enable <option> (Ⓛ)
•.disable <option> (Ⓛ)
•.delexpired (Ⓛ)
•.expired <hari> (Ⓛ)
•.getdatabase (Ⓛ)
•.getplugin <teks> (Ⓛ)
•.getsessi (Ⓛ)
•.joins <chat.whatsapp.com> <day> (Ⓛ)
•.cleartmp (Ⓛ)
•.resetlimit (Ⓛ)
•.reset (Ⓛ)
•.savefile <path> (Ⓛ)
•.sf <path> (Ⓛ)
•.setmenu <teks> (Ⓛ)
•.setmenubefore <teks> (Ⓛ)
•.setmenuheader <teks> (Ⓛ)
•.setmenubody <teks> (Ⓛ)
•.setmenufooter <teks> (Ⓛ)
•.setmenuafter <teks> (Ⓛ)
•.setppbot (Ⓛ)
•.simulate <event> [@mention] (Ⓛ)
•.otransfer (Ⓛ)
•.unbanchat (Ⓛ)
•.unban (Ⓛ)
•.unblock <@user> (Ⓛ)


「 ❏ E V A L - C O D E 」
•> 
•=> 


「 ❏ I N F O R M A S I 」
•.allprofile [@user] (Ⓛ)
•.listbanned (Ⓛ)
•.botstatus (Ⓛ)
•.infocovid <country> (Ⓛ)
•.infocuaca <city> (Ⓛ)
•.topcmd <anka?> (Ⓛ)
•.dashboard <anka?> (Ⓛ)
•.database (Ⓛ)
•.user (Ⓛ)
•.donasi (Ⓛ)
•.infogempa (Ⓛ)
•.listpremium (Ⓛ)
•.report <fitur> (Ⓛ)
•.sewabot (Ⓛ)
•.ping (Ⓛ)
•.speed (Ⓛ)
•.speedtest (Ⓛ)


「 ❏ A U D I O - M E N U 」
•.tomp3 (Ⓛ)
•.tovn (Ⓛ)
•.bass [vn] (Ⓛ)
•.blown [vn] (Ⓛ)
•.deep [vn] (Ⓛ)
•.earrape [vn] (Ⓛ)
•.fast [vn] (Ⓛ)
•.fat [vn] (Ⓛ)
•.nightcore [vn] (Ⓛ)
•.reverse [vn] (Ⓛ)
•.robot [vn] (Ⓛ)
•.slow [vn] (Ⓛ)
•.smooth [vn] (Ⓛ)
•.tupai [vn] (Ⓛ)
•.vibra [vn] (Ⓛ)


「 ❏ M A K E R - M E N U 」
•.tahta <teks> (Ⓛ)
•.lolice (Ⓛ)
•.nulis <teks> (Ⓛ)
•.togif (reply) (Ⓛ)
•.toimg (reply) (Ⓛ)
© Rezbot`
] // tambahin kata kata sendiri 
let der = dares[Math.floor(Math.random() * dares.length)]
	conn.sendFile(m.chat, img, 'dare.png', `*REZ BOT MENU*\n\n“${der}”`, ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: wm, body: date, sourceUrl: wm2, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.help = ['dare']
handler.tags = ['fun']
handler.command = /^(menu|help|bot)$/i
handler.limit = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari🐋"
  if (time >= 4) {
    res = "Selamat pagi🌥️"
  }
  if (time > 10) {
    res = "Selamat siang⛅"
  }
  if (time >= 15) {
    res = "Selamat sore🌆"
  }
  if (time >= 18) {
    res = "Selamat malam🌌"
  }
  return res
}