import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { jsPDF } from "jspdf";

import { MedicalRecordDto } from "../models/medical-record.model";
import { PatientDto } from "../models/patient.model";
import { PreviousRecordListDto } from "../models/previous-record.model";
import { PdfService } from "./pdf.service";

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export type PdfFlowType = "legacy" | "template" | "factura";

export interface PdfTemplateField {
  key: string;
  label: string;
  x?: number;
  y?: number;
  pageIndex?: number;
  fontSize?: number;
  inputType?: "text" | "textarea" | "select";
  options?: string[];
  maxLength?: number;
  required?: boolean;
  maxWidth?: number;
  lineHeight?: number;
  maxLines?: number;
  positions?: {
    pageIndex: number;
    x: number;
    y: number;
    valueMatch?: string;
    drawValue?: string;
  }[];
}

export interface PdfTemplateDefinition {
  id: string;
  name: string;
  assetPath: string;
  fields: PdfTemplateField[];
}

@Injectable({
  providedIn: "root",
})
export class PdfManagerService {
  private readonly templates: PdfTemplateDefinition[] = [
    {
      id: "gdpr_es",
      name: "Documento de Protección de Datos",
      assetPath: "assets/pdf/gdpr_es.pdf",
      fields: [
        {
          key: "date",
          label: "Fecha",
          x: 140,
          y: 690,
          pageIndex: 0,
          fontSize: 11,
          required: true,
        },
        {
          key: "fullName",
          label: "Nombre y Apellidos",
          x: 172,
          y: 225,
          pageIndex: 0,
          fontSize: 11,
          required: true,
        },
        {
          key: "dni",
          label: "DNI/NIF",
          x: 410,
          y: 225,
          pageIndex: 0,
          fontSize: 11,
          required: true,
        },
        {
          key: "legalRepresentativeName",
          label: "Representante legal",
          x: 98,
          y: 250,
          pageIndex: 0,
          fontSize: 11,
        },
        {
          key: "legalRepresentativeDni",
          label: "DNI/NIF Representante",
          x: 410,
          y: 250,
          pageIndex: 0,
          fontSize: 11,
        },
      ],
    },
    {
      id: "vitc_infusion_es",
      name: "Consentimiento Infusión de Vitamina C",
      assetPath: "assets/pdf/vitc_infusion_es.pdf",
      fields: [
        {
          key: "date",
          label: "Fecha",
          x: 150,
          y: 702,
          pageIndex: 0,
          fontSize: 11,
          required: true,
        },
        {
          key: "fullName",
          label: "Nombre y apellidos",
          positions: [
            { pageIndex: 0, x: 158, y: 608 },
            { pageIndex: 1, x: 172, y: 429 },
          ],
          fontSize: 11,
          required: true,
        },
        {
          key: "dni",
          label: "DNI",
          positions: [
            { pageIndex: 0, x: 85, y: 594 },
            { pageIndex: 1, x: 411, y: 429 },
          ],
          fontSize: 11,
          required: true,
        },
        {
          key: "birthDate",
          label: "Fecha de nacimiento",
          x: 162,
          y: 580,
          pageIndex: 0,
          fontSize: 11,
          required: true,
        },
        {
          key: "renal_litiasis",
          label: "Alteración de la función renal o litiasis",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 453, y: 468, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 505, y: 468, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "funcion_cardiaca",
          label: "Alteración de la función cardíaca",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 453, y: 447, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 505, y: 447, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "diabetes",
          label: "Diabetes",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 453, y: 426, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 505, y: 426, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "deficiencia_g6pd",
          label: "Deficiencia de G6PD",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 453, y: 406, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 505, y: 406, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "hipomagnesemia",
          label: "Hipomagnesemia o hipoclacemia",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 453, y: 385, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 505, y: 385, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "hemocromatosis",
          label: "Hemocromatosis",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 453, y: 364, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 505, y: 364, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "hiperoxaluria",
          label: "Hiperoxaluria",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 453, y: 343, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 505, y: 343, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "legalRepresentativeName",
          label: "Representante legal",
          x: 100,
          y: 454,
          pageIndex: 1,
          fontSize: 11,
        },
        {
          key: "legalRepresentativeDni",
          label: "DNI Representante",
          x: 411,
          y: 454,
          pageIndex: 1,
          fontSize: 11,
        },
      ],
    },
    {
      id: "non_pharma_es",
      name: "Consentimiento Básico sin Fármacos",
      assetPath: "assets/pdf/non_pharma_es.pdf",
      fields: [
        {
          key: "date",
          label: "Fecha",
          x: 150,
          y: 703,
          pageIndex: 0,
          fontSize: 11,
          required: true,
        },
        {
          key: "fullName",
          label: "Nombre y apellidos",
          positions: [
            { pageIndex: 0, x: 154, y: 557 },
            { pageIndex: 1, x: 172, y: 202 },
          ],
          fontSize: 11,
          required: true,
        },
        {
          key: "dni",
          label: "DNI",
          positions: [
            { pageIndex: 0, x: 83, y: 542 },
            { pageIndex: 1, x: 412, y: 202 },
          ],
          fontSize: 11,
          required: true,
        },
        {
          key: "birthDate",
          label: "Fecha de nacimiento",
          x: 162,
          y: 528,
          pageIndex: 0,
          fontSize: 11,
          required: true,
        },
        {
          key: "especifications",
          label: "Especificaciones",
          pageIndex: 1,
          x: 55,
          y: 650,
          inputType: "textarea",
          maxWidth: 450,
          lineHeight: 15,
          maxLines: 4,
          maxLength: 2000,
        },
        {
          key: "hipertension",
          label: "Hipertensión arterial",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 490, y: 419, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 517, y: 419, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "diabetes",
          label: "Diabetes",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 490, y: 397, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 517, y: 397, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "coagulation",
          label: "Alteraciones de la coagulación",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 490, y: 377, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 517, y: 377, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "anesthesics",
          label: "Intolerancia a los anestésicos locales",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 490, y: 356, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 517, y: 356, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "allergies",
          label: "¿Sufre algún tipo de alergia?",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 490, y: 325, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 517, y: 325, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "allergiesDetail",
          label: "En caso afirmativo, indique a qué",
          inputType: "textarea",
          pageIndex: 0,
          x: 60,
          y: 325,
          maxWidth: 430,
          lineHeight: 10,
          maxLines: 4,
        },
        {
          key: "antecedents",
          label: "Antecedentes relacionados con la prueba",
          pageIndex: 0,
          x: 55,
          y: 245,
          inputType: "textarea",
          maxWidth: 450,
          lineHeight: 15,
          maxLines: 4,
          maxLength: 2000,
        },
        {
          key: "infiltrationType",
          label: "Infiltración a realizar",
          x: 223,
          y: 358,
          pageIndex: 1,
          fontSize: 11,
        },
        {
          key: "legalRepresentativeName",
          label: "Representante legal",
          x: 100,
          y: 227,
          pageIndex: 1,
          fontSize: 11,
        },
        {
          key: "legalRepresentativeDni",
          label: "DNI Representante",
          x: 409,
          y: 228,
          pageIndex: 1,
          fontSize: 11,
        },
      ],
    },
    {
      id: "ozone_autohemo_es",
      name: "Consentimiento Autohemotransfusión con Ozono",
      assetPath: "assets/pdf/ozone_autohemo_es.pdf",
      fields: [
        {
          key: "date",
          label: "Fecha",
          x: 150,
          y: 703,
          pageIndex: 0,
          fontSize: 11,
          required: true,
        },
        {
          key: "fullName",
          label: "Nombre y apellidos",
          positions: [
            { pageIndex: 0, x: 154, y: 541 },
            { pageIndex: 1, x: 170, y: 544 },
          ],
          fontSize: 11,
          required: true,
        },
        {
          key: "dni",
          label: "DNI",
          positions: [
            { pageIndex: 0, x: 83, y: 528 },
            { pageIndex: 1, x: 410, y: 544 },
          ],
          fontSize: 11,
          required: true,
        },
        {
          key: "age",
          label: "Edad",
          x: 87,
          y: 515,
          pageIndex: 0,
          fontSize: 11,
          maxLength: 3,
        },
        {
          key: "favismo",
          label: "Favismo",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 453, y: 297, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 505, y: 297, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "hipertiroidismo",
          label: "Hipertiroidismo con nódulos activos",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 453, y: 277, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 505, y: 277, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "enfermedad_sangre",
          label: "Enfermedad severa de la sangre",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 453, y: 256, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 505, y: 256, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "embarazo",
          label: "Embarazo",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 453, y: 235, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 505, y: 235, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "infarto",
          label: "Infarto de Miocardio agudo o reciente",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 453, y: 214, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 505, y: 214, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "legalRepresentativeName",
          label: "Representante legal",
          x: 100,
          y: 569,
          pageIndex: 1,
          fontSize: 11,
        },
        {
          key: "legalRepresentativeDni",
          label: "DNI Representante",
          x: 410,
          y: 569,
          pageIndex: 1,
          fontSize: 11,
        },
      ],
    },
    {
      id: "growth_factors_es",
      name: "Consentimiento Factores de Crecimiento / PRP",
      assetPath: "assets/pdf/growth_factors_es.pdf",
      fields: [
        {
          key: "date",
          label: "Fecha",
          x: 120,
          y: 110,
          pageIndex: 0,
          fontSize: 10,
          required: true,
        },
        {
          key: "fullName",
          label: "Nombre y apellidos",
          x: 105,
          y: 632,
          pageIndex: 0,
          fontSize: 10,
          required: true,
          maxWidth: 255,
        },
        {
          key: "age",
          label: "Edad",
          x: 75,
          y: 620,
          pageIndex: 0,
          fontSize: 10,
          maxLength: 3,
        },
        {
          key: "dni",
          label: "DNI",
          x: 228,
          y: 620,
          pageIndex: 0,
          fontSize: 10,
          required: true,
          maxWidth: 100,
        },
        {
          key: "legalRepresentativeName",
          label: "Representante legal",
          x: 98,
          y: 565,
          pageIndex: 0,
          fontSize: 10,
          maxWidth: 260,
        },
        {
          key: "legalRepresentativeAge",
          label: "Edad Representante",
          x: 60,
          y: 555,
          pageIndex: 0,
          fontSize: 10,
          maxLength: 3,
        },
        {
          key: "legalRepresentativeDni",
          label: "DNI Representante",
          x: 204,
          y: 555,
          pageIndex: 0,
          fontSize: 10,
          maxWidth: 90,
        },
        {
          key: "legalRepresentativeQuality",
          label: "En calidad de (representante legal, familiar o allegado)",
          x: 345,
          y: 555,
          pageIndex: 0,
          fontSize: 10,
          maxWidth: 125,
        },
        {
          key: "allergies",
          label: "¿Sufre algún tipo de alergia?",
          inputType: "select",
          options: ["Sí", "No"],
          fontSize: 13,
          positions: [
            { pageIndex: 0, x: 358, y: 489, valueMatch: "Sí", drawValue: "X" },
            { pageIndex: 0, x: 387, y: 489, valueMatch: "No", drawValue: "X" },
          ],
        },
        {
          key: "allergiesDetail",
          label: "En caso afirmativo, indique a qué",
          inputType: "textarea",
          pageIndex: 0,
          x: 60,
          y: 478,
          maxWidth: 210,
          lineHeight: 10,
          maxLines: 2,
        },
        {
          key: "antecedents",
          label: "Antecedentes relacionados con la prueba",
          pageIndex: 0,
          x: 60,
          y: 432,
          inputType: "textarea",
          maxWidth: 450,
          lineHeight: 12,
          maxLines: 2,
          maxLength: 2000,
        },
        {
          key: "procedure",
          label: "Procedimiento a realizar",
          x: 205,
          y: 133,
          pageIndex: 0,
          fontSize: 10,
          maxWidth: 320,
        },
      ],
    },
  ];

