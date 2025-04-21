let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, '🌠 ¿Qué comando quieres sugerir?', m)
    if (text.length < 5) return conn.reply(m.chat, '🌠 La sugerencia debe ser más de 5 caracteres.', m)
    if (text.length > 1000) return conn.reply(m.chat, '🌠 Máximo de la sugerencia es de 1000 caracteres.', m)

    const teks = `🌠 Sugerencia de nuevo comando del usuario *${m.sender}*

🛡️ Han sugerido un comando:
> ${text}`

    const creatorsChatId = "50768961657"; 
    await conn.reply(channelChatId, m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })
    await conn.reply(creatorsChatId, teks, m, { mentions: conn.parseMention(teks) })

    m.reply('🌠 La sugerencia se envió al Staff De 𝐆𝐚𝐧𝐠 𝟑𝟑𝟑 𝐛𝐨𝐭 𝑶𝒇𝒊𝒄𝒊𝒂𝒍 y a los creadores.')
}
handler.help = ['sugerencia2']
handler.tags = ['owner']
handler.command = ['estoparaque']
handler.group = true;

export default handler
