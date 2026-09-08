describe("Medical, Previous Records, and Notes Flow (Mocked)", () => {
  const mockPatient = {
    id: "323e4567-e89b-12d3-a456-426614174002",
    name: "Test",
    lastName: "Original",
    dni: "12345678X",
    phone: "600000000",
    email: "original@test.com",
    birthDate: "1980-01-01",
    allergies: "Ninguna",
    createdAt: new Date().toISOString(),
  };

  const mockMedicalRecord = {
    id: "423e4567-e89b-12d3-a456-426614174003",
    description: "Enfermedad actual test",
    createdAt: new Date().toISOString(),
    diagnose: "",
    protocol: "",
    prescription: "",
    background: "",
    tracings: [],
    notes: [],
  };

  const mockPreviousRecord = {
    id: "523e4567-e89b-12d3-a456-426614174004",
    description: "Antecedentes test origin",
    createdAt: new Date().toISOString(),
  };

  const mockNote = {
    id: "823e4567-e89b-12d3-a456-426614174008",
    description: "Nota preliminar del paciente",
    createdAt: new Date().toISOString(),
  };

  beforeEach(() => {
    cy.intercept("GET", "**/api/patients*", {
      statusCode: 200,
      body: [mockPatient],
    }).as("getPatients");
    cy.intercept("GET", `**/api/patients/${mockPatient.id}*`, {
      statusCode: 200,
      body: mockPatient,
    }).as("getPatientDetail");

    // Initial tabs payload
    cy.intercept("GET", `**/api/patients/${mockPatient.id}/medical-records*`, {
      statusCode: 200,
      body: [mockMedicalRecord],
    }).as("getMedicalRecords");
    cy.intercept("GET", `**/api/patients/${mockPatient.id}/previous-records*`, {
      statusCode: 200,
      body: [mockPreviousRecord],
    }).as("getPreviousRecords");
    cy.intercept("GET", `**/api/patients/${mockPatient.id}/notes*`, {
      statusCode: 200,
      body: [mockNote],
    }).as("getNotes");

    // Detailed views endpoints
    cy.intercept("GET", `**/api/medical-records/${mockMedicalRecord.id}*`, {
      statusCode: 200,
      body: mockMedicalRecord,
    }).as("getMedicalRecordById");
    cy.intercept("GET", `**/api/previous-records/${mockPreviousRecord.id}*`, {
      statusCode: 200,
      body: mockPreviousRecord,
    }).as("getPreviousRecordById");

    cy.visit("/patients");
    cy.wait("@getPatients");

    cy.get("table tbody tr:first-child.clickable").click({ force: true });
    cy.wait("@getPatientDetail");
    cy.wait("@getMedicalRecords");
    cy.wait("@getPreviousRecords");
    cy.wait("@getNotes");
  });

  // ===== MEDICAL RECORDS =====
  it("should add, edit and delete a Medical Record", () => {
    // --- ADD ---
    cy.contains("button.tab-button", "Historia Clínica").click();
    cy.get(".records-header").should("contain", "Historia Clínica");
    cy.contains("button", "+ Agregar Registro")
      .should("be.visible")
      .click({ force: true });

    cy.get(".modal-content h2").should("contain", "Agregar");

    const newRecord = {
      ...mockMedicalRecord,
      id: "623e4567-e89b-12d3-a456-426614174005",
      description: "Nuevo MR",
      background: "Nuevo Antecedente",
      diagnose: "Nuevo Diagnóstico",
      protocol: "Nueva Conducta",
      prescription: "Nuevo Tratamiento",
    };

    cy.intercept("POST", "**/api/medical-records*", {
      statusCode: 201,
      body: newRecord,
    }).as("createMedicalRecord");
    cy.intercept("GET", `**/api/patients/${mockPatient.id}/medical-records*`, {
      statusCode: 200,
      body: [mockMedicalRecord, newRecord],
    }).as("getMedicalRecordsReload");

    cy.get("#medicalRecordDescription").should("be.visible").type("Nuevo MR");
    cy.get("#medicalRecordBackground")
      .should("be.visible")
      .type("Nuevo Antecedente");
    cy.get("#medicalRecordDiagnose")
      .should("be.visible")
      .type("Nuevo Diagnóstico");
    cy.get("#medicalRecordProtocol")
      .should("be.visible")
      .type("Nueva Conducta");
    cy.get("#medicalRecordPrescription")
      .should("be.visible")
      .type("Nuevo Tratamiento");
    cy.contains("button", "Crear").click();

    cy.wait("@createMedicalRecord");
    cy.wait("@getMedicalRecordsReload");
    cy.get(".records-section").should("contain", "Nuevo MR");

    // --- EDIT ---
    cy.intercept("GET", `**/api/medical-records/${newRecord.id}*`, {
      statusCode: 200,
      body: newRecord,
    }).as("getNewRecordById");
    cy.get(".records-section .record-item")
      .contains("Nuevo MR")
      .click({ force: true });
    cy.wait("@getNewRecordById");

    const editedRecord = {
      ...newRecord,
      description: "Editado MR",
      background: "Editado Antecedente",
      diagnose: "Editado Diagnóstico",
      protocol: "Editada Conducta",
      prescription: "Editado Tratamiento",
    };
    cy.intercept("PATCH", `**/api/medical-records/${newRecord.id}*`, {
      statusCode: 200,
      body: editedRecord,
    }).as("editMedicalRecord");
    cy.intercept("GET", `**/api/patients/${mockPatient.id}/medical-records*`, {
      statusCode: 200,
      body: [mockMedicalRecord, editedRecord],
    }).as("getMedicalRecordsReload2");

    cy.get(".modal-content").should("be.visible");
    cy.contains(".modal-content button", "Actualizar").click();
    cy.get(".modal-content h2").should("contain", "Editar");

    cy.get("#medicalRecordDescription")
      .should("be.visible")
      .clear()
      .type("Editado MR");
    cy.get("#medicalRecordBackground")
      .should("be.visible")
      .clear()
      .type("Editado Antecedente");
    cy.get("#medicalRecordDiagnose")
      .should("be.visible")
      .clear()
      .type("Editado Diagnóstico");
    cy.get("#medicalRecordProtocol")
      .should("be.visible")
      .clear()
      .type("Editada Conducta");
    cy.get("#medicalRecordPrescription")
      .should("be.visible")
      .clear()
      .type("Editado Tratamiento");
    cy.contains(".modal-content button", "Guardar").click();
    cy.wait("@editMedicalRecord");
    cy.wait("@getMedicalRecordsReload2");
    cy.get(".records-section").should("contain", "Editado MR");

    // --- DELETE ---
    cy.get(".records-section .record-item")
      .contains("Editado MR")
      .click({ force: true });
    cy.wait("@getNewRecordById");

    cy.intercept("DELETE", `**/api/medical-records/${newRecord.id}*`, {
      statusCode: 204,
    }).as("deleteMedicalRecord");
    cy.intercept("GET", `**/api/patients/${mockPatient.id}/medical-records*`, {
      statusCode: 200,
      body: [mockMedicalRecord],
    }).as("getMedicalRecordsReload3");

    cy.on("window:confirm", () => true);
    cy.contains(".modal-content button", "Eliminar").click();

    cy.wait("@deleteMedicalRecord");
    cy.wait("@getMedicalRecordsReload3");
    cy.get(".records-section").should("not.contain", "Editado MR");
  });

  // ===== PREVIOUS RECORDS (Antecedentes Generales) =====
  it("should add, edit and delete a Previous Record", () => {
    cy.contains("button.tab-button", "Antecedentes Generales").click();

    // --- ADD ---
    cy.get(".records-header").should("contain", "Antecedentes Generales");
    cy.contains("button", "+ Agregar Registro")
      .should("be.visible")
      .click({ force: true });
    cy.get(".modal-content h2").should("contain", "Agregar");
    const newPR = {
      ...mockPreviousRecord,
      id: "723e4567-e89b-12d3-a456-426614174006",
      description: "Nuevo PR",
    };

    cy.intercept("POST", "**/api/previous-records*", {
      statusCode: 201,
      body: newPR,
    }).as("createPreviousRecord");
    cy.intercept("GET", `**/api/patients/${mockPatient.id}/previous-records*`, {
      statusCode: 200,
      body: [mockPreviousRecord, newPR],
    }).as("getPreviousRecordsReload");

    cy.get("#previousRecordDescription").should("be.visible").type("Nuevo PR");
    cy.contains("button", "Crear").click();

    cy.wait("@createPreviousRecord");
    cy.wait("@getPreviousRecordsReload");
    cy.get(".records-section").should("contain", "Nuevo PR");

    // --- EDIT ---
    cy.get(".records-section .record-item")
      .contains("Nuevo PR")
      .click({ force: true });

    const editedPR = { ...newPR, description: "Editado PR" };
    cy.intercept("PATCH", `**/api/previous-records/${newPR.id}*`, {
      statusCode: 200,
      body: editedPR,
    }).as("editPreviousRecord");
    cy.intercept("GET", `**/api/patients/${mockPatient.id}/previous-records*`, {
      statusCode: 200,
      body: [mockPreviousRecord, editedPR],
    }).as("getPreviousRecordsReload2");

    cy.get(".modal-content").should("be.visible");
    cy.contains(".modal-content button", "Actualizar").click();
    cy.get(".modal-content h2").should("contain", "Editar");

    cy.get("#previousRecordDescription")
      .should("be.visible")
      .clear()
      .type("Editado PR");
    cy.contains(".modal-content button", "Guardar").click();

    cy.wait("@editPreviousRecord");
    cy.wait("@getPreviousRecordsReload2");
    cy.get(".records-section").should("contain", "Editado PR");

    // --- DELETE ---
    cy.get(".records-section .record-item")
      .contains("Editado PR")
      .click({ force: true });

    cy.intercept("DELETE", `**/api/previous-records/${newPR.id}*`, {
      statusCode: 204,
    }).as("deletePreviousRecord");
    cy.intercept("GET", `**/api/patients/${mockPatient.id}/previous-records*`, {
      statusCode: 200,
      body: [mockPreviousRecord],
    }).as("getPreviousRecordsReload3");

    cy.on("window:confirm", () => true);
    cy.contains(".modal-content button", "Eliminar").click();

    cy.wait("@deletePreviousRecord");
    cy.wait("@getPreviousRecordsReload3");
    cy.get(".records-section").should("not.contain", "Editado PR");
  });

  // ===== PATIENT NOTES (Notas) =====
  it("should add, edit and delete a Patient Note", () => {
    cy.contains("button.tab-button", "Notas").click();

    // --- ADD ---
    cy.get(".records-header").should("contain", "Notas");
    cy.contains("button", "+ Agregar Nota")
      .should("be.visible")
      .click({ force: true });
    cy.get(".modal-content h2").should("contain", "Agregar Nota");
    const newNote = {
      ...mockNote,
      id: "923e4567-e89b-12d3-a456-426614174009",
      description: "Nueva Nota",
    };

    cy.intercept("POST", `**/api/patients/${mockPatient.id}/notes*`, {
      statusCode: 201,
      body: newNote,
    }).as("createNote");
    cy.intercept("GET", `**/api/patients/${mockPatient.id}/notes*`, {
      statusCode: 200,
      body: [mockNote, newNote],
    }).as("getNotesReload");

    cy.get("#patientNoteDescription").should("be.visible").type("Nueva Nota");
    cy.contains("button", "Crear").click();

    cy.wait("@createNote");
    cy.wait("@getNotesReload");
    cy.get(".records-section").should("contain", "Nueva Nota");

    cy.get(".records-section .record-item")
      .contains("Nueva Nota")
      .click({ force: true });
    // The modal "Detalles de Nota" opens read-only first
    cy.contains(".modal-content button", "Actualizar").click();

    const editedNote = { ...newNote, description: "Editada Nota" };
    cy.intercept(
      "PATCH",
      `**/api/patients/${mockPatient.id}/notes/${newNote.id}*`,
      { statusCode: 200, body: editedNote }
    ).as("editNote");
    cy.intercept("GET", `**/api/patients/${mockPatient.id}/notes*`, {
      statusCode: 200,
      body: [mockNote, editedNote],
    }).as("getNotesReload2");

    cy.get(".modal-content h2").should("contain", "Editar Nota");
    cy.get("#patientNoteDescription")
      .should("be.visible")
      .clear()
      .type("Editada Nota");
    cy.contains(".modal-content button", "Guardar").click();

    cy.wait("@editNote");
    cy.wait("@getNotesReload2");
    cy.get(".records-section").should("contain", "Editada Nota");

    // --- DELETE ---
    cy.get(".records-section .record-item")
      .contains("Editada Nota")
      .click({ force: true });

    cy.intercept(
      "DELETE",
      `**/api/patients/${mockPatient.id}/notes/${newNote.id}*`,
      { statusCode: 204 }
    ).as("deleteNote");
    cy.intercept("GET", `**/api/patients/${mockPatient.id}/notes*`, {
      statusCode: 200,
      body: [mockNote],
    }).as("getNotesReload3");

    cy.on("window:confirm", () => true);
    cy.contains(".modal-content button", "Eliminar").click();

    cy.wait("@deleteNote");
    cy.wait("@getNotesReload3");
    cy.get(".records-section").should("not.contain", "Editada Nota");
  });
});
