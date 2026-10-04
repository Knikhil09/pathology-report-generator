package com.pathology.report.service;

import com.pathology.report.dto.ReportRequest;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.HashMap;
import java.util.Map;


import java.util.List;


@Service
public class WordReportService {

    public byte[] generateReport(ReportRequest request) throws Exception {

        ClassPathResource resource =
                new ClassPathResource("templates/Histopathology-report.docx");

        try (
                InputStream inputStream = resource.getInputStream();
                XWPFDocument document = new XWPFDocument(inputStream);
                ByteArrayOutputStream outputStream = new ByteArrayOutputStream()
        ) {

            Map<String, String> values = new HashMap<>();

            // Patient information
            values.put("{{patientName}}", safe(request.getPatientName()));
            values.put("{{age}}", safe(request.getAge()));
            values.put("{{sex}}", safe(request.getSex()));
            values.put("{{histoNo}}", safe(request.getHistoNo()));

            // Registration information
            values.put("{{opdIpd}}", safe(request.getOpdIpd()));
            values.put("{{wardUnit}}", safe(request.getWardUnit()));
            values.put("{{regdNo}}", safe(request.getRegdNo()));

            // Dates
            values.put(
                    "{{specimenReceivedDate}}",
                    formatDate(request.getSpecimenReceivedDate())
            );

            values.put(
                    "{{reportingDate}}",
                    formatDate(request.getReportingDate())
            );

            // Examination
            values.put(
                    "{{natureOfSpecimen}}",
                    safe(request.getNatureOfSpecimen())
            );

            values.put(
                    "{{grossExamination}}",
                    safe(request.getGrossExamination())
            );

            values.put(
                    "{{microscopicExamination}}",
                    safe(request.getMicroscopicExamination())
            );

            values.put(
                    "{{impression}}",
                    safe(request.getImpression())
            );

            // Doctor 1
            values.put(
                    "{{doctor1Name}}",
                    safe(request.getDoctor1Name())
            );

            values.put(
                    "{{doctor1Designation}}",
                    safe(request.getDoctor1Designation())
            );

            // Doctor 2
            values.put(
                    "{{doctor2Name}}",
                    safe(request.getDoctor2Name())
            );

            values.put(
                    "{{doctor2Designation}}",
                    safe(request.getDoctor2Designation())
            );

            // Doctor 3
            values.put(
                    "{{doctor3Name}}",
                    safe(request.getDoctor3Name())
            );

            values.put(
                    "{{doctor3Designation}}",
                    safe(request.getDoctor3Designation())
            );

            // Replace placeholders in normal paragraphs
            replaceParagraphs(document.getParagraphs(), values);

            // Replace placeholders inside tables
            document.getTables().forEach(table ->
                    table.getRows().forEach(row ->
                            row.getTableCells().forEach(cell ->
                                    replaceParagraphs(
                                            cell.getParagraphs(),
                                            values
                                    )
                            )
                    )
            );

            // Apply the requested font consistently to all remaining template text.
            applyDocumentFont(document);

            document.write(outputStream);

            return outputStream.toByteArray();
        }
    }

    private void replaceParagraphs(
            List<XWPFParagraph> paragraphs,
            Map<String, String> values) {

        for (XWPFParagraph paragraph : paragraphs) {

            if (paragraph.getRuns().isEmpty()) {
                continue;
            }

            StringBuilder fullText = new StringBuilder();

            for (XWPFRun run : paragraph.getRuns()) {

                String text = run.getText(0);

                if (text != null) {
                    fullText.append(text);
                }
            }

            String originalText = fullText.toString();

            if (originalText.isEmpty()) {
                continue;
            }

            String updatedText = originalText;

            // Replace placeholders
            for (Map.Entry<String, String> entry : values.entrySet()) {

                String placeholder = entry.getKey();

                String value = entry.getValue() == null
                        ? ""
                        : entry.getValue();

                updatedText = updatedText.replace(
                        placeholder,
                        value
                );
            }

            if (updatedText.equals(originalText)) {
                continue;
            }

            // Remove old runs
            for (int i = paragraph.getRuns().size() - 1; i >= 0; i--) {
                paragraph.removeRun(i);
            }

            // Keep the report compact while ensuring consistent paragraph formatting.
            paragraph.setSpacingAfter(40);
            paragraph.setSpacingBetween(1.05);

            String[] lines =
                    updatedText.split("\r?\n", -1);

            for (int lineIndex = 0;
                 lineIndex < lines.length;
                 lineIndex++) {

                String line = lines[lineIndex];

                // Process the current line
                addFormattedLine(paragraph, line);

                // New line
                if (lineIndex < lines.length - 1) {

                    XWPFRun breakRun =
                            paragraph.createRun();

                    breakRun.addBreak();
                }
            }
        }
    }
    
