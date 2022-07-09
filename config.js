//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = false //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6281291155341'] //ur owner number
global.ownername = "6281291155341"
global.ytname = "YT:https://youtube.com/channel/UCBYk6B1tkZ233ElCqImkC7Q" //ur yt chanel name
global.socialm = "Instagram: raffuri" //ur github or insta name
global.location = "Japan, Jakarta, Kyoto" //ur location

//bot bombdy
global.botname = "RyuuKayzen - ＭＤ" //ur bot name
global.websitex = "https://instagram/raffuri" //ur website
global.vidmenu = { url: 'https://a.uguu.se/eFNTvNt.mp4' } //gif and video menu
global.packname = "𝐑𝐢𝐬𝐦𝐚-ᴍᴅ᭄ Stickers\n\n\n\n\n\n\n🦄🦄🦄 "
global.author = "RyuuKayzen-ＭＤ"
global.themeemoji = "🥶"
global.reactmoji = "👺"
global.ownertag = ['6281291155341'] //ur owner tag
global.ownernummenu = ['628129155341'] //ur owner number in menu and all
global.watermark = "𝐑𝐢𝐬𝐦𝐚-ᴍᴅ᭄." //ur watermark
global.botscript = "Tanya owner👺☝️"
global.linkz1 = ""
global.linkz2 = ""

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Done✓',
    admin: 'This Fitur ini hanya dapat digunakan oleh Admin!',
    botAdmin: 'Bot harus menjadi bot terlebih dahulu!',
    owner: 'Fitur ini hanya dapat digunakan oleh Owner Bot',
    group: 'Fitir ini hanya dapat digunakan dalam Grup',
    private: 'Fitur ini hanya dapat digunakan dalam private chat!',
    bot: 'Fitur ini hanya dapat digunakan oleh Bot,
    wait: 'Loading process...',
    linkm: 'Dimana linknya?',
    error: 'Error!',
    ban: 'Kamu telah dibanned oleh owner, jika ingin unbanned, chat Owner',
    nsfw: 'Fitur nsfw tidak aktif, chat admin untuk mengaktifkannya',
    banChat: 'Bot telah diban dalam grup ini, chat owner untuk unban'
}
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
