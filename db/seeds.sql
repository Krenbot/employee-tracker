INSERT INTO department (name)
VALUES ('Engineering'), ('Finance'), ('Sales'), ('Design');

INSERT INTO role (title, salary, department_id )
VALUES 
('Engineer', 85000, 1),
('Finance Manager', 75000, 2),
('Salesperson', 99000, 3),
('Designer', 75000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Steven', 'Krenn', 1, NULL),
('Billy', 'Snipplets', 2, 1),
('James', 'Cameron', 3, 1),
('Josiah', 'Henderson', 4, 2),
('Audra', 'Lindley', 3, NULL),
('Jonathan', 'Lewis', 4, 2);