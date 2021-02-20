const { request } = require('express');
const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/',(request,response)=>{
    connection.query(
        'SELECT * FROM employees',
        (error,rows,fields)=>{
            if(!error){
                response.json(rows);
            }else{
                console.log(`Error: ${error}`)
                return;
            }
        }
    )
});

router.get('/:id',(request,response)=>{
    const {id} = request.params;
    connection.query('SELECT * FROM employees WHERE id = ?',[id],
    (error,rows,fields)=>{
        if(!error){
            response.json(rows);
        }else{
            console.log(`Error: ${error}`)
            return;
        }
    });
});

router.post('/create',(request,response)=>{
    console.log(request.body);
    const {name,salary} = request.body;
    const query = ` 
        INSERT INTO employees (name,salary)
        VALUES(?,?)
    `;
    connection.query(query,[name,salary],(error,rows,fields)=>{
        if(!error){
            response.json({Status:`Datos guardados correctamente`})
        }else{
            console.log(error);
        }
    });
});

router.put('/:id',(request,response)=>{
    const {name,salary} = request.body;
    let {id} = request.params;

    const query = `
    UPDATE employees
    SET
        name = ?,
        salary = ?
        WHERE id = 31;
    `;

    connection.query(query,[name,salary,id],(error,rows,fields)=>{
        if(!error){
            response.json({httpStatus:`200: OK`});
        }else{
            console.log(error);
        }
    })
})

router.delete('/:id',(request,response)=>{
    const {id} = request.params;
    connection.query(`DELETE FROM employees WHERE id = ?`,[id],(error,rows,fields)=>{
        if(!error){
            response.json({status:`Employeement deleted`});
        }else{
            console.log(error);
        }
    })
})

module.exports = router;