import * as EasterEggModel from './../models/easterEggsModels.js'

export const listarTodos = async (req, res) => {
    try {
        const easterEggs = await EasterEggModel.findAll();

        if (!easterEggs || easterEggs.length === 0) {
            res.status(404).json({
                total: easterEggs.length,
                mensagem: 'Não há easterEggs na lista',
                easterEggs
            })
        }

        res.status(200).json({
            total: easterEggs.length,
            mensagem: 'Lista de easterEggs',
            easterEggs
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = req.params.id;
        const easterEgg = await EasterEggModel.findById(id);

        if (!easterEgg) {
            return res.status(404).json({
                erro: 'EasterEgg não encontrado!',
                mensagem: 'Verifique se o id do EasterEgg existe',
                id: id
            })
        }

        res.status(200).json({
            mensagem: 'EasterEgg encontrado',
            easterEgg
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar EasterEgg por id',
            detalhes: error.message
        })
    }
}

export const criar = async (req, res) => {
    try {
        // De onde vem os dados para cá? Para eu usar para criar
        const { titulo, midia, tipo, descricao, dificuldade, descoberto, autor, verificado } = req.body

        const dado = req.body

        // Verificar se a casa é valida
        /*const casasValidas = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa'];
        if (!casasValidas.includes(casa)) {
            return res.status(400).json({
                erro: 'Casa inválida!',
                casasValidas
            })
        }*/

        const novoEasterEgg = await EasterEggModel.create(dado);

        res.status(201).json({
            mensagem: 'Bruxo criado com sucesso!',
            easterEgg: novoEasterEgg
        })


    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao criar bruxo',
            detalhes: error.message
        })
    }
}

export const apagar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const easterEggExiste = await EasterEggModel.findById(id);

        if (!easterEggExiste) {
            return res.status(404).json({
                erro: 'EasterEgg não encontrado com esse id',
                id: id
            })
        }

        await EasterEggModel.deleteEasterEgg(id)

        res.status(200).json({
            mensagem: 'EasterEgg0 removido com sucesso',
            EasterEggRemovido: easterEggExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao apagar easterEgg!',
            detalhes: error.message
        })
    }
}

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const EasterEggExiste = await EasterEggModel.findById(id);

        if (!EasterEggExiste) {
            return res.status(404).json({
                erro: 'EasterEgg não encontrado com esse id',
                id: id
            })
        }

        const easterEggAtualizado = await EasterEggModel.update(id, dados);

        res.status(200).json({
            mensagem: 'EasterEgg atualizado com sucesso',
            easterEgg: easterEggAtualizado
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar easterEggs',
            detalhes: error.message
        })
    }
}