# 🤖 My AI Front (ShadsAI Edition)

<div align="center">

  <p>
    <strong>Interface de Chat IA haute performance, optimisée pour Gemini 2.5 Flash via Cloudflare</strong>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Tailwind-3.4-38BDB8?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind">
    <img src="https://img.shields.io/badge/API-OpenAI_Format-FF6600?style=flat-square&logo=openai&logoColor=white" alt="OpenAI Format">
  </p>

</div>

---

## 📖 Présentation

**My AI Front** est une version personnalisée et optimisée de All Model Chat, spécifiquement verrouillée pour fonctionner avec un modèle unique : **Gemini 2.5 Flash**.

Cette version a été restructurée pour communiquer directement avec un point d'accès **Cloudflare Worker** au format OpenAI, offrant une interface légère, rapide et sans configuration manuelle nécessaire pour l'utilisateur final.

---

## ✨ Caractéristiques Spéciales (Édition ShadsAI)

*   🧠 **Modèle Unique :** Verrouillage strict sur `gemini-2.5-flash` pour une expérience cohérente.
*   ⚡ **Architecture Cloudflare :** Requêtes acheminées via `shadsai1api.shadobsh.workers.dev`.
*   🔄 **Compatibilité OpenAI :** Moteur de chat réécrit pour utiliser le format `/v1/chat/completions`.
*   🖼️ **Support Multimodal :** Analyse d'images nativement intégrée via conversion Base64 automatique.
*   💭 **Reasoning (Pensées) :** Support du flux de réflexion du modèle (`reasoning_content`) affiché en temps réel.
*   🔐 **Zéro Configuration :** Clé API et Endpoint pré-configurés en dur pour un usage immédiat.

---

## 🚀 Démarrage Rapide

### 1. Installation
```bash
# Cloner le dépôt
git clone https://github.com/Bsh54/My-AI-Front-.git
cd My-AI-Front-/all-model-chat

# Installer les dépendances
npm install
```

### 2. Lancement
```bash
# Lancer le serveur de développement
npm run dev
```
Accédez ensuite à `http://localhost:5173` dans votre navigateur.

---

## 📁 Documentation Interne

Pour vous aider à personnaliser l'interface, plusieurs guides détaillés sont disponibles à la racine du dossier `all-model-chat` :

*   [PROJECT_GUIDE.md](./all-model-chat/PROJECT_GUIDE.md) : Vue d'ensemble pour débuter.
*   [VISUAL_CUSTOMIZATION_MASTER.md](./all-model-chat/VISUAL_CUSTOMIZATION_MASTER.md) : Guide ultime pour changer les couleurs et le style.
*   [UI_COMPONENT_MAP.md](./all-model-chat/UI_COMPONENT_MAP.md) : Carte visuelle pour trouver quel fichier modifie quel bouton.
*   [TECHNICAL_ARCHITECTURE.md](./all-model-chat/TECHNICAL_ARCHITECTURE.md) : Analyse du flux de données.

---

## 🛠️ Stack Technique

*   **Frontend :** React 18 + Vite
*   **Style :** Tailwind CSS + Lucide Icons
*   **Rendu :** React-Markdown + KaTeX (Maths) + Mermaid (Diagrammes)
*   **Persistance :** IndexedDB (via Dexie.js) pour l'historique local.
*   **Réseau :** Fetch API avec streaming SSE (Server-Sent Events).

---

<div align="center">
  <p>Propulsé par <strong>Gemini 2.5 Flash</strong> & <strong>ShadsAI Infrastructure</strong></p>
</div>