  constructor(
    private readonly pdfService: PdfService,
    private readonly http: HttpClient
  ) {}

  generateWithJsPDF(
    patient: PatientDto,
    medicalRecords: MedicalRecordDto[],
    previousRecords: PreviousRecordListDto[]
  ): jsPDF {
    return this.pdfService.generatePatientPdf(
      patient,
      medicalRecords,
      previousRecords
    );
  }

  generateInvoiceWithJsPDF(
    patient: PatientDto,
    invoiceData: {
      facturaNumber: string;
      address: string;
      totalAmount: number;
      concept: string;
    }
  ): jsPDF {
    return this.pdfService.generateInvoicePdf(patient, invoiceData);
  }

  getTemplates(): PdfTemplateDefinition[] {
    return this.templates;
  }

  getTemplateById(templateId: string): PdfTemplateDefinition | undefined {
    return this.templates.find((template) => template.id === templateId);
  }

  async generateWithPdfLib(
    templateId: string,
    formData: Record<string, string>
  ): Promise<Blob> {
    const template = this.getTemplateById(templateId);
    if (!template) {
      throw new Error("No se encontró la plantilla seleccionada");
    }

    const templateBytes = await this.http
      .get(template.assetPath, { responseType: "arraybuffer" })
      .toPromise();

    const pdfDoc = await PDFDocument.load(templateBytes);
    const fontRegular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const fontBoldSans = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();

    template.fields.forEach((field) => {
      const value = formData[field.key] || "";

      const posList = field.positions || [
        {
          pageIndex: field.pageIndex ?? 0,
          x: field.x ?? 0,
          y: field.y ?? 0,
        },
      ];

      posList.forEach((pos) => {
        if (pos.valueMatch && pos.valueMatch !== value) {
          return;
        }

        const page = pages[pos.pageIndex];
        if (!page) return;

        let drawValue = pos.drawValue ?? value;

        const isOptionField = field.inputType === "select" || !!pos.drawValue;
        const font = isOptionField ? fontBoldSans : fontRegular;

        if (field.maxWidth && field.maxLines && !isOptionField) {
          const words = drawValue.split(/\s+/);
          const lines: string[] = [];
          let currentLine = "";

          for (const word of words) {
            const testLine = currentLine ? currentLine + " " + word : word;
            const testWidth = font.widthOfTextAtSize(
              testLine,
              field.fontSize || 10
            );

            if (testWidth > field.maxWidth) {
              if (currentLine) {
                lines.push(currentLine);
                currentLine = word;
              } else {
                lines.push(word);
                currentLine = "";
              }
            } else {
              currentLine = testLine;
            }
          }
          if (currentLine) {
            lines.push(currentLine);
          }

          drawValue = lines.slice(0, field.maxLines).join("\n");
        }

        page.drawText(drawValue, {
          x: pos.x,
          y: pos.y,
          size: field.fontSize || 10,
          font,
          color: rgb(0, 0, 0),
          maxWidth: field.maxWidth,
          lineHeight: field.lineHeight,
        });
      });
    });

    const pdfBytes = await pdfDoc.save();
    const filledPdfBytes = new Uint8Array(pdfBytes.byteLength);
    filledPdfBytes.set(pdfBytes);
    return new Blob([filledPdfBytes], { type: "application/pdf" });
  }
}
