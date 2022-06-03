/*
   * Create By Dika Ardnt.
   * Recode By SkylarKaf
*/

const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

global.APIKeys = {
	'https://zenzapis.xyz': 'BagasPrdn',
}

// Other
global.owner = ['6289675134806']
global.premium = ['6289675134806']
global.botnma = 'Emilia - MD'
global.ownernma = 'Riyadh'
global.packname = '' 
global.author = '⫹⫺ Created By : Emilia - MD\n⫹⫺ Owner : Riyadh\n⫹⫺ Instagram : @bangreyy_54\n⫹⫺ Website : https://chat.whatsapp.com/Fs0c8M54Kj2CLEZx185yci'
global.sessionName = 'Web'
global.prefa = ['!','.','#']
global.sp = '>'
global.mess = {
    success: 'Success',
    admin: 'Fitur Ini Hanya Bisa Di Akses Oleh Admin Grub!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Hanya Bisa Digunakan Di Group!',
    private: 'Fitur Hanya Bisa Digunakan Private Chat!',
    bot: 'Fitur Khusus Bot',
    wait: 'Memproses Data....',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100000,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

global.gifmp4 = "https://uploader.caliph.my.id/file/yUnMtkqgmU.mp4",
global.menuimg = "https://uploader.caliph.my.id/file/mNV5rMkeoE.jpg"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
