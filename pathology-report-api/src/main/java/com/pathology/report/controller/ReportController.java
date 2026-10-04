package com.pathology.report.controller;

import com.pathology.report.dto.ReportRequest;
import com.pathology.report.service.WordReportService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = {
        "http://127.0.0.1:5173",
        "http://localhost:5173"
})
public class ReportController {

    private final WordReportService wordReportService;

    public ReportController(WordReportService wordReportService) {
        this.wordReportService = wordReportService;
    }

    @PostMapping("/generate")
    public ResponseEntity<?> generateReport(
            @RequestBody ReportRequest request) {

        try {

            byte[] document =
                    wordReportService.generateReport(request);

            return ResponseEntity.ok()
                    .header(
                            HttpHeaders.CONTENT_DISPOSITION,
                            "attachment; filename=\"" +
                                    wordReportService.getDownloadFileName(request) +
                                    "\""
                    )
                    .contentType(
                            MediaType.parseMediaType(
                                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            )
                    )
                    .body(document);

        } catch (Exception e) {

            // Print the real error in Spring Boot console
            e.printStackTrace();

            return ResponseEntity
                    .internalServerError()
                    .body("Report generation failed: " + e.getMessage());
        }
    }
}