const asReply = () => { return { quotedMessageId: message.id._serialized } }
const asMentionAll = () => { return { mentions: participants } }
const asReact = (reaction, msg) => msg.react(reaction)
const asCaption = (cap = BOT_SLOGAN) => { return { caption: cap || '' } }
const asViewOnce = () => { return { extra: { isViewOnce: true } } }
const asGif = () => { return { sendVideoAsGif: true } }
const asVoice = () => { return { sendAudioAsVoice: true } }
const mentionOwner = () => { return { mentions: mentionMembers(BOT_SUPPORTNUMBER) } }
const reply = async (msg, ...ext) => {
    try { return await msg.reply(msg, undefined, options(...ext)) }
    catch (err) { if (err.toString().match(/Evaluation failed: a/i)) return msg.react("⚓"); msg.react("❌") }
}

const sendMsg = async (msg, ...ext) => {
    try { return await client.sendMessage(from, msg, options(...ext)) }
    catch (err) { if (err.toString().match(/Evaluation failed: a/i)) return msg.react("⚓"); msg.react("❌") }
}

const sendMentions = async (msg, ...ext) => {
    let list = []; let users = []
    let mentions = msg.match(/\@\d{8,}/g)
    if (mentions) {
        for (const user of participants) { list.push(user.id.user) }
        for (const num of mentions) { list.includes(num.replace("@", "")) ? users.push(num.replace("@", "")) : msg = msg.replace(`${num}`, "") }
    }
    return await sendMsg(msg, { mentions: mentionMembers(...users) }, ...ext)
}

const sendLogs = async (msg, ...ext) => await client.sendMessage(BOT_GROUPLOGS, msg, options(...ext))


const quotedMsg = hasQuotedMsg ? await msg.getQuotedMessage() : false;
// Sempre que for usar essa função, coloquei await antes de chamar ela. Ex: await mediaType()
// Armazene em uma variável, para ficar mais legível: Ex: const media = await mediaType()

const { pushname, number, name } = contact;