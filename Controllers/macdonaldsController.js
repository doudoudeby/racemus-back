

module.exports = {

    getDataForContries : (req , res) => {

        const id = req.params.id;


        const csv = require('fast-csv');
        const fs = require('fs');

        const tab = [];



     fs.createReadStream('mcdonalds.csv')
            .pipe(csv.parse({
                headers: [ undefined , 'position', undefined,'name' , undefined,undefined,undefined,'address',undefined, undefined, undefined ] ,
                renameHeaders: true,
                delimiter: "\"",
                discardUnmappedColumns: true,

            }))
            .on('error', error => console.error(error))
            .on('data',
                    (row) => {
                        tab.push(row);
            })
            .on('end', () => {
                console.log('CSV file successfully processed');

                         return res.status(201).json({

                              "response" : tab
                          })


            });




    }
    };




