
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp) => { 
	return `                 
┏━━❉ *Abour User* ❉━━━┓
┣⊱ *nama* : ${pushname}
┣⊱ *nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *level* : ${getLevelingLevel(sender)}
┗━━━━━━━━━━━━━━━━

┏━━❉ *LEVEL 0* ❉━━┓
┣⊱ *${prefix}sticker* <Foto/Video>
┣⊱ *${prefix}tts*
┣⊱ *${prefix}toimg* <sticker To Images>
┣━━❉ *LEVEL 2* ❉━━
┣⊱ *${prefix}ocr*
┣⊱ *${prefix}quotemaker*
┣⊱ *${prefix}tiktokstalk* <username>
┣⊱ *${prefix}fototiktok*
┣⊱ *${prefix}truth*
┣⊱ *${prefix}dare*
┣⊱ *${prefix}ytmp4* <link>
┣━━❉ *LEVEL 4* ❉━━
┣⊱ *${prefix}text3d*
┣⊱ *${prefix}bucin*
┣⊱ *${prefix}hilih*
┣⊱ *${prefix}persengay*
┣⊱ *${prefix}ssweb*
┣━━❉ *LEVEL 6* ❉━━
┣⊱ *${prefix}artinama* <kazoema>
┣⊱ *${prefix}spamcall* <083818003060>
┣⊱ *${prefix}quotes*
┣⊱ *${prefix}kbbi*
┣⊱ *${prefix}map* <bogor>
┣⊱ *${prefix}cerpen*
┣━━❉ *LEVEL 8* ❉━━
┣⊱ *${prefix}chord*
┣⊱ *${prefix}lirik* <judul>
┣⊱ *${prefix}phlogo*
┣━━❉ *LEVEL 9* ❉━━
┣⊱ *${prefix}bisakah*
┣⊱ *${prefix}apakah*
┣⊱ *${prefix}kapankah*
┣⊱ *${prefix}rate*
┗━━━━━━━━━━━━━━

┏━━❉ *Nsfw* ❉━━━━┓
┣⊱ *${prefix}waifu*
┣⊱ *${prefix}anime*
┣⊱ *${prefix}neko*
┣⊱ *${prefix}dewabatch*
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}indohot*
┗━━━━━━━━━━━━━━

┏━━❉ *Group* ❉━━━━┓
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add*
┣⊱ *${prefix}kick* <tag member>
┣⊱ *${prefix}setname*
┣⊱ *${prefix}setdesc*
┣⊱ *${prefix}demote*
┣⊱ *${prefix}promote*
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}infogc*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━❉ *Owner* ❉━━
┣⊱ *${prefix}owner*
┣⊱ *${prefix}donasi*
┣⊱ *${prefix}info*
┣⊱ *${prefix}bc*
┣⊱ *${prefix}setprefix*
┣⊱ *${prefix}getses*
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block*
┣⊱ *${prefix}unblock*
┣⊱ *${prefix}leave*
┣⊱ *${prefix}clone*
┗━━━━━━━━━━━━━━━━


`
}
exports.help = help



  
