const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Demo, Frame } = require('./model');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.set('sequelize', sequelize);
app.set('models', sequelize.models);

//Rota e método para visualizar as Demo
app.get('/demos', async (req, res) => {
    try {
        const buscarDemo = await Demo.findAll({
            include: [{
                model: Frame,
                as: 'frames', 
            }]
        });

        res.status(200).json(buscarDemo)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }

});

//Rota e método para atualziar as Demo
app.put('/frames/:id', async (req, res) => {
    const { id } = req.params; 
    const { html, order } = req.body; 

    try {
        
        const frame = await Frame.findByPk(id);
        
        if (!frame) {
            return res.status(404).json({ error: 'Frame não encontrado' });
        }

        
        frame.html = html || frame.html; 
        frame.order = order || frame.order; 
        
        
        await frame.save();

        
        res.status(200).json(frame);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});


module.exports = app;
