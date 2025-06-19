// Base de dados dos devocionais
const DEVOCIONAIS = [
    {
        id: 1,
        titulo: "Confiança em Deus",
        versiculo: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
        referencia: "Provérbios 3:5",
        reflexao: "A confiança em Deus é fundamental para uma vida de paz e propósito. Quando confiamos no Senhor de todo o coração, reconhecemos que Sua sabedoria é superior à nossa e que Seus planos são sempre os melhores para nós. Não devemos nos apoiar apenas no nosso entendimento limitado, mas buscar a direção divina em todas as situações.",
        oracao: "Senhor, ajuda-me a confiar em Ti de todo o meu coração. Que eu não me apoie na minha própria sabedoria, mas busque sempre Tua vontade em minha vida. Dá-me discernimento para reconhecer Teus caminhos e coragem para segui-los. Amém.",
        data_criacao: "2024-01-01"
    },
    {
        id: 2,
        titulo: "Amor Incondicional",
        versiculo: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
        referencia: "João 3:16",
        reflexao: "O amor de Deus por nós é incomparável e incondicional. Ele não nos ama por causa do que fazemos ou deixamos de fazer, mas simplesmente porque somos Seus filhos. Este amor foi demonstrado da forma mais sublime através do sacrifício de Jesus Cristo na cruz. Quando compreendemos a profundidade deste amor, somos transformados e motivados a amar aos outros da mesma forma.",
        oracao: "Pai celestial, obrigado pelo Teu amor incondicional por mim. Ajuda-me a compreender cada vez mais a profundidade deste amor e a refletir este mesmo amor em meus relacionamentos. Que eu possa amar como Tu me amaste primeiro. Amém.",
        data_criacao: "2024-01-02"
    },
    {
        id: 3,
        titulo: "Força na Fraqueza",
        versiculo: "E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza.",
        referencia: "2 Coríntios 12:9",
        reflexao: "Muitas vezes tentamos ser fortes por nós mesmos, mas Deus nos ensina que é justamente em nossa fraqueza que Seu poder se manifesta de forma mais clara. Quando reconhecemos nossas limitações e dependemos completamente de Deus, Ele pode trabalhar através de nós de maneiras extraordinárias. Nossa fraqueza se torna uma oportunidade para Deus mostrar Sua força.",
        oracao: "Senhor, reconheço minhas fraquezas e limitações. Ajuda-me a não me envergonhar delas, mas a vê-las como oportunidades para Teu poder se manifestar em minha vida. Que Tua graça seja suficiente para mim em todos os momentos. Amém.",
        data_criacao: "2024-01-03"
    },
    {
        id: 4,
        titulo: "Paz em Meio à Tempestade",
        versiculo: "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.",
        referencia: "João 14:27",
        reflexao: "A paz que Jesus oferece é diferente de qualquer paz que o mundo pode dar. É uma paz que permanece mesmo em meio às dificuldades e tempestades da vida. Esta paz não depende das circunstâncias externas, mas vem de nossa confiança em Cristo e em Suas promessas. Quando nosso coração está ancorado nEle, podemos ter paz mesmo quando tudo ao nosso redor parece caótico.",
        oracao: "Jesus, obrigado pela paz que Tu ofereces. Ajuda-me a receber esta paz em meu coração e a não permitir que as circunstâncias da vida roubem a tranquilidade que vem de Ti. Que meu coração não se turbe nem se atemorize, pois Tu estás comigo. Amém.",
        data_criacao: "2024-01-04"
    },
    {
        id: 5,
        titulo: "Esperança que não Falha",
        versiculo: "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais.",
        referencia: "Jeremias 29:11",
        reflexao: "Deus tem planos específicos para cada um de nós, e estes planos são sempre para o nosso bem. Mesmo quando não conseguimos ver o futuro claramente ou quando passamos por momentos difíceis, podemos ter a certeza de que Deus está trabalhando todas as coisas para o nosso bem. Seus pensamentos para conosco são de paz, prosperidade e esperança.",
        oracao: "Senhor, obrigado por teres planos maravilhosos para minha vida. Ajuda-me a confiar em Teus planos mesmo quando não consigo entendê-los completamente. Dá-me paciência para esperar em Teu tempo e fé para crer que Teus planos são sempre os melhores. Amém.",
        data_criacao: "2024-01-05"
    },
    {
        id: 6,
        titulo: "Perdão e Restauração",
        versiculo: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.",
        referencia: "1 João 1:9",
        reflexao: "O perdão de Deus é completo e restaurador. Quando confessamos nossos pecados com sinceridade, Ele não apenas nos perdoa, mas também nos purifica completamente. Não há pecado grande demais que não possa ser perdoado, nem mancha que não possa ser limpa pelo sangue de Jesus. Este perdão nos dá uma nova oportunidade de recomeçar e viver em liberdade.",
        oracao: "Pai, obrigado pelo perdão que ofereces através de Jesus. Confesso meus pecados diante de Ti e recebo Teu perdão com gratidão. Ajuda-me também a perdoar aqueles que me ofenderam, assim como Tu me perdoaste. Purifica meu coração e renova meu espírito. Amém.",
        data_criacao: "2024-01-06"
    },
    {
        id: 7,
        titulo: "Sabedoria Divina",
        versiculo: "E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e sem repreensão; e ser-lhe-á dada.",
        referencia: "Tiago 1:5",
        reflexao: "Deus é a fonte de toda sabedoria verdadeira. Quando enfrentamos decisões difíceis ou situações complexas, podemos pedir sabedoria a Ele com confiança. Ele promete dar sabedoria liberalmente, sem nos repreender por pedirmos. Esta sabedoria divina nos capacita a tomar decisões corretas e a viver de acordo com Sua vontade.",
        oracao: "Senhor, reconheço que preciso de Tua sabedoria para navegar pela vida. Peço que me dês discernimento para tomar decisões corretas e sabedoria para entender Tua vontade. Que eu sempre busque Tua orientação antes de agir. Obrigado por prometeres dar sabedoria a todos que pedem. Amém.",
        data_criacao: "2024-01-07"
    },
    {
        id: 8,
        titulo: "Alegria no Senhor",
        versiculo: "Alegrai-vos sempre no Senhor; outra vez digo: alegrai-vos!",
        referencia: "Filipenses 4:4",
        reflexao: "A alegria cristã não depende das circunstâncias, mas tem sua fonte no Senhor. É uma alegria profunda que permanece mesmo em meio às dificuldades. Esta alegria vem do conhecimento de que somos amados por Deus, de que temos a vida eterna e de que Ele está sempre conosco. É uma alegria que pode ser cultivada através da gratidão e da comunhão com Deus.",
        oracao: "Senhor, ajuda-me a encontrar alegria em Ti em todas as circunstâncias. Que minha alegria não dependa das situações externas, mas seja fundamentada no Teu amor e nas Tuas promessas. Enche meu coração com Tua alegria e que ela seja um testemunho para outros. Amém.",
        data_criacao: "2024-01-08"
    },
    {
        id: 9,
        titulo: "Provisão Divina",
        versiculo: "E o meu Deus, segundo as suas riquezas, suprirá todas as vossas necessidades em glória, por Cristo Jesus.",
        referencia: "Filipenses 4:19",
        reflexao: "Deus conhece todas as nossas necessidades e promete supri-las de acordo com Suas riquezas em glória. Isso não significa que teremos tudo o que queremos, mas que Ele providenciará tudo o que realmente precisamos. Podemos confiar nEle para cuidar de nós, sabendo que Ele é um Pai amoroso que não deixará faltar nada essencial para Seus filhos.",
        oracao: "Pai provedor, obrigado por cuidares de todas as minhas necessidades. Ajuda-me a confiar em Tua provisão e a não me preocupar excessivamente com as necessidades materiais. Que eu busque primeiro Teu reino, sabendo que Tu adicionarás todas as outras coisas. Amém.",
        data_criacao: "2024-01-09"
    },
    {
        id: 10,
        titulo: "Crescimento Espiritual",
        versiculo: "Antes, crescei na graça e conhecimento de nosso Senhor e Salvador Jesus Cristo.",
        referencia: "2 Pedro 3:18",
        reflexao: "O crescimento espiritual é um processo contínuo na vida cristã. Somos chamados a crescer tanto na graça quanto no conhecimento de Jesus Cristo. Este crescimento acontece através da leitura da Palavra, oração, comunhão com outros cristãos e obediência aos ensinamentos de Cristo. É um crescimento que dura toda a vida e nos torna cada vez mais semelhantes a Jesus.",
        oracao: "Senhor Jesus, desejo crescer na graça e no conhecimento de quem Tu és. Ajuda-me a ser disciplinado em minha vida espiritual e a buscar sempre crescer em minha fé. Que eu possa me tornar cada dia mais parecido contigo. Amém.",
        data_criacao: "2024-01-10"
    }
];

