import { Configuration, OpenAIApi } from 'openai'

export default async function createImage (req, res) {
    //console.log(req.query.query)
    const prompt = req.query.query
    console.log(prompt)
    const configuration = new Configuration({
        apiKey: '',
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

        //console.log(imageUrl)
        res.status(200).json({
            success: true,
            data: imageUrl,
        });
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
            } else {
                console.log(error.message);
            }
        }

        res.status(400).json({
            success: false,
            error: 'The image could not be generated ',
        });
    console.log(imageUrl)
    return imageUrl
    
};