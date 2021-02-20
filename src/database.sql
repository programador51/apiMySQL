CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE employees(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
)

DESCRIBE employees;
SELECT * FROM employees;

INSERT INTO employees values
(1,'Ryan Ray',20000),
(2,'Joe McMillan',40000),
(3,'John Carter',50000)

/* -------------------------------------- */
CREATE PROCEDURE employeeAddOrEdit(
    IN _id INT,
    IN _name VARCHAR(45),
    IN _salary INT
)

DELIMITER $$
BEGIN
    IF _id = 0 THEN
        INSERT INTO employees (id,name,salary)
        VALUES(null,_name,_salary)
        SET _id = LAST_INSERT_ID();

    ELSE
        UPDATE employees
        SET
            name = _name,
            salary = _salary,
            WHERE id = _id;
    END IF;  

    SELECT _id AS id;
END$$

DELIMITER;