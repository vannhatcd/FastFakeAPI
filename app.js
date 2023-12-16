const express = require('express');
const fs = require('fs').promises;

const app = express();
app.use(express.json());

// Route GET all data
app.get('/:type', async (req, res) => {
    const fileType = req.params.type;

    try {
        const fileName = `${fileType}.json`;

        const fileExists = await fs.access(fileName).then(() => true).catch(() => false);
        if (!fileExists) {
            res.status(404).json({ error: 'File not found !!!' });
            return;
        }

        const data = await fs.readFile(fileName, 'utf8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu' });
    }
});

// Route POST created data
app.post('/:type', async (req, res) => {
    const fileType = req.params.type;

    try {
        const fileName = `${fileType}.json`;

        const fileExists = await fs.access(fileName).then(() => true).catch(() => false);
        if (!fileExists) {
            res.status(404).json({ error: 'File not found !!!' });
            return;
        }

        const data = await fs.readFile(fileName, 'utf8');
        const jsonData = JSON.parse(data);

        const newObject = req.body;
        jsonData.push(newObject);

        await fs.writeFile(fileName, JSON.stringify(jsonData, null, 2));

        res.status(201).json({ message: 'Created success !!!' });
    } catch (error) {
        res.status(500).json({ error: 'Create error' });
    }
});

// Route get 1 data
app.get('/:type/:id', async (req, res) => {
    const fileType = req.params.type;
    const objectId = parseInt(req.params.id);

    try {
        const fileName = `${fileType}.json`;

        const fileExists = await fs.access(fileName).then(() => true).catch(() => false);
        if (!fileExists) {
            res.status(404).json({ error: 'File not found !!!' });
            return;
        }

        const fileData = await fs.readFile(fileName, 'utf8');
        const jsonData = JSON.parse(fileData);

        const data = jsonData.find(obj => obj.id === objectId);

        if (!data) {
            res.status(404).json({ error: 'Object not found' });
            return;
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Get data error' });
    }
});

// Route PUT update data
app.put('/:type/:id', async (req, res) => {
    const fileType = req.params.type;
    const objectId = parseInt(req.params.id);

    try {
        const fileName = `${fileType}.json`;

        const fileExists = await fs.access(fileName).then(() => true).catch(() => false);
        if (!fileExists) {
            res.status(404).json({ error: 'File not found !!!' });
            return;
        }

        const data = await fs.readFile(fileName, 'utf8');
        let jsonData = JSON.parse(data);

        const updatedObject = req.body;

        jsonData = jsonData.map(obj => (obj.id === objectId ? { ...obj, ...updatedObject } : obj));

        await fs.writeFile(fileName, JSON.stringify(jsonData, null, 2));

        res.json({ message: 'Updated success' });
    } catch (error) {
        res.status(500).json({ error: 'Updated error' });
    }
});

// Route DELETE data
app.delete('/:type/:id', async (req, res) => {
    const fileType = req.params.type;
    const objectId = parseInt(req.params.id);

    try {
        const fileName = `${fileType}.json`;

        const fileExists = await fs.access(fileName).then(() => true).catch(() => false);
        if (!fileExists) {
            res.status(404).json({ error: 'File not found !!!' });
            return;
        }

        const data = await fs.readFile(fileName, 'utf8');
        let jsonData = JSON.parse(data);

        jsonData = jsonData.filter(obj => obj.id !== objectId);

        await fs.writeFile(fileName, JSON.stringify(jsonData, null, 2));

        res.json({ message: 'Deleted success' });
    } catch (error) {
        res.status(500).json({ error: 'Delete error' });
    }
});

// Run server with port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
