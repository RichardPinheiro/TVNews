const multiparty = require('multiparty')
const fs = require('fs')
const FilesService = require('../Services/FilesService')
const fileService = new FilesService()

const getBufferFromFilePath = async (req) => {
    return new Promise((resolve, reject) => {
      const form = new multiparty.Form();
   
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        const buffer = fs.readFileSync(files.file[0].path);
        const contentType = files.file[0].headers['content-type'];
        const filename = files.file[0].originalFilename;
        return resolve({
          buffer,
          contentType,
          filename,
        });
      });
    });
   };

exports.create = async (req, res) => {
	res.json(await fileService.create(await getBufferFromFilePath(req)))
}

exports.get = async (req, res) => {
	res.json(await fileService.findFile(req.params.id))
}

exports.deleteOne = async (req, res) => {
  res.json(await fileService.deleteOne(req.params.id))
}

exports.serve = async (req, res) => {
    const  file = await fileService.findFile(req.params.id)
    const bufferedFile = Buffer.from(file.url, 'base64')
      res.writeHead(200, {
        'Content-Type': file.contentType,
        'Content-Length': bufferedFile.length,
      });

      res.end(bufferedFile);
};
