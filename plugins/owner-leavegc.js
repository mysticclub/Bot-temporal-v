
let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `🚩 *𝐆𝐚𝐧𝐠 𝟑𝟑𝟑 𝐛𝐨𝐭 𝑶𝒇𝒊𝒄𝒊𝒂𝒍* Abandona El Grupo, Fué Genial Estar Aquí 👋`) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
handler.command = /^(salir|leavegc|salirdelgrupo|leave)$/i
handler.group = true
handler.prems = true
export default handler
