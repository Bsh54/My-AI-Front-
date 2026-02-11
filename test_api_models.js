const API_URL = "https://shadsai1api.shadobsh.workers.dev/v1/chat/completions";
const API_KEY = "sk-dummy";

const modelsToTest = [
    'gemini-3-flash-preview',
    'gemini-3-pro-preview',
    'gemini-2.5-pro',
    'gemini-2.5-flash-preview-09-2025',
    'gemini-2.5-flash-lite-preview-09-2025',
    'gemini-2.5-flash-native-audio-preview-12-2025',
    'gemma-3-27b-it'
];

async function testModel(modelId) {
    console.log(`\n[TEST] Essai du modèle: ${modelId}...`);
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: modelId,
                messages: [{ role: 'user', content: 'Dis "OK" si tu fonctionnes.' }],
                max_tokens: 10
            })
        });

        if (response.ok) {
            const data = await response.json();
            const content = data.choices?.[0]?.message?.content?.trim();
            console.log(`✅ SUCCÈS : Le modèle ${modelId} a répondu : "${content}"`);
            return true;
        } else {
            const errorText = await response.text();
            console.log(`❌ ÉCHEC : Le modèle ${modelId} a renvoyé une erreur (${response.status}) : ${errorText}`);
            return false;
        }
    } catch (error) {
        console.log(`❌ ERREUR : Impossible de contacter l'API pour ${modelId} : ${error.message}`);
        return false;
    }
}

async function runAllTests() {
    console.log("=== DÉBUT DES TESTS DE COMPATIBILITÉ SHADSAI ===");
    console.log(`URL cible : ${API_URL}`);

    let successCount = 0;
    for (const model of modelsToTest) {
        const result = await testModel(model);
        if (result) successCount++;
    }

    console.log("\n=== BILAN FINAL ===");
    console.log(`${successCount}/${modelsToTest.length} modèles fonctionnent via votre point d'accès.`);
    console.log("================================================");
}

runAllTests();
