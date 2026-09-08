
import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { PatientDto } from '../models/patient.model';
import { MedicalRecordListDto, MedicalRecordDto } from '../models/medical-record.model';
import { PreviousRecordListDto } from '../models/previous-record.model';
import { formatDate } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class PdfService {

    constructor() { }

    /**
     * Generar PDF con los datos del paciente y registros seleccionados
     */
    public generatePatientPdf(
        patient: PatientDto,
        medicalRecords: MedicalRecordDto[],
        previousRecords: PreviousRecordListDto[]
    ): jsPDF {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.width;

        const textColor: [number, number, number] = [0, 0, 0];

        // --- Header Section ---
        try {

            // Logo
            doc.addImage('assets/logo.png', 'PNG', 15, 10, 30, 0);
        } catch (e) {
            console.error('Error loading logo', e);
        }

        // Clinic Info Header
        doc.setFontSize(10);
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);
        doc.setFont('helvetica', 'normal');
        
        doc.text('www.tratamiento-dolor.es', 55, 15);
        doc.text('contacto@tratamiento-dolor.es', 55, 20);
        doc.text('Pasaje Alminares del Genil, 13', 55, 25);
        doc.text('18006 Granada', 55, 30);

        // Date
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const today = new Date();
        const dateStr = formatDate(today, 'dd/MM/yyyy', 'en-US');
        doc.text(`Fecha de emisión: ${dateStr}`, pageWidth - 15, 25, { align: 'right' });

        // Separation line
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.1);
        doc.line(15, 35, pageWidth - 15, 35);

        let yPos = 45;
        const margin = 15;

        const patientDataRows = [];
        patientDataRows.push(['Nombre Completo', `${patient.lastName}${patient.secondLastName ? ' ' + patient.secondLastName : ''}, ${patient.name}`]);
        if (patient.dni) patientDataRows.push(['DNI', `${patient.dni}`]);
        if (patient.birthDate) patientDataRows.push(['Fecha de Nacimiento', `${formatDate(patient.birthDate, 'dd/MM/yyyy', 'en-US')}`]);
        if (patient.phone) patientDataRows.push(['Teléfono', `${patient.phone}`]);
        if (patient.allergies) patientDataRows.push(['Alergias', `${patient.allergies}`]);

        // --- Patient Info Section ---
        autoTable(doc, {
            startY: yPos,
            head: [[{ content: 'DATOS DEL PACIENTE', colSpan: 2, styles: { halign: 'center' as const } }]],
            body: patientDataRows,
            theme: 'grid',
            headStyles: {
                fillColor: [255, 255, 255],
                textColor: [0, 0, 0],
                fontStyle: 'bold',
                lineColor: [0, 0, 0],
                lineWidth: 0.1
            },
            columnStyles: {
                0: { cellWidth: 50, fontStyle: 'bold', fillColor: [255, 255, 255], textColor: [0, 0, 0] },
                1: { cellWidth: 'auto', textColor: [0, 0, 0], fillColor: [255, 255, 255] }
            },
            styles: {
                lineColor: [0, 0, 0],
                lineWidth: 0.1,
                fontSize: 10,
                textColor: [0, 0, 0]
            },
            margin: { left: margin, right: margin, bottom: 35 }
        });

        // @ts-ignore
        yPos = doc.lastAutoTable.finalY + 15;

        // --- Antecedentes Generales (BEFORE Historia Clínica) ---
        if (previousRecords && previousRecords.length > 0) {

            if (yPos > doc.internal.pageSize.height - 40) {
                doc.addPage();
                yPos = 20;
            }

            doc.setFontSize(14);
            doc.setTextColor(textColor[0], textColor[1], textColor[2]);
            doc.setFont('helvetica', 'bold');
            doc.text('ANTECEDENTES GENERALES', margin, yPos);
            yPos += 5;

            const prevRecordsTableBody: any[] = [];

            previousRecords.forEach((record, index) => {
                if (index > 0) {
                    prevRecordsTableBody.push([{ content: '', colSpan: 2, styles: { cellPadding: 2, fillColor: [255, 255, 255] } }]);
                }

                prevRecordsTableBody.push([
                    { content: 'FECHA DE REGISTRO', styles: { fontStyle: 'bold', fillColor: [255, 255, 255] } },
                    { content: formatDate(record.createdAt, 'dd/MM/yyyy', 'en-US'), styles: { fontStyle: 'bold', fillColor: [255, 255, 255] } }
                ]);

                if (record.description) {
                    prevRecordsTableBody.push([
                        { content: 'DESCRIPCIÓN', styles: { fontStyle: 'bold' } },
                        { content: record.description }
                    ]);
                }
            });

            autoTable(doc, {
                startY: yPos,
                head: [],
                body: prevRecordsTableBody,
                theme: 'grid',
                styles: {
                    fontSize: 9,
                    cellPadding: 4,
                    valign: 'top',
                    lineColor: [0, 0, 0],
                    lineWidth: 0.1,
                    textColor: [0, 0, 0],
                    fillColor: [255, 255, 255]
                },
                columnStyles: {
                    0: { cellWidth: 50, textColor: [0, 0, 0] },
                    1: { cellWidth: 'auto', textColor: [0, 0, 0] }
                },
                margin: { left: margin, right: margin, bottom: 35 }
            });

            // @ts-ignore
            yPos = doc.lastAutoTable.finalY + 15;
        }

        // --- Historia Clínica (AFTER Antecedentes) ---
        if (medicalRecords && medicalRecords.length > 0) {

            if (yPos > doc.internal.pageSize.height - 40) {
                doc.addPage();
                yPos = 20;
            }

            doc.setFontSize(14);
            doc.setTextColor(textColor[0], textColor[1], textColor[2]);
            doc.setFont('helvetica', 'bold');
            doc.text('HISTORIA CLÍNICA', margin, yPos);
            yPos += 5;

            medicalRecords.forEach((record) => {
                const tableBody: any[] = [];

                // Fecha de consulta
                tableBody.push([
                    { content: 'FECHA DE CONSULTA', styles: { fontStyle: 'bold', fillColor: [255, 255, 255] } },
                    { content: formatDate(record.createdAt, 'dd/MM/yyyy', 'en-US'), styles: { fontStyle: 'bold', fillColor: [255, 255, 255] } }
                ]);

                // Enfermedad Actual / Descripción
                if (record.description) {
                    tableBody.push([
                        { content: 'DESCRIPCIÓN', styles: { fontStyle: 'bold' } },
                        { content: record.description }
                    ]);
                }

                // Antecedentes específicos
                if (record.background) {
                    tableBody.push([
                        { content: 'ANTECEDENTES', styles: { fontStyle: 'bold' } },
                        { content: record.background }
                    ]);
                }

                // Valoraciones
                const valoraciones = (record.notes && record.notes.length > 0)
                    ? record.notes.map(n => `• ${n.description}`).join('\n')
                    : null;
                if (valoraciones) {
                    tableBody.push([
                        { content: 'VALORACIONES', styles: { fontStyle: 'bold' } },
                        { content: valoraciones }
                    ]);
                }

                // Diagnóstico
                if (record.diagnose) {
                    tableBody.push([
                        { content: 'DIAGNÓSTICO', styles: { fontStyle: 'bold' } },
                        { content: record.diagnose }
                    ]);
                }

                // Conducta
                if (record.protocol) {
                    tableBody.push([
                        { content: 'CONDUCTA', styles: { fontStyle: 'bold' } },
                        { content: record.protocol }
                    ]);
                }

                // Tratamiento
                if (record.prescription) {
                    tableBody.push([
                        { content: 'TRATAMIENTO', styles: { fontStyle: 'bold' } },
                        { content: record.prescription }
                    ]);
                }

                // Seguimiento
                const seguimientos = (record.tracings && record.tracings.length > 0)
                    ? record.tracings.map(t => `• ${t.description}`).join('\n')
                    : null;
                if (seguimientos) {
                    tableBody.push([
                        { content: 'SEGUIMIENTO', styles: { fontStyle: 'bold' } },
                        { content: seguimientos }
                    ]);
                }

                autoTable(doc, {
                    startY: yPos,
                    head: [],
                    body: tableBody,
                    theme: 'grid',
                    styles: {
                        fontSize: 9,
                        cellPadding: 4,
                        valign: 'top',
                        lineColor: [0, 0, 0],
                        lineWidth: 0.1,
                        textColor: [0, 0, 0],
                        fillColor: [255, 255, 255]
                    },
                    columnStyles: {
                        0: { cellWidth: 50, textColor: [0, 0, 0] },
                        1: { cellWidth: 'auto', textColor: [0, 0, 0] }
                    },
                    margin: { left: margin, right: margin, bottom: 35 }
                });

                // @ts-ignore
                yPos = doc.lastAutoTable.finalY + 10;
            });
        }

        // Footer
        const pageCount = doc.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            
            // Doctor Info (Left aligned)
            doc.setTextColor(textColor[0], textColor[1], textColor[2]);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(10);
            doc.text('Dr Pablo A. Consigliere Rodríguez', 15, doc.internal.pageSize.height - 22);
            
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8);
            doc.text('Máster en Diagnóstico y Tratamiento del Dolor', 15, doc.internal.pageSize.height - 17);
            doc.text('Lesiones Deportivas', 15, doc.internal.pageSize.height - 13);
            doc.text('Enfermedades Articulares y Muscoloesqueléticas', 15, doc.internal.pageSize.height - 9);

            // Page numbers
            doc.setFontSize(8);
            doc.text(`${i}`, pageWidth - 15, doc.internal.pageSize.height - 10, { align: 'right' });
        }

        return doc;
    }

    /**
     * Generar PDF de Factura
     */
    public generateInvoicePdf(
        patient: PatientDto,
        invoiceData: { facturaNumber: string; address: string; totalAmount: number; concept: string }
    ): jsPDF {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.width;
        const textColor: [number, number, number] = [0, 0, 0];
        const margin = 15;

        // --- Header Section ---
        try {
            doc.addImage('assets/logo.png', 'PNG', 15, 10, 30, 0);
        } catch (e) {
            console.error('Error loading logo', e);
        }

        doc.setFontSize(10);
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);
        doc.setFont('helvetica', 'normal');
        
        doc.text('www.tratamiento-dolor.es', 55, 15);
        doc.text('contacto@tratamiento-dolor.es', 55, 20);
        doc.text('Pasaje Alminares del Genil, 13', 55, 25);
        doc.text('18006 Granada', 55, 30);

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const today = new Date();
        const dateStr = formatDate(today, 'dd/MM/yyyy', 'en-US');
        doc.text(`Fecha de emisión: ${dateStr}`, pageWidth - 15, 25, { align: 'right' });

        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.1);
        doc.line(15, 35, pageWidth - 15, 35);

        let yPos = 45;

        // --- Doctor & Patient Info Boxes ---
        const leftBoxWidth = 85;
        const rightBoxWidth = 85;
        const rightBoxX = pageWidth - margin - rightBoxWidth;

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');

        const nameText = `Nombre y apellido: ${patient.name} ${patient.lastName} ${patient.secondLastName || ''}`.trim();
        const nameLines = doc.splitTextToSize(nameText, rightBoxWidth - 4);
        const addressText = `Dirección: ${invoiceData.address}`;
        const addressLines = doc.splitTextToSize(addressText, rightBoxWidth - 4);

        const boxHeight = Math.max(45, 10 + (nameLines.length * 5) + 8 + (addressLines.length * 5) + 5);

        // Doctor info box
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.1);
        doc.rect(margin, yPos, leftBoxWidth, boxHeight);
        
        doc.text("Dr. Pablo Adrián Consigliere Rodríguez.", margin + 2, yPos + 7);
        doc.text("C/Alminares del Genil 13", margin + 2, yPos + 15);
        doc.text("CP.18006", margin + 2, yPos + 23);
        doc.text("Granada.          Te. 695189926", margin + 2, yPos + 31);
        doc.text("CIF/NIF 76742170W", margin + 2, yPos + 39);

        // Patient Info box
        doc.rect(rightBoxX, yPos, rightBoxWidth, boxHeight);

        doc.text(`Fecha: ${dateStr}`, rightBoxX + 2, yPos + 7);
        doc.text(nameLines, rightBoxX + 2, yPos + 15);
        
        let currentY = yPos + 15 + ((nameLines.length - 1) * 5) + 8;
        doc.text(`DNI: ${patient.dni || 'No especificado'}`, rightBoxX + 2, currentY);
        
        currentY += 8;
        doc.text(addressLines, rightBoxX + 2, currentY);

        yPos = yPos + boxHeight + 15;

        if (yPos + 60 > doc.internal.pageSize.height - 30) {
            doc.addPage();
            yPos = 20;
        }

        // --- Invoice Body Section ---
        autoTable(doc, {
            startY: yPos,
            head: [[
                { content: 'CONCEPTO:', styles: { halign: 'left', fontStyle: 'bold' } }, 
                { content: 'Factura Nº', styles: { halign: 'center', fontStyle: 'bold' } }
            ]],
            body: [
                [
                    { content: `\n${invoiceData.concept}`, styles: { valign: 'top', minCellHeight: 60 } }, 
                    { content: `\n${invoiceData.facturaNumber}`, styles: { halign: 'center', valign: 'top', fontSize: 12, minCellHeight: 60 } }
                ],
                [
                    { content: '-Total servicios médicos', styles: { halign: 'right' } },
                    { content: `${invoiceData.totalAmount} €`, styles: { halign: 'center', fontStyle: 'bold' } }
                ],
                [
                    { 
                        content: "PABLO ADRIÁN CONSIGLIERE RODRÍGUEZ es el Responsable del tratamiento de sus datos personales y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD), con la finalidad de mantener una relación comercial (en base a una relación contractual, obligación legal o interés legítimo) y conservarlos durante no más tiempo del necesario para mantener el fin del tratamiento o mientras existan prescripciones legales que dictaminen su custodia. No se comunicarán los datos a terceros, salvo obligación legal. Asimismo, se le informa de que puede ejercer los derechos de acceso, rectificación, portabilidad y supresión de sus datos y los de limitación y oposición a su tratamiento dirigiéndose a PABLO ADRIÁN CONSIGLIERE RODRÍGUEZ en Calle Alminares del Genil 13 (bajo), - 18006 Granada (Granada). E-mail: contacto@tratamiento-dolor.es.\nTambien tiene derecho a presentar una reclamación ante la autoridad de control (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.", 
                        colSpan: 2, 
                        styles: { fontSize: 7, halign: 'justify', cellPadding: 3 }
                    }
                ]
            ],
            theme: 'grid',
            headStyles: {
                fillColor: [255, 255, 255],
                textColor: [0, 0, 0],
                lineColor: [0, 0, 0],
                lineWidth: 0.1
            },
            columnStyles: {
                0: { cellWidth: 140 },
                1: { cellWidth: 'auto' }
            },
            styles: {
                lineColor: [0, 0, 0],
                lineWidth: 0.1,
                fontSize: 10,
                textColor: [0, 0, 0]
            },
            margin: { left: margin, right: margin }
        });

        // Footer
        const pageCount = doc.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            
            doc.setTextColor(textColor[0], textColor[1], textColor[2]);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(10);
            doc.text('Dr Pablo A. Consigliere Rodríguez', 15, doc.internal.pageSize.height - 22);
            
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8);
            doc.text('Máster en Diagnóstico y Tratamiento del Dolor', 15, doc.internal.pageSize.height - 17);
            doc.text('Lesiones Deportivas', 15, doc.internal.pageSize.height - 13);
            doc.text('Enfermedades Articulares y Muscoloesqueléticas', 15, doc.internal.pageSize.height - 9);

            doc.setFontSize(8);
            doc.text(`${i}`, pageWidth - 15, doc.internal.pageSize.height - 10, { align: 'right' });
        }

        return doc;
    }
}
