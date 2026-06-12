// ============================================================
// research.js — Research タブのコンテンツ
// 概念セクション + 研究テーマ一覧
// ============================================================

// ------------------------------------------------------------
// concept — ページ冒頭の概念説明（固有名詞なし）
// ------------------------------------------------------------
export const researchConcept = {
  heading: {
    ja: "動画から、人の行動を理解する",
    en: "Understanding Human Behavior from Video",
  },
  body: {
    ja: "人は環境を知覚し、内部状態を持ち、意思決定し、行動する。この一連のプロセスは、アクションラベルだけでは表現しきれない。本研究は、動画から人の行動の潜在的な表現を直接学習し、認識・予測・シミュレーション・言語との接続まで、一つの表現で支えることを目指す。さらに、個人の行動理解を基礎として、複数人が協調して生み出すチームの動きへと視野を広げ、人の行動を個人からチームまで統一的にモデル化することを長期的な目標とする。",
    en: "Humans perceive environments, maintain internal states, make decisions, and generate actions. This process cannot be fully captured by action labels alone. This research aims to learn latent representations of human behavior directly from video — representations that can simultaneously support recognition, prediction, simulation, and language grounding. Building on individual behavior understanding, we extend to team-level coordination, with the long-term goal of modeling human behavior in a unified framework from individuals to groups.",
  },
};

// ------------------------------------------------------------
// themes — 各研究テーマ（Experience カードと同じ構造で並べる）
// ------------------------------------------------------------
export const researchThemes = [
  {
    level: {
      ja: "個人",
      en: "Individual",
    },
    title: {
      ja: "行動の基盤表現モデル",
      en: "Foundation Model for Human Behavior",
    },
    overview: {
      ja: "動画から人の行動の潜在表現を学習し、行動分類・状態推定・未来予測・シミュレーション・検索・言語接地を単一の表現から統一的に支えることを目指す。言語は行動表現の一つのデコーダとして扱い、表現そのものとは区別する。",
      en: "We aim to learn latent representations of human behavior from video that can simultaneously support action classification, state estimation, future prediction, simulation, retrieval, and language grounding. Language is treated as one decoder of behavior — distinct from the representation itself.",
    },
    questions: [
      {
        label: "RQ1",
        text: {
          ja: "行動分類・状態推定・未来予測を同時に支える潜在表現は存在するか",
          en: "Does a latent representation exist that simultaneously supports action classification, state estimation, and future prediction?",
        },
      },
      {
        label: "RQ2",
        text: {
          ja: "言語では表現できない行動情報を潜在表現に含めることができるか",
          en: "Can latent representations contain behavioral information beyond what natural language can express?",
        },
      },
      {
        label: "RQ3",
        text: {
          ja: "観測された行動を説明する潜在状態を、動画から直接学習できるか",
          en: "Can latent behavioral states that explain observed actions be learned directly from video?",
        },
      },
      {
        label: "RQ4",
        text: {
          ja: "学習した表現をシミュレーションや反実仮想推論に活用できるか",
          en: "Can learned representations be used for simulation and counterfactual reasoning?",
        },
      },
      {
        label: "RQ5",
        text: {
          ja: "行動表現はスポーツ・日常動作・産業現場などドメインをまたいで転移可能か",
          en: "Can behavioral representations transfer across domains such as sports, daily activities, and industrial settings?",
        },
      },
    ],
    tags: ["Video Understanding", "Representation Learning", "Action Recognition", "State Estimation", "Future Prediction", "Simulation"],
  },
  {
    level: {
      ja: "チーム",
      en: "Team",
    },
    title: {
      ja: "複数人の協調行動モデル",
      en: "Multi-Agent Coordination Model",
    },
    overview: {
      ja: "チームスポーツにおける協調は、中央集権的な指示ではなく、各選手が自分の役割を理解しながら他者を観察することで生まれる。本研究では、ポジションに特化した複数の言語モデルエージェントが互いを観察しながら、チーム連携プレーを生成・言語記述するフレームワークを提案する。既存のグループ活動認識（GAR）研究が分類にとどまるのに対し、チーム行動の「生成と言語化」という新タスクを定義する。",
      en: "Team coordination in sports emerges not from central commands, but from each player observing teammates while understanding their own role. We propose a framework in which multiple position-specialized language model agents observe each other and generate natural language descriptions of team coordination plays. Unlike existing Group Activity Recognition (GAR) research that focuses on classification, we define a new task of team behavior generation and verbalization.",
    },
    questions: [
      {
        label: "RQ1",
        text: {
          ja: "役割に特化したエージェントの協調は、汎用単一モデルより優れた戦術理解を生むか",
          en: "Does coordination among role-specialized agents produce better tactical understanding than a single general model?",
        },
      },
      {
        label: "RQ2",
        text: {
          ja: "分散型の他者観察機構は、中央集権型の協調よりも解釈可能で効果的か",
          en: "Is a decentralized agent-observation mechanism more interpretable and effective than centralized coordination?",
        },
      },
      {
        label: "RQ3",
        text: {
          ja: "チーム連携プレーを自然言語で生成・記述できるか",
          en: "Can team coordination plays be generated and described in natural language?",
        },
      },
      {
        label: "RQ4",
        text: {
          ja: "バスケットボールで学習した協調モデルはサッカーなど他競技に転移可能か",
          en: "Can coordination models learned from basketball transfer to other sports such as soccer?",
        },
      },
    ],
    tags: ["Multi-Agent Learning", "Team Coordination", "Sports Video", "Language Generation", "Interpretability"],
  },
];
