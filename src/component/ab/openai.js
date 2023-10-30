const OpenAI=require("openai");
const openai=new OpenAI({
    apiKey:"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",
    dangerouslyAllowBrowser: true
});

export async function sendMsgToOpenAI(message){
    const res=await openai.completions.create({
        model:'text-davinci-003',
        prompt: message,
        temperature:0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        
    });
    return res.choices[0].text;
}