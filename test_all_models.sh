#!/bin/bash

API_URL="https://shadsai1api.shadobsh.workers.dev/v1/chat/completions"
API_KEY="sk-dummy"

models=(
    "gemini-3-flash-preview"
    "gemini-3-pro-preview"
    "gemini-2.5-pro"
    "gemini-2.5-flash-preview-09-2025"
    "gemini-2.5-flash-lite-preview-09-2025"
    "gemini-2.5-flash-native-audio-preview-12-2025"
    "gemma-3-27b-it"
)

echo "=== TEST DE COMPATIBILITÉ DES MODÈLES (via Cloudflare) ==="
echo "URL : $API_URL"
echo "--------------------------------------------------------"

for model in "${models[@]}"; do
    echo -n "Test du modèle [$model]... "

    # On fait une requête courte non-streamée pour la lisibilité du test
    response=$(curl -s -X POST "$API_URL" \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $API_KEY" \
        -d "{
          \"model\": \"$model\",
          \"messages\": [{\"role\": \"user\", \"content\": \"Dit OK\"}],
          \"max_tokens\": 10,
          \"stream\": false
        }")

    # Vérification si la réponse contient du texte (succès OpenAI format)
    if echo "$response" | grep -q "choices"; then
        content=$(echo "$response" | sed -n 's/.*"content":"\([^"]*\)".*/\1/p')
        echo "✅ SUCCÈS : Réponse -> \"$content\""
    else
        error=$(echo "$response" | sed -n 's/.*"message":"\([^"]*\)".*/\1/p')
        if [ -z "$error" ]; then error="Erreur inconnue ou modèle non supporté"; fi
        echo "❌ ÉCHEC : $error"
    fi
done

echo "--------------------------------------------------------"
echo "Tests terminés."