    private void addFormattedLine(
            XWPFParagraph paragraph,
            String line) {

        /*
         * Field names that should always be bold.
         */
        String[] boldLabels = {

            "Name of Patient:",
            "Age / Sex:",
            "Age/Sex:",
            "Histo. No.:",

            "OPD/IPD:",
            "OPD / IPD:",
            "Ward/Unit:",
            "Ward / Unit:",
            "Regd. No.:",

            "Specimen received on:",
            "Date of reporting:",

            "Nature of specimen:",
            "Gross examination:",
            "Microscopic examination:",
            "IMPRESSION:",

            "Endometrium:",
            "Myometrium:",
            "Ectocervix:",
            "Endocervix:",
            "Cervix:",
            "Ovary:",
            "Fallopian tube:"
        };

        int currentPosition = 0;

        while (currentPosition < line.length()) {

            String matchedLabel = null;
            int matchedPosition = -1;

            /*
             * Find the next bold label.
             */
            for (String label : boldLabels) {

                int position =
                        line.indexOf(label, currentPosition);

                if (position != -1) {

                    if (matchedPosition == -1 ||
                            position < matchedPosition) {

                        matchedPosition = position;
                        matchedLabel = label;
                    }
                }
            }

            /*
             * No more bold labels.
             * Add remaining text as normal.
             */
            if (matchedLabel == null) {

                String normalText =
                        line.substring(currentPosition);

                if (!normalText.isEmpty()) {

                    XWPFRun normalRun =
                            paragraph.createRun();

                    normalRun.setText(normalText);
                    normalRun.setBold(false);
                    normalRun.setItalic(false);
                    setFont(normalRun, isMainHeading(line) ? 14 : 12);
                }

                break;
            }

            /*
             * Text before the bold label.
             */
            if (matchedPosition > currentPosition) {

                String normalText =
                        line.substring(
                                currentPosition,
                                matchedPosition
                        );

                XWPFRun normalRun =
                        paragraph.createRun();

                normalRun.setText(normalText);
                normalRun.setBold(false);
                normalRun.setItalic(false);
                setFont(normalRun, 12);
            }

            /*
             * Add the field name in bold.
             */
            XWPFRun boldRun =
                    paragraph.createRun();

            boldRun.setText(matchedLabel);
            boldRun.setBold(true);
            boldRun.setItalic(false);
            setFont(boldRun, isMainHeading(matchedLabel) ? 14 : 12);

            currentPosition =
                    matchedPosition + matchedLabel.length();
        }
    }

    private boolean isMainHeading(String text) {
        if (text == null) {
            return false;
        }

        String normalized = text.trim();
        return normalized.equalsIgnoreCase("HISTOPATHOLOGY REPORT")
                || normalized.equalsIgnoreCase("IMPRESSION:");
    }

    private void setFont(XWPFRun run, int fontSize) {
        run.setFontFamily("Calibri");
        run.setFontSize(fontSize);
    }

    private void applyDocumentFont(XWPFDocument document) {
        applyParagraphFont(document.getParagraphs());

        document.getTables().forEach(table ->
                table.getRows().forEach(row ->
                        row.getTableCells().forEach(cell ->
                                applyParagraphFont(cell.getParagraphs())
                        )
                )
        );
    }

    private void applyParagraphFont(List<XWPFParagraph> paragraphs) {
        for (XWPFParagraph paragraph : paragraphs) {
            String text = paragraph.getText() == null ? "" : paragraph.getText().trim();
            boolean reportHeading = text.equalsIgnoreCase("HISTOPATHOLOGY REPORT");
            boolean impressionLine = text.regionMatches(true, 0, "IMPRESSION:", 0, "IMPRESSION:".length());

            for (XWPFRun run : paragraph.getRuns()) {
                String runText = run.getText(0);
                int size = reportHeading ? 14 : 12;

                // IMPRESSION is a 14 pt heading, while its entered diagnosis remains 12 pt.
                if (impressionLine && runText != null
                        && runText.trim().equalsIgnoreCase("IMPRESSION:")) {
                    size = 14;
                }

                setFont(run, size);
            }
        }
    }

    private String formatDate(String value) {
        String date = safe(value).trim();
        if (date.isEmpty()) {
            return "";
        }

        DateTimeFormatter output = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        DateTimeFormatter[] inputFormats = {
                DateTimeFormatter.ISO_LOCAL_DATE,
                DateTimeFormatter.ofPattern("yyyy/MM/dd"),
                DateTimeFormatter.ofPattern("dd/MM/yyyy")
        };

        for (DateTimeFormatter input : inputFormats) {
            try {
                return LocalDate.parse(date, input).format(output);
            } catch (DateTimeParseException ignored) {
                // Try the next supported input format.
            }
        }

        // If the value is not a recognized date, leave it unchanged rather than corrupting user input.
        return date;
    }

    public String getDownloadFileName(ReportRequest request) {
        String histoNo = safe(request.getHistoNo()).trim();

        if (histoNo.isEmpty()) {
            return "patho-report.docx";
        }

        return histoNo.replace("/", "-") + ".docx";
    }

    private String safe(String value) {
        return value == null ? "" : value;
    }
}