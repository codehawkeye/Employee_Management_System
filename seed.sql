INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Accounting");
INSERT INTO department (name)
VALUES ("Training");
INSERT INTO department (name)
VALUES ("Human Resources");
INSERT INTO department (name)
VALUES ("Floor Management");


INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Director", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Floor Associate", 41000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Accounting Manager", 75000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accounting Associate", 41000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Training Manager", 60000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Training Associate", 51500, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("HR Manager", 75000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("HR Associate", 45000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Senior Manager", 700000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mark", "Gosselaar", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elizabeth", "Berkley", 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mario", "lopez", 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tiffani", "Thiessen", 4, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dustin", "Diamond", 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lark", "Voorhies", 6, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dennis", "Haskins", 7, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Josie", "Totah", 8, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Edward", "Alonzo", 9, NULL);