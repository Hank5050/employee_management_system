use employees;

INSERT INTO department
    (name)

VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)

VALUES
    ('Sales Lead', 105000, 1),
    ('Salesperson', 75000, 1),
    ('Lead Engineer', 160000, 2),
    ('Software Engineer', 125000, 2),
    ('Account Manager', 155000, 3),
    ('Accountant', 115000, 3),
    ('Legal Team Lead', 265000, 4),
    ('Lawyer', 175000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)

VALUES
    ('Jimmy', 'Dirt', 1, NULL),
    ('Carl', 'Johnson', 2, 1),
    ('Heather', 'Brown', 3, NULL),
    ('Mark', 'Ramirez', 4, 3),
    ('Brian', 'Right', 5, NULL),
    ('Jenny', 'Marshal', 6, 5),
    ('Lauren', 'Howard', 7, NULL),
    ('James', 'Cartwright', 8, 7);