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
