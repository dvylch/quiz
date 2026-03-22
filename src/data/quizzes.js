// Database di quiz con domande e risposte multiple
// NOTA: L'ordine delle domande sarà rimescolato casualmente all'inizio di ogni quiz
// L'ordine delle risposte sarà rimescolato casualmente per ogni domanda
export const quizzes = [
    {
        id: 1,
        title: "Evidenze, modelli e percezione del cambiamento climatico",
        questions: [
            {
                id: 1,
                question: "Quale fattore unisce ghiacciai, cambiamento climatico e pandemie?",
                correct: "Ecologico",
                options: ["Economico", "Ecocentrico"]
            },
            {
                id: 2,
                question: "Il concetto di 'Antropocene' è utilizzato in quale dei seguenti ambiti?",
                correct: "In ambito interdisciplinare, multidisciplinare",
                options: ["Nell’ambito delle scienze sociali", "In ambito geologico"]
            },
            {
                id: 3,
                question: "I fatti sociali totali sono:",
                correct: "Punto di interconnessione tra natura, società e tecnologia",
                options: ["Eventi totalizzanti sulla società"]
            },
            {
                id: 4,
                question: "Cosa si può dire sul bilancio energetico del pianeta Terra, in media?",
                correct: "Ai poli l'energia a onde lunghe emessa è maggiore della radiazione a onde corte assorbita",
                options: [
                    "All'equatore e ai poli l'energia solare assorbita e le onde emesse sono in equilibrio",
                    "Ai poli l'energia a onde lunghe emessa è uguale alla radiazione a onde corte assorbita"
                ]
            },
            {
                id: 5,
                question: "Il termine 'sentinella':",
                correct: "È stato derivato da un concetto di Frederic Keck",
                options: ["È una definizione di Marc Augè", "È una definizione di Frederic Keck"]
            },
            {
                id: 6,
                question: "Secondo il concetto occidentale, la natura:",
                correct: "È contrapposta alla cultura",
                options: ["È identificata nel non-umano"]
            },
            {
                id: 7,
                question: "Nella denominazione RCP 4.5 (Representative Concentration Pathways 4.5) a cosa corrisponde il valore 4.5?",
                correct: "Alla forzante radiativa antropica prevista nel 2100",
                options: [
                    "All'aumento di temperatura in gradi prevista dall'età preindustriale al 2100",
                    "Alla concentrazione di gas serra prevista nel 2100"
                ]
            },
            {
                id: 8,
                question: "Se avviene un evento idrologico di notevole intensità come è possibile verificarne la rarità?",
                correct: "Consultando le pubblicazioni del servizio idrogeologico e le serie storiche",
                options: ["Consultando il Copernicus Climate Data Store", "Chiedendo ai vecchi della zona"]
            },
            {
                id: 9,
                question: "Quale aspetto viene trattato dal modello delle 'razionalità multiple'?",
                correct: "Antropologico",
                options: ["Psicologico", "Economico"]
            },
            {
                id: 10,
                question: "Se una vestigia plurisecolare viene distrutta da un evento meteorologico questo evento può essere interpretato come:",
                correct: "Inadeguatezza delle tecnologie e delle infrastrutture (risposta incerta)",
                options: ["Un evento raro", "Un'evidenza del cambiamento climatico"]
            },
            {
                id: 11,
                question: "Il processo retroattivo dell'ice-albedo provoca:",
                correct: "Accelerazione del riscaldamento globale",
                options: ["Rallentamento del riscaldamento globale", "È ininfluente sul riscaldamento globale"]
            },
            {
                id: 12,
                question: "In Liguria si registrano piogge brevi ma intense, perchè?",
                correct: "Per via della vicinanza tra mare e montagne",
                options: ["Per via della sua curvatura", "Per via della sua esposizione a sud"]
            },
            {
                id: 13,
                question: "Da cosa è causato l’effetto serra?",
                correct: "Dalla radiazione terrestre a onde lunghe",
                options: ["Dalla radiazione solare a onde lunghe", "Dalla radiazione solare a onde corte"]
            },
            {
                id: 14,
                question: "Dove vengono applicate le parametrizzazioni?",
                correct: "Su griglia a scala con grandezze a scala fine",
                options: ["Su griglia a scala con grandezze medie", "Su griglia a scala con grandezze a scala grande"]
            },
            {
                id: 15,
                question: "Che relazione c’è tra i 12 mesi dell’anno e la popolazione di zanzare?",
                correct: "Correlazione",
                options: ["Trend"]
            },
            {
                id: 16,
                question: "Cosa caratterizza l’atteggiamento ottimista?",
                correct: "L’idea che la natura sia giusta ed inesauribile",
                options: [
                    "L’idea che la natura sia fragile ed incapace di resistere ai cambiamenti più catastrofici",
                    "Riconosce la gravità dei problemi ambientali ma ritiene che essi non possano essere risolti"
                ]
            }
        ]
    }
];

