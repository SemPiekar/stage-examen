import React, { useState } from "react";
import { Table, Button, Modal, Form, Navbar } from "react-bootstrap";

const AdminTools = ({ users: initialUsers }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    role: "",
    class: "",
    email: "",
    dob: "",
    address: "",
  });
  const [editedUser, setEditedUser] = useState(null);
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("id"); // Default sort by "id"
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortDirection, setSortDirection] = useState({ id: "asc" }); // Default sort direction for id

  const handleAddUser = () => {
    const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const newUserObject = {
      id: newUserId,
      username: newUser.username,
      role: newUser.role,
      class: newUser.class,
      email: newUser.email,
      dob: newUser.dob,
      address: newUser.address,
    };
    const updatedUsers = [...users, newUserObject];
    setUsers(updatedUsers);
    setShowAddModal(false);
    setNewUser({
      username: "",
      role: "",
      class: "",
      email: "",
      dob: "",
      address: "",
    });
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleUpdateUser = () => {
    // Find the index of the edited user
    const index = users.findIndex((user) => user.id === editedUser.id);
    // Create a copy of the users array
    const updatedUsers = [...users];
    // Update the user information at the found index
    updatedUsers[index] = editedUser;
    // Set the updated users array to state
    setUsers(updatedUsers);
    // Close the edit modal
    setShowEditModal(false);
  };

  const countUsersByRole = (role) => {
    return users.filter((user) => user.role === role).length;
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.class &&
        user.class.toLowerCase().includes(searchTerm.toLowerCase())) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.dob.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortUsers = (columnName) => {
    if (sortColumn === columnName) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnName);
      setSortOrder("asc");
    }
  };

  const toggleSortDirection = (columnName) => {
    setSortDirection({
      ...sortDirection,
      [columnName]: sortDirection[columnName] === "asc" ? "desc" : "asc",
    });
  };

  const sortedUsers = filteredUsers.sort((a, b) => {
    const columnA = a[sortColumn];
    const columnB = b[sortColumn];

    // For ID, compare as numbers instead of strings
    if (sortColumn === "id") {
      return (columnA - columnB) * (sortOrder === "asc" ? 1 : -1);
    } else if (sortColumn === "class") {
      // Check if columnA and columnB are not null or undefined
      if (columnA && columnB) {
        return columnA.localeCompare(columnB) * (sortOrder === "asc" ? 1 : -1);
      }
    } else {
      // For other columns, sort based on locale comparison
      return columnA.localeCompare(columnB) * (sortOrder === "asc" ? 1 : -1);
    }
    return 0;
  });

  return (
    <div className="m-5">
      <h1 className="mb-4">Admin Tools</h1>
      <Navbar expand="lg" className="mb-3">
        <Navbar.Brand>Filter:</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <Form.Control
              type="text"
              placeholder="Zoeken..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th
              onClick={() => {
                sortUsers("id");
                toggleSortDirection("id");
              }}
            >
              ID{" "}
              {sortDirection["id"] &&
                (sortColumn === "id" ? (sortOrder === "asc" ? "▲" : "▼") : "")}
            </th>
            <th
              onClick={() => {
                sortUsers("username");
                toggleSortDirection("username");
              }}
            >
              Gebruikersnaam{" "}
              {sortDirection["username"] &&
                (sortColumn === "username"
                  ? sortOrder === "asc"
                    ? "▲"
                    : "▼"
                  : "")}
            </th>
            <th
              onClick={() => {
                sortUsers("role");
                toggleSortDirection("role");
              }}
            >
              Rol{" "}
              {sortDirection["role"] &&
                (sortColumn === "role"
                  ? sortOrder === "asc"
                    ? "▲"
                    : "▼"
                  : "")}
            </th>
            <th
              onClick={() => {
                sortUsers("class");
                toggleSortDirection("class");
              }}
            >
              Klas{" "}
              {sortDirection["class"] &&
                (sortColumn === "class"
                  ? sortOrder === "asc"
                    ? "▲"
                    : "▼"
                  : "")}
            </th>
            <th
              onClick={() => {
                sortUsers("email");
                toggleSortDirection("email");
              }}
            >
              Email{" "}
              {sortDirection["email"] &&
                (sortColumn === "email"
                  ? sortOrder === "asc"
                    ? "▲"
                    : "▼"
                  : "")}
            </th>
            <th
              onClick={() => {
                sortUsers("dob");
                toggleSortDirection("dob");
              }}
            >
              Geboortedatum{" "}
              {sortDirection["dob"] &&
                (sortColumn === "dob" ? (sortOrder === "asc" ? "▲" : "▼") : "")}
            </th>
            <th
              onClick={() => {
                sortUsers("address");
                toggleSortDirection("address");
              }}
            >
              Adres{" "}
              {sortDirection["address"] &&
                (sortColumn === "address"
                  ? sortOrder === "asc"
                    ? "▲"
                    : "▼"
                  : "")}
            </th>
            <th>Acties</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>{user.role === "student" ? user.class : "-"}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.address}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    setEditedUser(user);
                    setShowEditModal(true);
                  }}
                >
                  Bewerken
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Verwijderen
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="success" onClick={() => setShowAddModal(true)}>
        Gebruiker toevoegen
      </Button>
      {/* Add user modal */}

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Gebruiker toevoegen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Gebruikersnaam</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gebruikersnaam"
                value={newUser.username}
                onChange={(e) =>
                  setNewUser({ ...newUser, username: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="role">
              <Form.Label>Rol</Form.Label>
              <Form.Control
                as="select"
                value={newUser.role}
                onChange={(e) =>
                  setNewUser({ ...newUser, role: e.target.value })
                }
              >
                <option value="">Selecteer Rol</option>
                <option value="student">Student</option>
                <option value="teacher">Leraar</option>
                <option value="organizer">Organisator</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="class">
              <Form.Label>Klas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Klas"
                value={newUser.class}
                onChange={(e) =>
                  setNewUser({ ...newUser, class: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="dob">
              <Form.Label>Geboortedatum</Form.Label>
              <Form.Control
                type="date"
                placeholder="Geboortedatum"
                value={newUser.dob}
                onChange={(e) =>
                  setNewUser({ ...newUser, dob: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Adres</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adres"
                value={newUser.address}
                onChange={(e) =>
                  setNewUser({ ...newUser, address: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Annuleren
          </Button>
          <Button variant="primary" onClick={handleAddUser}>
            Toevoegen
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Gebruiker bewerken</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Gebruikersnaam</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gebruikersnaam"
                value={editedUser ? editedUser.username : ""}
                onChange={(e) =>
                  setEditedUser({
                    ...editedUser,
                    username: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="role">
              <Form.Label>Rol</Form.Label>
              <Form.Control
                as="select"
                value={editedUser ? editedUser.role : ""}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, role: e.target.value })
                }
              >
                <option value="">Selecteer Rol</option>
                <option value="student">Student</option>
                <option value="teacher">Leraar</option>
                <option value="organizer">Organisator</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="class">
              <Form.Label>Klas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Klas"
                value={editedUser ? editedUser.class : ""}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, class: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={editedUser ? editedUser.email : ""}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="dob">
              <Form.Label>Geboortedatum</Form.Label>
              <Form.Control
                type="date"
                placeholder="Geboortedatum"
                value={editedUser ? editedUser.dob : ""}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, dob: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Adres</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adres"
                value={editedUser ? editedUser.address : ""}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, address: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Annuleren
          </Button>
          <Button variant="primary" onClick={handleUpdateUser}>
            Opslaan
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminTools;
