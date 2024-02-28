async function startTextToSpeech() {
    try {
        const inputText = document.getElementById('inputText').innerText;
        //const inputText = document.getElementById('inputText').value;

        if (!inputText) {
            console.error('Please enter text to convert to speech.');
            return;
        }

        // Replace "YourAzureSubscriptionKey" and "YourAzureServiceRegion" with your actual subscription key and service region
        const subscriptionKey = '6f35af1c8728439caebc1270aa069f2a';
        const serviceRegion = 'eastus';

        const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
        const synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);

        const result = await synthesizer.speakTextAsync(inputText);

        if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
            console.log('Text-to-speech successfully completed.');
            const audioPlayer = document.getElementById('audioPlayer');
            audioPlayer.src = URL.createObjectURL(result.audioData, { oneTimeOnly: true });
            audioPlayer.style.display = 'block';
        } else {
            console.error('Text-to-speech failed:', result.errorDetails);
        }
    } catch (error) {
        console.error('Error converting text to speech:', error);
    }
}

