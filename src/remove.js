export default function (ctx, next){
    if(ctx.message && ctx.message.text.includes(process.env.PHRASE_TO_FIND_AND_DELETE)) {
        ctx.deleteMessage(ctx.message.message_id);
    }
}
