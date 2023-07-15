export default function (ctx, next){

    if(!ctx.message) return next();

    const postText = ctx.message.text ?? ctx.message.caption;

    if(ctx.message && postText.includes(process.env.PHRASE_TO_FIND_AND_DELETE)) {
        ctx.deleteMessage(ctx.message.message_id);
    }
}
