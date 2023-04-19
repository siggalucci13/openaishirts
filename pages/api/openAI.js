import { Configuration, OpenAIApi } from 'openai'

export default async function createImage (req, res) {
    //console.log(req.query.query)
    const prompt = req.query.query
    console.log(prompt)
    const configuration = new Configuration({
        apiKey: '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',
      });
    const openai = new OpenAIApi(configuration);
    //console.log(openai)
    try {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: '256x256',
        });
        //console.log(response)
        const imageUrl = response.data.data[0].url;

        console.log(imageUrl)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end([JSON.stringify(imageUrl)]);
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
            } else {
                console.log(error.message);
            }
        }

    
};