// API do Devocional
const DevocionalAPI = {
    // Obter devocional de hoje
    getToday: function() {
        const hoje = new Date();
        const diaAno = Math.floor((hoje - new Date(hoje.getFullYear(), 0, 0)) / 86400000);
        const index = (diaAno - 1) % DEVOCIONAIS.length;
        
        return {
            status: "success",
            data: {
                ...DEVOCIONAIS[index],
                data_solicitacao: hoje.toISOString().split('T')[0],
                tipo: "devocional_hoje"
            }
        };
    },

    // Obter devocional por data específica
    getByDate: function(dateString) {
        try {
            const data = new Date(dateString);
            if (isNaN(data.getTime())) {
                return {
                    status: "error",
                    message: "Data inválida. Use o formato YYYY-MM-DD"
                };
            }
            
            const diaAno = Math.floor((data - new Date(data.getFullYear(), 0, 0)) / 86400000);
            const index = (diaAno - 1) % DEVOCIONAIS.length;
            
            return {
                status: "success",
                data: {
                    ...DEVOCIONAIS[index],
                    data_solicitacao: dateString,
                    tipo: "devocional_data_especifica"
                }
            };
        } catch (error) {
            return {
                status: "error",
                message: "Erro ao processar data: " + error.message
            };
        }
    },

    // Obter devocional aleatório
    getRandom: function() {
        const randomIndex = Math.floor(Math.random() * DEVOCIONAIS.length);
        
        return {
            status: "success",
            data: {
                ...DEVOCIONAIS[randomIndex],
                data_solicitacao: new Date().toISOString().split('T')[0],
                tipo: "devocional_aleatorio"
            }
        };
    },

    // Obter todos os devocionais
    getAll: function() {
        return {
            status: "success",
            data: {
                total: DEVOCIONAIS.length,
                devocionais: DEVOCIONAIS,
                data_solicitacao: new Date().toISOString().split('T')[0],
                tipo: "todos_devocionais"
            }
        };
    },

    // Obter informações da API
    getInfo: function() {
        return {
            status: "success",
            data: {
                nome: "API Devocional Diário",
                versao: "1.0.0",
                total_devocionais: DEVOCIONAIS.length,
                endpoints: [
                    {
                        endpoint: "?endpoint=today",
                        descricao: "Retorna o devocional do dia atual"
                    },
                    {
                        endpoint: "?endpoint=date&date=YYYY-MM-DD",
                        descricao: "Retorna o devocional de uma data específica"
                    },
                    {
                        endpoint: "?endpoint=random",
                        descricao: "Retorna um devocional aleatório"
                    },
                    {
                        endpoint: "?endpoint=all",
                        descricao: "Retorna todos os devocionais disponíveis"
                    }
                ],
                data_solicitacao: new Date().toISOString().split('T')[0]
            }
        };
    }
};

